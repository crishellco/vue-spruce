import { mount } from '@vue/test-utils';

import { SpruceTagInput } from './';

let wrapper;

const Component = {
  components: { SpruceTagInput },
  data() {
    return { allowDuplicates: false, colors: ['red', 'blue'], keepOnBackspace: false, disabled: false, maxTags: null };
  },
  template: `
  <spruce-tag-input v-model="colors" ref="tagInput" :keep-on-backspace="keepOnBackspace" :disabled="disabled" :max-tags="maxTags" :allow-duplicates="allowDuplicates">
    <div slot-scope="{ events, remove, state, tags }">
      <button
        v-for="(tag, index) in tags"
        :key="index"
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

  describe('watchers', () => {
    test('newTag', async () => {
      wrapper.find('input').trigger('keydown.backspace');
      expect(wrapper.vm.$refs.tagInput.focusedTag).toBeTruthy();

      await wrapper.find('input').setValue('red');
      expect(wrapper.vm.$refs.tagInput.focusedTag).toBeFalsy();
    });
  });

  describe('methods', () => {
    test('add', async () => {
      wrapper.find('input').setValue('red');
      wrapper.find('input').trigger('keydown.enter');
      expect(wrapper.vm.colors.length).toBe(2);

      wrapper.find('input').setValue('green');
      wrapper.find('input').trigger('keydown.enter');
      expect(wrapper.vm.colors.length).toBe(3);

      await wrapper.setData({ allowDuplicates: true });
      wrapper.find('input').setValue('red');
      wrapper.find('input').trigger('keydown.enter');
      expect(wrapper.vm.colors.length).toBe(4);

      await wrapper.setData({ maxTags: 4 });
      wrapper.find('input').setValue('yellow');
      wrapper.find('input').trigger('keydown.enter');
      expect(wrapper.vm.colors.length).toBe(4);
    });

    test('clear', () => {
      wrapper.find('input').setValue('red');
      expect(wrapper.vm.$refs.tagInput.newTag).toBe('red');

      wrapper.find('input').trigger('keydown.esc');
      expect(wrapper.vm.$refs.tagInput.newTag).toBe('');

      wrapper.find('input').trigger('keydown.backspace');
      expect(wrapper.vm.$refs.tagInput.focusedTag).toBeTruthy();

      wrapper.find('input').trigger('keydown.esc');
      expect(wrapper.vm.$refs.tagInput.focusedTag).toBeFalsy();
    });

    test('pop', async () => {
      wrapper.find('input').setValue('red');
      wrapper.find('input').trigger('keydown.backspace');
      wrapper.find('input').trigger('keydown.backspace');
      expect(wrapper.vm.colors.length).toBe(2);

      wrapper.find('input').setValue('');
      wrapper.find('input').trigger('keydown.backspace');
      wrapper.find('input').trigger('keydown.backspace');
      expect(wrapper.vm.colors.length).toBe(1);

      await wrapper.setData({ keepOnBackspace: true });
      wrapper.find('input').trigger('keydown.backspace');
      wrapper.find('input').trigger('keydown.backspace');
      expect(wrapper.vm.colors.length).toBe(1);
    });

    test('remove', async () => {
      wrapper.find('button').trigger('click');
      expect(wrapper.vm.colors.length).toBe(1);

      await wrapper.setData({ disabled: true });
      wrapper.find('button').trigger('click');
      expect(wrapper.vm.colors.length).toBe(1);
    });
  });
});
