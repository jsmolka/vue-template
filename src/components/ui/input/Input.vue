<template>
  <div
    :class="
      cn(
        'flex items-center w-full h-8 px-2 py-1.5 bg-shade-7 cursor-text border rounded-sm focus-within:ring-2 focus-within:ring-brand-3 disabled-within:opacity-50 disabled-within:cursor-not-allowed',
        props.class,
      )
    "
    @pointerdown.prevent="$refs.input.focus()"
  >
    <input
      ref="input"
      class="w-full bg-transparent placeholder:text-shade-3 focus-visible:ring-0 disabled:cursor-not-allowed"
      :value="modelValue"
      @change="modelValue = $event.target.value"
      @focusin="$event.target.select()"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
import { cn } from '@/utils/ui';

defineOptions({
  inheritAttrs: false,
});

const modelValue = defineModel({ type: String, required: false });

const props = defineProps({
  class: { required: false },
});
</script>
