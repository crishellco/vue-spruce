import axios from 'axios';
import { shallowMount } from '@vue/test-utils';

jest.mock('axios');

import { SpruceCrud } from './';

const data = { ric: 'flair' };

let wrapper;

describe('Crud', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    axios.mockImplementation(() => Promise.resolve({ status: 200, data }));

    wrapper = shallowMount(SpruceCrud, {
      propsData: {
        url: 'api.google.com',
        method: 'get',
        immediate: false,
      },
      scopedSlots: {
        default: '<p></p>',
      },
    });
  });
  it('should reset', async () => {
    await wrapper.vm.reset();
    expect(axios).toHaveBeenCalled();
    expect(wrapper.vm.data).toEqual(data);
  });

  it('should watch url', async () => {
    await wrapper.setProps({ url: 'different' });
    expect(axios).toHaveBeenCalled();
    expect(wrapper.vm.data).toEqual(data);
  });

  it('should watch params', async () => {
    await wrapper.setProps({ params: data });
    expect(axios).toHaveBeenCalled();
    expect(wrapper.vm.data).toEqual(data);
  });

  it('should handle errors', async () => {
    axios.mockImplementation(() => Promise.reject({ response: { status: 400, data } }));

    await wrapper.vm.fetch();

    expect(axios).toHaveBeenCalled();
    expect(wrapper.vm.error).toEqual({ status: 400, data });
  });

  it('should fetch immediately', () => {
    shallowMount(SpruceCrud, {
      propsData: {
        url: 'api.google.com',
        method: 'get',
      },
      scopedSlots: {
        default: '<p></p>',
      },
    });

    expect(axios).toHaveBeenCalled();
  });

  it('should not fetch when loading', () => {
    wrapper.vm.fetch();
    wrapper.vm.fetch();

    expect(axios).toHaveBeenCalledTimes(1);
  });
});
