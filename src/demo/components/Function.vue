<template>
  <demo-section name="SpruceFunction" :code="code">
    <spruce-state :value="{ count: 1 }">
      <div slot-scope="{ count, set }">
        <div class="mb-4">
          <div class="font-semibold">State:</div>
          <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4 rounded">
               <code class="block text-sm font-mono text-white flex flex-1">{{ count }}</code>
            </pre>
        </div>
        <spruce-function v-for="num in 3" :key="num + 1" :fn="() => set({ count: count * (num + 1) })">
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
  </demo-section>
</template>

<script>
import { DemoSection } from '../shared';
import code from './Function.gist';

export default {
  components: { DemoSection },

  data() {
    return { code };
  },
};
</script>
