<template>
  <demo-section name="SpruceCling" :code="code" class="flex" expanded @toggled="handleToggled">
    <div ref="container" class="relative h-64">
      <div class="absolute" :style="wrapperStyle">
        <spruce-cling :placement="placement">
          <template #anchor="{update}">
            <spruce-watch :watch="{ buttonStyle }" @changed:buttonStyle="update">
              <button
                ref="anchor"
                :style="buttonStyle"
                class="border-2 border-transparent bg-gray-500 rounded py-2 px-4 w-64 shadow"
              >
                anchor: moving in {{ (remaining / 1000).toFixed(1) }}s...
              </button>
            </spruce-watch>
          </template>
          <template #clinger>
            <div class="w-full">
              <div class="p-4 shadow bg-gray-200 rounded">clinger: {{ placement }}</div>
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
  'auto-start',
  'auto-end',
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
];

const MOVE_INTERVAL = 5000;
const REMAINING_INTERVAL = 100;

export default {
  components: { DemoSection },

  data() {
    return {
      placement: 'bottom',
      buttonStyle: { width: '16rem' },
      remaining: MOVE_INTERVAL,
      moveButtonInterval: null,
      remainingUntilMoveInterval: null,
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
      this.moveButtonInterval = setInterval(this.moveButton, MOVE_INTERVAL);
      this.remainingUntilMoveInterval = setInterval(this.updateRemaining, REMAINING_INTERVAL);
    },

    stop() {
      clearInterval(this.moveButtonInterval);
      clearInterval(this.remainingUntilMoveInterval);
    },

    updateRemaining() {
      if (this.remaining === REMAINING_INTERVAL) {
        this.remaining = MOVE_INTERVAL;
      } else {
        this.remaining -= REMAINING_INTERVAL;
      }
    },

    async moveButton() {
      this.placement = PLACEMENTS[Math.floor(Math.random() * PLACEMENTS.length)];

      let { width, height } = this.$refs.container.getBoundingClientRect();

      width -= this.$refs.anchor.offsetWidth;
      height -= this.$refs.anchor.offsetHeight;

      this.wrapperStyle = {
        left: `${Math.floor(Math.random() * width) + 1}px`,
        top: `${Math.floor(Math.random() * height) + 1}px`,
      };

      this.buttonStyle = { width: `${Math.floor(Math.random() * 24) + 10}rem` };

      await this.$nextTick();
    },
  },
};
</script>
