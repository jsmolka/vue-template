<template>
  <span :class="cn('ml-auto text-xs tracking-widest text-shade-3', props.class)">
    <slot />
  </span>
</template>

<script setup>
import { cn } from '@/utils/ui';

const props = defineProps({
  class: { required: false },
});
</script>
