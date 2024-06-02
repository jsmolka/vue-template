<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex items-center px-2 py-1.5 rounded-sm text-sm cursor-pointer select-none outline-none focus:bg-shade-7 data-[state=open]:bg-shade-7',
        props.class,
      )
    "
  >
    <slot />
    <ChevronRightIcon class="size-4 ml-auto" />
  </DropdownMenuSubTrigger>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { ChevronRightIcon } from '@radix-icons/vue';
import { DropdownMenuSubTrigger, useForwardProps } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
  disabled: { type: Boolean, required: false },
  textValue: { type: String, required: false },
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
