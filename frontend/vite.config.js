import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 resolve: {
    alias: {
      // Add aliases for your project directories if needed
      '@': resolve(__dirname, 'src'),
    },
 },
 server: {
    // Enable HMR (Hot Module Replacement) for faster development
    hmr: {
      overlay: false,
    },
 },
 build: {
    // Specify the output directory for the build
    outDir: 'dist',
    // Enable minification and other optimizations for production builds
    minify: 'terser',
    // Specify the target environment for the build
    target: 'es2015',
 },
})
