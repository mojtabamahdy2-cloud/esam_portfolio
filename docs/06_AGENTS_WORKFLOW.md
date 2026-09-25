# 🤖 Multi-Agent Workflow

## Overview

The portfolio build is divided across **6 specialized agents**, each owning a vertical slice of the project. Agents work sequentially in phases but can work in parallel within each phase.

```
Phase 0: FOUNDATION AGENT
  └── Scaffold project, install deps, configure Tailwind v4, next-intl routing

Phase 1: DESIGN SYSTEM AGENT  (parallel with nothing — must finish first)
  └── Tokens, fonts, global CSS, cursor, layout primitives

Phase 2: 3D AGENT  +  CONTENT AGENT  (parallel)
  ├── 3D AGENT: Hero WebGL scene, shader background, Skills orbital
  └── CONTENT AGENT: All text content in en.json + ar.json, dummy project data

Phase 3: SECTIONS AGENT
  └── Hero, About, Skills, Projects, Contact components (consumes 3D + content)

Phase 4: ANIMATION AGENT
  └── GSAP timelines, ScrollTrigger, Lenis, Splitting.js for all sections

Phase 5: QA AGENT
  └── Accessibility audit, RTL audit, Lighthouse, mobile responsiveness
```

---

## Agent 0 — Foundation Agent

**Trigger:** Start of project  
**Blocks:** All other agents

### Responsibilities
- `pnpm create next-app` with correct flags
- Install all packages from `01_TECH_STACK.md`
- Configure `next-intl` routing middleware
- Configure Tailwind v4 with CSS variable tokens
- Set up `lib/env.ts` with Zod env validation
- Create `messages/en.json` and `messages/ar.json` stubs
- Create folder structure as defined in `00_PROJECT_OVERVIEW.md`
- Commit to git: `feat: project scaffold`

### Outputs
- Working `pnpm dev` server
- Passing `pnpm typecheck` and `pnpm lint`
- Locale routing: `/en` and `/ar` both resolve

### Prompt Template
```
You are the Foundation Agent for a Next.js 15 portfolio project.
Your job is to scaffold the project exactly per 01_TECH_STACK.md and
the folder structure in 00_PROJECT_OVERVIEW.md. Do NOT build any UI yet.
Only scaffold, install, and verify the dev server runs.
Follow all rules in CLAUDE.md strictly.
```

---

## Agent 1 — Design System Agent

**Trigger:** After Foundation Agent completes  
**Blocks:** Sections Agent, Animation Agent

### Responsibilities
- Define all CSS custom properties (color tokens, spacing, typography scale)
- Implement `next/font` for Syne, Inter, and Almarai
- Create `components/ui/CustomCursor.tsx` — ring + dot, magnetic to buttons
- Create `components/ui/LenisProvider.tsx` — wraps app in smooth scroll
- Create `components/ui/LanguageToggle.tsx` — EN/AR switcher
- Create `components/ui/Nav.tsx` — minimal floating nav
- Define Tailwind `theme.extend` with design tokens
- Create `lib/animations/easings.ts` — shared GSAP easing values

### Design Token Spec
```css
/* globals.css */
:root {
  --color-bg:        #0A0A0A;
  --color-surface:   #111111;
  --color-accent:    #C8FF00;
  --color-secondary: #FF3B3B;
  --color-tertiary:  #4D4DFF;
  --color-text:      #F2F2F2;
  --color-muted:     #888888;

  --font-display: 'Syne', sans-serif;
  --font-body:    'Inter', sans-serif;
  --font-arabic:  'Almarai', sans-serif;

  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 24px;

  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
}
```

### Prompt Template
```
You are the Design System Agent. Your job is ONLY to build the shared
design foundation: tokens, fonts, cursor, smooth scroll provider,
language toggle, nav. Do NOT build any section content.
Every component you create must be pixel-perfect per 02_DESIGN_SYSTEM.md.
No default Tailwind colors — always use CSS variables.
```

---

## Agent 2A — 3D / WebGL Agent

