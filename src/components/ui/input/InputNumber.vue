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

const clampNavigation = (event) => {
  const content = event.target.value.length - suffix.value.length;

  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowUp':
    case 'Home':
    case 'ArrowRight':
    case 'ArrowDown':
    case 'End':
      break;

    default:
      return;
  }

  let step = 0;
  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowRight':
      step = event.ctrlKey ? content : 1;
      break;

    case 'ArrowUp':
    case 'Home':
    case 'ArrowDown':
    case 'End':
      step = content;
      break;
  }

  let s = event.target.selectionStart;
  let e = event.target.selectionEnd;
  let d = event.target.selectionDirection;

  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowUp':
    case 'Home': {
      if (event.shiftKey) {
        if (e > s && d === 'forward') {
          e = Math.max(e - step, 0);
          if (e < s) {
            [s, e] = [e, s];
            d = 'backward';
          } else {
            d = 'forward';
          }
        } else {
          s = Math.max(s - step, 0);
          d = 'backward';
        }
      } else {
        s = Math.max(s - step, 0);
        e = s;
        d = 'none';
      }
      break;
    }

    case 'ArrowRight':
    case 'ArrowDown':
    case 'End': {
      if (event.shiftKey) {
        if (e > s && d === 'backward') {
          console.log(s, e, d);
          s = Math.min(s + step, content);
          if (s > e) {
            [s, e] = [e, s];
            d = 'forward';
          } else {
            d = 'backward';
          }
        } else {
          e = Math.min(e + step, content);
          d = 'forward';
        }
      } else {
        s = Math.min(s + step, content);
        e = s;
        d = 'none';
      }
      break;
    }
  }

  event.preventDefault();
  event.target.setSelectionRange(s, e, d);

  // switch (event.key) {
  //   case 'ArrowLeft':
  //   case 'ArrowUp':
  //   case 'Home': {
  //     event.preventDefault();
  //     const step = event.key === 'ArrowLeft' && !event.ctrlKey ? 1 : selectionMax;
  //     const prop = event.shiftKey ? 'selectionStart' : 'selectionEnd';
  //     event.target[prop] = Math.max(event.target[prop] - step, 0);
  //     break;
  //   }

  //   case 'ArrowRight':
  //   case 'ArrowDown':
  //   case 'End': {
  //     event.preventDefault();
  //     const step = event.key === 'ArrowRight' && !event.ctrlKey ? 1 : selectionMax;
  //     const prop = event.shiftKey ? 'selectionEnd' : 'selectionStart';
  //     event.target[prop] = Math.min(event.target[prop] + step, selectionMax);
  //     break;
  //   }
  // }
};

const clampSelection = ({ target }) => {
  const selectionMax = target.value.length - suffix.value.length;
  target.selectionStart = Math.min(target.selectionStart, selectionMax);
  target.selectionEnd = Math.min(target.selectionEnd, selectionMax);
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
