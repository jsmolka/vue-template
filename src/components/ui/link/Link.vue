<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        'skip-ink-none cursor-pointer font-bold underline decoration-shade-5 decoration-2 underline-offset-2',
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>

<script setup>
import { cn } from '@/utils/ui';
import { Primitive } from 'radix-vue';

const props = defineProps({
  as: { default: 'a' },
  asChild: { type: Boolean, required: false },
  class: { required: false },
});
</script>
