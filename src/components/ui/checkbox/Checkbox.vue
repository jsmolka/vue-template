<template>
  <CheckboxRoot
    v-model:checked="modelValue"
    v-bind="forwarded"
    :class="
      cn(
        'peer size-4 shrink-0 border border-brand-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-3 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand-3 data-[state=checked]:text-shade-8 data-[state=checked]:border-brand-3',
        props.class,
      )
    "
  >
    <CheckboxIndicator class="w-full h-full flex justify-center items-center text-current">
      <slot>
        <CheckIcon class="size-4" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { CheckIcon } from '@radix-icons/vue';
import { CheckboxIndicator, CheckboxRoot, useForwardProps } from 'radix-vue';
import { computed } from 'vue';

const modelValue = defineModel({
  type: Boolean,
  required: false,
});

const props = defineProps({
  disabled: { type: Boolean, required: false },
  required: { type: Boolean, required: false },
  name: { type: String, required: false },
  id: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { required: false },
  class: { required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>
