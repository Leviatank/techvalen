import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/techvalen/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  publicDir: 'public', // ✅ aggiungi questa riga
  build: {
    outDir: 'dist', // ✅ assicura che la build finisca in dist
  },
});
