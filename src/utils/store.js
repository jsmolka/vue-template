import packageJson from '@/../package.json';
import { createStore, get as kvGet, set as kvSet } from 'idb-keyval';

const store = createStore(packageJson.name, 'store');

export async function get(key) {
  return kvGet(key, store);
}

export async function set(key, value) {
  return kvSet(key, value, store);
}
