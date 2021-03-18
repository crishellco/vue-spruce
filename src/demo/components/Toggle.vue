<template>
  <div class="flex">
    <div class="flex-1 p-4 w-1/2 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">
        Renderless Toggle
      </h3>
      <renderless-toggle>
        <div slot-scope="{ isOn, toggle }">
          <div class="w-1/2">
            <div class="bg-gray-400 rounded-t flex items-center">
              <span class="flex-1 p-4">Accordion</span>
              <span
                class="flex-none cursor-pointer mr-2 w-8 h-8 text-lg  hover:bg-gray-500  leading-none rounded flex items-center justify-center"
                @click="toggle"
              >{{ isOn ? '▲' : '▼' }}</span>
            </div>
            <div
              v-if="isOn"
              class="border rounded-b p-4"
            >
              content
            </div>
          </div>
        </div>
      </renderless-toggle>
    </div>
    <div class="flex-1 w-1/2 overflow-hidden border-b border-gray-600">
      <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4">
        <code class="block text-xs font-mono text-white flex flex-1">{{ code }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import { RenderlessToggle } from '../../components';

export default {
  components: {
    RenderlessToggle,
  },

  data() {
    return {
      code: `
<renderless-toggle>
  <div slot-scope="{ isOn, toggle }">
    <div class="w-1/2">
      <div class="bg-gray-400 rounded-t flex items-center">
        <span class="flex-1 p-4">Accordion</span>
        <span
          class="flex-none cursor-pointer mr-2 w-8 h-8 text-lg hover:bg-gray-500 leading-none rounded flex items-center justify-center"
          @click="toggle"
        >{{ isOn ? '▲' : '▼' }}</span>
      </div>
      <div
        v-if="isOn"
        class="border rounded-b p-4"
      >
        content
      </div>
    </div>
  </div>
</renderless-toggle>
  `.trim(),
    };
  },
};
</script>
