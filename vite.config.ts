import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  build: {
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          pixi: ['pixi.js'],
          vendor: ['country-flag-icons']
        }
      }
    }
  }
})