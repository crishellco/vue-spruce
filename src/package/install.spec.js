import Vue from 'vue';

import VueSpruce from './';

let localVue;

describe('install', () => {
  beforeEach(() => {
    localVue = { ...Vue };
  });

  it('should install with default options', () => {
    localVue.use(VueSpruce);

    expect(localVue.options.components).toHaveProperty('spruce-crud');
  });

  it('should install with custom options', () => {
    localVue.use(VueSpruce, { componentPrefix: 's' });

    expect(localVue.options.components).toHaveProperty('s-crud');
  });
});
