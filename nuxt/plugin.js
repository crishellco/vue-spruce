import Vue from 'vue';
import VueSpruce from '@crishellco/vue-spruce';

const options = JSON.parse(`<%= JSON.stringify(options) %>`);

export default () => {
  Vue.use(VueSpruce, { ...options });
};
