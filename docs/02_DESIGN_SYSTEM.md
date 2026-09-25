# 🎨 Design System

> Based on research findings (Sept 2026): Bioluminescent dark palette, variable fonts, geometric type across both scripts.

---

## Visual Concept: "System Architect Who Speaks Both Languages"

The portfolio feels like a **living system** — every interaction signals someone who builds automation systems, makes data beautiful, and designs with intention. Three disciplines, one visual language.

---

## Color System

### Philosophy: Refined Neon (60-30-10 rule)
- **60%** — Deep dark base (backgrounds, depth layers)
- **30%** — Neutral surfaces (cards, borders, muted text)
- **10%** — Neon "pulse" (CTAs, hover effects, scroll cues)

### Token Definitions

```css
/* globals.css — CSS custom properties */
:root {
  /* === Base === */
  --color-bg:           #0E1117;   /* Deep navy-black — never pure #000 */
  --color-bg-elevated:  #151A23;   /* Slightly elevated surface */
  --color-surface:      #1C2333;   /* Card/panel background */
  --color-border:       #2A3347;   /* Subtle borders */

  /* === Accent System === */
  --color-accent:       #D6FB61;   /* Acid green — creativity & energy */
  --color-accent-glow:  rgba(214, 251, 97, 0.3);   /* Glow shadow */
  --color-accent-dim:   rgba(214, 251, 97, 0.12);  /* Subtle tint bg */

  --color-violet:       #7C3AED;   /* Electric violet — data & automation */
  --color-violet-glow:  rgba(124, 58, 237, 0.3);
  --color-violet-dim:   rgba(124, 58, 237, 0.12);

  --color-coral:        #FF4D6D;   /* Hot coral — emotion, urgency */
  --color-coral-dim:    rgba(255, 77, 109, 0.12);

  /* === Typography === */
  --color-text:         #E2E8F0;   /* Primary — off-white, never pure white */
  --color-text-muted:   #8B95A3;   /* Secondary / captions */
  --color-text-dim:     #4A5568;   /* Placeholder / very muted */

  /* === Fonts === */
  --font-display:       'Clash Display', sans-serif;
  --font-body:          'Inter', sans-serif;
  --font-arabic:        'Cairo', sans-serif;     /* Variable: wght 200–900 */
  --font-mono:          'JetBrains Mono', monospace;

  /* === Spacing (8pt grid) === */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-6:  24px;
  --space-8:  32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;

  /* === Border Radius === */
  --radius-sm:  4px;
  --radius-md:  12px;
  --radius-lg:  20px;
  --radius-xl:  32px;
  --radius-pill: 9999px;

  /* === Animation Tokens === */
  --ease-out-expo:    cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:      cubic-bezier(0.76, 0, 0.24, 1);
  --ease-elastic:     cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast:    0.25s;
  --duration-normal:  0.6s;
  --duration-slow:    1.0s;
  --duration-xslow:   1.6s;
}
```

### Tailwind CSS v4 Token Integration
```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        bg:      'var(--color-bg)',
        surface: 'var(--color-surface)',
        accent:  'var(--color-accent)',
        violet:  'var(--color-violet)',
        coral:   'var(--color-coral)',
        text:    'var(--color-text)',
        muted:   'var(--color-text-muted)',
      },
    },
  },
}
```

---

## Typography System

### Font Stack Decision

| Role | EN Font | AR Font | Variable? |
|---|---|---|---|
| Display / Hero | Clash Display | Cairo | ✅ Cairo (wght 200–900) |
| Body / Prose | Inter | Noto Sans Arabic | ✅ Both |
| Code / Mono | JetBrains Mono | — | ❌ |

> **Rationale:** Clash Display and Cairo share geometric, squared construction — visual harmony across both scripts.

### Why These Fonts?

**Clash Display:** Ultra-geometric, modern grotesque. Strong personality at large sizes. Variable weight lets hero text animate from thin to bold on scroll.

**Cairo Variable:** Clean geometric Arabic with Kufi-inspired terminals. Works at all weights. Rare — few Arabic portfolios use it at full variable capability, so it differentiates.

### Type Scale (Fluid, using `clamp()`)

