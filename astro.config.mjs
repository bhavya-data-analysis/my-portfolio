// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://my-portfolio01-phi.vercel.app",
  base: "/",
  vite: {
    plugins: [tailwindcss()]
  }
});
