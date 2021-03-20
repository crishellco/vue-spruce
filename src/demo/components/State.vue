<template>
  <demo-section name="SpruceState" :code="code">
    <spruce-function
      :fn="
        str =>
          str
            .split('')
            .sort(() => Math.random() - 0.5)
            .join('')
      "
    >
      <template slot-scope="{ fn }">
        <spruce-state :value="{ name: 'ric flair', sport: 'wrestling' }">
          <div slot-scope="{ state, set }">
            <div class="mb-4">
              <div class="font-semibold">State:</div>
              <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4 rounded">
               <code class="block text-sm font-mono text-white flex flex-1">{{ state }}</code>
            </pre>
            </div>
            <button
              class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
              @click="set({ name: fn(state.name) })"
            >
              shuffle name
            </button>

            <button
              class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64 ml-4"
              @click="set({ sport: fn(state.sport) })"
            >
              shuffle sport
            </button>
          </div>
        </spruce-state>
      </template>
    </spruce-function>
  </demo-section>
</template>

<script>
import { SpruceFunction, SpruceState } from '../../package/components';
import { DemoSection } from '../shared';
import code from './State.gist';

export default {
  components: { DemoSection, SpruceFunction, SpruceState },

  data() {
    return {
      code,
    };
  },
};
</script>
