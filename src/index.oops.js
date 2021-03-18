import { RenderlessEvent, RenderlessState, RenderlessToggle } from './components';

export { RenderlessEvent, RenderlessState, RenderlessToggle };

export default function install(Vue) {
  Vue.component('renderless-event', RenderlessEvent);
  Vue.component('renderless-state', RenderlessState);
  Vue.component('renderless-toggle', RenderlessToggle);
}
