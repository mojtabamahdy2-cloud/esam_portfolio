# 🏗️ Site Architecture

> Single-page scroll experience with locale-based routing  
> All sections on one scroll canvas, scroll-driven by GSAP ScrollTrigger + Lenis

---

## Route Structure

```
/en           → Hero → About → Skills → Projects → Contact
/ar           → نفس الهيكل بالعربية (RTL)
/api/contact  → Resend email handler (locale-agnostic)
```

---

## Component Tree

```
app/[locale]/
└── layout.tsx
    ├── <LenisProvider>          ← Smooth scroll wrapper
    ├── <CustomCursor>           ← Desktop only, always mounted
    ├── <Nav>                    ← Fixed top, minimal
    │   └── <LanguageToggle>     ← EN ↔ AR
    └── page.tsx
        ├── <HeroSection>
        │   ├── <HeroScene>*     ← R3F canvas (dynamic, ssr:false)
        │   └── <HeroContent>    ← Kinetic type, CTA
        ├── <AboutSection>
        │   └── <AboutContent>   ← Asymmetric layout
        ├── <SkillsSection>
        │   ├── <SkillsTabs>     ← Design | Automation | Data
        │   ├── <SkillsGrid>     ← Tag clusters, tool cards
        │   └── <SkillsOrb>*     ← R3F orbital (dynamic, ssr:false)
        ├── <ProjectsSection>
        │   └── <ProjectsTrack>  ← Horizontal scroll container
        │       └── <ProjectCard> (×N)
        └── <ContactSection>
            └── <ContactForm>    ← RHF + Zod + Resend
```

`*` = dynamically imported with `ssr: false`

---

## Section 1: Hero

### Visual Composition
```
┌──────────────────────────────────────────────────────┐
│ [Nav]                              [EN/AR]  [Menu]   │
│                                                      │
│         ░░░░░░░░░░░░░░░░░░░░░░░░░░░                 │
│     ░░░░ [3D WebGL Background Scene] ░░░░░           │
│         ░░░░░░░░░░░░░░░░░░░░░░░░░░░                 │
│                                                      │
│  MOHAMED                                             │
│  AL-MOJTABA            [Graphic Designer]            │
│                         [Automation Specialist]      │
│                         [Data Analyst]               │
│                                                      │
│  [See My Work →]                                     │
│                                                      │
│                         ↓ Scroll                     │
└──────────────────────────────────────────────────────┘
```

### 3D Scene Spec (`components/3d/HeroScene.tsx`)
- **Camera:** Perspective, static position `[0, 0, 5]`
- **Background:** Custom GLSL fragment shader
  - Perlin noise → fluid, organic dark gradient
  - Accent color (`#D6FB61`) bleeds through noise at ~15% opacity
  - Mouse X/Y uniforms → subtle warp on mouse move
- **Post-processing:** Bloom (strength 0.4) + ChromaticAberration (offset 0.001)
- **Performance:** `frameloop="demand"` — re-renders only on mouse move

### Hero Text Behavior
- Name: static, ultra-large (`clamp(4rem, 12vw, 12rem)`)
- Roles: cycling — one role fades out (clip-path down), next fades in (clip-path up)
- Transition interval: 3000ms
- On mount: name reveals word-by-word, then role appears

---

## Section 2: About

### Visual Composition (LTR)
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  ABOUT ME                                              │
│  ────────                                              │
│                                                        │
│  I design systems,    │  [Portrait / Abstract Art]    │
│  automate the         │  [With parallax scroll effect]│
│  repetitive, and      │                               │
│  find beauty in       │  ○ 3 Skill Domains            │
│  datasets.            │  ○ X Projects Delivered       │
│                       │  ○ Y Hours Automated          │
│                                                        │
│  [Short bio paragraph, 2-3 sentences]                  │
│                                                        │
└────────────────────────────────────────────────────────┘
```
RTL mirror: portrait on left, text on right.

### Stat Counters
- Animated count-up with GSAP when section enters viewport
- Numbers formatted with `Intl.NumberFormat` for locale-aware display
- Arabic numerals auto-displayed in `ar` locale via browser `Intl` API

---

## Section 3: Skills

### Three-Tab Layout
```
┌────────────────────────────────────────────────────────┐
│  SKILLS & TOOLS                                        │
│                                                        │
│  [Design]  [Automation]  [Data]                        │
│   ──────                                               │
│                                                        │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐              │
│  │ 🎨  │  │ ⚡  │  │ 🖌️  │  │ ✍️  │              │
│  │Adobe │  │ n8n  │  │ Figma│  │ ID   │              │
│  └──────┘  └──────┘  └──────┘  └──────┘              │
│                                          [3D Orb →]   │
└────────────────────────────────────────────────────────┘
```

### Skills Data (`lib/data/skills.ts`)
```ts
export const skills = {
  design: [
    { id: 'ps', name: 'Photoshop', icon: '/icons/ps.svg', years: 5 },
    { id: 'ai', name: 'Illustrator', icon: '/icons/ai.svg', years: 5 },
    { id: 'figma', name: 'Figma', icon: '/icons/figma.svg', years: 3 },
    { id: 'id', name: 'InDesign', icon: '/icons/id.svg', years: 4 },
    // ... add all tools
  ],
  automation: [
    { id: 'n8n', name: 'n8n', icon: '/icons/n8n.svg', years: 2 },
    { id: 'zapier', name: 'Zapier', icon: '/icons/zapier.svg', years: 1 },
    // ...
  ],
  data: [
    { id: 'python', name: 'Python', icon: '/icons/python.svg', years: 2 },
    { id: 'excel', name: 'Excel', icon: '/icons/excel.svg', years: 5 },
    // ...
  ],
}
```

### 3D Skills Orb (`components/3d/SkillsOrb.tsx`)
- Skills float as 3D `<Text>` labels from `@react-three/drei`
- Arranged on sphere surface using Fibonacci sphere algorithm
- Slow auto-rotation + mouse-interactive drag
- Hover: label scales up + glows with `--color-accent`

---

## Section 4: Projects

### Horizontal Scroll Architecture
```
[Pinned viewport]
  → [Card 1: Design]  → [Card 2: Automation]  → [Card 3: Data]  → [Card N: ...]
