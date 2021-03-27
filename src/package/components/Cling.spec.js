import { shallowMount } from '@vue/test-utils';

import { SpruceCling } from '.';

describe('Cling', () => {
  it('render with attrs and placement', async () => {
    const wrapper = await shallowMount(SpruceCling, {
      propsData: { placement: 'top' },
      scopedSlots: {
        anchor: '<p data-name="anchor"></p>',
        clinger: '<p data-name="clinger"></p>',
      },
    });

    wrapper.vm.update();

    expect(wrapper.exists()).toBe(true);
  });

  it('render without attrs or placement', async () => {
    const wrapper = await shallowMount(SpruceCling, {
      scopedSlots: {
        anchor: '<p></p>',
        clinger: '<p></p>',
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
