<template>
  <div class="flex">
    <div class="flex-1 w-1/2">
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
    <div class="flex-1 ml-4 w-1/2">
      <vue-code-highlight language="markup">
        <pre>{{ code }}</pre>
      </vue-code-highlight>
    </div>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';
import { RenderlessToggle } from '../../components';

export default {
  components: {
    RenderlessToggle,
    VueCodeHighlight,
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
  `,
    };
  },
};
</script>
