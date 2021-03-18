<template>
  <div class="flex">
    <div class="flex-1 p-4 w-1/2 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">
        Renderless Sort
      </h3>
      <div>
        <renderless-state :value="{ direction: 'asc', by: 'first_name' }">
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
import { RenderlessEvent, RenderlessSort, RenderlessState, RenderlessToggle } from '../../components';
import { people } from '../fixtures';

export default {
  components: {
    RenderlessSort,
    RenderlessState,
    RenderlessToggle,
    RenderlessEvent,
  },

  data() {
    return {
      code: `
<renderless-state :value="{ direction: 'asc', by: 'first_name' }">
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
    `.trim(),
      people,
    };
  },
};
</script>
