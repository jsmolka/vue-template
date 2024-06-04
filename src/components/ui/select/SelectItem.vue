<template>
  <SelectItem
    v-bind="forwardedProps"
    :class="
      cn(
        'relative flex items-center w-full py-1.5 pl-2 pr-8 text-sm rounded-sm outline-none cursor-pointer select-none focus:bg-shade-6 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      )
    "
  >
    <span class="absolute right-2 flex justify-center items-center size-3.5">
      <SelectItemIndicator>
        <CheckIcon class="size-4 text-shade-3" />
      </SelectItemIndicator>
    </span>

    <slot />
  </SelectItem>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { CheckIcon } from '@radix-icons/vue';
import { SelectItem, SelectItemIndicator, useForwardProps } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
  as: { required: false },
  asChild: { type: Boolean, required: false },
  class: { required: false },
  disabled: { type: Boolean, required: false },
  textValue: { type: String, required: false },
  value: { type: String, required: true },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
