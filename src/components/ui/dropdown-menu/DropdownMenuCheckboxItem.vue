<template>
  <DropdownMenuCheckboxItem
    v-bind="forwardedProps"
    :checked="modelValue"
    @update:checked="emit('update:modelValue', $event)"
    :class="
      cn(
        'relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 focus:bg-shade-6 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      )
    "
  >
    <span class="absolute left-2 flex size-4 items-center justify-center">
      <DropdownMenuItemIndicator>
        <PhCheck class="size-3" weight="bold" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuCheckboxItem>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { PhCheck } from '@phosphor-icons/vue';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuItemIndicator,
  useForwardPropsEmits,
} from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: Boolean, required: false },
  as: { required: false },
  asChild: { type: Boolean, required: false },
  class: { required: false },
  disabled: { type: Boolean, required: false },
  textValue: { type: String, required: false },
});

const emit = defineEmits(['select', 'update:modelValue']);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardPropsEmits(delegatedProps, emit);
</script>
