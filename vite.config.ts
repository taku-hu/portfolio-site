import path from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: 3000
  },
  // NOTE: vite-tsconfig-pathsだけではcssのaliasが作成されない
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: { additionalData: '@import "@/styles/_utils";' }
    }
  }
})
