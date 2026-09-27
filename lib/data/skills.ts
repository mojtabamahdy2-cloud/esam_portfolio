export interface SkillItem {
  id: string;
  name: string;
  category: 'design' | 'production' | 'hardware';
  level: number;
  proficiencyEn: string;
  proficiencyAr: string;
  focusEn: string;
  focusAr: string;
  years: number;
  highlight?: boolean;
  /** URL for the tool's SVG icon */
  logoUrl?: string;
}

export const skillsData: SkillItem[] = [
  // ── Design & Prepress Software ────────────────────────────
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    category: 'design',
    level: 96,
    proficiencyEn: 'Mastery',
    proficiencyAr: 'إتقان احترافي',
    focusEn: 'Complex compositing, CMYK color proofing & large-format prep',
    focusAr: 'معالجة الصور المتقدمة، دمج بصري، ومعايرة ألوان CMYK للطباعة',
    years: 8,
    highlight: true,
    logoUrl: '/images/skills/photoshop.svg',
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    category: 'design',
    level: 95,
    proficiencyEn: 'Mastery',
    proficiencyAr: 'إتقان احترافي',
    focusEn: 'Vector identity systems, banners, typography & laser path prep',
    focusAr: 'تصميم الشعارات، البنرات الجدارية، ورسم مسارات الفيكتور لليزر',
    years: 8,
    highlight: true,
    logoUrl: '/images/skills/illustrator.svg',
  },
  {
    id: 'indesign',
    name: 'Adobe InDesign',
    category: 'design',
    level: 90,
    proficiencyEn: 'Expert',
    proficiencyAr: 'مستوى خبير',
    focusEn: 'Multi-page editorial layouts, company profiles & catalogues',
    focusAr: 'تنسيق المطبوعات متعددة الصفحات، الكتالوجات، وبروفايلات الشركات',
    years: 7,
    highlight: true,
    logoUrl: '/images/skills/indesign.svg',
  },


  // ── Digital Print & Production ────────────────────────────
  {
    id: 'epson-sublimation',
    name: 'EPSON F9500',
    category: 'production',
    level: 95,
    proficiencyEn: 'Specialist',
    proficiencyAr: 'أخصائي تشغيل',
    focusEn: 'Roll-to-roll high-speed dye-sublimation for abayas & apparel',
    focusAr: 'تشغيل وصيانة طابعات السبلميشن رول تو رول لأقمشة العبايات والأزياء',
    years: 5,
    highlight: true,
    logoUrl: '/images/skills/epson.svg',
  },
  {
    id: 'heat-press',
    name: 'Roll-to-Roll Heat Press',
    category: 'production',
    level: 94,
    proficiencyEn: 'Specialist',
    proficiencyAr: 'أخصائي تشغيل',
    focusEn: 'Continuous thermal calender fabric transfer & fixation',
    focusAr: 'نقل حراري مستمر عبر المكابس الأسطوانية الدوارة للأقمشة',
    years: 5,
    highlight: true,
    logoUrl: '/images/skills/heatpress.svg',
  },

  // ── Industrial Machinery & Hardware ───────────────────────
  {
    id: 'synergy-laser',
    name: 'Synergy CNC Laser',
    category: 'hardware',
    level: 89,
    proficiencyEn: 'Specialist',
    proficiencyAr: 'أخصائي تشغيل',
    focusEn: 'Large-bed laser fabrication, acrylic cutting & signage',
    focusAr: 'تشغيل أجهزة الليزر الكبيرة وتصنيع اللوحات المضيئة والأكريليك',
    years: 5,
    logoUrl: '/images/skills/laser.svg',
  },
  {
    id: 'dtf-printing',
    name: 'DTF Printing',
    category: 'production',
    level: 92,
    proficiencyEn: 'Expert',
    proficiencyAr: 'خبير',
    focusEn: 'Direct-to-Film transfer printing for garments and merchandise',
    focusAr: 'طباعة النقل المباشر (DTF) للملابس والمنتجات',
    years: 4,
    logoUrl: '/images/skills/dtg.svg',
  },
  {
    id: 'computer-engineering',
    name: 'Computer Maintenance & Hardware',
    category: 'hardware',
    level: 94,
    proficiencyEn: 'Engineer',
    proficiencyAr: 'مهندس حاسوب',
    focusEn: 'Computer engineering, industrial machine interfaces & hardware',
    focusAr: 'هندسة حاسوب، صيانة أنظمة التشغيل، وربط الماكينات الصناعية',
    years: 8,
    highlight: true,
  },
];
