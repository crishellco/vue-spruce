<template>
  <div class="flex">
    <div class="flex-1 w-1/2 p-4 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">
        Renderless Event
      </h3>
      <div class="flex">
        <div>
          <renderless-state :value="{ count: 0 }">
            <template
              slot-scope="{ state, update }"
            >
              <renderless-event
                event="mouseover"
                @mouseover="update({ count: state.count + 1 })"
              >
                <button class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64">
                  hover over me ({{ state.count }})
                </button>
              </renderless-event>
            </template>
          </renderless-state>
        </div>

        <div class="ml-4">
          <renderless-state :value="{ count: 0 }">
            <div slot-scope="{ state, update }">
              <renderless-event
                event="click"
                outside
                @click="update({ count: state.count + 1 })"
              >
                <button
                  class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
                  @click.stop
                >
                  click outside ({{ state.count }})
                </button>
              </renderless-event>
            </div>
          </renderless-state>
        </div>
      </div>
    </div>
    <div class="flex-1 w-1/2 overflow-hidden border-b border-gray-600">
      <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4">
        <code class="block text-xs font-mono text-white flex flex-1">{{ code }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import { RenderlessEvent, RenderlessState } from '../../components';

export default {
  components: { RenderlessEvent, RenderlessState },

  data() {
    return {
      code: `
<div class="flex">
  <div>
    <renderless-state :value="{ count: 0 }">
      <template
        slot-scope="{ state, update }"
      >
        <renderless-event
          event="mouseover"
          @mouseover="update({ count: state.count + 1 })"
        >
          <button class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64">
            hover over me ({{ state.count }})
          </button>
        </renderless-event>
      </template>
    </renderless-state>
  </div>

  <div class="ml-4">
    <renderless-state :value="{ count: 0 }">
      <div slot-scope="{ state, update }">
        <renderless-event
          event="click"
          outside
          @click="update({ count: state.count + 1 })"
        >
          <button
            class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
            @click.stop
          >
            click outside ({{ state.count }})
          </button>
        </renderless-event>
      </div>
    </renderless-state>
  </div>
</div>
      `.trim(),
    };
  },
};
</script>
