<template>
  <demo-section name="SpruceEvent" :code="code" class="flex">
    <div class="flex items-center">
      <div>
        <spruce-state :value="{ count: 0 }">
          <template slot-scope="{ state, update }">
            <spruce-event event="mouseover" @mouseover="update({ count: state.count + 1 })">
              <button class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64">
                hover over me ({{ state.count }})
              </button>
            </spruce-event>
          </template>
        </spruce-state>
      </div>

      <div class="ml-4">
        <spruce-state :value="{ count: 0 }">
          <div slot-scope="{ state, update }">
            <spruce-event event="click" outside @click="update({ count: state.count + 1 })">
              <button
                class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
                @click.stop
              >
                click outside ({{ state.count }})
              </button>
            </spruce-event>
          </div>
        </spruce-state>
      </div>

      <div class="ml-4">
        <spruce-state :value="{ width: 0 }">
          <div slot-scope="{ state, update }">
            <spruce-event event="resize" @resize="update({ width: $event.target.window.innerWidth })" />
            <button class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64">
              resize the window ({{ state.width }})
            </button>
          </div>
        </spruce-state>
      </div>
    </div>
  </demo-section>
</template>

<script>
import { SpruceEvent, SpruceState } from '../../package/components';
import { DemoSection } from '../shared';
import code from './Event.gist';

export default {
  components: { DemoSection, SpruceEvent, SpruceState },

  data() {
    return {
      code,
    };
  },
};
</script>
