import { shallowMount } from '@vue/test-utils';

import { SpruceWatch } from '.';

let wrapper;
const watch = {
  count: 0,
  name: 'ric',
};

describe('Watch', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpruceWatch, {
      propsData: { watch },
      slots: { default: '<p></p>' },
    });
  });

  it('should watch', async () => {
    await wrapper.setProps({
      watch: {
        ...wrapper.vm.watch,
        count: 5,
      },
    });

    expect(wrapper.emitted('changed').length).toBe(1);

    await wrapper.setProps({
      watch: {
        ...wrapper.vm.watch,
        name: 'flair',
      },
    });

    expect(wrapper.emitted('changed').length).toBe(2);
  });
});
