import { mount } from '@vue/test-utils';
import { VueSpruce } from './';

let wrapper;

describe('install', () => {
  it('should install with default options', () => {
    wrapper = mount({ template: '<div />' }, { global: { plugins: [VueSpruce] } });

    expect(wrapper.__app._instance.root.appContext.components).toHaveProperty('spruce-fetch');
  });

  it('should install with custom options', () => {
    wrapper = mount({ template: '<div />' }, { global: { plugins: [[VueSpruce, { componentPrefix: 's' }]] } });

    expect(wrapper.__app._instance.root.appContext.components).toHaveProperty('s-fetch');
  });
});