```

GSAP ScrollTrigger pins the section, converts vertical scroll to horizontal `translateX`.

### Project Card Spec
```
┌──────────────────────────────────────┐
│  [Category: Design]         [2024]   │
│                                      │
│  ████████████████████████████████   │
│  █            Image                █   │
│  ████████████████████████████████   │
│                                      │
│  PROJECT TITLE                       │
│  Short description                   │
│                          [View →]    │
└──────────────────────────────────────┘
Hover:
- Image scale 1.05 with overflow: hidden clip
- Cursor morphs: ring expands, shows "View"
- Title color → var(--color-accent)
```

### Project Data Structure (`lib/data/projects.ts`)
```ts
export type Project = {
  id:             string
  titleEn:        string
  titleAr:        string
  descriptionEn:  string
  descriptionAr:  string
  category:       'design' | 'automation' | 'data'
  year:           number
  imageUrl:       string
  tags:           string[]
  liveUrl?:       string
  caseStudyUrl?:  string
  // Automation-specific
  workflowDiagram?: string   // SVG path or JSON for node animation
  hoursSaved?:    number
}
```

### n8n Automation Projects: Special Treatment
For automation case studies, the project card expands to show:
1. **Animated node graph** (SVG with GSAP path animation)
2. **Impact counter:** "Saved 47h/month" with count-up animation
3. **Tool icons** of all connected apps

Node graph visual system:
```
[Trigger Node] ──→ [Transform Node] ──→ [Output Node]
   (violet)            (accent)            (coral)
```
Lines animate: dashed stroke-dasharray traveling left → right.

---

## Section 5: Contact

### Visual Composition
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  LET'S BUILD                                         │
│  SOMETHING REMARKABLE.                               │
│                                                      │
│  ┌────────────────────────────────────┐             │
│  │ Name                               │             │
│  ├────────────────────────────────────┤             │
│  │ Email                              │             │
│  ├────────────────────────────────────┤             │
│  │ Message                            │             │
│  │                                    │             │
│  │                                    │             │
│  └────────────────────────────────────┘             │
│                                                      │
│  [SEND MESSAGE →]   data-magnetic                    │
│                                                      │
│  or reach me at: hello@yoursite.com    [copy icon]  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Contact API (`app/api/contact/route.ts`)
```ts
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2).max(100),
  email:   z.string().email(),
  message: z.string().min(10).max(2000),
})

export async function POST(request: Request) {
  const body = await request.json()
  const data = schema.safeParse(body)
  if (!data.success) return Response.json({ error: data.error }, { status: 400 })

  const resend = new Resend(process.env.RESEND_API_KEY)
  await resend.emails.send({
    from: 'Portfolio <hello@yourdomain.com>',
    to:   'your@email.com',
    subject: `Portfolio contact from ${data.data.name}`,
    text:  data.data.message,
  })
  return Response.json({ success: true })
}
```

---

## Global Components

### Custom Cursor (`components/ui/CustomCursor.tsx`)
- Two elements: `cursor-dot` (4px) + `cursor-ring` (40px)
- Ring lags 100ms behind dot for fluid feel
- State changes via `data-cursor` attributes on hover targets:
  - `data-cursor="link"` → ring expands × 2.5
  - `data-cursor="image"` → ring becomes rounded-square, shows "View"
  - `data-cursor="text"` → ring becomes I-beam
- Hidden via `@media (hover: none)` (touch devices)

### Nav (`components/ui/Nav.tsx`)
- Position: `fixed` top-0, full width
- Contents: Logo (left) + `<LanguageToggle>` + Hamburger (right)
- Hamburger → full-screen overlay with large stacked nav items
- Nav items: GSAP stagger reveal on open, each item magnetic
- Background: starts transparent, gains `backdrop-blur` on scroll > 80px

---

## Performance Architecture

| Concern | Solution |
|---|---|
| R3F initial load | Dynamic import + Suspense skeleton |
| 3D on mobile | Detect `isMobile` → skip Canvas, show static gradient |
| Font loading | `next/font` — zero layout shift |
| Images | `next/image` with `sizes` prop + WebP |
| Heavy components | `next/dynamic` with `loading` placeholder |
| LCP | Hero text is static HTML, not canvas — searchable |

```tsx
// Mobile 3D detection pattern
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
// or use @react-three/drei's <Detect> component
```
