import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import vercel from "@astrojs/vercel";
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  output: "server",
  adapter: vercel(),
  devToolbar: { enabled: false }, 
});
