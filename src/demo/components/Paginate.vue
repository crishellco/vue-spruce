<template>
  <div class="flex">
    <div class="flex-1 p-4 w-1/2 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">
        Spruce Paginate
      </h3>
      <div>
        <spruce-paginate
          :size="12"
          :list="states"
        >
          <div
            slot-scope="{ page, next, prev, pageNum, totalPages, isFirst, isLast, rangeStart, rangeEnd }"
            class="w-full overflow-auto text-xs"
            style="height: 35rem"
          >
            <table class="w-full">
              <thead>
                <tr class="text-bold text-left">
                  <th class="w-1/2">
                    name
                  </th>
                  <th class="w-1/2">
                    abbreviation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="({name, abbreviation}, index) in page"
                  :key="index"
                >
                  <td>{{ name }}</td>
                  <td>{{ abbreviation }}</td>
                </tr>
              </tbody>
            </table>
            <div class="mt-4 flex  items-center">
              <div class="flex-1" />
              <div class="flex items-center flex-none">
                <button
                  class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-24"
                  :class="{'opacity-50 cursor-not-allowed': isFirst}"
                  @click="prev"
                >
                  prev
                </button>
                <div class="px-4 flex flex-col items-center">
                  <div>Page: {{ pageNum }}/{{ totalPages }}</div>
                  <div>Showing: {{ rangeStart }} - {{ rangeEnd }} of {{ states.length }}</div>
                </div>
                <button
                  class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-24"
                  :class="{'opacity-50 cursor-not-allowed': isLast}"
                  @click="next"
                >
                  next
                </button>
              </div>
              <div class="flex-1 flex justify-end">
                <button
                  class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-24"
                  @click="states = states.sort(() => Math.random() - 0.5)"
                >
                  shuffle
                </button>
              </div>
            </div>
          </div>
        </spruce-paginate>
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
import { SprucePaginate } from '../../components';
import { states } from '../fixtures';

export default {
  components: { SprucePaginate },

  data() {
    return {
      code: `
<spruce-paginate
  :size="12"
  :list="states"
>
  <div
    slot-scope="{ page, next, prev, pageNum, totalPages, isFirst, isLast, rangeStart, rangeEnd }"
    class="w-full overflow-auto text-xs"
    style="height: 35rem"
  >
    <table class="w-full">
      <thead>
        <tr class="text-bold text-left">
          <th class="w-1/2">
            name
          </th>
          <th class="w-1/2">
            abbreviation
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="({name, abbreviation}, index) in page"
          :key="index"
        >
          <td>{{ name }}</td>
          <td>{{ abbreviation }}</td>
        </tr>
      </tbody>
    </table>
    <div class="mt-4 flex  items-center">
      <div class="flex-1" />
      <div class="flex items-center flex-none">
        <button
          class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-24"
          :class="{'opacity-50 cursor-not-allowed': isFirst}"
          @click="prev"
        >
          prev
        </button>
        <div class="px-4 flex flex-col items-center">
          <div>Page: {{ pageNum }}/{{ totalPages }}</div>
          <div>Showing: {{ rangeStart }} - {{ rangeEnd }} of {{ states.length }}</div>
        </div>
        <button
          class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-24"
          :class="{'opacity-50 cursor-not-allowed': isLast}"
          @click="next"
        >
          next
        </button>
      </div>
      <div class="flex-1 flex justify-end">
        <button
          class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-24"
          @click="states = states.sort(() => Math.random() - 0.5)"
        >
          shuffle
        </button>
      </div>
    </div>
  </div>
</spruce-paginate>
      `.trim(),
      states,
    };
  },
};
</script>
