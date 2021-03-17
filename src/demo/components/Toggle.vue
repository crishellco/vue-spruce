<template>
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
</template>

<script>
import { RenderlessToggle } from '../../components';

export default {
  components: {
    RenderlessToggle,
  },
};
</script>
