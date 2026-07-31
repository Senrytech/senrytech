import type { NavTranslation } from '../lib/nav-base';

const nav: NavTranslation = [
  { label: '首页' },
  {
    label: '激光加工设备',
    subLabels: [
      { label: '光纤金属板材激光切割机' },
      { label: '光纤管材激光切割机' },
      { label: '光纤板管一体激光切割机' },
      { label: '光纤激光焊接机' },
      { label: '工业激光清洗机' },
      { label: '光纤激光打标雕刻机' },
    ],
    productTexts: {
      sheet: [
        { name: 'Senrytech S ECO', desc: '1500W–6000W经济型光纤激光板材切割机 | Senrytech工厂直供北美、欧洲钣金加工厂' },
        { name: 'Senrytech S PLUS', desc: '升级版重型床身光纤板材激光切割机 | Senrytech工厂直供北美、欧洲钣金加工厂' },
        // =========剩余机型你自行翻译desc即可，key顺序严格和en.ts保持完全一致=========
      ],
      tube: [],
      st: [],
      weld: [],
      clean: [],
      mark: [],
    },
  },
  {
    label: '成套生产线设备',
    subLabels: [{ label: '激光配套设备' }, { label: '金属成型设备' }, { label: '多材质切割设备' }],
    productTexts: {
      aux: [],
      form: [],
      multi: [],
    },
  },
  {
    label: '行业解决方案',
    subLabels: [{ label: '汽车行业切割方案' }, { label: '农机设备解决方案' }, { label: '不锈钢厨具方案' }, { label: '工程机械方案' }, { label: '广告工艺品雕刻方案' }],
  },
  {
    label: '激光知识库',
    subLabels: [{ label: '激光采购指南' }, { label: '技术参数与优势' }, { label: '手册资料下载' }],
  },
  {
    label: '激光行业资讯',
    subLabels: [{ label: '激光技术文章' }, { label: '行业新闻趋势' }, { label: '海外客户案例' }],
  },
  {
    label: '关于森瑞泰克',
    subLabels: [{ label: '工厂实力' }, { label: '出口资质认证' }, { label: '企业简介' }],
  },
  {
    label: '联系与售后',
    subLabels: [{ label: '在线咨询' }, { label: '全球售后服务' }, { label: '常见问题中心' }],
  },
];

export default {
  nav,
  meta: {
    title: 'Senrytech | 光纤激光设备生产厂家',
  },
};
