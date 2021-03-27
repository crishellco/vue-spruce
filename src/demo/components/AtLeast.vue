<template>
  <demo-section name="SpruceAtLeast" :code="code" class="flex" expanded>
    <h4 class="text-lg font-semibold mb-4">The photo must show for at least 5000ms before hiding</h4>
    <spruce-toggle>
      <div slot-scope="{ isOn, toggle }">
        <spruce-at-least :ms="5000" :show="isOn">
          <div slot-scope="{ disabled, show }">
            <fade-transition :duration="500">
              <img v-if="show" src="http://www.fillmurray.com/g/200/300" alt="" />
            </fade-transition>

            <button
              class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
              :class="{ 'opacity-50 cursor-not-allowed': disabled }"
              :disabled="disabled"
              @click="toggle"
            >
              {{ disabled ? 'waiting...' : show ? 'hide' : 'show' }}
            </button>
          </div>
        </spruce-at-least>
      </div>
    </spruce-toggle>
  </demo-section>
</template>

<script>
import { FadeTransition } from 'vue2-transitions';

import { DemoSection } from '../shared';
import code from './Cling.gist';

export default {
  components: { DemoSection, FadeTransition },

  data() {
    return { code };
  },
};
</script>
