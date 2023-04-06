<template>
  <demo-section name="SpruceTagInput" :code="code">
    <spruce-tag-input v-model="colors" :validator="validator">
      <div
        slot-scope="{ events, focusedTag, invalid, remove, state, tags }"
        class="p-2 border flex items-center flex-wrap gap-2"
        :class="{ 'border-red-500': invalid }"
      >
        <button
          v-for="(tag, index) in tags"
          :key="index"
          type="button"
          class="rounded bg-gray-400 hover:bg-gray-500 flex items-center h-8 px-2 space-x-2 flex-none"
          :class="{ 'bg-red-500': focusedTag === tag }"
          title="Remove tag"
          @click="remove(tag)"
        >
          <span>{{ tag }}</span>
          <span>&times;</span>
        </button>
        <input
          v-bind="state"
          placeholder="Add tag with letters only..."
          class="flex-1 h-8 focus:outline-none"
          v-on="events"
        />
      </div>
    </spruce-tag-input>
  </demo-section>
</template>

<script>
import { DemoSection } from '../shared';
import code from './TagInput.gist';

export default {
  components: { DemoSection },

  data() {
    return { code, colors: ['red', 'blue'] };
  },

  methods: {
    validator(tag) {
      return /^[a-zA-Z]+$/.test(tag);
    },
  },
};
</script>
