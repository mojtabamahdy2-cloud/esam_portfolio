# 📦 Tech Stack & Dependencies

## Core Framework

```bash
# Foundation
pnpm create next-app@latest portfolio --typescript --tailwind --app --use-pnpm
```

| Package | Version | Purpose |
|---|---|---|
| `next` | `^15.x` | App framework, App Router, Server Components |
| `react` | `^19.x` | UI library |
| `react-dom` | `^19.x` | DOM renderer |
| `typescript` | `^5.x` | Type system |

---

## 3D / WebGL Stack (React Three Fiber Ecosystem)

```bash
pnpm add three @react-three/fiber @react-three/drei @react-three/postprocessing
pnpm add @types/three
```

| Package | Version | Purpose |
|---|---|---|
| `three` | `^0.176.x` | Core WebGL engine |
| `@react-three/fiber` | `^9.x` | React renderer for Three.js |
| `@react-three/drei` | `^9.x` | Helpers: OrbitControls, Text, Environment, etc. |
| `@react-three/postprocessing` | `^2.x` | Bloom, ChromaticAberration, glitch effects |

### R3F + Next.js Critical Pattern

> [!IMPORTANT]
> R3F `<Canvas>` uses browser APIs — it MUST be wrapped with `next/dynamic` + `ssr: false`

```tsx
// components/3d/Scene.tsx
'use client'
import { Canvas } from '@react-three/fiber'
// ... 3D scene here

// components/sections/Hero.tsx  
import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('../3d/Scene'), { ssr: false })
```

### Shader / Generative Options
- **Inline GLSL in R3F** via `shaderMaterial` from `@react-three/drei` — preferred
- **`maath`** (`pnpm add maath`) — math helpers for R3F (random, easing functions)
- Custom vertex/fragment shaders for the hero background distortion

---

## Animation Stack

```bash
pnpm add gsap @gsap/react
pnpm add lenis
pnpm add framer-motion
pnpm add splitting
```

| Package | Purpose | Usage |
|---|---|---|
| `gsap` | Scroll-driven animations, timelines, kinetic type | ALL scroll animations |
| `@gsap/react` | React hooks for GSAP (`useGSAP`) | Clean GSAP in components |
| `lenis` | Smooth scroll provider | Wrap entire app |
| `framer-motion` | Component-level animations, layout transitions | Cards, modals, toggle |
| `splitting` | Text character/word splitting for GSAP | Kinetic type reveals |

### GSAP Plugin Registration (do this once at top of file)

```ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)
```

> [!WARNING]
> Always return cleanup in useEffect: `return () => ctx.revert()`

---

## Styling

```bash
pnpm add tailwindcss@^4 @tailwindcss/typography
```

| Package | Purpose |
|---|---|
| `tailwindcss` v4 | Utility-first CSS, RTL utilities built-in |
| `@tailwindcss/typography` | Prose content styling |
| CSS custom properties | Animation tokens, color tokens |

### RTL Support Strategy
Tailwind v4 has native RTL support via `rtl:` variant. Combined with `dir="rtl"` on `<html>`, this handles most layout flipping automatically.

---

## Internationalisation (i18n)

```bash
pnpm add next-intl
```

| Package | Purpose |
|---|---|
| `next-intl` | Next.js 15 App Router-native i18n, locale routing, RTL |

### Why `next-intl` over alternatives?
- **Native App Router support** — no workarounds needed
- **Locale-based routing** (`/en/...`, `/ar/...`) built-in
- **Server Component support** — translations in Server Components
- **Type-safe message keys** with TypeScript

---

## Contact Form

```bash
pnpm add resend
pnpm add zod react-hook-form @hookform/resolvers
```

| Package | Purpose |
|---|---|
| `resend` | Email delivery API (reliable, developer-friendly) |
| `zod` | Schema validation for form data + API routes |
| `react-hook-form` | Performant, accessible form management |
| `@hookform/resolvers` | Zod + react-hook-form integration |

---

## Fonts

### Strategy: `next/font` (zero layout shift, no external requests)

```ts
// app/[locale]/layout.tsx
import { Syne } from 'next/font/google'
import { Inter } from 'next/font/google'

// Arabic — hosted locally or via next/font
```

| Font | Script | Use |
|---|---|---|
| `Syne` | Latin | Display / headings — geometric, bold |
| `Inter` | Latin | Body text — clean, readable |
| `Almarai` | Arabic | Display + body — modern, variable |

> [!NOTE]
> `Almarai` from Google Fonts supports variable weight (300–800). Load via `next/font/google`.

---

## Dev Tooling

```bash
pnpm add -D eslint eslint-config-next prettier
pnpm add -D vitest @vitejs/plugin-react jsdom
pnpm add -D @playwright/test
pnpm add -D @types/node
```

| Package | Purpose |
|---|---|
| `eslint` + `eslint-config-next` | Linting |
| `prettier` | Code formatting |
| `vitest` | Unit testing |
| `@playwright/test` | E2E testing |

---

## Complete Install Script

```bash
# 1. Scaffold project
pnpm create next-app@latest portfolio \
  --typescript --tailwind --app \
  --no-src-dir --import-alias "@/*" \
  --use-pnpm

cd portfolio

# 2. 3D / WebGL
pnpm add three @react-three/fiber @react-three/drei @react-three/postprocessing maath
pnpm add -D @types/three

# 3. Animation
pnpm add gsap @gsap/react lenis framer-motion splitting

# 4. i18n
pnpm add next-intl

# 5. Forms / Email
pnpm add resend zod react-hook-form @hookform/resolvers

# 6. Fonts (via Google in next/font — no install needed)

# 7. Tailwind plugins
pnpm add -D @tailwindcss/typography

# 8. Dev tools
pnpm add -D vitest @vitejs/plugin-react jsdom @playwright/test
```

---

## Version Pinning Strategy

- Pin to **minor versions** (e.g., `^15.3`) not patches
- Lock with `pnpm-lock.yaml` committed to git
- Run `pnpm audit` before final deployment
- `three.js` + `@react-three/fiber` versions **must be compatible** — check peer deps

---

## Environment Variables Required

```env
# .env.local
RESEND_API_KEY=re_...          # Email delivery
NEXT_PUBLIC_SITE_URL=https://... # Used for OG tags
```
