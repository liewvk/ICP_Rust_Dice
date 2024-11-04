import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures output is in the dist directory
  },
  resolve: {
    alias: {
      fs: false,
      path: false,
    },
  },
  base: '/', // Specify the base path for your app; adjust as needed (e.g., '/subpath/' for subdirectories)
});









