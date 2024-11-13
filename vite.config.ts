import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import pxtorem from 'postcss-pxtorem';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
      ],
      eslintrc: {
        enabled: true, // <-- this
      },
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 4098,
    host: '0.0.0.0'
  },
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 1920 / 10, // 设计稿宽度为1920
          propList: ['*'],
          selectorBlackList: [],
          // exclude: /\/node_modules\//i,
        })
      ],
    },
    preprocessorOptions: {
      scss: {
        // additionalData: from('./src/style/variables.scss')
      }
    }
  }
})
