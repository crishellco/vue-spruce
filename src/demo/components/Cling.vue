<template>
  <demo-section name="SpruceCling" :code="code">
    <h4 class="text-lg font-semibold mb-4">Hover over each button to see the placement of its clinger</h4>
    <div class="flex flex-col flex-1 justify-center">
      <div class="flex justify-center flex-wrap relative p-2">
        <spruce-cling v-for="placement in placements" :key="placement" :placement="placement" class="group m-2">
          <template #anchor="">
            <button class="border-2 border-transparent bg-gray-400 hover:bg-gray-500 rounded shadow w-48 h-16 text-sm">
              #anchor: {{ placement }}
            </button>
          </template>
          <template #clinger>
            <div class="p-2 shadow bg-blue-100 text-blue-600 rounded invisible group-hover:visible">
              #clinger: {{ placement }}
            </div>
          </template>
        </spruce-cling>
      </div>
    </div>
  </demo-section>
</template>

<script>
import { DemoSection } from '../shared';
import code from './Cling.gist';

const PLACEMENTS = [
  'auto',
  'auto-end',
  'auto-start',
  'bottom',
  'bottom-end',
  'bottom-start',
  'left',
  'left-end',
  'left-start',
  'right',
  'right-end',
  'right-start',
  'top',
  'top-end',
  'top-start',
];

export default {
  components: { DemoSection },

  data() {
    return { code };
  },

  computed: {
    placements() {
      return PLACEMENTS;
    },
  },
};
</script>