**Trigger:** After Foundation Agent completes (runs parallel to Content Agent)  
**Blocks:** Sections Agent (Hero section)

### Responsibilities
- `components/3d/HeroScene.tsx` — R3F Canvas with custom shader background
  - Perlin noise / fluid distortion in fragment shader
  - Reactive to mouse position
  - Bloom + chromatic aberration post-processing
- `components/3d/SkillsOrb.tsx` — 3D orbital ring visualization for skills
  - Skills as 3D text labels orbiting a central sphere
- `components/3d/AutomationFlow.tsx` (optional) — n8n-inspired node graph in 3D
- All R3F scenes must use `next/dynamic` with `ssr: false`
- Performance: Suspense boundaries, `<Preload all />` from drei

### Key R3F Patterns
```tsx
// ALWAYS do this for any R3F component used in Next.js
const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => <div className="hero-skeleton" />,
})
```

### Prompt Template
```
You are the 3D / WebGL Agent. You build ONLY React Three Fiber components.
Every canvas must be dynamically imported (ssr: false).
Write clean GLSL shaders inline using drei's shaderMaterial.
Add Bloom via @react-three/postprocessing.
All components must be in components/3d/.
No section layout — just the 3D scenes themselves.
```

---

## Agent 2B — Content Agent

**Trigger:** After Foundation Agent completes (runs parallel to 3D Agent)  
**Blocks:** Sections Agent

### Responsibilities
- Populate `messages/en.json` with all copy (hero tagline, about bio, skill names, CTA text)
- Populate `messages/ar.json` with accurate Arabic translations
- Create `lib/data/projects.ts` — typed project data (title, description, category, image, link)
- Create `lib/data/skills.ts` — typed skills list with category groupings
- Ensure all Arabic text is grammatically correct and culturally appropriate

### Content Schema
```ts
// lib/data/projects.ts
export type Project = {
  id: string
  titleKey: string           // i18n key
  descriptionKey: string     // i18n key
  category: 'design' | 'automation' | 'data'
  imageUrl: string
  tags: string[]
  liveUrl?: string
  caseStudyUrl?: string
}
```

### Prompt Template
```
You are the Content Agent. Your job is ONLY to write content and data.
Fill en.json and ar.json with all portfolio copy.
Create typed data files for projects and skills.
All Arabic must be reviewed for RTL correctness and natural phrasing.
Do NOT build any components.
```

---

## Agent 3 — Sections Agent

**Trigger:** After Design System Agent + Content Agent + 3D Agent complete  
**Builds the actual visible sections**

### Responsibilities

#### [1] Hero Section (`components/sections/Hero.tsx`)
- Full-viewport, dark background
- `<HeroScene />` as absolute-positioned background (via dynamic import)
- Kinetic headline: name + 3 role words that animate in/out (cycling)
- Scroll indicator (animated down arrow)
- CTA button with magnetic hover

#### [2] About Section (`components/sections/About.tsx`)
- Asymmetric two-column layout
- Left: large statement text
- Right: portrait image with parallax + bio paragraph
- Small facts strip (years of experience, projects, tools)

#### [3] Skills Section (`components/sections/Skills.tsx`)
- Three category tabs: Design · Automation · Data
- Each category: icon grid with hover reveal
- `<SkillsOrb />` 3D visualization alongside

#### [4] Projects Section (`components/sections/Projects.tsx`)
- Horizontal scroll carousel (GSAP ScrollTrigger horizontal)
- Project cards: full-bleed image, category tag, title, hover-reveal description
- Filter: All / Design / Automation / Data

#### [5] Contact Section (`components/sections/Contact.tsx`)
- Minimal form: Name, Email, Message
- `react-hook-form` + Zod validation
- Submits to `/api/contact` (Resend)
- Large expressive CTA text above form

### Prompt Template
```
You are the Sections Agent. Build each portfolio section as isolated components.
Consume 3D components via dynamic imports. Use i18n keys from messages/*.json.
All layouts must be asymmetric — never centered flexbox by default.
All text elements will receive GSAP animations from the Animation Agent next.
Add data-* attributes to elements that need animation: data-animate="text-reveal",
data-animate="fade-up", etc. The Animation Agent will hook into these.
```

