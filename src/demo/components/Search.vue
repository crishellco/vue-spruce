<template>
  <demo-section name="SpruceSearch" :code="code">
    <spruce-state :value="{ term: '' }">
      <div slot-scope="{ term, set }">
        <input
          :value="term"
          type="text"
          class="border-2 bg-white py-2 px-4 w-1/2 mb-4"
          placeholder="search"
          @input="set({ term: $event.target.value })"
        />
        <spruce-search :list="states" :term="term">
          <div slot-scope="{ results }" class="w-full overflow-auto text-xs" style="height: 31rem">
            <table class="w-full">
              <thead>
                <tr class="text-bold text-left">
                  <th>name</th>
                  <th>abbreviation</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="({ name, abbreviation }, index) in results" :key="index">
                  <td>{{ name }}</td>
                  <td>{{ abbreviation }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </spruce-search>
      </div>
    </spruce-state>
  </demo-section>
</template>

<script>
import { states } from '../fixtures';
import { DemoSection } from '../shared';
import code from './Search.gist';

export default {
  components: { DemoSection },

  data() {
    return {
      code,
      states,
    };
  },
};
</script>
