<template>
  <div class="flex">
    <div class="flex-1 p-4 w-1/2 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">
        Renderless Search
      </h3>
      <div>
        <renderless-state :value="{ term: '' }">
          <div slot-scope="{ state, update }">
            <input
              :value="state.term"
              type="text"
              class="border-2 bg-white py-2 px-4 w-1/2 mb-4"
              placeholder="search"
              @input="update({ term: $event.target.value })"
            >
            <renderless-search
              :list="states"
              :term="state.term"
            >
              <div
                slot-scope="{ results }"
                class="w-full overflow-auto text-xs"
                style="height: 35rem"
              >
                <table class="w-full">
                  <thead>
                    <tr class="text-bold text-left">
                      <th>name</th>
                      <th>abbreviation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="({name, abbreviation}, index) in results"
                      :key="index"
                    >
                      <td>{{ name }}</td>
                      <td>{{ abbreviation }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </renderless-search>
          </div>
        </renderless-state>
      </div>
    </div>
    <div class="flex-1 w-1/2 overflow-hidden border-b border-gray-600">
      <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4">
        <code class="block text-xs font-mono text-white flex flex-1">{{ code }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import { RenderlessSearch, RenderlessState } from '../../components';
import { states } from '../fixtures';

export default {
  components: { RenderlessSearch, RenderlessState },

  data() {
    return {
      code: `
<renderless-state :value="{ term: '' }">
  <div slot-scope="{ state, update }">
    <input
      :value="state.term"
      type="text"
      class="border-2 bg-white py-2 px-4 w-1/2 mb-4"
      placeholder="search"
      @input="update({ term: $event.target.value })"
    >
    <renderless-search
      :list="states"
      :term="state.term"
    >
      <div
        slot-scope="{ results }"
        class="w-full overflow-auto text-xs"
        style="height: 35rem"
      >
        <table class="w-full">
          <thead>
            <tr class="text-bold text-left">
              <th>name</th>
              <th>abbreviation</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="({name, abbreviation}, index) in results"
              :key="index"
            >
              <td>{{ name }}</td>
              <td>{{ abbreviation }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </renderless-search>
  </div>
</renderless-state>
      `.trim(),
      states,
    };
  },
};
</script>
