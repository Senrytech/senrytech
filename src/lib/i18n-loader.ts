import type { NavTranslation } from './nav-base';

// 导航菜单加载
export async function getNavMenu(locale: string): Promise<NavTranslation> {
  const modules: Record<string, () => Promise<{ navMenu: NavTranslation }>> = {
    en: () => import('../i18n/navigation/en'),
  };
  const res = await modules[locale]();
  return res.navMenu;
}

// 产品元数据加载
export async function getProductMeta(locale: string, category: string) {
  try {
    const data = await import(`../i18n/pages/product-${category}/${locale}.json`);
    return data.default;
  } catch (err) {
    return [];
  }
}
