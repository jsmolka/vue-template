import { Settings } from '@/modules/settings';
import { deserialize, serialize } from '@/utils/persist';
import { get, set } from '@/utils/store';
import { watchIgnorable } from '@vueuse/core';
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

  const storeKey = 'settings';
  const storeVersion = 1;

  const persist = async () => {
    await set(storeKey, { storeVersion, data: toJson() });
  };

  const { ignoreUpdates } = watchIgnorable(settings, persist, { deep: true });

  const hydrate = async () => {
    const data = await get(storeKey);
    if (data != null && data.storeVersion === storeVersion) {
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
