// If your pages folder really is at src/pages, explicitly set:

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  srcDir: 'src',
  integrations: [tailwind()],
});
