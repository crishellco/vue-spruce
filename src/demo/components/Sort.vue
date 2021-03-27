<template>
  <demo-section name="SpruceSort" :code="code">
    <spruce-state :value="{ direction: 'asc', by: columns[0] }">
      <template slot-scope="{ by, direction, set }">
        <spruce-sort :list="people" :by="by" :direction="direction">
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
                        if (by === col) {
                          set({ direction: direction === 'desc' ? 'asc' : 'desc' });
                        } else {
                          set({ by: col });
                        }
                      }
                    "
                  >
                    <span>{{ col }}</span>
                    <span class="ml-2" :class="{ 'opacity-0': by !== col }">{{ direction === 'asc' ? '▲' : '▼' }}</span>
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
  </demo-section>
</template>

<script>
import { SpruceSort, SpruceState } from '../../package/components';
import { people } from '../fixtures';
import { DemoSection } from '../shared';
import code from './Sort.gist';

export default {
  components: {
    DemoSection,
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
