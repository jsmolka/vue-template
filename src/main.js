import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './main.scss';
import { router } from './router';

function main() {
  const app = createApp(App);
  app.use(createPinia());
  app.use(router);
  app.mount('#app');
}

main();
