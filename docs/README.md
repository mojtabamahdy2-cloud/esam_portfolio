# 📁 Planning Documents — Master Index

> Personal Portfolio Build Plan  
> Owner: Mohamed Al-Mojtaba | Generated: September 2026

---

## Documents

| # | File | Contents |
|---|---|---|
| 00 | [PROJECT_OVERVIEW](./00_PROJECT_OVERVIEW.md) | Vision, identity pillars, color palette, file structure |
| 01 | [TECH_STACK](./01_TECH_STACK.md) | All npm packages, install commands, env vars |
| 02 | [DESIGN_SYSTEM](./02_DESIGN_SYSTEM.md) | Color tokens, typography, components, layout principles |
| 03 | [SITE_ARCHITECTURE](./03_SITE_ARCHITECTURE.md) | Component tree, section wireframes, data models, API |
| 04 | [ANIMATION_SYSTEM](./04_ANIMATION_SYSTEM.md) | GSAP patterns, Lenis, cursor, section-by-section animation |
| 05 | [I18N_STRATEGY](./05_I18N_STRATEGY.md) | next-intl setup, RTL rules, Arabic typography, language toggle |
| 06 | [AGENTS_WORKFLOW](./06_AGENTS_WORKFLOW.md) | 6-agent build plan, prompt templates, handoff protocol |
| 07 | [CONTENT_PLAN](./07_CONTENT_PLAN.md) | All copy (EN+AR), project data, assets checklist |
| 08 | [ANTI_AI_SLOP](./anti_AI_slop.md) | Deconstructing AI slop UI tropes, audit matrix & craft principles |

---

## Build Phases at a Glance

```
Phase 0  ──  Foundation Agent
             Scaffold Next.js 15, install all deps, configure routes

Phase 1  ──  Design System Agent
             Tokens, fonts, cursor, smooth scroll, nav, language toggle

Phase 2  ──  3D Agent                   +   Content Agent  (parallel)
             R3F hero scene, skills orb     EN + AR copy, project data

Phase 3  ──  Sections Agent
             Hero, About, Skills, Projects, Contact components

Phase 4  ──  Animation Agent
             GSAP timelines, ScrollTrigger, Lenis sync, text reveals

Phase 5  ──  QA Agent
             Typecheck, lint, build, Playwright, accessibility, Lighthouse
```

---

## ⚠️ Critical Warnings (Read Before Starting)

> [!WARNING]
> **`framer-motion` is DEPRECATED.** Use the `motion` package instead.  
> Import from `"motion/react"` — NOT `"framer-motion"`.

> [!WARNING]
> **`@studio-freight/lenis` is DEPRECATED.** Use `lenis` directly.

> [!WARNING]
> **R3F Canvas MUST use `next/dynamic` with `ssr: false`.**  
> Any `<Canvas>` imported without this will crash the Next.js build.

> [!WARNING]
> **`framer-motion` → `motion` package rename also affects import paths:**  
> `useMotionValue`, `useSpring`, `AnimatePresence` all still exist — just import from `motion/react`.

> [!IMPORTANT]
> **next-intl async params:** In Next.js 15, `params` must be awaited:  
> `const { locale } = await params` — not destructured directly.

> [!IMPORTANT]
> **Tailwind v4 CSS import changed:**  
> Use `@import "tailwindcss"` — not `@tailwind base/components/utilities`.

---

## Final Package Install (Corrected + Complete)

```bash
# Core
pnpm create next-app@latest portfolio \
  --typescript --tailwind --app --no-src-dir \
  --import-alias "@/*" --use-pnpm

cd portfolio

# 3D / WebGL
pnpm add three@0.185.x \
  @react-three/fiber@9.7.0 \
  @react-three/drei@10.7.8 \
  @react-three/postprocessing@3.0.5 \
  maath leva

pnpm add -D @types/three r3f-perf

# Animation (note: motion NOT framer-motion)
pnpm add gsap @gsap/react lenis motion

# i18n
pnpm add next-intl

# Forms / Email
pnpm add resend react-email react-hook-form zod @hookform/resolvers

# Styling Utilities
pnpm add clsx class-variance-authority tailwind-merge zustand

# Dev
pnpm add -D @tailwindcss/postcss vitest @vitejs/plugin-react @playwright/test
```

---

## next.config.ts Required

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei',
    'maath',
  ],
}
export default nextConfig
```

---

## Key Design Decisions Summary

| Decision | Choice | Why |
|---|---|---|
| 3D approach | React Three Fiber + GLSL shaders | Full ecosystem, custom shaders possible |
| Animation library | `motion` (fka framer-motion) | Latest, React 19 compatible |
| i18n | `next-intl` | Native App Router, Server Components, ICU plurals |
| Email | `resend` + Server Actions | Server-side only, no API key exposure |
| State | `zustand` | Optimal for R3F — prevents React re-renders in 3D tree |
| Fonts | Cairo Variable + IBM Plex | Bilingual geometric harmony |
| Color | Acid green `#D6FB61` + violet `#7C3AED` | Designer + data dual identity |
| Cursor | DIY with `motion` useSpring + mix-blend-difference | Awwwards signature look |
| Scroll | Lenis synced to GSAP ticker | Smooth + ScrollTrigger compatible |

---

## More info:  

1. **Real name** —  "Mohamed Al-Mojtaba"
2. **Real stats** — years of experience: 5+ years, number of projects: 12+, hours automated:100+
3. **Actual tools list** — Photoshop, Illustrator, Premiere, Capcut, n8n, Python, SQL
4. **Projects** — showcase some of the projects in the pdf portfolio
5. **Domain/email** — mojtabamahdy2@gmail.com for Resend setup and OG tags
6. **Social links** — LinkedIn: www.linkedin.com/in/mojtaba-mahdy2 , GitHub: https://github.com/mojtabamahdy2-cloud
7. **Profile photo** —  prefer abstract/3D portrait, use the image in "graphic design/profile_popout.jpg" for inspiration.

