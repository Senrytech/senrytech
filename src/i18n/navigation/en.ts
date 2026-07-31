// src/i18n/navigation/en.ts
import type { NavTranslation } from '../../lib/nav-base';

export const navMenu: NavTranslation = [
  { label: 'Home', subLabels: [] },
  {
    label: 'Laser Processing Equipment',
    subLabels: [
      { label: 'Fiber Sheet Metal Laser Cutters' },
      { label: 'Fiber Tube Laser Cutters' },
      { label: 'Fiber Sheet & Tube Combo Cutters' },
      { label: 'Fiber Laser Welding Machines' },
      { label: 'Industrial Laser Cleaning Machines' },
      { label: 'Fiber Laser Marking & Engraving Machines' },
    ],
  },
  {
    label: 'Complete Production Line',
    subLabels: [{ label: 'Laser Auxiliary Equipment' }, { label: 'Metal Forming Machines' }, { label: 'Multi-Material Laser Cutting Equipment' }],
  },
  {
    label: 'Industry Solutions',
    subLabels: [
      { label: 'Automotive Industry Cutting Solutions' },
      { label: 'Agricultural Machinery Solutions' },
      { label: 'Stainless Steel Kitchenware Solutions' },
      { label: 'Construction Machinery Solutions' },
      { label: 'Advertising & Artwork Engraving Solutions' },
    ],
  },
  {
    label: 'Laser Knowledge',
    subLabels: [{ label: 'Laser Buying Guides' }, { label: 'Technical Specs & Advantages' }, { label: 'Manuals & Downloads' }],
  },
  {
    label: 'Laser Industry Insight',
    subLabels: [{ label: 'Laser Technology Articles' }, { label: 'Industry News & Trends' }, { label: 'Customer Case Stories' }],
  },
  {
    label: 'About Senrytech',
    subLabels: [{ label: 'Factory & Strengths' }, { label: 'Export Certifications' }, { label: 'Company Profile' }],
  },
  {
    label: 'Contact & Support',
    subLabels: [{ label: 'Contact Us' }, { label: 'Global After-sales' }, { label: 'FAQ & Support Center' }],
  },
];
