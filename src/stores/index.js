import { useSettingsStore } from '@/stores/settings';
import { defineStore } from 'pinia';

export const useStores = defineStore('stores', () => {
  const stores = [useSettingsStore()];

  const hydrate = async () => {
    try {
      await Promise.all(stores.map((store) => store.hydrate?.()));
    } catch (error) {
      console.error(error);
    }
  };

  return { hydrate };
});
