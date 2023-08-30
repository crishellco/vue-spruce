<template>
  <demo-section name="SpruceAtLeast" :code="code" expanded>
    <h4 class="text-lg font-semibold mb-4">The photo must show for at least 5000ms before hiding</h4>
    <spruce-toggle v-slot="{ isOn, toggle }">
      <spruce-at-least v-slot="{ disabled, show }" :ms="5000" :show="isOn">
        <img v-show="show" src="https://placebeard.it/g/200/300" alt="" style="width: 200px" />

        <button
          class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
          :class="{ 'opacity-50 cursor-not-allowed': disabled }"
          :disabled="disabled"
          @click="toggle"
        >
          {{ disabled ? 'waiting...' : show ? 'hide' : 'show' }}
        </button>
      </spruce-at-least>
    </spruce-toggle>
  </demo-section>
</template>

<script>
import { SpruceAtLeast, SpruceToggle } from '../../package';
import { DemoSection } from '../shared';
import code from './AtLeast.gist';

export default {
  components: { DemoSection, SpruceAtLeast, SpruceToggle },

  data() {
    return { code };
  },
};
</script>
