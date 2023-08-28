<template>
  <demo-section name="SprucePaginate" :code="code">
    <spruce-paginate
      v-slot="{ page, next, prev, pageNum, totalPages, isFirst, isLast, rangeStart, rangeEnd, first, last, links, go }"
      :size="25"
      :list="simplePeople"
    >
      <div class="w-full overflow-auto text-xs">
        <table class="w-full">
          <thead>
            <tr class="text-bold text-left">
              <th class="w-1/2">first_name</th>
              <th class="w-1/2">last_name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="({ first_name, last_name }, index) in page" :key="index">
              <td>{{ first_name }}</td>
              <td>{{ last_name }}</td>
            </tr>
          </tbody>
        </table>
        <div class="mt-4 flex items-center">
          <div class="flex-1" />
          <div class="flex items-center flex-none">
            <button
              class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500"
              :class="{ 'opacity-50 cursor-not-allowed': isFirst }"
              @click="first"
            >
              &lt;&lt;
            </button>
            <button
              class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 ml-2"
              :class="{ 'opacity-50 cursor-not-allowed': isFirst }"
              @click="prev"
            >
              &lt;
            </button>
            <div class="px-4 flex flex-col items-center">
              <div>Page: {{ pageNum }}/{{ totalPages }}</div>
              <div>Showing: {{ rangeStart }} - {{ rangeEnd }} of {{ simplePeople.length }}</div>
              <div>
                <span v-for="(link, index) in links" :key="index">
                  <button
                    v-if="Number.isInteger(link)"
                    class="mx-2 text-blue-500 hover:text-blue-600 hover:underline outline-none active:outline-none focus:outline-none"
                    :class="{ underline: pageNum === link }"
                    @click="go(link)"
                  >
                    {{ link }}
                  </button>
                  <span v-else>{{ link }}</span>
                </span>
              </div>
            </div>
            <button
              class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 mr-2"
              :class="{ 'opacity-50 cursor-not-allowed': isLast }"
              @click="next"
            >
              &gt;
            </button>
            <button
              class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500"
              :class="{ 'opacity-50 cursor-not-allowed': isLast }"
              @click="last"
            >
              &gt;&gt;
            </button>
          </div>
          <div class="flex-1 flex justify-end">
            <button
              class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500"
              @click="simplePeople = simplePeople.sort(() => Math.random() - 0.5)"
            >
              shuffle
            </button>
          </div>
        </div>
      </div>
    </spruce-paginate></demo-section
  >
</template>

<script>
import { states, simplePeople } from '../fixtures';
import { DemoSection } from '../shared';
import code from './Paginate.gist';

export default {
  components: { DemoSection },

  data() {
    return {
      code,
      states,
      simplePeople,
    };
  },
};
</script>
