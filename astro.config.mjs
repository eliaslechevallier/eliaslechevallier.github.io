import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// This repo is a GitHub *user* page (QuiPau.github.io), so it is served
// from the domain root — no "base" path needed (unlike project pages
// such as QuiPau.github.io/some-repo, which would need base: '/some-repo').
export default defineConfig({
  site: 'https://QuiPau.github.io',
  integrations: [tailwind()],
});
