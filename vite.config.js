import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        christmas: resolve(__dirname, 'src/page/christmas/index.html'),
        'civil-war': resolve(__dirname, 'src/page/civil-war/index.html'),
        cube: resolve(__dirname, 'src/page/cube/index.html'),
        'extraordinary-attorney': resolve(__dirname, 'src/page/extraordinary-attorney/index.html'),
        'prison-break': resolve(__dirname, 'src/page/prison-break/index.html'),
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
});
