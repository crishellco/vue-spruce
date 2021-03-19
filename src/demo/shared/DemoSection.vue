<template>
  <spruce-toggle :value="expanded">
    <section slot-scope="{ isOn, toggle }" class="flex">
      <div class="flex-1 p-4 w-1/2 border-b border-gray-400">
        <div class="flex items-center justify-between">
          <h3 class="text-2xl font-bold">{{ name }}</h3>
          <span
            class="flex-none cursor-pointer mr-2 w-8 h-8 text-xl font-bold bg-gray-300 hover:bg-gray-500 leading-none rounded flex items-center justify-center"
            @click="toggle"
            >{{ isOn ? '-' : '+' }}</span
          >
        </div>
        <div v-if="isOn" class="mt-4">
          <slot />
        </div>
      </div>
      <div class="flex-1 w-1/2 overflow-hidden border-b border-gray-600">
        <pre class="whitespace-pre flex-1 flex flex-col w-full overflow-auto bg-gray-700 p-4 h-full">
          <code v-if="isOn" class="block text-sm font-mono text-white flex flex-1 select-all">{{ code }}</code>
        </pre>
      </div>
    </section>
  </spruce-toggle>
</template>

<script>
import { SpruceToggle } from '../../package';

export default {
  components: { SpruceToggle },

  props: {
    code: {
      required: true,
      type: String,
    },
    expanded: {
      default: false,
      type: Boolean,
    },
    name: {
      required: true,
      type: String,
    },
  },
};
</script>