---

## Agent 4 — Animation Agent

**Trigger:** After Sections Agent completes

### Responsibilities
- Implement `useGSAP` hooks for each section
- Hero text: staggered clip-path word reveal on mount
- About: scroll-triggered parallax on image, text reveal
- Skills: staggered card entrances on scroll
- Projects: horizontal scroll with ScrollTrigger pinning
- Contact: form field stagger reveal
- Global: custom cursor magnetic effect on all `[data-magnetic]` elements
- Lenis + ScrollTrigger sync (`ScrollTrigger.scrollerProxy`)

### Animation Rules
```ts
// lib/animations/easings.ts
export const EASE_OUT_EXPO = 'power4.out'        // Most reveals
export const EASE_IN_OUT   = 'power2.inOut'      // Transitions
export const EASE_BOUNCE   = 'elastic.out(1, 0.5)' // Playful elements

// Clip-path reveal pattern (preferred over fade)
gsap.from(el, {
  clipPath: 'inset(0 0 100% 0)',
  duration: 1,
  ease: EASE_OUT_EXPO,
  scrollTrigger: { trigger: el, start: 'top 85%' }
})
```

### Prompt Template
```
You are the Animation Agent. You add GSAP animations to existing section components.
Never use CSS transitions or keyframes for scroll-driven animations — only GSAP.
Use clip-path reveals as the default text entrance (not opacity/translate).
Hook into data-animate attributes set by the Sections Agent.
Always cleanup: return () => ctx.revert() from every useEffect.
Lenis and ScrollTrigger must be synced.
```

---

## Agent 5 — QA Agent

**Trigger:** After Animation Agent completes

### Responsibilities
- Run `pnpm typecheck` and fix all TypeScript errors
- Run `pnpm lint` and fix all ESLint errors
- Run `pnpm build` and fix all build errors
- Playwright E2E: test language toggle, contact form submission, scroll behavior
- Accessibility: tab order, aria labels, color contrast
- RTL audit: every section in Arabic mode, check no layout breaks
- Lighthouse audit: target Performance >= 90, Accessibility >= 90
- Mobile: check R3F canvas loads (or gracefully hides) on mobile

### QA Checklist
```
[ ] TypeScript: zero errors
[ ] ESLint: zero errors
[ ] Build: successful
[ ] EN locale: all sections render
[ ] AR locale: RTL correct, no LTR bleed, Arabic fonts load
[ ] Language toggle: switches without page reload
[ ] Contact form: submits, shows success state, email received
[ ] 3D scene: loads, no console WebGL errors
[ ] Mobile: layout intact, 3D gracefully degraded
[ ] Lighthouse Performance >= 90
[ ] Lighthouse Accessibility >= 90
[ ] Custom cursor: appears on desktop, hidden on touch devices
[ ] Smooth scroll: Lenis active, no scroll janking
```

---

## Agent Handoff Protocol

Each agent must:
1. **On start:** Read `CLAUDE.md` + relevant planning docs
2. **On completion:** Run `pnpm typecheck` and `pnpm lint` — fix all errors before declaring done
3. **Never:** Touch files owned by another agent's domain
4. **Document:** Leave inline comments for patterns that may confuse the next agent

### Shared Context Files (read by all agents)
- `CLAUDE.md` — Engineering rules
- `docs/00_PROJECT_OVERVIEW.md` — Vision + structure
- `docs/01_TECH_STACK.md` — Package versions + install patterns
- `docs/02_DESIGN_SYSTEM.md` — Tokens + typography
- `docs/03_SITE_ARCHITECTURE.md` — Section specs

---

## Parallelism Matrix

| Agent | Can run parallel with |
|---|---|
| Foundation | None (runs first) |
| Design System | None (runs second, blocks all) |
| 3D Agent | Content Agent |
| Content Agent | 3D Agent |
| Sections Agent | None (needs 3D + Content done) |
| Animation Agent | None (needs Sections done) |
| QA Agent | None (runs last) |
