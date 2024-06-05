<template>
  <Dialog
    :open="state.visible"
    @update:open="
      state.visible = $event;
      if (!$event) {
        close();
      }
    "
  >
    <DialogContent>
      <VisuallyHidden>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>
      </VisuallyHidden>
      <p>{{ state.message }}</p>
      <DialogFooter v-if="state.buttons.length > 0">
        <Button v-for="(button, index) in state.buttons" @click="close(index)" v-bind="button">
          {{ button.text }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { VisuallyHidden } from 'radix-vue';
import { reactive } from 'vue';

const state = reactive({
  message: '',
  buttons: [],
  resolve: null,
  visible: false,
});

const show = async (message, buttons) =>
  new Promise((resolve) => {
    state.message = message;
    state.buttons = buttons;
    state.resolve = resolve;
    state.visible = true;
  });

const close = (value = null) => {
  state.visible = false;
  state.resolve(value);
};

defineExpose({ show });
</script>
