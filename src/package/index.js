import * as components from './components';

export * from './components';

const defaultOptions = { componentPrefix: 'spruce' };

export default function install(Vue, options = {}) {
  const { componentPrefix } = {
    ...defaultOptions,
    ...options,
  };

  for (const name in components) {
    const component = components[name];

    Vue.component(`${componentPrefix}-${name.replace('Spruce', '').toLowerCase()}`, component);
  }
}
