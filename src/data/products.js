// Import local high-resolution shoe renderings
import shoeBlack from '../../img/leorix-shoe-black-side.png';
import shoeGreen from '../../img/leorix-shoe-green-side.png';
import shoeGreenWhite from '../../img/leorix-shoe-green-white-side.png';
import shoeWhiteGreen from '../../img/leorix-shoe-white-green-side.png';
import shoeWhite from '../../img/leorix-shoe-white-side.png';
import shoeLayout from '../../img/shoe-layout-drawing.png';

export const HERO_PRODUCT = {
  id: 'leorix-article-x',
  name: 'LEORIX Article X',
  tagline: 'The Lead Silhouette',
  descriptor: 'Engineered breathable upper on a stability-tuned bottom unit, built for all-day wear and validated at FDDI.',
  category: 'Men & Women',
  price: '₹5,999',
  isPrelaunch: true,
  status: 'Phase A: Validation Complete · Phase B: Drop Approaching',
  colors: [
    { name: 'White & Green Accent', hex: '#F4EFE6', image: shoeWhiteGreen, code: 'WG-01' },
    { name: 'Warm Tan & Green', hex: '#CEB08A', image: shoeGreenWhite, code: 'WG-02' },
    { name: 'Forest Green', hex: '#2E3E31', image: shoeGreen, code: 'FG-03' },
    { name: 'Obsidian Black', hex: '#1A211C', image: shoeBlack, code: 'OB-04' },
    { name: 'Alabaster White', hex: '#EAE6DF', image: shoeWhite, code: 'AW-05' }
  ],
  defaultImage: shoeWhiteGreen,
  layoutDrawing: shoeLayout,
  sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
  specs: [
    { label: 'Platform Architecture', value: 'FDDI Biomechanically Tuned Monoplate v1' },
    { label: 'Plantar Load Index', value: '42.8% Even Load Distribution' },
    { label: 'Midfoot Torsion Control', value: 'High Stiffness Composite Shank (12.5 Nm)' },
    { label: 'Outsole Hardness', value: '62 Shore A High-Abrasion Rubber' },
    { label: 'Cushioning Core', value: 'Controlled Density Micro-Cellular PU (55 kg/m³)' },
    { label: 'Upper Material', value: '3D Breathable Jacquard Mesh + TPU Overlays' }
  ]
};

export const PRODUCTS_COLLECTION = [
  {
    id: 'leorix-article-x-white-green',
    name: 'Article X — White Accent',
    gender: 'men',
    category: 'Lifestyle Performance',
    price: '₹5,999',
    image: shoeWhiteGreen,
    colorName: 'White / Forest Accent',
    colorHex: '#3A4D3D',
    badge: 'Lead Silhouette',
    shortDesc: 'Designed for 12-hour continuous standing comfort.',
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
  },
  {
    id: 'leorix-article-x-green',
    name: 'Article X — Forest Green',
    gender: 'men',
    category: 'Lifestyle Performance',
    price: '₹5,999',
    image: shoeGreen,
    colorName: 'Forest Green',
    colorHex: '#2E3E31',
    badge: 'Validated Platform',
    shortDesc: 'Rearfoot stability with controlled midfoot torsion.',
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
  },
  {
    id: 'leorix-article-x-green-white',
    name: 'Article X — Green & White',
    gender: 'men',
    category: 'Lifestyle Performance',
    price: '₹5,999',
    image: shoeGreenWhite,
    colorName: 'Tan / Green / White',
    colorHex: '#CEB08A',
    badge: 'Popular',
    shortDesc: 'Breathable jacquard mesh upper on a stability-tuned bottom unit.',
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10']
  },
  {
    id: 'leorix-article-x-black',
    name: 'Article X — Obsidian',
    gender: 'women',
    category: 'Monochrome Series',
    price: '₹5,999',
    image: shoeBlack,
    colorName: 'Obsidian Black',
    colorHex: '#1A211C',
    badge: 'Stealth Edition',
    shortDesc: 'Deep ink black upper with high contrast warm tan detail.',
    sizes: ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9']
  },
  {
    id: 'leorix-article-x-white',
    name: 'Article X — Alabaster',
    gender: 'women',
    category: 'Minimal Series',
    price: '₹5,999',
    image: shoeWhite,
    colorName: 'Alabaster White',
    colorHex: '#F4EFE6',
    badge: 'Clean Edition',
    shortDesc: 'Pure cream palette with subtle stone structural lines.',
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7']
  }
];
