import { shallowMount } from '@vue/test-utils';

import SpruceEvent, { UPDATED } from './Event.vue';

let wrapper;

describe('Event', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpruceEvent, {
      propsData: { eventName: 'click' },
      slots: { default: '<p></p>' },
    });
  });

  it('should track an event', async () => {
    window.dispatchEvent(new Event('click'));
    expect(wrapper.emitted(UPDATED).length).toBe(1);
  });

  it('should immediately fire', async () => {
    const wrapper = shallowMount(SpruceEvent, { propsData: { eventName: 'click', immediate: true } });

    expect(wrapper.emitted(UPDATED).length).toBe(1);
  });
});
