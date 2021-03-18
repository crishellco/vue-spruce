import { mount } from '@vue/test-utils';

import { RenderlessFunction } from './';

let fn;
let wrapper;

describe('Sort', () => {
  beforeEach(() => {
    fn = jest.fn();

    wrapper = mount({
      components: { RenderlessFunction },
      template: `
<renderless-function :fn="theFn">
  <button slot-scope="{ fn }" @click="fn">btn</button>
</renderless-function>
      `,
      methods: {
        theFn: fn,
      },
    });
  });
  it('should call the function', async () => {
    await wrapper.find('button'); //.trigger('click');
    expect(fn).toHaveBeenCalled();
  });
});
