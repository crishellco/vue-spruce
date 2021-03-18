import { people } from '../demo/fixtures';
import { shallowMount } from '@vue/test-utils';

import { SprucePaginate } from '.';

let wrapper;

describe('Paginate', () => {
  beforeEach(() => {
    wrapper = shallowMount(SprucePaginate, {
      propsData: {
        size: 12,
        list: people,
      },
      scopedSlots: {
        default: '<p></p>',
      },
    });
  });
  it('should paginate', async () => {
    expect(wrapper.vm.isFirst).toBeTruthy();
    expect(wrapper.vm.isLast).toBeFalsy();
    expect(wrapper.vm.pages.length).toBe(5);
    expect(wrapper.vm.page.length).toBe(12);
    expect(wrapper.vm.pageNum).toBe(1);
    expect(wrapper.vm.totalPages).toBe(5);
    expect(wrapper.vm.rangeStart).toBe(1);
    expect(wrapper.vm.rangeEnd).toBe(12);

    wrapper.vm.next();
    wrapper.vm.next();
    wrapper.vm.next();
    wrapper.vm.next();

    expect(wrapper.vm.isFirst).toBeFalsy();
    expect(wrapper.vm.isLast).toBeTruthy();
    expect(wrapper.vm.page.length).toBe(2);
    expect(wrapper.vm.pageNum).toBe(5);
    expect(wrapper.vm.rangeStart).toBe(49);
    expect(wrapper.vm.rangeEnd).toBe(50);

    await wrapper.setProps({
      list: [],
    });

    expect(wrapper.vm.pageIndex).toBe(0);

    await wrapper.setProps({
      list: people,
    });

    wrapper.vm.next();
    wrapper.vm.next();
    wrapper.vm.next();
    wrapper.vm.next();
    wrapper.vm.next();

    expect(wrapper.vm.pageIndex).toBe(4);

    wrapper.vm.prev();

    expect(wrapper.vm.pageIndex).toBe(3);

    await wrapper.setProps({
      size: 5,
    });

    expect(wrapper.vm.pageIndex).toBe(0);

    wrapper.vm.prev();

    expect(wrapper.vm.pageIndex).toBe(0);
  });
});
