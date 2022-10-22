import path from 'path'

import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import TsconfigPaths from 'vite-tsconfig-paths'

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
  plugins: [Vue(), VueTypeImports(), TsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: { additionalData: '@import "@/styles/_utils";' }
    }
  }
})
