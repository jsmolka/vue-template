<template>
  <DialogRoot v-bind="forwardedProps" v-model:open="open">
    <slot :close="close" />
  </DialogRoot>
</template>

<script setup>
import { DialogRoot, useForwardProps } from 'radix-vue';

const open = defineModel('open', { type: Boolean, required: false });

const props = defineProps({
  defaultOpen: { type: Boolean, required: false },
  modal: { type: Boolean, required: false },
});

const forwardedProps = useForwardProps(props);

const close = () => {
  open.value = false;
};
</script>
