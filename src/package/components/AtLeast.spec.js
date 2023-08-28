import { shallowMount } from '@vue/test-utils';

import { SpruceAtLeast } from '.';

jest.useFakeTimers();

let wrapper;

describe('AtLeast', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpruceAtLeast, {
      propsData: { ms: 5000, show: true },
      slots: { default: '<p></p>' },
    });
  });

  it('show after visible for a minimum amount of time', async () => {
    await wrapper.setProps({ show: false });

    expect(wrapper.vm.localShow).toBeTruthy();
    expect(wrapper.vm.disabled).toBeTruthy();

    jest.runAllTimers();

    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.localShow).toBeFalsy();
    expect(wrapper.vm.disabled).toBeFalsy();
  });
});
