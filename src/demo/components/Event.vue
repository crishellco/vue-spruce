<template>
  <demo-section name="SpruceEvent" :code="code" class="flex">
    <div class="flex items-center">
      <div>
        <spruce-state :value="{ count: 0 }">
          <template slot-scope="{ count, set }">
            <spruce-event event="mouseover" @mouseover="set({ count: count + 1 })">
              <button class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64">
                hover over me ({{ count }})
              </button>
            </spruce-event>
          </template>
        </spruce-state>
      </div>

      <div class="ml-4">
        <spruce-state :value="{ count: 0 }">
          <div slot-scope="{ count, set }">
            <spruce-event event="click" outside @click="set({ count: count + 1 })">
              <button
                class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
                @click.stop
              >
                click outside ({{ count }})
              </button>
            </spruce-event>
          </div>
        </spruce-state>
      </div>

      <div class="ml-4">
        <spruce-state :value="{ width: 0 }">
          <div slot-scope="{ width, set }">
            <spruce-event event="resize" immediate @resize="set({ width: $event.target.window.innerWidth })" />
            <button class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64">
              resize the window ({{ width }}px)
            </button>
          </div>
        </spruce-state>
      </div>
    </div>
  </demo-section>
</template>

<script>
import { DemoSection } from '../shared';
import code from './Event.gist';

export default {
  components: { DemoSection },

  data() {
    return { code };
  },
};
</script>
