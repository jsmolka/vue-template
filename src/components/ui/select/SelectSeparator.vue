<template>
  <SelectSeparator v-bind="delegatedProps" :class="cn('h-px -mx-1 my-1 bg-muted', props.class)" />
</template>

<script setup>
import { cn } from '@/utils/ui';
import { SelectSeparator } from 'radix-vue';
import { computed } from 'vue';

let props;
props = defineProps({
  as: { required: false },
  asChild: { type: Boolean, required: false },
  class: { required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>
