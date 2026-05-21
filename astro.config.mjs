import { defineConfig, passthroughImageService } from 'astro/config';
import vue from "@astrojs/vue";

export default defineConfig({
  site: 'https://extreme-ways.ru',
  integrations: [
    vue()
  ],
  devToolbar: {
    enabled: false
  },
  image: {
    service: passthroughImageService(),
    domains: ["leonardo.osnova.io"]
  }
})