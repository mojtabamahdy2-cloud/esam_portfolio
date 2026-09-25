# 🚀 Personal Portfolio — Project Overview

> **Owner:** Mohamed Al-Mojtaba  
> **Roles:** Graphic Designer · Low-Code Automation (n8n) · Data Analyst  
> **Target Audience:** Recruiters  
> **Aesthetic:** Experimental / Generative / 3D-Heavy (Awwwards-level)  
> **Languages:** English + Arabic (RTL toggle)

---

## Vision Statement

Build a recruiter-facing personal portfolio that **immediately signals creative excellence and technical depth**. The site should feel like an interactive experience — not a resume — leveraging 3D WebGL, kinetic typography, and generative motion to communicate three distinct professional identities in one cohesive narrative.

---

## Core Identity Pillars

| Pillar | What It Communicates | How It Looks |
|---|---|---|
| 🎨 Graphic Designer | Visual thinking, craftsmanship, aesthetic sensitivity | Bold typography, curated project imagery, color mastery |
| ⚙️ n8n Automation | Systems thinking, workflow intelligence, technical breadth | Animated flow graph / node visualisation in 3D |
| 📊 Data Analyst | Pattern recognition, clarity from complexity | Data-driven visualisations, precision layout |

---

## Sections Architecture

```
/ (root — single page, scroll-driven)
├── [1] Hero           — Full-screen 3D + kinetic type
├── [2] About          — Split layout, asymmetric, personal narrative
├── [3] Skills Stack   — Animated tech grid / 3D orbital visualization
├── [4] Projects       — Horizontal scroll showcase (Graphic, Automation, Data)
├── [5] Contact        — Minimal, expressive form
└── (Global) Language Toggle EN ↔ AR, Custom Cursor, Smooth Scroll
```

---

## Tech Stack Decision Summary

| Category | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSR, performance, Vercel deployment |
| UI Language | TypeScript (strict) | Type safety across all agents |
| Styling | Tailwind CSS v4 | Utility-first, RTL utilities |
| Package Manager | pnpm | Fast, disk-efficient |
| 3D Engine | React Three Fiber + Drei + Postprocessing | Full R3F ecosystem |
| Animation | GSAP + ScrollTrigger + Lenis | Industry standard scroll-driven animation |
| Component Animation | Framer Motion | React-native micro-interactions |
| i18n | next-intl | Best Next.js 15 App Router support, RTL-aware |
| Contact Form | Resend (API) + Zod validation | Reliable, simple, no SMTP headaches |
| Deployment | Vercel (Edge Runtime) | Zero-config, preview URLs |

---

## Design System Summary

### Color Palette (Dark Theme — Primary)
```
Background:    #0A0A0A  (near-black)
Surface:       #111111  (card/panel)
Primary Accent:#C8FF00  (electric lime — energy, creativity)
Secondary:     #FF3B3B  (hot coral — emotion, urgency)
Tertiary:      #4D4DFF  (electric indigo — data, precision)
Text Primary:  #F2F2F2
Text Muted:    #888888
```

> **Rationale from design samples:** The existing work (Calaheads card) uses deep teal/blue + white + red accents. The ShareTaxi logo uses bold geometric yellow + black. We abstract this into a dark-base, one-bold-accent palette for maximum premium feel.

### Typography Strategy
- **Display (Latin):** `Syne` or `Cabinet Grotesk` — wide, geometric, expressive
- **Body (Latin):** `Inter` or `DM Sans` — clean, readable
- **Display+Body (Arabic):** `Almarai` or `Tajawal` — modern, variable weight, clean
- **Variable font preference** for both scripts to enable animation

### Motion Language
- Clip-path text reveals (never simple fade)
- Magnetic hover effects on all interactive elements
- GSAP ScrollTrigger for all scroll-driven entrances
- Custom cursor: ring + follower, changes shape on interactive elements

---

## File Structure (Planned)

```
personal-portfolio/
├── docs/                          ← Planning docs (this folder)
│   ├── 00_PROJECT_OVERVIEW.md
│   ├── 01_TECH_STACK.md
│   ├── 02_DESIGN_SYSTEM.md
│   ├── 03_SITE_ARCHITECTURE.md
│   ├── 04_ANIMATION_SYSTEM.md
│   ├── 05_I18N_STRATEGY.md
│   ├── 06_AGENTS_WORKFLOW.md
│   └── 07_CONTENT_PLAN.md
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── api/
│       └── contact/route.ts
├── components/
│   ├── 3d/
│   ├── sections/
│   ├── ui/
│   └── animations/
├── lib/
│   ├── i18n/
│   ├── animations/
│   └── env.ts
├── messages/
│   ├── en.json
│   └── ar.json
├── public/
│   ├── fonts/
│   ├── images/
│   └── models/
└── CLAUDE.md
```

---

## Success Metrics

- [ ] Lighthouse Performance >= 90
- [ ] Lighthouse Accessibility >= 90
- [ ] First Contentful Paint < 1.5s
- [ ] No layout shift on language toggle
- [ ] Works on mobile (R3F degrades gracefully)
- [ ] Contact form delivers email reliably
- [ ] Arabic RTL renders perfectly with no LTR bleed
