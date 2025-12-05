import { dialog } from '@/components/ui/dialog';
import { useDocumentVisibility, whenever } from '@vueuse/core';
import { useRegisterSW } from 'virtual:pwa-register/vue';

export function useUpdateApp() {
  const visibility = useDocumentVisibility();

  const { needRefresh, updateServiceWorker } = useRegisterSW({
    onRegisteredSW(_, registration) {
      if (registration == null) {
        return;
      }

      whenever(
        () => visibility.value === 'visible',
        () => registration.update(),
        { immediate: true },
      );
    },
  });

  const standalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true ||
    window.document.referrer.includes('android-app://');

  whenever(needRefresh, async () => {
    if (standalone) {
      const button = await dialog({
        content: 'A new version is available.',
        buttons: [
          { text: 'Update', variant: 'default' },
          { text: 'Cancel', variant: 'secondary' },
        ],
      });
      if (button === 0) {
        updateServiceWorker(true);
      }
    } else {
      updateServiceWorker(true);
    }
  });
}
