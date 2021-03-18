<template>
  <div class="flex border-b pb-4">
    <div class="flex-1 flex w-1/2">
      <div>
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
      </div>

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
    <div class="flex-1 w-1/2">
      <vue-code-highlight language="markup">
        <pre>{{ code }}</pre>
      </vue-code-highlight>
    </div>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';
import { RenderlessEvent, RenderlessState, RenderlessToggle } from '../../components';

export default {
  components: { VueCodeHighlight, RenderlessEvent, RenderlessState, RenderlessToggle },

  data() {
    return {
      code: `
<div>
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
</div>

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
      `,
    };
  },
};
</script>
