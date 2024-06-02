<template>
  <input
    :class="
      cn(
        'flex w-full h-8 px-3 py-1 bg-transparent text-sm border rounded-sm transition-colors placeholder:text-shade-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-3 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
    :value="format((modelValue ?? '').toLocaleString())"
    @input="
      $event.target.value = format($event.target.value);
      clampSelection($event);
    "
    @change="change"
    @focusin="select"
    @keydown="clampNavigation"
    @mouseup="clampSelection"
    v-bind="$attrs"
    inputmode="numeric"
    type="text"
  />
</template>

<script setup>
import { useForceUpdate } from '@/composables/useForceUpdate';
import { cn } from '@/utils/ui';
import _ from 'lodash';
import { computed, nextTick } from 'vue';

const modelValue = defineModel({
  type: Number,
  required: false,
});

const props = defineProps({
  min: {
    type: Number,
    default: Number.MIN_SAFE_INTEGER,
  },

  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER,
  },

  precision: {
    type: Number,
    default: 0,
  },

  unit: {
    type: String,
    default: '',
  },
});

const suffix = computed(() => {
  return props.unit !== '' ? ` ${props.unit}` : '';
});

const unformat = (value) => {
  return suffix.value.length > 0 && value.endsWith(suffix.value)
    ? value.slice(0, -suffix.value.length)
    : value;
};

// Based on https://github.com/nosir/cleave-zen/blob/main/src/numeral/index.ts
const format = (value) => {
  const decimalSeparator = (1.1).toLocaleString().charAt(1);

  value = unformat(value)
    // Strip alphabet letters
    .replace(/[A-Za-z]/g, '')
    // Replace decimal separator with S
    .replace(decimalSeparator, 'S')
    // Strip non-numeric letters except minus and S
    .replace(/[^\dS-]/g, '')
    // Replace S with decimal separator
    .replace('S', decimalSeparator)
    // Replace leading minus with M
    .replace(/^-/, 'M')
    // Strip minuses
    .replace(/-/g, '')
    // Replace M with minus
    .replace('M', '-')
    // Strip leading zeros
    .replace(/^(-)?0+(?=\d)/, '$1');

  if (value === '') {
    return value;
  }

  if (value.includes(decimalSeparator)) {
    const [integer, decimal] = value.split(decimalSeparator, 2);
    value =
      props.precision > 0
        ? `${integer}${decimalSeparator}${decimal.slice(0, props.precision)}`
        : integer;
  }
  return value + suffix.value;
};

const select = ({ target }) => {
  const value = target.value;
  if (value.endsWith(suffix.value)) {
    target.setSelectionRange(0, value.length - suffix.value.length);
  } else {
    target.select();
  }
};

let selectionStart = null;
let selectionEnd = null;

const clampNavigation = (event) => {
  const content = unformat(event.target.value);

  selectionStart ??= event.target.selectionStart;
  selectionEnd ??= event.target.selectionEnd;

  switch (event.key) {
    case 'Shift':
      selectionStart = event.target.selectionStart;
      selectionEnd = event.target.selectionStart;
    default:
      return;

    case 'ArrowLeft':
      if (!event.shiftKey && selectionStart !== selectionEnd) {
        selectionEnd = Math.min(selectionStart, selectionEnd);
        break;
      }
    case 'ArrowUp':
    case 'Home': {
      selectionEnd -= !event.ctrlKey && event.key === 'ArrowLeft' ? 1 : content.length;
      break;
    }

    case 'ArrowRight':
      if (!event.shiftKey && selectionStart !== selectionEnd) {
        selectionEnd = Math.max(selectionStart, selectionEnd);
        break;
      }
    case 'ArrowDown':
    case 'End': {
      selectionEnd += !event.ctrlKey && event.key === 'ArrowRight' ? 1 : content.length;
      break;
    }
  }

  selectionEnd = _.clamp(selectionEnd, 0, content.length);
  if (!event.shiftKey) {
    selectionStart = selectionEnd;
  }

  event.preventDefault();
  event.target.setSelectionRange(
    Math.min(selectionStart, selectionEnd),
    Math.max(selectionStart, selectionEnd),
    selectionStart !== selectionEnd
      ? selectionStart <= selectionEnd
        ? 'forward'
        : 'backward'
      : 'none',
  );
};

const clampSelection = ({ target }) => {
  const content = unformat(target.value);
  target.selectionEnd = Math.min(target.selectionEnd, content.length);

  selectionStart = target.selectionStart;
  selectionEnd = target.selectionEnd;
};

const forceUpdate = useForceUpdate();

const change = async (event) => {
  let number = parseFloat(unformat(event.target.value)) || 0;
  number = Math.max(number, props.min);
  number = Math.min(number, props.max);
  modelValue.value = number;

  await nextTick();
  forceUpdate();
  await nextTick();
  clampSelection(event);
};
</script>
