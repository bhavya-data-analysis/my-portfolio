// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://my-portfolio-kvzu.vercel.app",
  vite: {
    plugins: [tailwindcss()]
  }
});
