<template>
  <div class="flex border-b pb-4">
    <div class="flex-1 w-1/2">
      <renderless-state :value="{ term: '' }">
        <div slot-scope="{ state, update }">
          <input
            :value="state.term"
            type="text"
            class="border-2 bg-white py-2 px-4 w-1/2"
            placeholder="search"
            @input="update({ term: $event.target.value })"
          >
          <renderless-search
            :list="states"
            :term="state.term"
          >
            <div
              slot-scope="{ results }"
              class="h-64 w-full"
            >
              <div class="overflow-y-scroll h-full w-full my-4">
                <div
                  v-for="(item, index) in results"
                  :key="index"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </renderless-search>
        </div>
      </renderless-state>
    </div>
    <div class="flex-1 ml-4 w-1/2">
      <vue-code-highlight language="markup">
        <pre>{{ code }}</pre>
      </vue-code-highlight>
    </div>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';

import { RenderlessSearch, RenderlessState } from '../../components';
import { states } from '../fixtures';

export default {
  components: { RenderlessSearch, RenderlessState, VueCodeHighlight },

  data() {
    return {
      code: `
<renderless-state :value="{ term: '' }">
  <div slot-scope="{ state, update }">
    <input
      :value="state.term"
      type="text"
      class="border-2 bg-white py-2 px-4 w-1/2"
      placeholder="search"
      @input="update({ term: $event.target.value })"
    >
    <renderless-search
      :list="states"
      :term="state.term"
    >
      <div
        slot-scope="{ results }"
        class="h-64 w-full"
      >
        <div class="overflow-y-scroll h-full w-full my-4">
          <div
            v-for="(item, index) in results"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </renderless-search>
  </div>
</renderless-state>
      `,
      states,
    };
  },
};
</script>

<style></style>
