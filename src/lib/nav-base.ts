export const BASE_GEO_REGIONS = ['usa', 'canada', 'uk', 'germany'];

export interface NavSubLabel {
  label: string;
}

export interface NavMainLabel {
  label: string;
  subLabels: NavSubLabel[];
}

export type NavTranslation = NavMainLabel[];

export interface NavPageMeta {
  targetId: string;
  seoTitle: string;
  geoRegions: string[];
  geoKeywords: string[];
  path: string;
}

export const rawNavMeta: NavPageMeta[] = [
  {
    targetId: 'service',
    seoTitle: 'Worldwide remote door-to-door installation and lifelong equipment maintenance for North American & European laser machine clients',
    geoRegions: [...BASE_GEO_REGIONS],
    geoKeywords: ['usa laser machine after sales service', 'canada fiber laser remote installation support', 'europe industrial laser lifetime maintenance'],
    path: 'contact-us/service',
  },
  {
    targetId: 'faq',
    seoTitle: 'FAQ center for laser machine purchase and daily operation for North American & European metal workshop owners',
    geoRegions: [...BASE_GEO_REGIONS],
    geoKeywords: ['usa fiber laser machine faq', 'canada metal cutting equipment operation questions', 'europe laser machine purchase troubleshooting'],
    path: 'contact-us/faq',
  },
];

export type ProductCategoryKey = 'sheet' | 'tube' | 'st' | 'weld' | 'clean' | 'mark' | 'auxiliary' | 'form' | 'multi';

export interface ProductCategoryItem {
  category: ProductCategoryKey;
  navLabel: string;
  routeDir: string;
}

export const PRODUCT_CATEGORY_MAP: ProductCategoryItem[] = [
  {
    category: 'sheet',
    navLabel: 'Fiber Sheet Metal Laser Cutters',
    routeDir: 'laser-processing-equipment/fiber-laser-cutters/sheet',
  },
  {
    category: 'tube',
    navLabel: 'Fiber Tube Laser Cutters',
    routeDir: 'laser-processing-equipment/fiber-laser-cutters/tube',
  },
  {
    category: 'st',
    navLabel: 'Fiber Sheet & Tube Combo Cutters',
    routeDir: 'laser-processing-equipment/fiber-laser-cutters/combo',
  },
  {
    category: 'weld',
    navLabel: 'Fiber Laser Welding Machines',
    routeDir: 'laser-processing-equipment/laser-welder',
  },
  {
    category: 'clean',
    navLabel: 'Industrial Laser Cleaning Machines',
    routeDir: 'laser-processing-equipment/laser-cleaner',
  },
  {
    category: 'mark',
    navLabel: 'Fiber Laser Marking & Engraving Machines',
    routeDir: 'laser-processing-equipment/laser-marker',
  },
  {
    category: 'auxiliary',
    navLabel: 'Laser Auxiliary Equipment',
    routeDir: 'complete-production-line/laser-auxiliary-equipment',
  },
  {
    category: 'form',
    navLabel: 'Metal Forming Machines',
    routeDir: 'complete-production-line/metal-forming-machine',
  },
  {
    category: 'multi',
    navLabel: 'Multi-Material Laser Cutting Equipment',
    routeDir: 'complete-production-line/multi-material-cutting',
  },
];

export function getCategoryInfo(categoryKey: ProductCategoryKey) {
  return PRODUCT_CATEGORY_MAP.find((item) => item.category === categoryKey);
}
