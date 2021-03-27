import * as components from './components';

export * from './components';

const defaultOptions = { componentPrefix: 'spruce' };

const fileNameToComponentName = str => kebabCase(str.replace('Spruce', ''));

const kebabCase = str =>
  str
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export default function install(Vue, options = {}) {
  const { componentPrefix } = {
    ...defaultOptions,
    ...options,
  };

  for (const name in components) {
    const component = components[name];

    Vue.component(`${componentPrefix}-${fileNameToComponentName(name)}`, component);
  }
}
