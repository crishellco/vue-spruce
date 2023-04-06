import { mount } from '@vue/test-utils';

import { SpruceTagInput } from './';

let wrapper;

const Component = {
  components: { SpruceTagInput },
  data() {
    return { colors: ['red', 'blue'] };
  },
  template: `
  <spruce-tag-input v-model="colors" ref="tagInput">
    <div slot-scope="{ events, remove, state, tags }">
      <button
        v-for="tag in tags"
        :key="tag"
        :ref="'tag_' + tag"
        @click="remove(tag)"
      >
        <span>{{ tag }}</span>
      </button>
      <input v-bind="state" placeholder="Add tag..." v-on="events" />
    </div>
  </spruce-tag-input>
  `,
};

describe('TagInput', () => {
  beforeEach(() => {
    wrapper = mount(Component);
  });

  test('add', () => {
    wrapper.find('input').setValue('red');
    wrapper.find('input').trigger('keydown.enter');
    expect(wrapper.vm.colors.length).toBe(2);

    wrapper.find('input').setValue('green');
    wrapper.find('input').trigger('keydown.enter');
    expect(wrapper.vm.colors.length).toBe(3);
  });

  test('esc', () => {
    wrapper.find('input').setValue('red');
    expect(wrapper.vm.$refs.tagInput.newTag).toBe('red');
    wrapper.find('input').trigger('keydown.esc');
    expect(wrapper.vm.$refs.tagInput.newTag).toBe('');
  });

  test('remove', () => {
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.colors.length).toBe(1);
  });
});
