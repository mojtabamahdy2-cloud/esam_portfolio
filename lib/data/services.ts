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
    titleEn: 'Banners and Roll-ups',
    titleAr: 'البنرات والرول أب',
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
    titleEn: 'T-shirt Printing',
    titleAr: 'الطباعة على التيشيرتات',
    taglineEn: 'High-quality heat printing on custom T-shirts and apparel',
    taglineAr: 'طباعة حرارية عالية الجودة على التيشيرتات والملابس',
    descriptionEn: 'Design and printing of custom T-shirts, promotional apparel, and uniforms using advanced heat transfer and sublimation technologies for vibrant, long-lasting colors.',
    descriptionAr: 'تصميم وطباعة التيشيرتات والزي الموحد باستخدام تقنيات الطباعة الحرارية المتقدمة لضمان ألوان زاهية تدوم طويلاً، مثالية للحملات الترويجية والمناسبات.',
    deliverablesEn: [
      'Custom T-shirt and Hoodie Printing',
      'Corporate Uniform Branding',
      'Sublimation & Heat Transfer (DTF)',
      'High-volume promotional apparel'
    ],
    deliverablesAr: [
      'طباعة مخصصة للتيشيرتات والسترات',
      'الزي الموحد للشركات والمؤسسات',
      'تقنيات الطباعة الحرارية (السبلميشن و DTF)',
      'تجهيز كميات كبيرة للحملات الترويجية'
    ],
    tools: ['Heat Press', 'DTF Printers', 'Illustrator', 'Photoshop'],
    badgeEn: 'Apparel Printing',
    badgeAr: 'طباعة ملابس',
  },
  {
    id: 'computerized-embroidery',
    category: 'embroidery',
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
    id: 'laser-acrylic',
    category: 'signage',
    iconName: 'Sparkles',
    titleEn: 'Plaques and Acrylic',
    titleAr: 'الدروع والأكريليك',
    taglineEn: 'High-precision plaques, acrylic & wood signage',
    taglineAr: 'تصنيع وتجهيز الدروع والأكريليك والخشب مع إكسسوارات الاستيل',
    descriptionEn: 'Fabrication of luxury indoor acrylic signage, honorary plaques, laser-cut stencils, and illuminated 3D lettering using Trotec and Synergy CNC lasers.',
    descriptionAr: 'تصنيع لوحات المكاتب الأكريليكية الفاخرة، دروع التكريم، الحروف البارزة، والقص الفني للأخشاب والجلود.',
    deliverablesEn: [
      'Cast Acrylic Signage Panels with Stainless Steel Standoffs',
      'Recognition Plaques & Commemorative Shields',
      '3D Acrylic Lettering & Geometric Wall Art',
      'Material Processing: Acrylic, Wood, Leather, and Fabric',
    ],
    deliverablesAr: [
      'لوحات أكريليك جدارية مثبتة ببراغي استيل بارزة (Standoffs)',
      'دروع تكريم للمناسبات الرسمية والشخصيات',
      'حروف أكريليك ثلاثية الأبعاد وقص فني للشعارات',
      'معالجة خامات متنوعة: أكريليك، خشب، جلد، وقماش',
    ],
    tools: ['Trotec Speedy 300', 'Synergy Laser', 'CorelDraw', 'LaserCut'],
    badgeEn: 'Plaques & Acrylic',
    badgeAr: 'دروع وأكريليك',
  },
  {
    id: 'commercial-branding',
    category: 'branding',
    iconName: 'Palette',
    titleEn: 'Printed Materials',
    titleAr: 'المطبوعات',
    taglineEn: 'Custom boxes, brochures, and restaurant menus',
    taglineAr: 'علب، بروشورات، وقوائم طعام بجودة احترافية',
    descriptionEn: 'Design and high-quality production of commercial printed materials, specializing in custom packaging boxes, marketing brochures, and restaurant food menus.',
    descriptionAr: 'تصميم وطباعة كافة المطبوعات التجارية بجودة عالية، مع تخصص في إنتاج العلب والتغليف، البروشورات التسويقية، وقوائم الطعام للمطاعم والكافيهات.',
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
    taglineEn: 'Heavy-duty stickers for commercial mobility',
    taglineAr: 'ستيكرات عالية التحمل لسيارات الشركات والواجهات الزجاجية',
    descriptionEn: 'Design, scaling, plotter cutting, and installation oversight of commercial vehicle wraps, fleet branding decals, and perforated window graphics.',
    descriptionAr: 'تصميم ومقاسات وقص الستيكرات لسيارات التوصيل وأساطيل الشركات والواجهات الزجاجية مع مقاومة فائقة للشمس والحرارة.',
    deliverablesEn: [
      'Full & Partial Commercial Vehicle Wraps',
      'Precision Computerized Plotter Cutting',
      'Perforated One-Way Vision Window Graphics',
      'Durable Laminated Fleet Decals and Safety Labels',
    ],
    deliverablesAr: [
      'تغليف كامل وجزئي لسيارات الشركات والمعدات',
      'قص حاسوبي بالبلوتر بدقة متناهية',
      'ستيكرات رؤية باتجاه واحد (One-Way Vision) للواجهات',
      'طبقات حماية لامينيشن لمقاومة أشعة الشمس والخدوش',
    ],
    tools: ['Illustrator', 'Plotters', 'Photoshop', 'Vehicle Templates'],
    badgeEn: 'Fleet Branding',
    badgeAr: 'ستيكرات أساطيل',
  },
  {
    id: 'custom-stamps',
    category: 'print',
    iconName: 'Layers',
    titleEn: 'Custom Stamps',
    titleAr: 'الأختام',
    taglineEn: 'High-precision commercial and personal rubber stamps',
    taglineAr: 'أختام تجارية وشخصية بدقة عالية',
    descriptionEn: 'Design and production of custom rubber and self-inking stamps for official company use and personal branding.',
    descriptionAr: 'تصميم وتنفيذ الأختام الأوتوماتيكية والخشبية للشركات والمؤسسات بجودة ووضوح عاليين.',
    deliverablesEn: [
      'Self-inking automatic stamps',
      'Traditional wood-mounted stamps',
      'Multi-color and date stamps',
      'High-precision laser engraved rubber'
    ],
    deliverablesAr: [
      'أختام أوتوماتيكية ذاتية التحبير',
      'أختام خشبية كلاسيكية',
      'أختام التاريخ والأرقام متعددة الألوان',
      'حفر ربل الأختام بدقة ليزر عالية'
    ],
    tools: ['Illustrator', 'Laser Engraver'],
    badgeEn: 'Stamps',
    badgeAr: 'أختام',
  },
  {
    id: 'canvas-prints',
    category: 'print',
    iconName: 'Palette',
    titleEn: 'Canvas Prints',
    titleAr: 'لوحات الكانفس',
    taglineEn: 'High-quality wall art and interior canvas printing',
    taglineAr: 'طباعة لوحات جدارية عالية الجودة للديكور الداخلي',
    descriptionEn: 'Premium canvas printing stretched on wooden frames, ideal for interior decoration, exhibitions, and personalized gifts.',
    descriptionAr: 'طباعة فنية عالية الجودة على قماش الكانفس مشدودة على إطارات خشبية، مثالية للديكورات الداخلية والمنازل والمكاتب.',
    deliverablesEn: [
      'Stretched Canvas Art',
      'Multi-panel Wall Displays',
      'High-resolution Photo Printing',
      'Custom sizing and wooden framing'
    ],
    deliverablesAr: [
      'لوحات كانفس مشدودة مخفية الإطار',
      'لوحات جدارية مقسمة لعدة قطع',
      'طباعة صور فوتوغرافية وفنية بدقة عالية',
      'مقاسات مخصصة وتأطير خشبي متين'
    ],
    tools: ['Large Format Printers', 'Photoshop'],
    badgeEn: 'Canvas',
    badgeAr: 'كانفس',
  },
  {
    id: 'wedding-invitations',
    category: 'print',
    iconName: 'Sparkles',
    titleEn: 'Wedding Invitations',
    titleAr: 'كروت الأفراح',
    taglineEn: 'Elegant and bespoke wedding invitation cards',
    taglineAr: 'تصميم وطباعة بطاقات دعوة الزفاف الفاخرة',
    descriptionEn: 'Creating luxurious, customized wedding invitations with special finishes like foil stamping and laser cutting to make your day unforgettable.',
    descriptionAr: 'ابتكار بطاقات دعوة زفاف فاخرة وتصاميم مميزة مع خيارات طباعة خاصة مثل البصمة الحرارية والقص بالليزر لذكرى لا تنسى.',
    deliverablesEn: [
      'Custom Luxury Invitation Design',
      'Foil Stamping & Embossing Options',
      'Matching Envelopes & Wax Seals',
      'Laser-cut intricate card details'
    ],
    deliverablesAr: [
      'تصميم بطاقات دعوة حصرية وفخمة',
      'طباعة مع بصمة ذهبية وفضية وبصمة حرارية',
      'أظرف متناسقة وأختام شمعية كلاسيكية',
      'تفاصيل مقصوصة بالليزر لبطاقات فريدة'
    ],
    tools: ['Illustrator', 'InDesign', 'Specialty Printers'],
    badgeEn: 'Invitations',
    badgeAr: 'دعوات',
  },
  {
    id: 'mug-printing',
    category: 'sublimation',
    iconName: 'Layers',
    titleEn: 'Mug Printing',
    titleAr: 'طباعة الأكواب',
    taglineEn: 'Custom sublimation printing on ceramic mugs',
    taglineAr: 'طباعة سبلميشن حرارية على الأكواب السيراميك',
    descriptionEn: 'High-quality, long-lasting custom prints on mugs for corporate gifts, events, and personal souvenirs.',
    descriptionAr: 'طباعة حرارية عالية الجودة على الأكواب بتصاميم مخصصة للهدايا الترويجية للشركات، والمناسبات، والذكرى الشخصية.',
    deliverablesEn: [
      'Corporate Branded Mugs',
      'Personalized Photo Mugs',
      'Magic Mugs (Color Changing)',
      'High-volume event giveaways'
    ],
    deliverablesAr: [
      'أكواب بشعارات الشركات للموظفين والعملاء',
      'أكواب شخصية بصور وتصاميم خاصة',
      'الأكواب السحرية (تتغير بالحرارة)',
      'تجهيز كميات كبيرة لهدايا الفعاليات'
    ],
    tools: ['Sublimation Printer', 'Mug Heat Press', 'Photoshop'],
    badgeEn: 'Mugs',
    badgeAr: 'أكواب',
  },
  {
    id: 'business-cards',
    category: 'print',
    iconName: 'Palette',
    titleEn: 'Business Cards',
    titleAr: 'بطاقات العمل (كروت شخصية)',
    taglineEn: 'Premium business card design and printing',
    taglineAr: 'تصميم وطباعة كروت شخصية فاخرة',
    descriptionEn: 'Professional business cards that leave a lasting impression, featuring luxury papers, spot UV, and foil stamping.',
    descriptionAr: 'كروت شخصية احترافية تترك انطباعاً يدوم، مع خيارات الطباعة الفاخرة مثل الورق المقوى، البصمة، وطبقة السبوت يو في (Spot UV).',
    deliverablesEn: [
      'Luxury & Textured Paper Cards',
      'Spot UV & Foil Stamping finishes',
      'Die-cut Custom Shapes',
      'Minimalist & Corporate Designs'
    ],
    deliverablesAr: [
      'طباعة على ورق فاخر ومقوى (تكسشر)',
      'تشطيبات السبوت يو في والبصمة اللامعة',
      'قص قوالب (Die-cut) لأشكال كروت مبتكرة',
      'تصاميم كلاسيكية ورسمية للشركات'
    ],
    tools: ['Illustrator', 'InDesign', 'Offset Printers'],
    badgeEn: 'Business Cards',
    badgeAr: 'كروت شخصية',
  }
];
