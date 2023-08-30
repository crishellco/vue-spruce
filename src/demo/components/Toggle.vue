<template>
  <demo-section name="SpruceToggle" :code="code">
    <spruce-toggle v-slot="{ isOn, toggle }">
      <div>
        <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4 rounded mb-4">
          <code class="block text-sm font-mono text-white flex flex-1">{{JSON.stringify({isOn}, null, 2)}}</code>
        </pre>
        <div class="flex flex-col">
          <div class="bg-gray-400 rounded-t flex items-center">
            <span class="flex-1 p-4">Accordion</span>
            <span
              class="flex-none cursor-pointer mr-2 w-8 h-8 text-lg hover:bg-gray-500 leading-none rounded flex items-center justify-center"
              @click="toggle"
              >{{ isOn ? '▲' : '▼' }}</span
            >
          </div>
          <spruce-fetch v-slot="{ data }" url="https://baconipsum.com/api/?type=all-meat&paras=1" immediate>
            <div v-if="isOn" class="border rounded-b p-4">{{ data[0] }}</div>
          </spruce-fetch>
        </div>
      </div>
    </spruce-toggle>
  </demo-section>
</template>

<script>
import { SpruceFetch, SpruceToggle } from '../../package';
import { DemoSection } from '../shared';
import code from './Toggle.gist';

export default {
  components: { DemoSection, SpruceFetch, SpruceToggle },

  data() {
    return { code };
  },
};
</script>
