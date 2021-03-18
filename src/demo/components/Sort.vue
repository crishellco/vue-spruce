<template>
  <div class="flex">
    <div class="flex-1 p-4 w-1/2 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">
        SpruceSort
      </h3>
      <div>
        <spruce-state :value="{ direction: 'asc', by: columns[0] }" root>
          <template slot-scope="{ state, update }">
            <spruce-sort :list="people" :by="state.by" :direction="state.direction">
              <div slot-scope="{ results }" class="w-full overflow-auto text-xs" style="height: 46rem">
                <table class="w-full mt-4">
                  <thead>
                    <tr class="text-bold text-left">
                      <th
                        v-for="col in columns"
                        :key="col"
                        class="cursor-pointer"
                        @click="
                          () => {
                            if (state.by === col) {
                              update({ direction: state.direction === 'desc' ? 'asc' : 'desc' });
                            } else {
                              update({ by: col });
                            }
                          }
                        "
                      >
                        <span>{{ col }}</span>
                        <span class="ml-2" :class="{ 'opacity-0': state.by !== col }">{{
                          state.direction === 'asc' ? '▲' : '▼'
                        }}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(result, index) in results" :key="index">
                      <td v-for="col in columns" :key="col">
                        {{ result[col] }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </spruce-sort>
          </template>
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
import { SpruceSort, SpruceState } from '../../components';
import { people } from '../fixtures';
import code from './Sort.gist';

export default {
  components: {
    SpruceSort,
    SpruceState,
  },

  data() {
    return {
      columns: Object.keys(people[0]),
      code,
      people,
    };
  },
};
</script>
