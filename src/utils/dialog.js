import Dialog from '@/utils/Dialog.vue';
import { createApp } from 'vue';

function mount() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp(Dialog);

  return {
    dialog: app.mount(div),
    unmount() {
      app.unmount();
      div.remove();
    },
  };
}

export async function dialog(content, buttons) {
  const { dialog, unmount } = mount();
  try {
    return await dialog.open(content, buttons);
  } finally {
    unmount();
  }
}
