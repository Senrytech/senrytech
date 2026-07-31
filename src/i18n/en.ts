import type { NavTranslation } from '../lib/nav-base';

const nav: NavTranslation = [
  { label: 'Home' },
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
    productTexts: {
      sheet: [
        {
          name: 'Senrytech S ECO',
          desc: '1500W–6000W Economic Fiber Laser Sheet Metal Cutter | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S PLUS',
          desc: 'Upgraded Heavy Bed Fiber Laser Sheet Cutter for Metal Fabrication | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S PRO',
          desc: 'High Efficiency Fiber Laser Cutter with Exchange Worktable | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S PROMAX',
          desc: 'Fully Enclosed Dustproof Fiber Laser Sheet Cutter | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S ULTRA',
          desc: 'Auto Loading Unloading Fiber Laser Sheet Cutting Machine | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S S',
          desc: 'Small Enclosed Fiber Laser Cutter with Side Feeding for Metal Sheet | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S C',
          desc: 'Aluminum Coil Slitting Fiber Laser Sheet Cutting Machine | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S CPROMAX',
          desc: 'Enclosed Coil Laser Cutter for Aluminum & Metal Sheet Fabrication | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S G',
          desc: 'Gantry Track Fiber Laser Cutter for Thick Heavy Metal Plates | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech S M',
          desc: 'High Precision Small Fiber Laser Cutter for Thin Metal Sheets | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      tube: [
        {
          name: 'Senrytech T2',
          desc: 'Economic Dual-Chuck Fiber Laser Pipe Cutter for Metal Tube | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech T2 PLUS',
          desc: 'Upgraded Stable Bed Fiber Laser Tube Cutting Machine | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech T2 ULTRA',
          desc: 'Side Loading Fiber Laser Pipe Cutter for Square & Round Tube | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech T3 PLUS',
          desc: '3-Chuck Upgraded Bed Fiber Laser Tube Cutting Machine | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech T3 ULTRA',
          desc: '3-Chuck Side Loading Fiber Laser Pipe Cutter for Long Tube | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech T4 ULTRA',
          desc: '4-Chuck Heavy Duty Fiber Laser Tube Cutter for All Metal Profiles | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      st: [
        {
          name: 'Senrytech AT',
          desc: 'Dual Use Sheet & Tube Fiber Laser Combo Cutting Machine | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech AT PRO',
          desc: 'Exchange Worktable Sheet Tube Combo Fiber Laser Cutter | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech AT PROMAX',
          desc: 'Fully Enclosed Sheet & Tube Combo Fiber Laser Cutting Machine | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech AT ULTRA',
          desc: 'Auto Loading Sheet Tube Combo Fiber Laser Cutting Machine | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      weld: [
        {
          name: 'Senrytech W ECO',
          desc: 'Air Cooled 4-in-1 Compact Handheld Fiber Laser Welder | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech W PRO',
          desc: 'Water Cooled 4-in-1 Handheld Laser Welder for Metal Fabrication | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech W ULTRA',
          desc: 'High Power Water Cooled Handheld Fiber Laser Welder | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech W RW',
          desc: 'Automated Robotic Fiber Laser Welding Machine with Work Platform | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech W R4IN1',
          desc: '4-in-1 Multi Function Robotic Fiber Laser Welding System | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech W RM',
          desc: 'Full Automatic Robotic Fiber Laser Welding Processing Machine | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      clean: [
        {
          name: 'Senrytech C R',
          desc: 'Portable Backpack Low Power Laser Rust Cleaning Machine | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech C C',
          desc: 'Trolley Commercial Laser Rust Cleaning Machine for Workshop Use | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech C I',
          desc: 'Heavy Duty Industrial Fiber Laser Rust Removal Cleaning Machine | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      mark: [
        {
          name: 'Senrytech M UV',
          desc: 'UV Laser Marking Engraving Machine for Glass & Plastic Products | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech M MOPA',
          desc: 'MOPA Fiber Laser Deep Engraving Marking Machine for Metal | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech M Fiber',
          desc: 'Fiber Laser Marking Machine for Metal Hardware & Auto Parts | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech M CO2',
          desc: 'CO2 Laser Engraving Marking Machine for Wood Leather Non-Metal | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
    },
  },
  {
    label: 'Complete Production Line',
    subLabels: [{ label: 'Laser Auxiliary Equipment' }, { label: 'Metal Forming Machines' }, { label: 'Multi-Material Laser Cutting Equipment' }],
    productTexts: {
      aux: [
        {
          name: 'Senrytech CO2 Laser Engraver',
          desc: 'CO2 Laser Engraver for Wood, Acrylic & Non-Metal Engraving | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech CNC Router',
          desc: 'Industrial CNC Router for Woodworking & Advertising Sign Making | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Mold Laser Welder',
          desc: 'Mold Laser Welder for Metal Mold Repair & Precision Welding | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Letter Bender',
          desc: 'Advertising Letter Bender for Stainless Steel Sign Fabrication | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      form: [
        {
          name: 'Senrytech CNC Bending Machine',
          desc: 'CNC Metal Bending Machine for Stainless Steel & Carbon Steel Fabrication | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Shearing Machine',
          desc: 'Hydraulic CNC Shearing Machine for Sheet Metal Cutting Workshops | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Metal Deburrer',
          desc: 'Automatic Metal Deburrer for Removing Burrs & Sharp Edges | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Slag Remover',
          desc: 'Laser Cutting Slag Remover for Laser Cut Metal Plates | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Pipe Bender',
          desc: 'CNC Pipe Bending Machine for Round & Square Metal Tube Processing | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
      multi: [
        {
          name: 'Senrytech Plasma Cutting Machine',
          desc: 'CNC Plasma Cutting Machine for Thick Carbon Steel & Alloy Metal Cutting | Senrytech, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Glass Cutting Machine',
          desc: 'Automatic Glass Cutting Machine for Architectural & Decor Glass Processing | Senrytech Factory, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
        {
          name: 'Senrytech Vibrating Fabric Cutter',
          desc: 'Vibrating Knife Fabric Cutter for Textile, Leather & Composite Materials | Senrytech Manufacturer, factory direct supply for USA, Canada, UK, Germany metal fabrication workshops',
        },
      ],
    },
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

// 整份语言包
export default {
  nav,
  meta: {
    title: 'Senrytech | Fiber Laser Equipment Manufacturer',
  },
};
