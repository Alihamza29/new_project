import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/malaysian-assignments-frontend/', // Use your GitHub repo name here, trailing slash important
  plugins: [react({
    fastRefresh: true,
  })],
});
