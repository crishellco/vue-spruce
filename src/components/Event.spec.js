import { shallowMount } from '@vue/test-utils';

import { RenderlessEvent } from './';

let wrapper;

describe('Event', () => {
  const { removeEventListener } = window;

  beforeEach(() => {
    delete window.removeEventListener;
    window.removeEventListener = jest.fn();

    wrapper = shallowMount(RenderlessEvent, {
      propsData: {
        event: 'click',
      },
      scopedSlots: {
        default: '<p></p>',
      },
    });
  });

  afterEach(() => {
    window.removeEventListener = removeEventListener;
  });
  it('should track an event', async () => {
    window.dispatchEvent(new Event('click'));
    expect(wrapper.emitted('click').length).toBe(1);
  });

  it('should remove event listener', () => {
    wrapper.destroy();

    expect(window.removeEventListener).toHaveBeenCalledWith('click', wrapper.vm.handleEvent);
  });
});
