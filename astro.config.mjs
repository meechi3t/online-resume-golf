import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` to your production URL when you deploy (used for canonical tags).
export default defineConfig({
  site: 'https://demetrius.tip10.tech',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
