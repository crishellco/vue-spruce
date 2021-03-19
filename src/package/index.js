import {
  SpruceEvent,
  SpruceFetch,
  SpruceFunction,
  SprucePaginate,
  SpruceSearch,
  SpruceSort,
  SpruceState,
  SpruceToggle,
} from './components';

export {
  SpruceEvent,
  SpruceFetch,
  SpruceFunction,
  SprucePaginate,
  SpruceSearch,
  SpruceSort,
  SpruceState,
  SpruceToggle,
};

const defaultOptions = {
  componentPrefix: 'spruce',
};

export default function install(Vue, options = {}) {
  const { componentPrefix } = { ...defaultOptions, ...options };

  Vue.component(`${componentPrefix}-event`, SpruceEvent);
  Vue.component(`${componentPrefix}-fetch`, SpruceFetch);
  Vue.component(`${componentPrefix}-function`, SpruceFunction);
  Vue.component(`${componentPrefix}-paginate`, SprucePaginate);
  Vue.component(`${componentPrefix}-search`, SpruceSearch);
  Vue.component(`${componentPrefix}-sort`, SpruceSort);
  Vue.component(`${componentPrefix}-state`, SpruceState);
  Vue.component(`${componentPrefix}-toggle`, SpruceToggle);
}
