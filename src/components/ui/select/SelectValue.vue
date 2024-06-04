<template>
  <SelectValue class="select-none" v-bind="props">
    <slot />
  </SelectValue>
</template>

<script setup>
import { SelectValue } from 'radix-vue';

const props = defineProps({
  as: { required: false },
  asChild: { type: Boolean, required: false },
  placeholder: { type: String, required: false },
});
</script>
