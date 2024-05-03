import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      base: process.env.NODE_ENV === 'production' ? '/MelinSylvie_13_21072022/' : '/', // added for GitHub Pages
      build: {
        outDir: 'build',
      },
      plugins: [react()],
    };
  });