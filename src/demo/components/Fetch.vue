<template>
  <demo-section name="SpruceFetch" :code="code">
    <spruce-fetch v-for="url in urls" :key="url" v-slot="{ loading, data, error, fetch }" :url="url">
      <div class="py-4 border-t">
        <div class="mb-4 flex justify-between">
          <div
            class="rounded-l py-2 px-4 uppercase font-mono leading-none flex items-center w-16 text-sm justify-center"
            :class="{ 'bg-red-500': !loading && error, 'bg-blue-500': !loading && !error, 'bg-green-500': loading }"
          >
            GET
          </div>
          <div
            class="font-semibold font-mono text-sm flex-1 border-b-2 border-t-2 border-gray-400 flex items-center px-2"
          >
            {{ url }}
          </div>
          <div class="flex flex-none">
            <button
              class="border-2 border-transparent bg-gray-400 rounded-r py-2 px-4 hover:bg-gray-500 focus:outline-none w-16"
              :class="{ 'opacity-50 cursor-not-allowed': loading }"
              @click="fetch"
            >
              {{ loading ? '⧗' : '⟳' }}
            </button>
          </div>
        </div>
        <div v-if="loading">loading...</div>
        <div v-else>
          <div class="font-semibold">Data:</div>
          <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4 rounded">
            <code class="block text-sm font-mono text-white flex flex-1">{{ error ?  `${error.status} ${error.data}` : data }}</code>
          </pre>
        </div>
      </div>
    </spruce-fetch>
  </demo-section>
</template>

<script>
import { SpruceFetch } from '../../package';
import { DemoSection } from '../shared';
import code from './Fetch.gist';

export default {
  components: { DemoSection, SpruceFetch },

  data() {
    return {
      urls: ['https://dog-api.kinduff.com/api/facts', 'http://calapi.inadiutorium.cz/api/v0/en/calendars/default'],
      code,
    };
  },
};
</script>
