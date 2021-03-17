import Vue from 'vue';
import VueCodeHighlight from 'vue-code-highlight';

import 'vue-code-highlight/themes/duotone-sea.css';
import 'vue-code-highlight/themes/window.css';
import 'prism-es6/components/prism-markup-templating';
import 'prism-es6/components/prism-markup';

import App from './App.vue';

Vue.use(VueCodeHighlight);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
