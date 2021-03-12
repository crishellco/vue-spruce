import { shallowMount } from '@vue/test-utils';

import { RenderlessEvent } from './';

let wrapper;

describe('Event', () => {
  beforeEach(() => {
    wrapper = shallowMount(RenderlessEvent, {
      propsData: {
        event: 'click',
      },
      scopedSlots: {
        default: '<p></p>',
      },
    });
  });
  it('should track an event', async () => {
    window.dispatchEvent(new Event('click'));
    expect(wrapper.emitted('click').length).toBe(1);
  });
});
