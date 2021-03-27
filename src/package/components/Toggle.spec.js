import { shallowMount } from '@vue/test-utils';

import { SpruceToggle } from './';

let wrapper;

describe('Toggle', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpruceToggle, { scopedSlots: { default: '<p></p>' } });
  });

  it('should track state', async () => {
    await wrapper.vm.on();
    expect(wrapper.vm.localValue).toBeTruthy();
    expect(wrapper.emitted('input')[0]).toEqual([true]);

    await wrapper.vm.toggle();
    expect(wrapper.vm.localValue).toBeFalsy();

    await wrapper.vm.off();
    expect(wrapper.vm.localValue).toBeFalsy();

    await wrapper.setProps({ value: true });
    expect(wrapper.vm.localValue).toBeTruthy();
  });
});
