<template>
  <div class="flex">
    <div class="flex-1 w-1/2 p-4 border-b border-gray-400">
      <h3 class="text-2xl font-bold mb-4">
        Renderless Function
      </h3>
      <renderless-state
        :value="{ count: 1 }"
      >
        <div
          slot-scope="{ state, update }"
        >
          <div class="mb-4">
            <code>State: {{ state }}</code>
          </div>
          <renderless-function
            v-for="num in 4"
            :key="num + 1"
            :fn="() => update({count: state.count * (num + 1)})"
          >
            <div slot-scope="{ fn }">
              <button
                class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
                :class="{'mt-4': num !== 1}"
                @click.stop="fn(num + 1)"
              >
                times {{ num + 1 }}
              </button>
              <span class="ml-4">
                <code>Fn: {{ fn.toString().replace('num', num) }}</code>
              </span>
            </div>
          </renderless-function>
        </div>
      </renderless-state>
    </div>
    <div class="flex-1 w-1/2 overflow-hidden border-b border-gray-600">
      <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4">
        <code class="block text-xs font-mono text-white flex flex-1">{{ code }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import { RenderlessFunction, RenderlessState } from '../../components';

export default {
  components: { RenderlessFunction, RenderlessState },

  data() {
    return {
      code: `
<renderless-state
  :value="{ count: 1 }"
>
  <div
    slot-scope="{ state, update }"
  >
    <div class="mb-4">
      <code>State: {{ state }}</code>
    </div>
    <renderless-function
      v-for="num in 4"
      :key="num + 1"
      :fn="() => update({count: state.count * (num + 1)})"
    >
      <div slot-scope="{ fn }">
        <button
          class="border-2 border-transparent bg-gray-400 rounded py-2 px-4 hover:bg-gray-500 w-64"
          :class="{'mt-4': num !== 1}"
          @click.stop="fn(num + 1)"
        >
          times {{ num + 1 }}
        </button>
        <span class="ml-4">
          <code>Fn: {{ fn.toString().replace('num', num) }}</code>
        </span>
      </div>
    </renderless-function>
  </div>
</renderless-state>
      `.trim(),
    };
  },
};
</script>
