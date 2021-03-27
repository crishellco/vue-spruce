import Vue from 'vue';

import App from './App.vue';
import VueSpruce from '../package';

Vue.config.productionTip = false;

Vue.use(VueSpruce);

new Vue({ render: h => h(App) }).$mount('#app');
