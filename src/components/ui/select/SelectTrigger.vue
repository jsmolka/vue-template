<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex h-8 w-full items-center justify-between gap-2 whitespace-nowrap rounded-sm border bg-shade-7 px-2 py-1.5 placeholder:text-shade-3 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate',
        props.class,
      )
    "
  >
    <slot />
    <SelectIcon as-child>
      <PhCaretUpDown class="size-3 shrink-0 text-shade-3" />
    </SelectIcon>
  </SelectTrigger>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { PhCaretUpDown } from '@phosphor-icons/vue';
import { SelectIcon, SelectTrigger, useForwardProps } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
  as: { required: false },
  asChild: { type: Boolean, required: false },
  class: { required: false },
  disabled: { type: Boolean, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
