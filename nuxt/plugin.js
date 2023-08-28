import { creatApp } from 'vue';
import { VueSpruce } from '@crishellco/vue-spruce';

const app = creatApp({});
const options = JSON.parse(`<%= JSON.stringify(options) %>`);

export default () => {
  app.use(VueSpruce, { ...options });
};
