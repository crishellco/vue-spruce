import App from './App.vue';

import { createApp, h } from 'vue';

const app = createApp({
  name: 'DemoMain',

  render() {
    return h(App);
  },
});

app.mount('#app');
