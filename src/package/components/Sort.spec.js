import { people } from './../../demo/fixtures';
import { shallowMount } from '@vue/test-utils';

import { SpruceSort } from './';

let wrapper;

describe('Sort', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpruceSort, {
      propsData: {
        by: 'first_name',
        direction: 'asc',
        list: people,
      },
      slots: { default: '<p></p>' },
    });
  });

  it('should sort', async () => {
    expect(wrapper.vm.results[0]).toEqual({
      id: 15,
      first_name: 'adelaide',
      last_name: 'Evequot',
      email: 'aevequote@wordpress.org',
      gender: 'Non-binary',
    });

    await wrapper.setProps({ direction: 'desc' });
    expect(wrapper.vm.results[0]).toEqual({
      id: 7,
      first_name: 'Zia',
      last_name: 'Ellacombe',
      email: 'zellacombe6@deviantart.com',
      gender: 'Polygender',
    });

    await wrapper.setProps({ by: 'last_name' });
    expect(wrapper.vm.results[0]).toEqual({
      id: 6,
      first_name: 'Maureene',
      last_name: 'Wither',
      email: 'mwither5@merriam-webster.com',
      gender: 'Bigender',
    });

    await wrapper.setProps({ by: 'id' });
    expect(wrapper.vm.results[0]).toEqual({
      id: 50,
      first_name: 'Morton',
      last_name: 'Stidson',
      email: 'mstidson1d@devhub.com',
      gender: 'Female',
    });

    await wrapper.setProps({ list: [] });
    expect(wrapper.vm.results).toEqual([]);
  });

  it('should fire the change event', async () => {
    expect(wrapper.emitted('change')).toBeFalsy();

    await wrapper.setProps({ direction: 'desc' });
    expect(wrapper.emitted('change')[0]).toEqual(expect.any(Array));
  });
});
