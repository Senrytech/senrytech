import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  // base: '/senrytech/', //本地开发永久注释
  site: 'https://senrytech.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['ar', 'de', 'en', 'es', 'fr', 'ru', 'zh-CN'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      i18n: true,
      trailingSlash: true,
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
