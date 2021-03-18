import {
  RenderlessEvent,
  RenderlessFunction,
  RenderlessSearch,
  RenderlessSort,
  RenderlessState,
  RenderlessToggle,
} from './components';

export { RenderlessEvent, RenderlessFunction, RenderlessSearch, RenderlessSort, RenderlessState, RenderlessToggle };

export default function install(Vue) {
  Vue.component('renderless-event', RenderlessEvent);
  Vue.component('renderless-function', RenderlessFunction);
  Vue.component('renderless-search', RenderlessSearch);
  Vue.component('renderless-sort', RenderlessSort);
  Vue.component('renderless-state', RenderlessState);
  Vue.component('renderless-toggle', RenderlessToggle);
}
