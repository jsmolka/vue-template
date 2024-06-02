<template>
  <input
    :class="
      cn(
        'flex w-full h-8 px-3 py-1 bg-transparent text-sm border rounded-sm transition-colors file:bg-transparent file:text-sm file:font-medium file:border-0 placeholder:text-shade-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-3 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
    :model-value="modelValue"
    @change="modelValue = $event.target.value"
    @focusin="$event.target.select()"
  />
</template>

<script setup>
import { cn } from '@/utils/ui';

const modelValue = defineModel({
  type: String,
  required: false,
});

const props = defineProps({
  defaultValue: { type: [String, Number], required: false },
  class: { type: null, required: false },
});
</script>
