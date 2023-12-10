import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/memories/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        christmas: resolve(__dirname, 'christmas/index.html'),
        'civil-war': resolve(__dirname, 'civil-war/index.html'),
        cube: resolve(__dirname, 'cube/index.html'),
        'extraordinary-attorney': resolve(__dirname, 'extraordinary-attorney/index.html'),
        'prison-break': resolve(__dirname, 'prison-break/index.html'),
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
});
