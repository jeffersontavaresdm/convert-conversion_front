import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [
    react(),
  ],

  server: {
    port: isProduction ? 80 : 3000,
    open: true
  },
})
;