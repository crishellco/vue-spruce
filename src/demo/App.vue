<script>
import { RenderlessEvent, RenderlessSearch, RenderlessSort, RenderlessState, RenderlessToggle } from '../components';

import { people, states } from './fixtures';

export default {
  components: { RenderlessEvent, RenderlessSearch, RenderlessSort, RenderlessState, RenderlessToggle },

  data() {
    return { people, states };
  },
};
</script>

<style></style>

<template>
  <div class="p-4">
    <h3 class="text-2xl font-bold">
      Renderless Event
    </h3>
    <div class="flex border-b pb-4">
      <renderless-state :value="{ count: 0 }">
        <renderless-event
          slot-scope="{ state, update }"
          event="mouseover"
          @mouseover="update({ count: state.count + 1 })"
        >
          <button class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-48">
            hover over me ({{ state.count }})
          </button>
        </renderless-event>
      </renderless-state>

      <renderless-toggle class="ml-4">
        <div slot-scope="{ isOn, off, toggle }">
          <renderless-event
            event="click"
            outside
            @click="off"
          >
            <button
              class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 relative w-48"
              :class="{ 'hover:bg-gray-500': !isOn }"
              @click="toggle"
            >
              Dropown Menu
              <div
                v-if="isOn"
                class="absolute w-full left-0 border shadow bg-white top-100 mt-4 rounded py-2"
                @click.stop
              >
                <a
                  v-for="num in 5"
                  :key="num"
                  href="#"
                  class="block px-4 py-2 text-left hover:bg-gray-100 bg-white text-blue-600 hover:text-blue-700 hover:underline"
                >Option {{ num }}</a>
              </div>
            </button>
          </renderless-event>
        </div>
      </renderless-toggle>
    </div>

    <h3 class="text-2xl font-bold mt-6">
      Renderless Search
    </h3>
    <renderless-state
      :value="{ term: '' }"
      class=" border-b pb-4"
    >
      <div slot-scope="{ state, update }">
        <input
          :value="state.term"
          type="text"
          class="border-2 bg-white py-2 px-4 w-1/2"
          placeholder="search"
          @input="update({ term: $event.target.value })"
        >
        <renderless-search
          :list="states"
          :term="state.term"
        >
          <div
            slot-scope="{ results }"
            class="h-64 w-full"
          >
            <div class="overflow-y-scroll h-full w-full my-4">
              <div
                v-for="(item, index) in results"
                :key="index"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </renderless-search>
      </div>
    </renderless-state>

    <h3 class="text-2xl font-bold mt-6">
      Renderless Sort
    </h3>

    <renderless-state
      :value="{ direction: 'asc', by: 'first_name' }"
      class=" border-b pb-4"
    >
      <div slot-scope="{ state, update }">
        <div class="flex items-center">
          <button
            class="flex-none border-2 border-transparent bg-gray-200 rounded py-2 px-4 hover:bg-gray-500"
            :class="{ 'bg-gray-400': state.direction === 'asc' }"
            @click="update({ direction: 'asc' })"
          >
            asc
          </button>
          <button
            class="flex-none border-2 border-transparent bg-gray-200 rounded py-2 px-4 mx-4 hover:bg-gray-500"
            :class="{ 'bg-gray-400': state.direction === 'desc' }"
            @click="update({ direction: 'desc' })"
          >
            desc
          </button>
          <renderless-toggle>
            <div slot-scope="{ isOn, off, toggle }">
              <renderless-event
                event="click"
                outside
                @click="off"
              >
                <button
                  class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 relative w-48"
                  :class="{ 'hover:bg-gray-500': !isOn }"
                  @click="toggle"
                >
                  {{ state.by }}
                  <div
                    v-if="isOn"
                    class="absolute w-full left-0 border shadow bg-white top-100 mt-4 rounded py-2"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-left hover:bg-gray-100 bg-white text-blue-600 hover:text-blue-700 hover:underline"
                      :class="{ 'bg-gray-200': state.by === 'id' }"
                      @click="update({ by: 'id' })"
                    >id</a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-left hover:bg-gray-100 bg-white text-blue-600 hover:text-blue-700 hover:underline"
                      :class="{ 'bg-gray-200': state.by === 'first_name' }"
                      @click="update({ by: 'first_name' })"
                    >first_name</a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-left hover:bg-gray-100 bg-white text-blue-600 hover:text-blue-700 hover:underline"
                      :class="{ 'bg-gray-200': state.by === 'last_name' }"
                      @click="update({ by: 'last_name' })"
                    >last_name</a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-left hover:bg-gray-100 bg-white text-blue-600 hover:text-blue-700 hover:underline"
                      :class="{ 'bg-gray-200': state.by === 'gender' }"
                      @click="update({ by: 'gender' })"
                    >gender</a>
                  </div>
                </button>
              </renderless-event>
            </div>
          </renderless-toggle>
          <!-- <select
            :value="state.by"
            class="border-2 border-transparent bg-gray-400 rounded py-2 px-4"
            @change="update({ by: $event.target.value })"
          >
            <option>id</option>
            <option>first_name</option>
            <option>last_name</option>
            <option>gender</option>
          </select> -->
        </div>
        <renderless-sort
          :list="people"
          :by="state.by"
          :direction="state.direction"
        >
          <div
            slot-scope="{ results }"
            class="h-64 w-full"
          >
            <div class="overflow-y-scroll h-full w-full my-4">
              <div
                v-for="(item, index) in results"
                :key="index"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </renderless-sort>
      </div>
    </renderless-state>

    <h3 class="text-2xl font-bold mt-6">
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
</template>
