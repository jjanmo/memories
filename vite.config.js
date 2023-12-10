import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/memories/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        christmas: resolve(__dirname, 'src/pages/christmas/index.html'),
        'civil-war': resolve(__dirname, 'src/pages/civil-war/index.html'),
        cube: resolve(__dirname, 'src/pages/cube/index.html'),
        'extraordinary-attorney': resolve(__dirname, 'src/pages/extraordinary-attorney/index.html'),
        'prison-break': resolve(__dirname, 'src/pages/prison-break/index.html'),
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
});