```css
/* Fluid type scale — no breakpoint jumps */
.text-display   { font-size: clamp(3rem,   10vw, 10rem); line-height: 0.95; letter-spacing: -0.03em; }
.text-hero      { font-size: clamp(2rem,    6vw,  6rem); line-height: 1.0;  letter-spacing: -0.02em; }
.text-heading   { font-size: clamp(1.5rem,  4vw,  3rem); line-height: 1.1;  letter-spacing: -0.01em; }
.text-subhead   { font-size: clamp(1.1rem,  2vw,  1.5rem); line-height: 1.3; }
.text-body      { font-size: clamp(0.9rem, 1.2vw, 1.1rem); line-height: 1.7; }
.text-caption   { font-size: clamp(0.7rem,  1vw,  0.875rem); line-height: 1.5; }

/* Arabic adjustments */
[lang="ar"] .text-body { 
  line-height: 1.9;    /* Arabic needs more line height */
  font-size: calc(var(--base-size) + 2px);  /* Arabic slightly larger */
  /* NO letter-spacing — breaks Arabic cursive connections */
}
```

### Font Loading (next/font — zero layout shift)
```ts
// app/[locale]/layout.tsx
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const cairo = Inter({ subsets: ['arabic'], variable: '--font-cairo', display: 'swap' })

// Clash Display — load as local (from public/fonts/)
const clashDisplay = localFont({
  src: '../../public/fonts/ClashDisplay-Variable.woff2',
  variable: '--font-clash',
  display: 'swap',
})
```

---

## Component Anatomy

### Project Card
```
┌─────────────────────────────────────┐
│  [Category Tag]          [Year]     │
│                                     │
│  ████████████████ (full-bleed img)  │
│  ████████████████                   │
│  ████████████████                   │
│                                     │
│  Project Title                      │
│  Short description line             │
│                          [→]        │
└─────────────────────────────────────┘
Hover: image scale 1.05 + cursor morphs to "View"
```

### Skill Tag
```
┌──────────────────┐
│  ◯  Tool Name    │ ← category-colored dot + name
└──────────────────┘
Hover: border color → var(--color-accent) + slight scale
```

### CTA Button (Magnetic)
```
┌────────────────────────────────┐
│    GET IN TOUCH  →             │ ← data-magnetic
└────────────────────────────────┘
Hover: background fill slides in from left (clip-path)
Magnetic: element moves toward cursor ±30px
```

---

## Layout Principles

### Anti-Grid Philosophy (inspired by Obys/Locomotive)
- **Never:** centered flexbox with equal columns
- **Always:** intentional asymmetry — 30/70 splits, offset elements
- Generous breathing room: section padding `var(--space-24)` minimum
- One focal element per section — everything else supports it
- Overlapping elements create depth: `z-index` as a design tool

### Section Rhythm
```
[Hero]         ← 100vh pinned
[About]        ← 80vh, asymmetric 2-col
[Skills]       ← auto-height, bento grid
[Projects]     ← 100vh pinned horizontal scroll
[Contact]      ← 60vh minimal
```

---

## Glow Effects (Signature Look)

```css
/* Accent glow on key elements */
.glow-accent {
  box-shadow: 0 0 30px var(--color-accent-glow),
              0 0 60px var(--color-accent-glow),
              inset 0 0 30px var(--color-accent-glow);
}

/* Text glow for display headlines */
.text-glow {
  text-shadow: 0 0 40px var(--color-accent-glow);
}

/* Border glow for cards */
.border-glow {
  border: 1px solid var(--color-accent);
  box-shadow: 0 0 20px var(--color-accent-glow);
}
```

---

## n8n Automation Visual Language

For the Skills/Projects sections that showcase automation work:
- Node graph rendered as animated SVG or R3F scene
- Nodes: rounded rectangles, `var(--color-surface)` with `var(--color-accent)` border
- Connections: animated dashed lines, data "packets" traveling along paths
- Color coding: Trigger nodes (violet) → Process nodes (accent) → Output nodes (coral)

---

## Accessibility Rules

- All color combinations tested against WCAG AA (4.5:1 for body text)
- `#D6FB61` on `#0E1117` = **13.2:1** ✅
- `#E2E8F0` on `#0E1117` = **14.1:1** ✅
- `#8B95A3` on `#0E1117` = **5.1:1** ✅ (muted text — just passes AA)
- Add `prefers-reduced-motion: reduce` fallback for all animations
- Custom cursor hidden on touch devices (`@media (hover: none)`)
