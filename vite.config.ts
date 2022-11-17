import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';
// import checker from 'vite-plugin-checker'
// import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
  plugins: [
    react()
    // visualizer(),
    // checker({ typescript: true }),
    // createStyleImportPlugin({
    //   resolves:[
    //     AntdResolve()]
    // }),
  ],
  server: {
    open: true
  },
  build: {
    minify: false
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      },
      scss: {
        javascriptEnabled: true
      }
    }
  },
  optimizeDeps: {
    // exclude: ['lodash-es'],
    force: true
  }
});
