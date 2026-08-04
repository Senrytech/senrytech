interface NavSubItem {
  label: string;
  href: string;
  targetId?: string;
  seoTitle: string;
  geoRegions: string[];
  geoKeywords: string[];
}

interface NavProductItem {
  name: string;
  href: string;
  desc: string;
}

interface NavMainItem {
  label: string;
  href: string;
  seoTitle: string;
  subList?: NavSubItem[];
  productGroup?: Record<string, NavProductItem[]>;
  primaryGeoMarkets: string[];
}

type ValidLocale = 'en' | 'zh-CN' | 'de' | 'es' | 'fr' | 'ru' | 'ar';

// ===== 渲染专用类型【移除行内export type，统一底部导出】 =====
type RenderNavSubItem = NavSubItem & { href: string };
type RenderNavProductItem = NavProductItem & { href: string };
type RenderNavMainItem = NavMainItem & {
  href: string;
  subList?: RenderNavSubItem[];
  productGroup?: Record<string, RenderNavProductItem[]>;
};

// ===================== 全局常量 =====================
const BASE_GEO_REGIONS = ['US', 'CA', 'GB', 'DE', 'FR', 'ES'];
const BASE_MARKETS = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Spain'];

// 机型名称转图片文件名工具函数
export function nameToImgSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export function buildNavHref(locale: ValidLocale, rawHref: string): string {
  // 清理多重斜杠
  let cleanRaw = rawHref.replace(/\/+/g, '/');
  // 强制末尾加上斜杠，适配 trailingSlash:"always"
  if (!cleanRaw.endsWith('/')) {
    cleanRaw += '/';
  }
  // 区分语种前缀
  if (locale === 'en') {
    return `/${cleanRaw}`;
  } else {
    return `/${locale}/${cleanRaw}`;
  }
}

