# 🎬 Animation System

> All scroll animations: GSAP + ScrollTrigger  
> All component animations: Framer Motion  
> Smooth scroll: Lenis  
> Text splitting: Splitting.js + GSAP SplitText  
> NO CSS keyframes for any scroll-driven or entrance animations

---

## Rule: Clip-Path Reveals Are the Default

```ts
// ✅ CORRECT — premium clip-path reveal
gsap.from(element, {
  clipPath: 'inset(0 100% 0 0)',   // slides in from left
  duration: 1.2,
  ease: 'power4.out',
})

// ❌ WRONG — never use this for text/section reveals
gsap.from(element, { opacity: 0, y: 20, duration: 0.5 })
```

---

## Lenis Setup

```tsx
// components/ui/LenisProvider.tsx
'use client'
import Lenis from 'lenis'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return <>{children}</>
}
```

---

## Shared Easing Values

```ts
// lib/animations/easings.ts
export const EASE = {
  outExpo:    'power4.out',
  outQuart:   'power4.out',
  inOutQuart: 'power2.inOut',
  elastic:    'elastic.out(1, 0.5)',
  smooth:     'none',
} as const

export const DURATION = {
  fast:   0.4,
  normal: 0.8,
  slow:   1.2,
  xslow:  2.0,
} as const
```

---

## useGSAP Pattern (React 19 compatible)

```tsx
// Every component using GSAP
'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // All GSAP code here — auto-cleanup, no memory leaks
    gsap.from('.hero-title', {
      clipPath: 'inset(0 0 100% 0)',
      duration: 1.2,
      stagger: 0.1,
      ease: 'power4.out',
    })
  }, { scope: containerRef })

  return <div ref={containerRef}>...</div>
}
```

---

## Section-by-Section Animation Blueprint

### [1] Hero Section
| Element | Animation | Trigger |
|---|---|---|
| Background (3D) | Loads instantly, interactive mouse | On mount |
| Name (large type) | Clip-path reveal, left to right, per-word | On mount, 0.3s delay |
| Role subtitle | Stagger character reveal | After name, 0.6s |
| CTA button | Scale up from 0.8, fade | After subtitle |
| Scroll indicator | Pulse + translate-y loop | On mount |

### [2] About Section
| Element | Animation | Trigger |
|---|---|---|
| Section label | Clip-path slide from left | scroll: top 80% |
| Statement headline | Per-word clip-path reveal, stagger | scroll: top 75% |
| Portrait image | Parallax -30px on scroll | scroll-driven |
| Bio text | Fade + slide up (only text, not heading) | scroll: top 70% |
| Stat items | Count-up number animation | scroll: top 60% |

### [3] Skills Section
| Element | Animation | Trigger |
|---|---|---|
| Tab labels | Stagger slide from bottom | scroll: top 80% |
| Skill cards | Stagger scale-in from 0.85 | On tab show |
| 3D Orb | Continuous rotation, speed on hover | Always |
| Category change | Framer Motion layout animation | On tab click |

### [4] Projects Section
| Element | Animation | Trigger |
|---|---|---|
| Horizontal scroll | GSAP ScrollTrigger pin + horizontal | scroll-driven |
| Project card | Subtle scale on scroll position | Per card |
| Image hover | Clip-path expand + scale 1.05 | On hover |
| Project title | Stagger word reveal | scroll: per card |

```ts
// Horizontal scroll pattern
ScrollTrigger.create({
  trigger: '.projects-track',
  start: 'top top',
  end: () => `+=${trackWidth - windowWidth}`,
  pin: true,
  scrub: 1,
  onUpdate: (self) => {
    gsap.set('.projects-inner', { x: -(self.progress * (trackWidth - windowWidth)) })
  },
})
```

### [5] Contact Section
| Element | Animation | Trigger |
|---|---|---|
| Big CTA text | Per-word reveal | scroll: top 80% |
| Form fields | Stagger slide from right | scroll: top 70% |
| Submit button | Magnetic + scale on hover | hover |

---

## Custom Cursor

```tsx
// components/ui/CustomCursor.tsx
'use client'
// Ring cursor that follows mouse with lag
// Morphs to: crosshair on images, text-cursor on text, expand on links
// Hidden on touch devices via media query

const CURSOR_VARIANTS = {
  default: { scale: 1 },
  link:    { scale: 2.5, opacity: 0.5 },
  image:   { scale: 3, borderRadius: '4px' },
}
```

### Magnetic Button Effect
```ts
// Apply to all [data-magnetic] elements
const magnetic = (el: HTMLElement) => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power2.out' })
  })
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' })
  })
}
```

---

## Text Splitting Pattern

```tsx
// Using GSAP SplitText (preferred) or Splitting.js
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

const split = new SplitText(headingEl, { type: 'words,chars' })

gsap.from(split.words, {
  clipPath: 'inset(0 0 110% 0)',
  duration: 0.9,
  stagger: 0.06,
  ease: 'power4.out',
})
```

---

## RTL Animation Considerations

> [!IMPORTANT]
> When the site switches to Arabic (RTL), directional animations must flip.

```ts
// Use a helper to get direction-aware values
const dir = document.documentElement.dir // 'ltr' or 'rtl'
const fromX = dir === 'rtl' ? '100%' : '-100%'

gsap.from(el, { clipPath: `inset(0 ${dir === 'rtl' ? '0' : '100%'} 0 ${dir === 'rtl' ? '100%' : '0'})` })
```

---

## Performance Rules

- All ScrollTrigger instances stored and killed on component unmount
- `gsap.context()` / `useGSAP` scope for automatic cleanup
- R3F scenes: use `frameloop="demand"` when not constantly animating
- Framer Motion: use `layoutId` for shared-element transitions
- Never animate `width`/`height` — use `scaleX`/`scaleY` instead
- Batch DOM reads before writes in GSAP animations
