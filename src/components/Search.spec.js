import { people } from './../demo/fixtures';
import { shallowMount } from '@vue/test-utils';

import { RenderlessSearch } from './';

let wrapper;

describe('Search', () => {
  beforeEach(() => {
    wrapper = shallowMount(RenderlessSearch, {
      propsData: {
        list: people,
        term: '',
      },
      scopedSlots: {
        default: '<p></p>',
      },
    });
  });

  it('should search', async () => {
    expect(wrapper.vm.results[0]).toEqual({
      email: 'jbelfitt0@umn.edu',
      first_name: 'Juana',
      gender: 'Agender',
      id: 1,
      last_name: 'Belfitt',
    });

    await wrapper.setProps({ keys: ['first_name', 'last_name'], term: 'Corbishley' });
    expect(wrapper.vm.results[0]).toEqual({
      email: 'vcorbishley1@aol.com',
      first_name: 'Viole',
      gender: 'Male',
      id: 2,
      last_name: 'Corbishley',
    });

    await wrapper.setProps({ term: 'Felix', list: people.map(({ first_name }) => first_name) });
    expect(wrapper.vm.results[0]).toEqual('Felix');
  });
});
