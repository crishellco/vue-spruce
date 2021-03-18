<template>
  <div class="flex">
    <div class="flex-1 w-1/2 p-4 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">
        SpruceCrud
      </h3>
      <spruce-crud v-for="{ url, method } in urls" :key="url" :url="url" :method="method" root>
        <div slot-scope="{ loading, data, error, fetch }" class="py-4 border-t">
          <div class="mb-4 flex justify-between">
            <div
              class="rounded-l py-2 px-4 uppercase font-mono leading-none flex items-center w-16 text-sm justify-center"
              :class="{ 'bg-red-500': !loading && error, 'bg-blue-500': !loading && !error, 'bg-green-500': loading }"
            >
              {{ method }}
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
      </spruce-crud>
    </div>
    <div class="flex-1 w-1/2 overflow-hidden border-b border-gray-600">
      <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4 h-full">
         <code class="block text-sm font-mono text-white flex flex-1 select-all">{{ code }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import { SpruceCrud } from '../../package/components';
import code from './Crud.gist';

export default {
  components: { SpruceCrud },

  data() {
    return {
      urls: [
        {
          url: 'http://slowwly.robertomurray.co.uk/delay/1800/url/https://jsonplaceholder.typicode.com/posts/1',
          method: 'get',
        },
        {
          url: 'https://6053559e45e4b30017291628.mockapi.io/users/1',
          method: 'put',
        },
        {
          url: 'https://6053559e45e4b30017291628.mockapi.io/users/12321',
          method: 'get',
        },
      ],
      code,
    };
  },
};
</script>
