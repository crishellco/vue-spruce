<template>
  <renderless-state
    :value="{ term: '' }"
    class=" border-b pb-4"
  >
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
</template>

<script>
import { RenderlessSearch, RenderlessState } from '../../components';
import { states } from '../fixtures';

export default {
  components: { RenderlessSearch, RenderlessState },

  data() {
    return { states };
  },
};
</script>

<style></style>
