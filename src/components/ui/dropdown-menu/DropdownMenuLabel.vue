<template>
  <DropdownMenuLabel
    v-bind="forwardedProps"
    :class="cn('px-2 py-1.5 text-shade-1 text-sm font-semibold', inset && 'pl-8', props.class)"
  >
    <slot />
  </DropdownMenuLabel>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { DropdownMenuLabel, useForwardProps } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
  inset: { type: Boolean, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
