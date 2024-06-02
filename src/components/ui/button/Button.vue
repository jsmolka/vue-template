<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { cva } from 'class-variance-authority';
import { Primitive } from 'radix-vue';

const props = defineProps({
  variant: { type: null, required: false },
  size: { type: null, required: false },
  as: { type: null, required: false, default: 'button' },
  asChild: { type: Boolean, required: false },
  class: { type: null, required: false },
});

const buttonVariants = cva(
  'inline-flex justify-center items-center text-sm font-medium whitespace-nowrap rounded-sm select-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-3 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-brand-3 text-shade-8 hover:bg-brand-2',
        secondary: 'bg-shade-6 text-shade-2 hover:bg-shade-5',
        outline: 'bg-shade-8 text-shade-2 border hover:bg-shade-7',
        ghost: 'text-shade-2 hover:bg-shade-7',
      },
      size: {
        default: 'h-8 px-4 py-2',
        icon: 'size-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
</script>
