<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'inline-flex h-8 select-none items-center justify-center whitespace-nowrap rounded-sm px-2.5 py-2 font-medium focus-visible:z-10 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-shade-6 data-[state=active]:text-shade-2',
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
  as: { required: false },
  asChild: { type: Boolean, required: false },
  class: { required: false },
  disabled: { type: Boolean, required: false },
  value: { type: [String, Number], required: true },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
