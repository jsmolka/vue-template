<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'inline-flex justify-center items-center h-8 px-4 py-2 text-sm font-medium rounded-sm whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-3 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-shade-6 data-[state=active]:text-shade-2',
        props.class,
      )
    "
  >
    <slot />
  </TabsTrigger>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { TabsTrigger, useForwardProps } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
  value: { type: [String, Number], required: true },
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
