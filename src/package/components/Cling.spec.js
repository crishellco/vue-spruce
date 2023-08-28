import { defaultModifiers } from '@popperjs/core/lib/popper-lite';
import { shallowMount } from '@vue/test-utils';

import { SpruceCling } from '.';

describe('Cling', () => {
  it('should render with attrs and placement', async () => {
    const wrapper = await shallowMount(SpruceCling, {
      propsData: { placement: 'top' },
      slots: {
        anchor: '<p data-name="anchor"></p>',
        clinger: '<p data-name="clinger"></p>',
      },
    });

    wrapper.vm.update();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render without attrs or placement', async () => {
    const wrapper = await shallowMount(SpruceCling, {
      slots: {
        anchor: '<p></p>',
        clinger: '<p></p>',
      },
    });

    expect(wrapper.exists()).toBe(true);

    await wrapper.setProps({ placement: 'bottom' });
    await wrapper.setProps({ modifiers: [...defaultModifiers] });
  });
});
