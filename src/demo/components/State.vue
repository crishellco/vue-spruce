<template>
  <div class="flex">
    <div class="flex-1 w-1/2 p-4 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">
        Renderless State
      </h3>
      <div>
        <renderless-state :value="{ name: 'ric flair' }">
          <div
            slot-scope="{ state, update }"
          >
            <div class="mb-4">
              <code>{{ state }} //state</code>
            </div>

            <button
              class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-48"
              @click="update({name: state.name.split('').reverse().join('')})"
            >
              reverse name
            </button>
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
import {  RenderlessState } from '../../components';

export default {
  components: {  RenderlessState },

  data() {
    return {
      code: `
<renderless-state :value="{ name: 'ric flair' }">
  <div
    slot-scope="{ state, update }"
  >
    <div class="mb-4">
      <code>{{ state }} //state</code>
    </div>

    <button
      class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-48"
      @click="update({name: state.name.split('').reverse().join('')})"
    >
      reverse name
    </button>
  </div>
</renderless-state>
      `.trim(),
    };
  },
};
</script>