// ===================== 导航基础原始数据【只维护一份，不带语种前缀】 =====================
const rawNavData: NavMainItem[] = [
  // 1. Home 无下拉
  {
    label: 'Home',
    href: '',
    seoTitle: 'Senrytech | Factory Direct Industrial Fiber Laser Cutting Machine Manufacturer Serving North America & Europe',
    primaryGeoMarkets: [...BASE_MARKETS],
  },
  // 2. Laser Processing Equipment 自研核心主机下拉
  {
    label: 'Laser Processing Equipment',
    href: 'laser-processing-equipment/',
    seoTitle: 'Laser Processing Equipment | Factory Direct Cutting, Welding & Cleaning Machines for North American & European Metal Workshops - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subList: [
      {
        label: 'Fiber Sheet Metal Laser Cutters',
        href: 'laser-processing-equipment/fiber-laser-cutters/sheet',
        targetId: 'sheet',
        seoTitle: 'Fiber Sheet Metal Laser Cutters | Industrial Plate Cutting Equipment for North America & European Fabricators - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa fiber sheet metal laser cutter', 'canada metal plate cutting machine', 'germany industrial sheet laser equipment'],
      },
      {
        label: 'Fiber Tube Laser Cutters',
        href: 'laser-processing-equipment/fiber-laser-cutters/tube',
        targetId: 'tube',
        seoTitle: 'Fiber Tube & Pipe Laser Cutters | CNC Metal Pipe Cutting Systems for North America & Europe - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa fiber tube laser cutter', 'canada pipe laser cutting machine', 'uk metal tube processing equipment'],
      },
      {
        label: 'Fiber Sheet & Tube Combo Cutters',
        href: 'laser-processing-equipment/fiber-laser-cutters/combo',
        targetId: 'st',
        seoTitle: 'Sheet & Tube Combo Laser Processing Equipment | Dual-Use Cutting Machines for Metal Fabrication Plants Across North America & EU - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa sheet tube combo laser cutter', 'canada dual use laser cutting machine', 'germany plate pipe laser equipment'],
      },
      {
        label: 'Fiber Laser Welding Machines',
        href: 'laser-processing-equipment/fiber-laser-cutters/weld',
        targetId: 'weld',
        seoTitle: 'Fiber Laser Welding Machines | Handheld & Robotic Welders for North American & European Metal Fabrication - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa handheld laser welder', 'canada robotic fiber welding machine', 'germany metal laser welding equipment'],
      },
      {
        label: 'Industrial Laser Cleaning Machines',
        href: 'laser-processing-equipment/fiber-laser-cutters/clean',
        targetId: 'clean',
        seoTitle: 'Industrial Laser Cleaning Machines | Rust & Paint Removal Equipment for Workshops in North America & Europe - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser rust cleaning machine', 'canada industrial paint remover laser', 'europe metal oxide laser cleaner'],
      },
      {
        label: 'Fiber Laser Marking & Engraving Machines',
        href: 'laser-processing-equipment/fiber-laser-cutters/mark',
        targetId: 'mark',
        seoTitle: 'Fiber, UV & CO2 Laser Marking Machines | Permanent Metal Engravers for Manufacturers in North America & EU - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa fiber laser marking machine', 'canada metal engraving laser equipment', 'europe uv laser marker'],
      },
    ],
    productGroup: {
      sheet: [
        {
          name: 'Senrytech S ECO',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/s-eco',
          desc: '1500W–6000W Economic Fiber Laser Sheet Metal Cutter | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S PLUS',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/s-plus',
          desc: 'Upgraded Heavy Bed Fiber Laser Sheet Cutter for Metal Fabrication | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S PRO',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/s-pro',
          desc: 'High Efficiency Fiber Laser Cutter with Exchange Worktable | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S PROMAX',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/s-promax',
          desc: 'Fully Enclosed Dustproof Fiber Laser Sheet Cutter | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S ULTRA',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/s-ultra',
          desc: 'Auto Loading Unloading Fiber Laser Sheet Cutting Machine | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S S',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/s-s',
          desc: 'Small Enclosed Fiber Laser Cutter with Side Feeding for Metal Sheet | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S C',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/s-c',
          desc: 'Aluminum Coil Slitting Fiber Laser Sheet Cutting Machine | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S CPROMAX',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/s-cpromax',
          desc: 'Enclosed Coil Laser Cutter for Aluminum & Metal Sheet Fabrication | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S G',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/s-g',
          desc: 'Gantry Track Fiber Laser Cutter for Thick Heavy Metal Plates | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S M',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/s-m',
          desc: 'High Precision Small Fiber Laser Cutter for Thin Metal Sheets | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      tube: [
        {
          name: 'Senrytech T2',
          href: 'laser-processing-equipment/fiber-laser-cutters/tube/t2',
          desc: 'Economic Dual-Chuck Fiber Laser Pipe Cutter for Metal Tube | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech T2 PLUS',
          href: 'laser-processing-equipment/fiber-laser-cutters/tube/t2-plus',
          desc: 'Upgraded Stable Bed Fiber Laser Tube Cutting Machine | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech T2 ULTRA',
          href: 'laser-processing-equipment/fiber-laser-cutters/tube/t2-ultra',
          desc: 'Side Loading Fiber Laser Pipe Cutter for Square & Round Tube | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech T3 PLUS',
          href: 'laser-processing-equipment/fiber-laser-cutters/tube/t3-plus',
          desc: '3-Chuck Upgraded Bed Fiber Laser Tube Cutting Machine | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech T3 ULTRA',
          href: 'laser-processing-equipment/fiber-laser-cutters/tube/t3-ultra',
          desc: '3-Chuck Side Loading Fiber Laser Pipe Cutter for Long Tube | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech T4 ULTRA',
          href: 'laser-processing-equipment/fiber-laser-cutters/tube/t4-ultra',
          desc: '4-Chuck Heavy Duty Fiber Laser Tube Cutter for All Metal Profiles | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      st: [
        {
          name: 'Senrytech AT',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/at',
          desc: 'Dual Use Sheet & Tube Fiber Laser Combo Cutting Machine | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech AT PRO',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/at-pro',
          desc: 'Exchange Worktable Sheet Tube Combo Fiber Laser Cutter | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech AT PROMAX',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/at-promax',
          desc: 'Fully Enclosed Sheet & Tube Combo Fiber Laser Cutting Machine | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech AT ULTRA',
          href: 'laser-processing-equipment/fiber-laser-cutters/sheet/at-ultra',
          desc: 'Auto Loading Sheet Tube Combo Fiber Laser Cutting Machine | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      weld: [
        {
          name: 'Senrytech W ECO',
          href: 'laser-processing-equipment/laser-welder/w-eco',
          desc: 'Air Cooled 4-in-1 Compact Handheld Fiber Laser Welder | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech W PRO',
          href: 'laser-processing-equipment/laser-welder/w-pro',
          desc: 'Water Cooled 4-in-1 Handheld Laser Welder for Metal Fabrication | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech W ULTRA',
          href: 'laser-processing-equipment/laser-welder/w-ultra',
          desc: 'High Power Water Cooled Handheld Fiber Laser Welder | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech W RW',
          href: 'laser-processing-equipment/laser-welder/w-rw',
          desc: 'Automated Robotic Fiber Laser Welding Machine with Work Platform | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech W R4IN1',
          href: 'laser-processing-equipment/laser-welder/w-r4in1',
          desc: '4-in-1 Multi Function Robotic Fiber Laser Welding System | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech W RM',
          href: 'laser-processing-equipment/laser-welder/w-rm',
          desc: 'Full Automatic Robotic Fiber Laser Welding Processing Machine | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      clean: [
        {
          name: 'Senrytech C R',
          href: 'laser-processing-equipment/laser-cleaner/c-r',
          desc: 'Portable Backpack Low Power Laser Rust Cleaning Machine | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech C C',
          href: 'laser-processing-equipment/laser-cleaner/c-c',
          desc: 'Trolley Commercial Laser Rust Cleaning Machine for Workshop Use | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech C I',
          href: 'laser-processing-equipment/laser-cleaner/c-i',
          desc: 'Heavy Duty Industrial Fiber Laser Rust Removal Cleaning Machine | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      mark: [
        {
          name: 'Senrytech M UV',
          href: 'laser-processing-equipment/laser-marker/m-uv',
          desc: 'UV Laser Marking Engraving Machine for Glass & Plastic Products | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech M MOPA',
          href: 'laser-processing-equipment/laser-marker/m-mopa',
          desc: 'MOPA Fiber Laser Deep Engraving Marking Machine for Metal | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech M Fiber',
          href: 'laser-processing-equipment/laser-marker/m-fiber',
          desc: 'Fiber Laser Marking Machine for Metal Hardware & Auto Parts | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech M CO2',
          href: 'laser-processing-equipment/laser-marker/m-co2',
          desc: 'CO2 Laser Engraving Marking Machine for Wood Leather Non-Metal | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
    },
  },
  // 3. Complete Production Line
  {
    label: 'Complete Production Line',
    href: 'complete-production-line/',
    seoTitle: 'Complete Metal Processing Production Line & Laser Supporting Equipment for North American & European Fabrication Plants - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subList: [
      {
        label: 'Laser Auxiliary Equipment',
        href: 'complete-production-line/laser-auxiliary',
        targetId: 'aux',
        seoTitle: 'Laser Auxiliary Equipment | Laser Cutting Supporting Machines for North American & European Factories - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser auxiliary equipment', 'canada cnc router for sign making', 'germany mold laser repair welder'],
      },
      {
        label: 'Metal Forming Machines',
        href: 'complete-production-line/metal-forming',
        targetId: 'form',
        seoTitle: 'Metal Forming Machines | Sheet Metal Processing Equipment for North American & European Metal Workshops - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa cnc metal bending machine', 'canada sheet metal shearing equipment', 'europe metal deburring machine'],
      },
      {
        label: 'Multi-Material Laser Cutting Equipment',
        href: 'complete-production-line/multi-material-cutting',
        targetId: 'multi',
        seoTitle: 'Multi-Material Cutting Machines | Metal, Glass & Fabric Cutting Equipment for Global North American & EU Buyers - Senrytech',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa plasma cutting machine', 'canada glass laser cutter', 'europe vibrating fabric cutting machine'],
      },
    ],
    productGroup: {
      aux: [
        {
          name: 'Senrytech CO2 Laser Engraver',
          href: 'complete-production-line/laser-auxiliary-equipment/co2-engraver',
          desc: 'CO2 Laser Engraver for Wood, Acrylic & Non-Metal Engraving | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech CNC Router',
          href: 'complete-production-line/laser-auxiliary-equipment/cnc-router',
          desc: 'Industrial CNC Router for Woodworking & Advertising Sign Making | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Mold Laser Welder',
          href: 'complete-production-line/laser-auxiliary-equipment/mold-welder',
          desc: 'Mold Laser Welder for Metal Mold Repair & Precision Welding | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Letter Bender',
          href: 'complete-production-line/laser-auxiliary-equipment/letter-bender',
          desc: 'Advertising Letter Bender for Stainless Steel Sign Fabrication | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      form: [
        {
          name: 'Senrytech CNC Bending Machine',
          href: 'complete-production-line/metal-forming-machine/cnc-bender',
          desc: 'CNC Metal Bending Machine for Stainless Steel & Carbon Steel Fabrication | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Shearing Machine',
          href: 'complete-production-line/metal-forming-machine/shearing-machine',
          desc: 'Hydraulic CNC Shearing Machine for Sheet Metal Cutting Workshops | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Metal Deburrer',
          href: 'complete-production-line/metal-forming-machine/deburrer',
          desc: 'Automatic Metal Deburrer for Removing Burrs & Sharp Edges | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Slag Remover',
          href: 'complete-production-line/metal-forming-machine/slag-remover',
          desc: 'Laser Cutting Slag Remover for Laser Cut Metal Plates | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Pipe Bender',
          href: 'complete-production-line/metal-forming-machine/pipe-bender',
          desc: 'CNC Pipe Bending Machine for Round & Square Metal Tube Processing | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      multi: [
        {
          name: 'Senrytech Plasma Cutting Machine',
          href: 'complete-production-line/multi-material-cutting/plasma-cutter',
          desc: 'CNC Plasma Cutting Machine for Thick Carbon Steel & Alloy Metal Cutting | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Glass Cutting Machine',
          href: 'complete-production-line/multi-material-cutting/glass-cutter',
          desc: 'Automatic Glass Cutting Machine for Architectural & Decor Glass Processing | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Vibrating Fabric Cutter',
          href: 'complete-production-line/multi-material-cutting/vibrating-cutter',
          desc: 'Vibrating Knife Fabric Cutter for Textile, Leather & Composite Materials | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
    },
  },
  // 4. Industry Solutions
  {
    label: 'Industry Solutions',
    href: 'solutions/',
    seoTitle: 'Laser Processing Industry Solutions | Automotive, Construction & Kitchenware Cases for North American & EU Manufacturers - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subList: [
      {
        label: 'Automotive Industry Cutting Solutions',
        href: 'solutions/automotive',
        targetId: 'auto',
        seoTitle: 'Automotive lightweight metal sheet laser cutting complete solution for North American and German car component factories',
        geoRegions: ['US', 'CA', 'DE', 'GB'],
        geoKeywords: ['usa automotive laser cutting solution', 'germany auto parts laser cutter', 'canada lightweight metal fabrication laser equipment'],
      },
      {
        label: 'Agricultural Machinery Solutions',
        href: 'solutions/agricultural',
        targetId: 'agri',
        seoTitle: 'Thick plate laser cutting solution for agricultural machinery parts suppliers across North America & Europe',
        geoRegions: ['US', 'CA', 'DE', 'GB', 'FR'],
        geoKeywords: ['usa farm machinery laser cutter', 'canada agricultural metal parts cutting machine', 'europe farm equipment laser processing solution'],
      },
      {
        label: 'Stainless Steel Kitchenware Solutions',
        href: 'solutions/kitchenware',
        targetId: 'kitchen',
        seoTitle: 'Stainless steel kitchenware laser forming processing solution for cookware manufacturers in North America & EU',
        geoRegions: ['US', 'CA', 'DE', 'GB', 'ES'],
        geoKeywords: ['usa kitchenware laser cutting machine', 'canada stainless steel cookware laser equipment', 'europe metal kitchen production laser solution'],
      },
      {
        label: 'Construction Machinery Solutions',
        href: 'solutions/construction',
        targetId: 'construct',
        seoTitle: 'Laser cutting processing scheme for engineering machinery metal accessories for North American construction firms',
        geoRegions: ['US', 'CA', 'DE', 'GB'],
        geoKeywords: ['usa construction machinery laser cutter', 'germany heavy equipment metal laser processing', 'canada engineering parts cutting machine'],
      },
      {
        label: 'Advertising & Artwork Engraving Solutions',
        href: 'solutions/advertising',
        targetId: 'ad',
        seoTitle: 'Laser engraving cutting solution for advertising signs & art crafts for sign shops across North America & Europe',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa sign laser engraving machine', 'canada advertising artwork laser cutter', 'europe custom sign laser processing equipment'],
      },
    ],
  },
  // 5. Laser Knowledge
  {
    label: 'Laser Knowledge',
    href: 'knowledge/',
    seoTitle: 'Laser Knowledge & Buying Guides | Technical Specs & Operation Manuals for North American & European Laser Machine Purchasers - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subList: [
      {
        label: 'Laser Buying Guides',
        href: 'knowledge/buyer-guide',
        targetId: 'buy',
        seoTitle: 'Complete fiber laser equipment purchase guide for North American & European metal factory buyers to avoid common mistakes',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa fiber laser buying guide', 'canada laser machine purchase tips', 'germany industrial laser equipment buyer handbook'],
      },
      {
        label: 'Technical Specs & Advantages',
        href: 'knowledge/tech-specs',
        targetId: 'spec',
        seoTitle: 'Full technical parameters and core performance advantages of laser machines for North American & European metal manufacturers',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser machine technical specs', 'canada fiber laser performance advantages', 'europe industrial laser parameter comparison'],
      },
      {
        label: 'Manuals & Downloads',
        href: 'knowledge/downloads',
        targetId: 'doc',
        seoTitle: 'Laser machine catalog, operation manual PDF free download for North American & European workshop operators',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser machine manual pdf download', 'canada fiber laser catalog', 'europe laser equipment operation guide'],
      },
    ],
  },
  // 6. Laser Industry Insight
  {
    label: 'Laser Industry Insight',
    href: 'insights/',
    seoTitle: 'Laser Industry Insights | Processing Tech Articles & Global Customer Cases for North American & EU Metal Fabricators - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subList: [
      {
        label: 'Laser Technology Articles',
        href: 'insights/tech-articles',
        targetId: 'tech',
        seoTitle: 'Professional laser processing technology and equipment debugging tutorials for North American & European metal workshop technicians',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser processing technical articles', 'canada fiber laser machine debugging guide', 'germany metal laser cutting tech tips'],
      },
      {
        label: 'Industry News & Trends',
        href: 'insights/industry-news',
        targetId: 'news',
        seoTitle: 'Global laser equipment market trends and industry development dynamics for North American & European machinery buyers',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser equipment market trends', 'canada fiber laser industry news', 'europe metal processing machinery market report'],
      },
      {
        label: 'Customer Case Stories',
        href: 'insights/case-stories',
        targetId: 'case',
        seoTitle: 'Real laser processing landing cases of overseas factory customers from North America & European countries',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser machine customer case', 'canada metal fabrication factory project case', 'europe fiber laser real workshop cases'],
      },
    ],
  },
  // 7. About Senrytech
  {
    label: 'About Senrytech',
    href: 'about-us/',
    seoTitle: 'About Senrytech | CE ISO Certified Fiber Laser Machine Factory Supplying North America & European Metal Fabricators - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subList: [
      {
        label: 'Factory & Strengths',
        href: 'about-us/factory',
        targetId: 'factory',
        seoTitle: 'Senrytech factory scale, R&D team and independent production capacity for North American & European laser machine importers',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['china laser factory for usa buyers', 'senrytech factory supply europe metal fabricators', 'industrial laser machine manufacturer for north america'],
      },
      {
        label: 'Export Certifications',
        href: 'about-us/certifications',
        targetId: 'cert',
        seoTitle: 'Complete export certification: CE, FDA, ISO for laser machines exported to North America & European markets',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['laser machine ce fda iso certification', 'usa import laser equipment certificates', 'europe metal laser export qualification'],
      },
      {
        label: 'Company Profile',
        href: 'about-us/profile',
        targetId: 'profile',
        seoTitle: 'Full introduction of Senrytech laser manufacturing enterprise for North American & European machinery distributors',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['senrytech laser company introduction', 'fiber laser factory for usa distributors', 'industrial laser manufacturer europe partner'],
      },
    ],
  },
  // 8. Contact & Support
  {
    label: 'Contact & Support',
    href: 'contact-us/',
    seoTitle: 'Contact Senrytech | Global Sales & Lifetime Remote After-Sales Support for North American & European Metal Fabricators - Senrytech',
    primaryGeoMarkets: [...BASE_MARKETS],
    subList: [
      {
        label: 'Contact Us',
        href: 'contact-us/inquiry',
        targetId: 'contact',
        seoTitle: 'Global sales team contact information and online inquiry form for North American & European laser machine buyers',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser machine supplier contact', 'canada fiber laser inquiry form', 'europe metal cutting equipment sales contact'],
      },
      {
        label: 'Global After-sales',
        href: 'contact-us/after-sales',
        targetId: 'service',
        seoTitle: 'Worldwide remote door-to-door installation and lifelong equipment maintenance for North American & European laser machine clients',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa laser machine after sales service', 'canada fiber laser remote installation support', 'europe industrial laser lifetime maintenance'],
      },
      {
        label: 'FAQ & Support Center',
        href: 'contact-us/faq',
        targetId: 'faq',
        seoTitle: 'FAQ center for laser machine purchase and daily operation for North American & European metal workshop owners',
        geoRegions: [...BASE_GEO_REGIONS],
        geoKeywords: ['usa fiber laser machine faq', 'canada metal cutting equipment operation questions', 'europe laser machine purchase troubleshooting'],
      },
    ],
  },
];

/**
 * 获取处理完成、带完整href的导航数组
 * @param localeStr 当前语种
 */
export function getNavByLocale(localeStr: string): RenderNavMainItem[] {
  const locale = localeStr as ValidLocale;
  const targetLocale: ValidLocale = navDictHasLocale(locale) ? locale : 'en';

  // 深度递归填充完整href
  function mapItem(item: NavMainItem): RenderNavMainItem {
    return {
      ...item,
      href: buildNavHref(targetLocale, item.href),
      subList: item.subList?.map((sub) => ({
        ...sub,
        href: buildNavHref(targetLocale, sub.href),
      })),
      productGroup: item.productGroup
        ? Object.fromEntries(
            Object.entries(item.productGroup).map(([key, list]) => [
              key,
              list.map((prod) => ({
                ...prod,
                href: buildNavHref(targetLocale, prod.href),
              })),
            ])
          )
        : undefined,
    };
  }

  return rawNavData.map(mapItem);
}

function navDictHasLocale(locale: string): locale is ValidLocale {
  const list: ValidLocale[] = ['en', 'zh-CN', 'de', 'es', 'fr', 'ru', 'ar'];
  return list.includes(locale as ValidLocale);
}

// 多语言导航容器，预留写入其他语种翻译
export const navDict: Record<ValidLocale, RenderNavMainItem[]> = {
  en: [],
  'zh-CN': [],
  de: [],
  es: [],
  fr: [],
  ru: [],
  ar: [],
};

// =========【统一导出，杜绝TS2484冲突】 =========
export type { NavMainItem, NavSubItem, NavProductItem, RenderNavMainItem, RenderNavSubItem, RenderNavProductItem, ValidLocale };
