import { shallowMount } from '@vue/test-utils';

import { SpruceState } from './';

let wrapper;

describe('State', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpruceState, {
      propsData: {
        value: {
          count: 0,
          number: 0,
        },
      },
      scopedSlots: { default: '<p></p>' },
    });
  });

  it('should track state', async () => {
    expect(wrapper.vm.localValue).toEqual({
      count: 0,
      number: 0,
    });

    await wrapper.vm.update({ count: 1 }); // deprecated
    expect(wrapper.vm.localValue).toEqual({
      count: 1,
      number: 0,
    });
    expect(wrapper.emitted('input')[1]).toEqual([
      {
        count: 1,
        number: 0,
      },
    ]);

    await wrapper.vm.set({ number: 1 });
    expect(wrapper.vm.localValue).toEqual({
      count: 1,
      number: 1,
    });

    await wrapper.vm.set({ adhoc: 'foobar' });
    expect(wrapper.vm.localValue).toEqual({
      adhoc: 'foobar',
      count: 1,
      number: 1,
    });

    await wrapper.setProps({
      value: {
        count: 10,
        number: 10,
      },
    });
    expect(wrapper.vm.localValue).toEqual({
      adhoc: 'foobar',
      count: 10,
      number: 10,
    });

    await wrapper.setProps({
      value: {
        count: 10,
        number: 10,
      },
    });
    expect(wrapper.vm.localValue).toEqual({
      adhoc: 'foobar',
      count: 10,
      number: 10,
    });
  });
});
