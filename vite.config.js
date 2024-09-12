import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  // 새로고침 404
  server: {
    configureServer: (server) => {
      server.middlewares.use(
        history({
          disableDotRule: true,
          verbose: true
        })
      );
    }
  }
});
