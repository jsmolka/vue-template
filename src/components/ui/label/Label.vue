<template>
  <Label
    v-bind="delegatedProps"
    :class="
      cn(
        'text-xs font-medium leading-none uppercase peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        props.class,
      )
    "
  >
    <slot />
  </Label>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { Label } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
  for: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { required: false },
  class: { required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>
