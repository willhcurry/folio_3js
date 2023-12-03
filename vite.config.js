import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default {
  base: '/folio_3js/', // Update with the correct repository name
  build: {
    outDir: 'dist',
    assetsDir: '.',
    assetsInlineLimit: 0,
    sourcemap: true,
    rollupOptions: {
      input: 'src/index.js',
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  plugins: [
    wasm(),
    topLevelAwait(),
  ],
};
