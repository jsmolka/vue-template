<template>
  <TabsList
    v-bind="forwardedProps"
    :class="
      cn(
        'inline-flex h-10 items-center justify-center rounded-sm bg-shade-7 p-1 text-shade-3',
        props.class,
      )
    "
  >
    <slot />
  </TabsList>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { TabsList, useForwardProps } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
  as: { required: false },
  asChild: { type: Boolean, required: false },
  class: { required: false },
  loop: { type: Boolean, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
