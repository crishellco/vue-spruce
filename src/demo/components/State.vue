<template>
  <demo-section name="SpruceState" :code="code">
    <spruce-function
      v-slot="{ fn }"
      :fn="
        (str) =>
          str
            .split('')
            .sort(() => Math.random() - 0.5)
            .join('')
      "
    >
      <spruce-state v-slot="{ name, sport, set }" :value="{ name: 'ric flair', sport: 'wrestling' }">
        <div>
          <div class="mb-4">
            <div class="font-semibold">State:</div>
            <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4 rounded">
               <code class="block text-sm font-mono text-white flex flex-1">{{ {name, sport} }}</code>
            </pre>
          </div>
          <button
            class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
            @click="set({ name: fn(name) })"
          >
            shuffle name
          </button>

          <button
            class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64 ml-4"
            @click="set({ sport: fn(sport) })"
          >
            shuffle sport
          </button>
        </div>
      </spruce-state>
    </spruce-function>
  </demo-section>
</template>

<script>
import { SpruceFunction, SpruceState } from '../../package';
import { DemoSection } from '../shared';
import code from './State.gist';

export default {
  components: { DemoSection, SpruceFunction, SpruceState },

  data() {
    return { code };
  },
};
</script>
