<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 focus:bg-shade-6 data-[state=open]:bg-shade-6',
        props.class,
      )
    "
  >
    <slot />
    <PhCaretRight class="ml-auto size-3" />
  </DropdownMenuSubTrigger>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { PhCaretRight } from '@phosphor-icons/vue';
import { DropdownMenuSubTrigger, useForwardProps } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
  as: { required: false },
  asChild: { type: Boolean, required: false },
  class: { required: false },
  disabled: { type: Boolean, required: false },
  textValue: { type: String, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
