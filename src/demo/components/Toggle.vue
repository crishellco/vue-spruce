<template>
  <div class="flex">
    <div class="flex-1 p-4 w-1/2 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">SpruceToggle</h3>
      <spruce-toggle root>
        <div slot-scope="{ isOn, toggle }" class="">
          <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4 rounded mb-4">
              <code class="block text-sm font-mono text-white flex flex-1">{{JSON.stringify({isOn}, null, 2)}}</code>
          </pre>
          <div class="bg-gray-400 rounded-t flex items-center w-1/2">
            <span class="flex-1 p-4">Accordion</span>
            <span
              class="flex-none cursor-pointer mr-2 w-8 h-8 text-lg hover:bg-gray-500 leading-none rounded flex items-center justify-center"
              @click="toggle"
              >{{ isOn ? '▲' : '▼' }}</span
            >
          </div>
          <div v-if="isOn" class="border rounded-b p-4">content</div>
        </div>
      </spruce-toggle>
    </div>
    <div class="flex-1 w-1/2 overflow-hidden border-b border-gray-600">
      <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4">
         <code class="block text-sm font-mono text-white flex flex-1 select-all">{{ code }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import { SpruceToggle } from '../../package/components';
import code from './Toggle.gist';

export default {
  components: {
    SpruceToggle,
  },

  data() {
    return {
      code,
    };
  },
};
</script>
