export type ServiceCategory = 'all' | 'print' | 'sublimation' | 'embroidery' | 'signage' | 'branding';

export interface ServiceItem {
  id: string;
  category: 'print' | 'sublimation' | 'embroidery' | 'signage' | 'branding';
  iconName: 'Printer' | 'Layers' | 'Scissors' | 'Sparkles' | 'Palette' | 'Truck';
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
    id: 'large-format-printing',
    category: 'print',
    iconName: 'Printer',
    titleEn: 'Large-Format Digital Printing',
    titleAr: 'الطباعة الرقمية الكبرى والرول أب',
    taglineEn: 'Monumental scale, vibrant pigments & flawless prepress',
    taglineAr: 'طباعة عملاقة وألوان زاهية وتجهيز طباعي متكامل',
    descriptionEn: 'End-to-end design and production of large-format banners, exhibition pop-ups, roll-up stands, and outdoor flex-face displays with industrial color management.',
    descriptionAr: 'تصميم وتنفيذ متكامل للبنرات الضخمة، منصات البوب اب للمعارض، الرول أب، واللوحات الإعلانية الخارجية مع إدارة دقيقة لملفات الألوان وتجهيز الطباعة.',
    deliverablesEn: [
      'High-Resolution Roll-ups & Pop-up Exhibition Stands',
      'Architectural Wall Banners & Flex Face Displays',
      'CMYK Color Profile Calibration & Prepress Proofing',
      'Durable Weatherproof Vinyls & Canvas Prints',
    ],
    deliverablesAr: [
      'رول اب وبوب اب معارض عالي الدقة وسهل التركيب',
      'بنرات جدارية عملاقة ولوحات فليكس للمباني',
      'معايرة بروفايل ألوان CMYK وتجهيز الملفات للماكينات',
      'ستيكرات فينيل وكانفس مقاومة للعوامل الجوية',
    ],
    tools: ['Photoshop', 'Illustrator', 'Large Format Plotters', 'Acrobat Pro'],
    badgeEn: 'Large Format',
    badgeAr: 'طباعة كبرى',
  },
  {
    id: 'sublimation-textiles',
    category: 'sublimation',
    iconName: 'Layers',
    titleEn: 'Roll-to-Roll Sublimation & Textiles',
    titleAr: 'طباعة السبلميشن رول تو رول للأقمشة',
    taglineEn: 'EPSON F9500 roll printing & thermal calender transfer',
    taglineAr: 'تشغيل ماكينات إبسون F9500 والمكبس الحراري المستمر',
    descriptionEn: 'Industrial dye-sublimation on roll-to-roll polyester and blended textiles for luxury Saudi abayas, sportswear, flags, and bespoke fashion patterns.',
    descriptionAr: 'طباعة أقمشة سبلميشن صناعية متواصلة على أقمشة العبايات الفاخرة، والأزياء، والأعلام، مع تثبيت حراري بالمكابس الأسطوانية لضمان ثبات الألوان ولمعانها.',
    deliverablesEn: [
      'Continuous Roll-to-Roll Fabric Printing (EPSON F9500)',
      'Rotary & Flatbed Heat Press Calender Transfers',
      'Seamless Pattern Layouts & Modest Wear Textiles',
      'Color Fastness & Wash-Resistant Pigment Output',
    ],
    deliverablesAr: [
      'سحب طباعي مستمر رول تو رول (إبسون F9500)',
      'نقل حراري متواصل عبر المكبس الدوار (Calender Heat Press)',
      'تجهيز باترونات الأقمشة المتكررة للعبايات والأزياء',
      'ثبات ألوان عالي ومقاومة تامة للغسيل والاستخدام',
    ],
    tools: ['EPSON SureColor F9500', 'Roll Heat Press', 'Photoshop', 'Wasatch RIP'],
    badgeEn: 'Industrial Sublimation',
    badgeAr: 'سبلميشن صناعي',
  },
  {
    id: 'computerized-embroidery',
    category: 'embroidery',
    iconName: 'Scissors',
    titleEn: 'Computerized Embroidery',
    titleAr: 'التطريز الحاسوبي',
    taglineEn: 'Wilcom digitizing & multi-head industrial embroidery',
    taglineAr: 'برمجة احترافية بويلكم وتشغيل مكائن ZSK وهابي وسين سين',
    descriptionEn: 'Digitizing corporate emblems and complex motifs into clean stitch files (DST/EMB) and producing high-density embroidery on polos, caps, and workwear.',
    descriptionAr: 'تحويل الشعارات والرسومات المعقدة إلى غرز تطريز رقمية دقيقة وتنفيذها بكثافة غرز متوازنة على القمصان، القبعات ثلاثية الأبعاد، والزي الموحد.',
    deliverablesEn: [
      'Wilcom Embroidery Studio Digitizing (DST, EMB)',
      '3D Puff & Flat Cap Headwear Embroidery',
      'Multi-Head Industrial Machine Setup (ZSK, HAPPY, SINSIN)',
      'Corporate Uniforms, Tactical Vests & Name Badges',
    ],
    deliverablesAr: [
      'برمجة ورسم غرز التطريز ببرنامج ويلكم (Wilcom)',
      'تطريز بارز ثلاثي الأبعاد (3D Puff) وقبعات رأسية',
      'معايرة وتشغيل مكائن التطريز الألمانية واليابانية والصينية',
      'أزياء الشركات الموحدة، السترات التكتيكية، والباجات',
    ],
    tools: ['Wilcom Studio', 'ZSK Machines', 'HAPPY Multi-Head', 'SINSIN'],
    badgeEn: 'Precision Stitch',
    badgeAr: 'تطريز متقن',
  },
  {
    id: 'laser-acrylic',
    category: 'signage',
    iconName: 'Sparkles',
    titleEn: 'Laser and Acrylic',
    titleAr: 'الليزر والأكريليك',
    taglineEn: 'Sub-millimeter CNC laser contours on acrylic & wood',
    taglineAr: 'قص ليزر فائق الدقة للأكريليك والخشب مع إكسسوارات الاستيل',
    descriptionEn: 'Fabrication of luxury indoor acrylic signage, honorary plaques, laser-cut stencils, and illuminated 3D lettering using Trotec and Synergy CNC lasers.',
    descriptionAr: 'تصنيع لوحات المكاتب الأكريليكية الفاخرة، دروع التكريم، الحروف البارزة، والقص الفني للأخشاب والجلود باستخدام أجهزة الليزر الحديثة.',
    deliverablesEn: [
      'Cast Acrylic Signage Panels with Stainless Steel Standoffs',
      'Laser Engraved Recognition Plaques & Commemorative Shields',
      '3D Acrylic Lettering & Geometric Wall Art',
      'Material Processing: Acrylic, Wood, Leather, and Fabric',
    ],
    deliverablesAr: [
      'لوحات أكريليك جدارية مثبتة ببراغي استيل بارزة (Standoffs)',
      'دروع تكريم ونقش ليزر للشخصيات والمناسبات الرسمية',
      'حروف أكريليك ثلاثية الأبعاد وقص فني للشعارات',
      'معالجة خامات متنوعة: أكريليك، خشب، جلد، وقماش',
    ],
    tools: ['Trotec Speedy 300', 'Synergy Laser', 'CorelDraw', 'LaserCut'],
    badgeEn: 'CNC & Acrylic',
    badgeAr: 'ليزر وأكريليك',
  },
  {
    id: 'commercial-branding',
    category: 'branding',
    iconName: 'Palette',
    titleEn: 'Commercial Graphic Design & Menus',
    titleAr: 'التصميم التجاري والقوائم والمطبوعات',
    taglineEn: 'Impactful marketing collateral and high-definition menus',
    taglineAr: 'تصاميم تسويقية مبتكرة وقوائم طعام وتجهيز ألوان متطابق',
    descriptionEn: 'Crafting commercial branding assets, marketing flyers, corporate profiles, and restaurant menu boards aligned with exact printing standards.',
    descriptionAr: 'ابتكار الهويات التجارية، بروفايلات الشركات، مطبوعات المعارض والمؤتمرات، وقوائم المأكولات للمطاعم والكافيهات بأعلى مقاييس الإخراج.',
    deliverablesEn: [
      'Corporate Stationery & Brand Guidelines',
      'Restaurant Menu Boards & Takeaway Catalogs',
      'Marketing Flyers, Brochures & Product Packaging',
      'Full Vector Deliverables (AI, PDF, EPS, TIFF)',
    ],
    deliverablesAr: [
      'مطبوعات الشركات الرسمية وهوية العلامات التجارية',
      'لوحات المنيو للمطاعم والكافيهات والكتالوجات الورقية',
      'بروشورات وفلايرات تسويقية وتغليف المنتجات',
      'تسليم الملفات المصدرية المفتوحة والجاهزة للطباعة فوراً',
    ],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
    badgeEn: 'Brand & Print',
    badgeAr: 'هوية ومطبوعات',
  },
  {
    id: 'fleet-vehicle-graphics',
    category: 'print',
    iconName: 'Truck',
    titleEn: 'Stickers',
    titleAr: 'ستيكرات',
    taglineEn: 'Heavy-duty vinyl graphics for commercial mobility',
    taglineAr: 'فينيل عالي التحمل لسيارات الشركات والواجهات الزجاجية',
    descriptionEn: 'Design, scaling, plotter cutting, and installation oversight of commercial vehicle wraps, fleet branding decals, and perforated window graphics.',
    descriptionAr: 'تصميم ومقاسات وقص ستيكرات الفينيل لسيارات التوصيل وأساطيل الشركات والواجهات الزجاجية مع مقاومة فائقة للشمس والحرارة.',
    deliverablesEn: [
      'Full & Partial Commercial Vehicle Vinyl Wraps',
      'Precision Computerized Plotter Vinyl Cutting',
      'Perforated One-Way Vision Window Graphics',
      'Durable Laminated Fleet Decals and Safety Labels',
    ],
    deliverablesAr: [
      'تغليف كامل وجزئي لسيارات الشركات والمعدات',
      'قص فينيل حاسوبي بالبلوتر بدقة متناهية',
      'ستيكرات رؤية باتجاه واحد (One-Way Vision) للواجهات',
      'طبقات حماية لامينيشن لمقاومة أشعة الشمس والخدوش',
    ],
    tools: ['Illustrator', 'Vinyl Plotters', 'Photoshop', 'Vehicle Templates'],
    badgeEn: 'Fleet Branding',
    badgeAr: 'ستيكرات أساطيل',
  },
];
