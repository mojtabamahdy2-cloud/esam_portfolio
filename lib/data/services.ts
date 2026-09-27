export type ServiceCategory = 'all' | 'embroidery' | 'design';

export interface ServiceItem {
  id: string;
  category: 'embroidery' | 'design';
  iconName: 'Scissors' | 'Layers' | 'Sparkles' | 'Palette';
  titleEn: string;
  titleAr: string;
  taglineEn: string;
  taglineAr: string;
  descriptionEn: string;
  descriptionAr: string;
  deliverablesEn: string[];
  deliverablesAr: string[];
  tools: string[];
  badgeEn: string;
  badgeAr: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'abaya-design',
    category: 'design',
    iconName: 'Scissors',
    titleEn: 'Abaya Design',
    titleAr: 'تصميم العبايات',
    taglineEn: 'Luxury Saudi and Gulf abaya design with exquisite detailing',
    taglineAr: 'تصميم وتطريز العبايات الفاخرة بأرقى التفاصيل',
    descriptionEn: 'Creating modern, elegant designs for Saudi and Gulf abayas, featuring meticulous embroidery patterns, premium fabric selection, and sophisticated finishing touches.',
    descriptionAr: 'ابتكار تصاميم عصرية للعبايات السعودية والخليجية مع اهتمام فائق بتفاصيل التطريز، وتنسيق الأقمشة الفاخرة لتناسب أرقى الأذواق.',
    deliverablesEn: [
      'Bespoke Luxury Abaya Designs',
      'Intricate Embroidery Patterns',
      'Premium Fabric Selection & Coordination',
      'Modern & Traditional Silhouette Blends'
    ],
    deliverablesAr: [
      'تصاميم حصرية للعبايات الفاخرة',
      'باترونات وتفاصيل تطريز دقيقة',
      'اختيار وتنسيق الأقمشة الراقية',
      'دمج اللمسات العصرية مع الأصالة الخليجية'
    ],
    tools: ['Wilcom Studio', 'Adobe Illustrator', 'Sketching'],
    badgeEn: 'Abaya Design',
    badgeAr: 'تصميم عبايات',
  },
  {
    id: 'cap-embroidery',
    category: 'embroidery',
    iconName: 'Layers',
    titleEn: 'Cap Embroidery',
    titleAr: 'التطريز على الكاب',
    taglineEn: 'High-quality computerized embroidery for caps',
    taglineAr: 'تطريز آلي عالي الجودة على الكابات',
    descriptionEn: 'Custom embroidery on various types of caps with high precision and durability. Perfect for corporate branding, sports teams, and personal designs.',
    descriptionAr: 'تطريز مخصص على مختلف أنواع الكابات بدقة ومتانة عالية. مثالي للعلامات التجارية للشركات، الفرق الرياضية، والتصاميم الشخصية.',
    deliverablesEn: [
      'Custom Cap Embroidery',
      'Corporate Logos on Caps',
      'Sports Team Caps',
      'High-precision Stitching'
    ],
    deliverablesAr: [
      'تطريز كابات مخصص',
      'شعارات الشركات على الكابات',
      'كابات الفرق الرياضية',
      'خياطة دقيقة عالية الجودة'
    ],
    tools: ['Computerized Embroidery Machine', 'Wilcom Studio'],
    badgeEn: 'Cap Embroidery',
    badgeAr: 'تطريز الكاب',
  },
  {
    id: 'chest-embroidery',
    category: 'embroidery',
    iconName: 'Sparkles',
    titleEn: 'Chest Embroidery',
    titleAr: 'التطريز على الصدرية',
    taglineEn: 'Detailed chest embroidery for uniforms and vests',
    taglineAr: 'تطريز دقيق على منطقة الصدر للزي الموحد والصدريات',
    descriptionEn: 'Professional embroidery services for chest placement on vests, uniforms, and workwear, ensuring clear brand visibility and professional appearance.',
    descriptionAr: 'خدمات تطريز احترافية لمنطقة الصدر على الصدريات، الزي الموحد، وملابس العمل لضمان وضوح العلامة التجارية والمظهر الاحترافي.',
    deliverablesEn: [
      'Uniform Chest Embroidery',
      'Vest Logos and Branding',
      'Professional Workwear Embroidery',
      'Durable Thread Quality'
    ],
    deliverablesAr: [
      'تطريز الزي الموحد (منطقة الصدر)',
      'شعارات الصدريات',
      'تطريز ملابس العمل الاحترافية',
      'خيوط متينة وعالية الجودة'
    ],
    tools: ['Computerized Embroidery Machine', 'Wilcom Studio'],
    badgeEn: 'Chest Embroidery',
    badgeAr: 'تطريز الصدرية',
  },
  {
    id: 'clothes-embroidery',
    category: 'embroidery',
    iconName: 'Palette',
    titleEn: 'T-Shirt & Clothes Embroidery',
    titleAr: 'التطريز على الملابس (التيشيرتات)',
    taglineEn: 'Custom embroidery on T-shirts and various apparel',
    taglineAr: 'تطريز مخصص على التيشيرتات ومختلف الملابس',
    descriptionEn: 'Add a premium touch to T-shirts, hoodies, and custom apparel with our intricate and durable computerized embroidery services.',
    descriptionAr: 'إضافة لمسة فاخرة للتيشيرتات، السترات، والملابس المخصصة مع خدمات التطريز الآلي الدقيقة والمتينة.',
    deliverablesEn: [
      'T-shirt Custom Embroidery',
      'Hoodies and Jackets Embroidery',
      'Bulk Promotional Apparel',
      'Premium Thread Finish'
    ],
    deliverablesAr: [
      'تطريز مخصص للتيشيرتات',
      'تطريز السترات والجاكيتات',
      'ملابس ترويجية بكميات كبيرة',
      'لمسة نهائية بخيوط فاخرة'
    ],
    tools: ['Computerized Embroidery Machine', 'Wilcom Studio'],
    badgeEn: 'Apparel Embroidery',
    badgeAr: 'تطريز الملابس',
  }
];
