import { Settings } from '@/modules/settings';
import { deserialize, serialize } from '@/utils/persist';
import { watchIgnorable } from '@vueuse/core';
import { get, set } from 'idb-keyval';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref(new Settings());

  const toJson = () => {
    return { version: 1, data: serialize(settings.value) };
  };

  const fromJson = (data) => {
    if (data != null && data.version != null) {
      settings.value = deserialize(Settings, convert(data));
    }
  };

  const storageKey = 'settings';
  const storageVersion = 1;

  const persist = async () => {
    await set(storageKey, { storageVersion, data: toJson() });
  };

  const { ignoreUpdates } = watchIgnorable(settings, persist, { deep: true });

  const hydrate = async () => {
    const data = await get(storageKey);
    if (data != null && data.storageVersion === storageVersion) {
      ignoreUpdates(() => fromJson(data.data));
    }
  };

  return { settings, toJson, fromJson, persist, hydrate };
});

function convert(data) {
  const { version, data: settings } = data;
  switch (version) {
    case 1:
      break;
  }
  return settings;
}
