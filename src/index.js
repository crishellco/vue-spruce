import {
  SpruceCrud,
  SpruceEvent,
  SpruceFunction,
  SprucePaginate,
  SpruceSearch,
  SpruceSort,
  SpruceState,
  SpruceToggle,
} from './components';

export { SpruceCrud, SpruceEvent, SpruceFunction, SprucePaginate, SpruceSearch, SpruceSort, SpruceState, SpruceToggle };

export default function install(Vue) {
  Vue.component('spruce-crud', SpruceCrud);
  Vue.component('spruce-event', SpruceEvent);
  Vue.component('spruce-function', SpruceFunction);
  Vue.component('spruce-paginate', SprucePaginate);
  Vue.component('spruce-search', SpruceSearch);
  Vue.component('spruce-sort', SpruceSort);
  Vue.component('spruce-state', SpruceState);
  Vue.component('spruce-toggle', SpruceToggle);
}
