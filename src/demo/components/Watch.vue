<template>
  <demo-section name="SpruceWatch" :code="code">
    <spruce-function v-slot="{ fn }" :fn="() => Math.random().toString(16).substr(2, 8)">
      <spruce-state v-slot="{ count, random, events, set }" :value="{ random: fn(), count: 0, events: [] }">
        <div>
          <div class="flex items-center mb-4">
            <button
              class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
              @click="set({ count: count + 1 })"
            >
              count++ ({{ count }})
            </button>
            <button
              class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64 ml-4"
              @click="set({ random: fn() })"
            >
              randomize ({{ random }})
            </button>
          </div>
          <spruce-watch :watch="{ count, random }" @changed="set({ events: [...events, $event] })">
            <table class="w-full text-xs">
              <thead>
                <tr class="text-bold text-left">
                  <th>changes observed</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(event, index) in events" :key="index">
                  <td>
                    <code>{{ event }}</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </spruce-watch>
        </div>
      </spruce-state>
    </spruce-function>
  </demo-section>
</template>

<script>
import { SpruceFunction, SpruceState, SpruceWatch } from '../../package';
import { DemoSection } from '../shared';
import code from './Watch.gist';

export default {
  components: { DemoSection, SpruceFunction, SpruceState, SpruceWatch },

  data() {
    return { code };
  },
};
</script>
