/**
 * @jest-environment jsdom
 */

import { setImmediate } from 'timers';

import { shallowMount } from '@vue/test-utils';

import { SpruceFetch } from '.';

const data = { ric: 'flair' };
const defaultOptions = {
  ok: true,
  data,
  status: 200,
};

let wrapper;

function setupFetch(options = {}) {
  const { ok, data, status } = {
    ...defaultOptions,
    ...options,
  };

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok,
      json: () => Promise.resolve({ ...data }),
      status,
    })
  );
}

function flushPromises() {
  return new Promise(setImmediate);
}

describe('Fetch', () => {
  beforeEach(() => {
    setupFetch();

    wrapper = shallowMount(SpruceFetch, {
      propsData: {
        url: 'api.google.com',
        method: 'get',
        immediate: false,
      },
      scopedSlots: { default: '<p></p>' },
    });
  });

  it('should reset', async () => {
    await wrapper.vm.reset();
    expect(fetch).toHaveBeenCalled();
    expect(wrapper.vm.data).toEqual(data);
  });

  it('should watch url', async () => {
    await wrapper.setProps({ url: 'different' });
    await flushPromises();
    expect(fetch).toHaveBeenCalled();
    expect(wrapper.vm.data).toEqual(data);
  });

  it('should handle errors', async () => {
    setupFetch({
      ok: false,
      status: 400,
    });

    await wrapper.vm.fetch();
    expect(fetch).toHaveBeenCalled();
    expect(wrapper.vm.error).toEqual({
      status: 400,
      data,
    });
  });

  it('should fetch immediately', () => {
    shallowMount(SpruceFetch, {
      propsData: {
        url: 'api.google.com',
        method: 'get',
      },
      scopedSlots: { default: '<p></p>' },
    });

    expect(fetch).toHaveBeenCalled();
  });

  it('should not fetch when loading', () => {
    wrapper.vm.fetch();
    wrapper.vm.fetch();

    expect(wrapper.vm.loading).toBeTruthy();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should catch an exception from fetch', async () => {
    const error = 'oops';

    global.fetch = jest.fn().mockImplementation(() => Promise.reject(error));

    await wrapper.vm.fetch();

    expect(wrapper.vm.data).toBeNull();
    expect(wrapper.vm.loading).toBeFalsy();
  });
});
