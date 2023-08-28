import { mount } from '@vue/test-utils';

import { SpruceFunction } from './';

let fn;
let wrapper;

describe('Function', () => {
  beforeEach(() => {
    fn = jest.fn();

    wrapper = mount({
      components: { SpruceFunction },
      template: `
<spruce-function :fn="theFn" v-slot="{ fn }">
  <button @click="fn">btn</button>
</spruce-function>
      `,
      methods: { theFn: fn },
    });
  });

  it('should call the function', async () => {
    await wrapper.find('button').trigger('click');
    expect(fn).toHaveBeenCalled();
  });
});
