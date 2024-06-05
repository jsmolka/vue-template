<template>
  <div :class="cn('flex flex-col-reverse sm:flex-row sm:justify-end gap-2', props.class)">
    <slot />
  </div>
</template>

<script setup>
import { cn } from '@/utils/ui';

const props = defineProps({
  class: { required: false },
});
</script>
