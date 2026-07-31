// ===================== 导航基础类型定义 =====================
export interface NavSubItemMeta {
  path: string;
  targetId?: string;
  seoTitle: string;
  geoRegions: string[];
  geoKeywords: string[];
}

export interface NavProductItemMeta {
  path: string;
}

export interface NavMainItemMeta {
  path: string;
  seoTitle: string;
  primaryGeoMarkets: string[];
  subMetaList?: NavSubItemMeta[];
  productGroupMeta?: Record<string, NavProductItemMeta[]>;
}

// ===================== 全局常量（抽离重复内容，便于统一修改） =====================
export const BASE_GEO_REGIONS = ['US', 'CA', 'GB', 'DE', 'FR', 'ES'];
export const BASE_MARKETS = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Spain'];

// 机型名称转图片文件名工具函数
export function nameToImgSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

/**
 * 根据语种拼接完整URL
 * @param locale 当前语种
 * @param rawPath 基础路径（不带 /en/）
 * @returns 完整路由 href
 */
export function buildNavHref(locale: ValidLocale, rawPath: string): string {
  return `/${locale}/${rawPath}`.replace(/\/+/g, '/');
}

export type ValidLocale = 'en' | 'zh-CN' | 'de' | 'es' | 'fr' | 'ru' | 'ar';

