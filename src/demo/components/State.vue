<template>
  <div class="flex">
    <div class="flex-1 w-1/2 p-4 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">
        SpruceState
      </h3>
      <div root>
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
              <div slot-scope="{ state, update }">
                <div class="mb-4">
                  <div class="font-semibold">State:</div>
                  <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4 rounded">
               <code class="block text-sm font-mono text-white flex flex-1">{{ state }}</code>
            </pre>
                </div>
                <button
                  class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
                  @click="update({ name: fn(state.name) })"
                >
                  shuffle name
                </button>

                <button
                  class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64 ml-4"
                  @click="update({ sport: fn(state.sport) })"
                >
                  shuffle sport
                </button>
              </div>
            </spruce-state>
          </template>
        </spruce-function>
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
import { SpruceFunction, SpruceState } from '../../components';
import code from './State.gist';

export default {
  components: { SpruceFunction, SpruceState },

  data() {
    return {
      code,
    };
  },
};
</script>
