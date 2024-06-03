<template>
  <TooltipTrigger v-bind="props">
    <slot />
  </TooltipTrigger>
</template>

<script setup>
import { TooltipTrigger } from 'radix-vue';

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { required: false },
});
</script>
