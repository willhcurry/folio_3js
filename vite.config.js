import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default {
  root: 'src/',
  publicDir: '../static/', // This will copy your static directory content to dist
  base: '/folio_3js/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
        },
      },
    },
    // Ensure WASM files are handled correctly
    assetsInlineLimit: 0, // Prevents inlining of WASM files
  },
  plugins: [
    wasm(),
    topLevelAwait()
  ],
  optimizeDeps: {
    exclude: ['@dimforge/rapier3d'],
  },
  server: {
    host: true,
    open: true
  },
  resolve: {
    alias: {
      '@': '/src',  // This allows you to use @ to reference your src directory
    },
  }
}