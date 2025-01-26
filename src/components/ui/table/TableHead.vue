<template>
  <th :class="cn('px-2 py-1.5 text-left font-semibold text-shade-1', props.class)">
    <slot />
  </th>
</template>

<script setup>
import { cn } from '@/utils/ui';

const props = defineProps({
  class: { required: false },
});
</script>