// ===================== 导航【元数据】固定原始数据（无任何文字，只存路由、SEO配置，所有语种共用） =====================
export const rawNavMeta: NavMainItemMeta[] = [
  // 1. Home
  {
    path: '',
    seoTitle: 'Senrytech | Factory Direct Industrial Fiber Laser Cutting Machine Manufacturer Serving North America & Europe',
    primaryGeoMarkets: [...BASE_MARKETS],
  },
  // 2. Laser Processing Equipment
  {
    path: 'products/laser-processing-equipment/',
    seoTitle: 'Laser Processing Equipment | Factory Direct Cutting, Welding & Cleaning Machines for North American & European Metal Workshops - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subMetaList: [
      {
        path: 'products/laser-processing-equipment/sheet-cutting',
        targetId: 'sheet',
        seoTitle: 'Fiber Sheet Metal Laser Cutters | Industrial Plate Cutting Equipment for North America & European Fabricators - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa fiber sheet metal laser cutter', 'canada metal plate cutting machine', 'germany industrial sheet laser equipment'],
      },
      {
        path: 'products/laser-processing-equipment/tube-cutting',
        targetId: 'tube',
        seoTitle: 'Fiber Tube & Pipe Laser Cutters | CNC Metal Pipe Cutting Systems for North America & Europe - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa fiber tube laser cutter', 'canada pipe laser cutting machine', 'uk metal tube processing equipment'],
      },
      {
        path: 'products/laser-processing-equipment/sheet-tube',
        targetId: 'st',
        seoTitle: 'Sheet & Tube Combo Laser Processing Equipment | Dual-Use Cutting Machines for Metal Fabrication Plants Across North America & EU - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa sheet tube combo laser cutter', 'canada dual use laser cutting machine', 'germany plate pipe laser equipment'],
      },
      {
        path: 'products/laser-processing-equipment/welding',
        targetId: 'weld',
        seoTitle: 'Fiber Laser Welding Machines | Handheld & Robotic Welders for North American & European Metal Fabrication - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa handheld laser welder', 'canada robotic fiber welding machine', 'germany metal laser welding equipment'],
      },
      {
        path: 'products/laser-processing-equipment/cleaning',
        targetId: 'clean',
        seoTitle: 'Industrial Laser Cleaning Machines | Rust & Paint Removal Equipment for Workshops in North America & Europe - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser rust cleaning machine', 'canada industrial paint remover laser', 'europe metal oxide laser cleaner'],
      },
      {
        path: 'products/laser-processing-equipment/marking',
        targetId: 'mark',
        seoTitle: 'Fiber, UV & CO2 Laser Marking Machines | Permanent Metal Engravers for Manufacturers in North America & EU - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa fiber laser marking machine', 'canada metal engraving laser equipment', 'europe uv laser marker'],
      },
    ],
    productGroupMeta: {
      sheet: [
        { path: 'products/laser-processing-equipment/sheet-cutting/s-eco' },
        { path: 'products/laser-processing-equipment/sheet-cutting/s-plus' },
        { path: 'products/laser-processing-equipment/sheet-cutting/s-pro' },
        { path: 'products/laser-processing-equipment/sheet-cutting/s-promax' },
        { path: 'products/laser-processing-equipment/sheet-cutting/s-ultra' },
        { path: 'products/laser-processing-equipment/sheet-cutting/s-s' },
        { path: 'products/laser-processing-equipment/sheet-cutting/s-c' },
        { path: 'products/laser-processing-equipment/sheet-cutting/s-cpromax' },
        { path: 'products/laser-processing-equipment/sheet-cutting/s-g' },
        { path: 'products/laser-processing-equipment/sheet-cutting/s-m' },
      ],
      tube: [
        { path: 'products/laser-processing-equipment/tube-cutting/t2' },
        { path: 'products/laser-processing-equipment/tube-cutting/t2-plus' },
        { path: 'products/laser-processing-equipment/tube-cutting/t2-ultra' },
        { path: 'products/laser-processing-equipment/tube-cutting/t3-plus' },
        { path: 'products/laser-processing-equipment/tube-cutting/t3-ultra' },
        { path: 'products/laser-processing-equipment/tube-cutting/t4-ultra' },
      ],
      st: [
        { path: 'products/laser-processing-equipment/sheet-tube/at' },
        { path: 'products/laser-processing-equipment/sheet-tube/at-pro' },
        { path: 'products/laser-processing-equipment/sheet-tube/at-promax' },
        { path: 'products/laser-processing-equipment/sheet-tube/at-ultra' },
      ],
      weld: [
        { path: 'products/laser-processing-equipment/welding/w-eco' },
        { path: 'products/laser-processing-equipment/welding/w-pro' },
        { path: 'products/laser-processing-equipment/welding/w-ultra' },
        { path: 'products/laser-processing-equipment/welding/w-rw' },
        { path: 'products/laser-processing-equipment/welding/w-r4in1' },
        { path: 'products/laser-processing-equipment/welding/w-rm' },
      ],
      clean: [
        { path: 'products/laser-processing-equipment/cleaning/c-r' },
        { path: 'products/laser-processing-equipment/cleaning/c-c' },
        { path: 'products/laser-processing-equipment/cleaning/c-i' },
      ],
      mark: [
        { path: 'products/laser-processing-equipment/marking/m-uv' },
        { path: 'products/laser-processing-equipment/marking/m-mopa' },
        { path: 'products/laser-processing-equipment/marking/m-fiber' },
        { path: 'products/laser-processing-equipment/marking/m-co2' },
      ],
    },
  },
  // 3. Complete Production Line
  {
    path: 'products/complete-production-line/',
    seoTitle: 'Complete Metal Processing Production Line & Laser Supporting Equipment for North American & European Fabrication Plants - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subMetaList: [
      {
        path: 'products/complete-production-line/laser-auxiliary',
        targetId: 'aux',
        seoTitle: 'Laser Auxiliary Equipment | Laser Cutting Supporting Machines for North American & European Factories - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser auxiliary equipment', 'canada cnc router for sign making', 'germany mold laser repair welder'],
      },
      {
        path: 'products/complete-production-line/metal-forming',
        targetId: 'form',
        seoTitle: 'Metal Forming Machines | Sheet Metal Processing Equipment for North American & European Metal Workshops - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa cnc metal bending machine', 'canada sheet metal shearing equipment', 'europe metal deburring machine'],
      },
      {
        path: 'products/complete-production-line/multi-material-cutting',
        targetId: 'multi',
        seoTitle: 'Multi-Material Cutting Machines | Metal, Glass & Fabric Cutting Equipment for Global North American & EU Buyers - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa plasma cutting machine', 'canada glass laser cutter', 'europe vibrating fabric cutting machine'],
      },
    ],
    productGroupMeta: {
      aux: [
        { path: 'products/complete-production-line/laser-auxiliary/co2-engraver' },
        { path: 'products/complete-production-line/laser-auxiliary/cnc-router' },
        { path: 'products/complete-production-line/laser-auxiliary/mold-welder' },
        { path: 'products/complete-production-line/laser-auxiliary/letter-bender' },
      ],
      form: [
        { path: 'products/complete-production-line/metal-forming/cnc-bender' },
        { path: 'products/complete-production-line/metal-forming/shearing-machine' },
        { path: 'products/complete-production-line/metal-forming/deburrer' },
        { path: 'products/complete-production-line/metal-forming/slag-remover' },
        { path: 'products/complete-production-line/metal-forming/pipe-bender' },
      ],
      multi: [
        { path: 'products/complete-production-line/multi-material-cutting/plasma-cutter' },
        { path: 'products/complete-production-line/multi-material-cutting/glass-cutter' },
        { path: 'products/complete-production-line/multi-material-cutting/vibrating-cutter' },
      ],
    },
  },
  // 4. Industry Solutions
  {
    path: 'solutions/',
    seoTitle: 'Laser Processing Industry Solutions | Automotive, Construction & Kitchenware Cases for North American & EU Manufacturers - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subMetaList: [
      {
        path: 'solutions/automotive',
        targetId: 'auto',
        seoTitle: 'Automotive lightweight metal sheet laser cutting complete solution for North American and German car component factories',
        geoRegions: ['US', 'CA', 'DE', 'GB'],
        geoKeywords: ['usa automotive laser cutting solution', 'germany auto parts laser cutter', 'canada lightweight metal fabrication laser equipment'],
      },
      {
        path: 'solutions/agricultural',
        targetId: 'agri',
        seoTitle: 'Thick plate laser cutting solution for agricultural machinery parts suppliers across North America & Europe',
        geoRegions: ['US', 'CA', 'DE', 'GB', 'FR'],
        geoKeywords: ['usa farm machinery laser cutter', 'canada agricultural metal parts cutting machine', 'europe farm equipment laser processing solution'],
      },
      {
        path: 'solutions/kitchenware',
        targetId: 'kitchen',
        seoTitle: 'Stainless steel kitchenware laser forming processing solution for cookware manufacturers in North America & EU',
        geoRegions: ['US', 'CA', 'DE', 'GB', 'ES'],
        geoKeywords: ['usa kitchenware laser cutting machine', 'canada stainless steel cookware laser equipment', 'europe metal kitchen production laser solution'],
      },
      {
        path: 'solutions/construction',
        targetId: 'construct',
        seoTitle: 'Laser cutting processing scheme for engineering machinery metal accessories for North American construction firms',
        geoRegions: ['US', 'CA', 'DE', 'GB'],
        geoKeywords: ['usa construction machinery laser cutter', 'germany heavy equipment metal laser processing', 'canada engineering parts cutting machine'],
      },
      {
        path: 'solutions/advertising',
        targetId: 'ad',
        seoTitle: 'Laser engraving cutting solution for advertising signs & art crafts for sign shops across North America & Europe',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa sign laser engraving machine', 'canada advertising artwork laser cutter', 'europe custom sign laser processing equipment'],
      },
    ],
  },
  // 5. Laser Knowledge
  {
    path: 'knowledge/',
    seoTitle: 'Laser Knowledge & Buying Guides | Technical Specs & Operation Manuals for North American & European Laser Machine Purchasers - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subMetaList: [
      {
        path: 'knowledge/buyer-guide',
        targetId: 'buy',
        seoTitle: 'Complete fiber laser equipment purchase guide for North American & European metal factory buyers to avoid common mistakes',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa fiber laser buying guide', 'canada laser machine purchase tips', 'germany industrial laser equipment buyer handbook'],
      },
      {
        path: 'knowledge/tech-specs',
        targetId: 'spec',
        seoTitle: 'Full technical parameters and core performance advantages of laser machines for North American & European metal manufacturers',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser machine technical specs', 'canada fiber laser performance advantages', 'europe industrial laser parameter comparison'],
      },
      {
        path: 'knowledge/downloads',
        targetId: 'doc',
        seoTitle: 'Laser machine catalog, operation manual PDF free download for North American & European workshop operators',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser machine manual pdf download', 'canada fiber laser catalog', 'europe laser equipment operation guide'],
      },
    ],
  },
  // 6. Laser Industry Insight
  {
    path: 'insights/',
    seoTitle: 'Laser Industry Insights | Processing Tech Articles & Global Customer Cases for North American & EU Metal Fabricators - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subMetaList: [
      {
        path: 'insights/tech-articles',
        targetId: 'tech',
        seoTitle: 'Professional laser processing technology and equipment debugging tutorials for North American & European metal workshop technicians',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser processing technical articles', 'canada fiber laser machine debugging guide', 'germany metal laser cutting tech tips'],
      },
      {
        path: 'insights/industry-news',
        targetId: 'news',
        seoTitle: 'Global laser equipment market trends and industry development dynamics for North American & European machinery buyers',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser equipment market trends', 'canada fiber laser industry news', 'europe metal processing machinery market report'],
      },
      {
        path: 'insights/case-stories',
        targetId: 'case',
        seoTitle: 'Real laser processing landing cases of overseas factory customers from North America & European countries',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser machine customer case', 'canada metal fabrication factory project case', 'europe fiber laser real workshop cases'],
      },
    ],
  },
  // 7. About Senrytech
  {
    path: 'about-us/',
    seoTitle: 'About Senrytech | CE ISO Certified Fiber Laser Machine Factory Supplying North America & European Metal Fabricators - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subMetaList: [
      {
        path: 'about-us/factory',
        targetId: 'factory',
        seoTitle: 'Senrytech factory scale, R&D team and independent production capacity for North American & European laser machine importers',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['china laser factory for usa buyers', 'senrytech factory supply europe metal fabricators', 'industrial laser machine manufacturer for north america'],
      },
      {
        path: 'about-us/certifications',
        targetId: 'cert',
        seoTitle: 'Complete export certification: CE, FDA, ISO for laser machines exported to North America & European markets',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['laser machine ce fda iso certification', 'usa import laser equipment certificates', 'europe metal laser export qualification'],
      },
      {
        path: 'about-us/profile',
        targetId: 'profile',
        seoTitle: 'Full introduction of Senrytech laser manufacturing enterprise for North American & European machinery distributors',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['senrytech laser company introduction', 'fiber laser factory for usa distributors', 'industrial laser manufacturer europe partner'],
      },
    ],
  },
  // 8. Contact & Support
  {
    path: 'contact-us/',
    seoTitle: 'Contact Senrytech | Global Sales & Lifetime Remote After-Sales Support for North American & European Metal Fabricators - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subMetaList: [
      {
        path: 'contact-us/inquiry',
        targetId: 'contact',
        seoTitle: 'Global sales team contact information and online inquiry form for North American & European laser machine buyers',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser machine supplier contact', 'canada fiber laser inquiry form', 'europe metal cutting equipment sales contact'],
      },
      {
        path: 'contact-us/after-sales',
        targetId: 'service',
        seoTitle: 'Worldwide remote door-to-door installation and lifelong equipment maintenance for North American & European laser machine clients',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser machine after sales service', 'canada fiber laser remote installation support', 'europe industrial laser lifetime maintenance'],
      },
      {
        path: 'contact-us/faq',
        targetId: 'faq',
        seoTitle: 'FAQ center for laser machine purchase and daily operation for North American & European metal workshop owners',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa fiber laser machine faq', 'canada metal cutting equipment operation questions', 'europe laser machine purchase troubleshooting'],
      },
    ],
  },
];

// ============ 翻译文本类型定义 ============
export interface NavSubLabel {
  label: string;
}
export interface NavProductText {
  name: string;
  desc: string;
}
export interface NavMainLabel {
  label: string;
  subLabels?: NavSubLabel[];
  productTexts?: Record<string, NavProductText[]>;
}
export type NavTranslation = NavMainLabel[];

export interface I18nSchema {
  nav: Array<{
    label: string;
    subLabels?: Record<string, { label: string }>;
    productTexts?: Record<
      string,
      Array<{
        name: string;
        desc: string;
        href: string;
      }>
    >;
  }>;
}
