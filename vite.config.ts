import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'arrayDevice',
      fileName: (format) => `array-device.${format}.js`
    }
  }
});
