<template>
  <div class="flex">
    <div class="flex-1 w-1/2 p-4 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">
        Spruce Function
      </h3>
      <spruce-state :value="{ count: 1 }" root>
        <div slot-scope="{ state, update }">
          <div class="mb-4">
            <code>State: {{ state }}</code>
          </div>
          <spruce-function v-for="num in 3" :key="num + 1" :fn="() => update({ count: state.count * (num + 1) })">
            <div slot-scope="{ fn }">
              <button
                class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
                :class="{ 'mt-4': num !== 1 }"
                @click.stop="fn(num + 1)"
              >
                times {{ num + 1 }}
              </button>
              <span class="ml-4">
                <code>Fn: {{ fn.toString().replace('num', num) }}</code>
              </span>
            </div>
          </spruce-function>
        </div>
      </spruce-state>
    </div>
    <div class="flex-1 w-1/2 overflow-hidden border-b border-gray-600">
      <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4">
        <code class="block text-sm font-mono text-white flex flex-1">{{ code }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import { SpruceFunction, SpruceState } from '../../components';
import code from './Function.gist';

export default {
  components: { SpruceFunction, SpruceState },

  data() {
    return {
      code,
    };
  },
};
</script>
