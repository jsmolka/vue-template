<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex justify-between items-center w-full h-8 px-2 py-1 bg-transparent border rounded-sm text-sm whitespace-nowrap ring-offset-background placeholder:text-shade-3 focus:outline-none focus:ring-2 focus:ring-brand-3 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        props.class,
      )
    "
  >
    <slot />
    <SelectIcon as-child>
      <CaretSortIcon class="size-4 text-shade-3" />
    </SelectIcon>
  </SelectTrigger>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { CaretSortIcon } from '@radix-icons/vue';
import { SelectIcon, SelectTrigger, useForwardProps } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
  disabled: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
