import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  // =====【预览 senrytech 仓库启用】=====
  base: '/senrytech/',
  site: 'https://senrytech.github.io/senrytech/',
  // =====【本地开发 / 正式上线时删除上面两行】=====
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
