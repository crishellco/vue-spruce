import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/package/index.js'),
      fileName: (format) => `vue-spruce.${format}.js`,
      name: 'VueSpruce',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: { vue: 'vue' },
      },
    },
    sourcemap: true,
  },
  plugins: [vue()],
});
