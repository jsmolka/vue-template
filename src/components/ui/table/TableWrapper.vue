<template>
  <div :class="cn('relative w-full overflow-auto rounded-sm border', props.class)">
    <slot />
  </div>
</template>

<script setup>
import { cn } from '@/utils/ui';

const props = defineProps({
  class: { required: false },
});
</script>
