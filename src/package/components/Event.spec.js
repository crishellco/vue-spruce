import { shallowMount } from '@vue/test-utils';

import { SpruceEvent } from './';

let wrapper;

describe('Event', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpruceEvent, {
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
