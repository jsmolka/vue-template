<template>
  <Dialog
    :open="resolve != null"
    @update:open="
      if (!$event) {
        resolve(null);
        resolve = null;
      }
    "
  >
    <DialogContent>
      <DialogHeader v-show="title || description">
        <DialogTitle v-show="title">{{ title }}</DialogTitle>
        <DialogDescription v-show="description">{{ description }}</DialogDescription>
      </DialogHeader>
      <p class="max-w-max" v-html="content" />
      <DialogFooter ref="footer" v-if="buttons.length > 0">
        <Button
          v-for="(button, index) in buttons"
          v-bind="button"
          @click="
            resolve(index);
            resolve = null;
          "
        >
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
import { nextTick, ref } from 'vue';

const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  content: { type: String, default: '' },
  buttons: { type: Array, default: [] },
});

const footer = ref();
const resolve = ref(null);

const open = async () => {
  return new Promise(async (promiseResolve) => {
    resolve.value = promiseResolve;

    if (props.buttons.length > 0) {
      await nextTick();
      footer.value.$el.children[0].focus();
    }
  });
};

defineExpose({ open });
</script>
