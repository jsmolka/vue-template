import Dialog from '@/utils/Dialog.vue';
import { createApp } from 'vue';

const div = document.createElement('div');
document.body.appendChild(div);

const component = createApp(Dialog).mount(div);

export async function dialog(content, buttons) {
  return component.show(content, buttons);
}
