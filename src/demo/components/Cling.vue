<template>
  <demo-section name="SpruceCling" :code="code" class="flex" expanded @toggled="handleToggled">
    <div ref="container" class="relative h-64">
      <spruce-toggle>
        <div slot-scope="{ isOn, toggle }" class="absolute" :style="wrapperStyle">
          <spruce-cling placement="bottom">
            <template #anchor="{update}">
              <spruce-watch :watch="{ buttonStyle }" @changed:buttonStyle="update">
                <button
                  ref="anchor"
                  :style="buttonStyle"
                  class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64 flex items-center justify-between"
                  @click="toggle"
                >
                  click me
                  <span class="text-lg leading-none">{{ isOn ? '▲' : '▼' }}</span>
                </button>
              </spruce-watch>
            </template>
            <template #clinger>
              <div class="w-full">
                <div v-if="isOn" class="p-4 shadow bg-white ">contents!</div>
              </div>
            </template>
          </spruce-cling>
        </div>
      </spruce-toggle>
    </div>
  </demo-section>
</template>

<script>
import { SpruceCling, SpruceToggle, SpruceWatch } from '../../package/components';
import { DemoSection } from '../shared';
import code from './Cling.gist';

export default {
  components: { DemoSection, SpruceCling, SpruceToggle, SpruceWatch },

  data() {
    return {
      buttonStyle: {
        width: '16rem',
      },
      interval: null,
      wrapperStyle: {
        left: '0px',
        top: '0px',
      },
      code,
    };
  },

  async mounted() {
    await this.$nextTick();
    this.start();
  },

  beforeDestroy() {
    this.stop();
  },

  methods: {
    handleToggled(isOn) {
      this.stop();

      return isOn && this.start();
    },

    start() {
      this.interval = setInterval(this.moveButton, 5000);
    },

    stop() {
      clearInterval(this.interval);
    },

    async moveButton() {
      let { width, height } = this.$refs.container.getBoundingClientRect();

      width -= this.$refs.anchor.offsetWidth;
      height -= this.$refs.anchor.offsetHeight;

      this.wrapperStyle = {
        left: `${Math.floor(Math.random() * width) + 1}px`,
        top: `${Math.floor(Math.random() * height) + 1}px`,
      };

      this.buttonStyle = {
        width: `${Math.floor(Math.random() * 24) + 10}rem`,
      };

      await this.$nextTick();
    },
  },
};
</script>
