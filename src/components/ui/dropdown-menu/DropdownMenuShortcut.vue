<template>
  <span :class="cn('ml-auto text-shade-3 text-xs tracking-widest', props.class)">
    <slot />
  </span>
</template>

<script setup>
import { cn } from '@/utils/ui';

const props = defineProps({
  class: { type: null, required: false },
});
</script>
