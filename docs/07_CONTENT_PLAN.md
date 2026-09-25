# 📝 Content Plan

> All content needed to build the portfolio. Write EN first, then AR with a native reviewer.

---

## 1. Hero Section

### EN Copy
```
Greeting line: "Hello, I'm" | "Hi, I'm" | (can be skipped — name is the star)
Name:          Mohamed Al-Mojtaba
Role cycling:  
  → "Graphic Designer"
  → "Automation Specialist"
  → "Data Analyst"
CTA button:    "See My Work"
Scroll hint:   "Scroll to explore"
```

### AR Copy
```
الاسم:         محمد المجتبى
الأدوار:       
  → "مصمم جرافيك"
  → "متخصص أتمتة"
  → "محلل بيانات"
زر الحث:       "اطّلع على أعمالي"
تلميح التمرير: "مرِّر للاستكشاف"
```

---

## 2. About Section

### Statement Headline (large, expressive)
```
EN: "I design systems, automate the repetitive, and find beauty in data."
AR: "أُصمّم الأنظمة، وأُؤتمت المهام المتكررة، وأكشف جمال البيانات."
```

### Bio Paragraph (~60–80 words)
```
EN (draft — personalize):
"Based in [City], I'm a multidisciplinary creator bridging visual design, 
data intelligence, and workflow automation. I've spent [X] years helping 
organizations communicate more clearly through design, move faster through 
automation, and understand their work through data."

AR (draft — get reviewed):
"أعمل من [المدينة]، وأنا مبدع متعدد التخصصات يجمع بين التصميم البصري 
وذكاء البيانات وأتمتة سير العمل. أمضيت [X] سنوات في مساعدة المؤسسات 
على التواصل بوضوح أكبر من خلال التصميم، والتحرك بشكل أسرع من خلال الأتمتة، 
وفهم أعمالها من خلال البيانات."
```

### Stats (fill with real numbers)
| Stat | EN | AR |
|---|---|---|
| Projects | "{N} Projects Delivered" | "{N} مشروع مُنجز" |
| Experience | "{N}+ Years of Experience" | "+{N} سنوات خبرة" |
| Hours Automated | "{N}h Automated/Month" | "{N} ساعة مُؤتمَتة/شهرياً" |

---

## 3. Skills Inventory

### Design Tools
| Tool | Years | Category |
|---|---|---|
| Adobe Photoshop | ? | Design |
| Adobe Illustrator | ? | Design |
| Adobe InDesign | ? | Design |
| Figma | ? | Design |
| [Add more] | | |

### Automation Tools
| Tool | Years | Category |
|---|---|---|
| n8n | ? | Automation |
| [Zapier?] | ? | Automation |
| [Make/Integromat?] | ? | Automation |
| [Add more] | | |

### Data Tools
| Tool | Years | Category |
|---|---|---|
| Python | ? | Data |
| Excel / Google Sheets | ? | Data |
| [Tableau?] | ? | Data |
| [SQL?] | ? | Data |
| [Add more] | | |

> **TODO:** Fill in actual tools and years with Mohamed's input.

---

## 4. Projects

### Project Entry Template
Each project needs:
```ts
{
  id: 'project-slug',
  titleEn: '',
  titleAr: '',
  descriptionEn: '',   // 1–2 sentences, recruiter-facing
  descriptionAr: '',
  category: 'design' | 'automation' | 'data',
  year: 20XX,
  imageUrl: '/images/projects/slug.jpg',
  tags: ['tag1', 'tag2'],
  liveUrl: 'optional',
}
```

### Sample Projects (from existing assets)

#### Project: Calaheads Cards
```
id:          'calaheads'
category:    'design'
titleEn:     'Calaheads Defense Mechanisms'
descriptionEn: 'A card game featuring illustrated skull characters 
                with psychological defense mechanism themes. 
                Art direction, illustration, and print design.'
tags:        ['Illustration', 'Print Design', 'Art Direction']
image:       Graphic Design/Back - Defense mechanisms cards.png
```

