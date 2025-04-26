import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/content-ai/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
