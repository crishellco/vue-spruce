<template>
  <div class="flex">
    <div class="flex-1 p-4 w-1/2 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">
        SpruceSearch
      </h3>
      <div>
        <spruce-state :value="{ term: '' }" root>
          <div slot-scope="{ state, update }">
            <input
              :value="state.term"
              type="text"
              class="border-2 bg-white py-2 px-4 w-1/2 mb-4"
              placeholder="search"
              @input="update({ term: $event.target.value })"
            />
            <spruce-search :list="states" :term="state.term">
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
      </div>
    </div>
    <div class="flex-1 w-1/2 overflow-hidden border-b border-gray-600">
      <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4">
         <code class="block text-sm font-mono text-white flex flex-1 select-all">{{ code }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import { SpruceSearch, SpruceState } from '../../package/components';
import { states } from '../fixtures';
import code from './Search.gist';

export default {
  components: { SpruceSearch, SpruceState },

  data() {
    return {
      code,
      states,
    };
  },
};
</script>
