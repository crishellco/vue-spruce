import App from './App.vue';
import { VueSpruce } from '../package';

import { createApp, h } from 'vue';

const app = createApp({
  name: 'DemoMain',

  render() {
    return h(App);
  },
});

app.use(VueSpruce);

app.mount('#app');