#### Project: ShareTaxi Brand Identity
```
id:          'share-taxi'
category:    'design'
titleEn:     'ShareTaxi Brand Identity'
descriptionEn: 'Logo and visual identity for a ride-sharing app. 
                Combines location pin, lightning bolt, and eye iconography 
                in a bold geometric mark.'
tags:        ['Logo Design', 'Brand Identity', 'Icon Design']
image:       Graphic Design/share taxi.jpg
```

### For Automation Projects: Node Graph Narrative
Each n8n project card should include a node graph with this structure:

```
[TRIGGER]        [PROCESS 1]      [PROCESS 2]     [OUTPUT]
What starts it → What happens → What transforms → What the result is
(violet)          (accent)         (accent)          (coral)
```

Example automation project structure:
```
Trigger:  Google Sheets new row
Process:  Validate data → Format → Enrich via API
Output:   Send Slack notification + update Notion database
Impact:   "Saved 12 hours/week of manual reporting"
```

### Suggested Number of Projects
- 3 Design projects
- 2 Automation projects (with node graphs)
- 2 Data projects (with interactive chart preview)
- **Total: 6–8 projects** (quality over quantity for recruiter focus)

---

## 5. Contact Section

### EN Copy
```
Big headline:  "Let's build something remarkable."
Sub-label:     "Get In Touch"
Email display: "hello@[yourdomain].com"
Form labels:
  - Name field:    "Your Name"
  - Email field:   "Your Email"  
  - Message field: "Your Message"
Submit button: "Send Message →"
Success state: "Message sent! I'll get back to you soon."
Error state:   "Something went wrong. Please try again."
```

### AR Copy
```
العنوان الكبير: "لنبني شيئاً استثنائياً."
التسمية:        "تواصل معي"
البريد:         "hello@[yourdomain].com" (keep LTR)
أسماء الحقول:
  - الاسم:    "اسمك"
  - البريد:   "بريدك الإلكتروني"
  - الرسالة:  "رسالتك"
زر الإرسال:   "إرسال الرسالة ←" (arrow flips in RTL)
حالة النجاح:  "تم إرسال رسالتك! سأرد عليك قريباً."
حالة الخطأ:   "حدث خطأ. يرجى المحاولة مرة أخرى."
```

---

## 6. Navigation Labels

| Section | EN | AR |
|---|---|---|
| About | About | عن |
| Skills | Skills | المهارات |
| Projects | Work | أعمالي |
| Contact | Contact | تواصل |

---

## 7. Meta / SEO Content

```
EN:
  title:       "Mohamed Al-Mojtaba — Graphic Designer, Automation & Data"
  description: "Portfolio of Mohamed Al-Mojtaba — graphic designer, 
                n8n automation specialist, and data analyst."
  og:image:    A compelling screenshot or designed OG card

AR:
  title:       "محمد المجتبى — مصمم جرافيك، أتمتة وبيانات"
  description: "ملف أعمال محمد المجتبى — مصمم جرافيك ومتخصص أتمتة n8n ومحلل بيانات."
```

---

## 8. Assets Checklist

### Images Needed
- [ ] Profile photo or abstract self-portrait (for About section)
- [ ] High-res screenshots/images for each project card
- [ ] Project detail images (for expanded case studies)
- [ ] OG card image (1200×630px)
- [ ] Favicon (SVG preferred)

### Icons Needed
- [ ] Tool icons for all skills (SVG format from Devicons or official brand kits)
- [ ] Social icons: LinkedIn, GitHub, Behance, etc.

### 3D Assets (if using models)
- [ ] Optional: abstract 3D model for hero scene (`.glb` format)
- [ ] Alternative: pure GLSL shader (no file needed)

### Fonts to Download
- [ ] Cairo Variable — from Google Fonts or Fontsource
- [ ] IBM Plex Sans + IBM Plex Mono — from Google Fonts
- [ ] Clash Display Variable — from Fontshare (free for commercial use)
