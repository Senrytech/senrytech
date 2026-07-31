// src/data/products/s-eco.data.js
export const SECO_DATA = {
  en: {
    title: 'S-ECO Fiber Laser Cutting Machine | Senrytech Laser',
    desc: 'S-ECO economical fiber laser cutter, stable bus control system, sheet metal cutting for steel, stainless steel, brass, aluminum.',
    modelName: 'S-ECO Series',
    headline: 'Economical Fiber Laser Cutting Machine',
    powerOptions: ['1500W', '2000W', '3000W', '6000W'],
    controlSystem: 'BoChu 2000E Bus System',
    advantages: ['Cost-effective economical configuration', 'Anti-vibration cutting algorithm', 'Stable continuous metal processing', 'Low daily operation cost'],
    geoRegions: ['CN-SD', 'DE', 'ES', 'RU', 'SA'],
  },
  de: {
    title: 'S-ECO Faserlaserschneidmaschine | Senrytech Laser',
    desc: 'Wirtschaftliche Faserlaserschneidanlage zum Schneiden von Stahl, Edelstahl, Messing und Aluminiumblechen.',
    modelName: 'S-ECO Serie',
    headline: 'Wirtschaftliche Faserlaserschneidmaschine',
  },
  // 后续扩展 es / ru / ar
};

// 产品页Product结构化Schema生成函数
export function getSECOSchema(lang, pageUrl) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: SECO_DATA[lang].title,
    description: SECO_DATA[lang].desc,
    brand: { '@type': 'Brand', name: 'Senrytech Laser' },
    model: 'S-ECO',
    url: pageUrl,
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
    },
  });
}
