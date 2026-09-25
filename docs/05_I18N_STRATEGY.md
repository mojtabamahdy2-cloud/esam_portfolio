# 🌐 Internationalisation (i18n) Strategy

## Approach: next-intl with App Router locale routing

Single codebase. Two routes: `/en/...` and `/ar/...`. Direction (`dir`) is part of document state, not a separate site.

---

## Routing Architecture

```
app/
├── [locale]/
│   ├── layout.tsx       ← Sets lang + dir on <html>
│   └── page.tsx         ← Main portfolio page
├── api/
│   └── contact/route.ts ← Not locale-specific
middleware.ts            ← next-intl routing middleware
```

### Supported Locales
```ts
// lib/i18n/config.ts
export const locales = ['en', 'ar'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'en'
export const localeDirection: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ar: 'rtl',
}
```

---

## Middleware Setup

```ts
// middleware.ts
import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from '@/lib/i18n/config'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',  // always show /en/ or /ar/ in URL
})

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
```

---

## Layout with `dir` and `lang`

```tsx
// app/[locale]/layout.tsx
import { localeDirection } from '@/lib/i18n/config'
import type { Locale } from '@/lib/i18n/config'

type Props = { children: React.ReactNode; params: { locale: Locale } }

export default function LocaleLayout({ children, params: { locale } }: Props) {
  return (
    <html
      lang={locale}
      dir={localeDirection[locale]}
      className={`${clashDisplay.variable} ${inter.variable} ${cairo.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
```

---

## Message File Structure

```json
// messages/en.json
{
  "nav": {
    "about": "About",
    "skills": "Skills",
    "projects": "Projects",
    "contact": "Contact"
  },
  "hero": {
    "greeting": "Hello, I'm",
    "name": "Mohamed Al-Mojtaba",
    "roles": ["Graphic Designer", "Automation Specialist", "Data Analyst"],
    "cta": "See My Work",
    "scrollHint": "Scroll to explore"
  },
  "about": {
    "sectionLabel": "About Me",
    "headline": "I design, automate, and find meaning in data.",
    "bio": "...",
    "stats": {
      "projects": "{count} Projects",
      "tools": "{count}+ Tools",
      "languages": "{count} Languages"
    }
  },
  "skills": {
    "sectionLabel": "Skills & Tools",
    "tabs": {
      "design": "Design",
      "automation": "Automation",
      "data": "Data"
    }
  },
  "projects": {
    "sectionLabel": "Selected Work",
    "filter": {
      "all": "All",
      "design": "Design",
      "automation": "Automation",
      "data": "Data"
    },
    "viewProject": "View Project"
  },
  "contact": {
    "sectionLabel": "Get In Touch",
    "headline": "Let's build something remarkable.",
    "form": {
      "name": "Your Name",
      "email": "Your Email",
      "message": "Your Message",
      "submit": "Send Message",
      "success": "Message sent! I'll get back to you soon.",
      "error": "Something went wrong. Please try again."
    }
  }
}
```

```json
// messages/ar.json — Arabic mirror (example excerpt)
{
  "nav": {
    "about": "عن",
    "skills": "المهارات",
    "projects": "أعمالي",
    "contact": "تواصل"
  },
  "hero": {
    "greeting": "مرحباً، أنا",
    "name": "محمد المجتبى",
    "roles": ["مصمم جرافيك", "متخصص أتمتة", "محلل بيانات"],
    "cta": "اطّلع على أعمالي",
    "scrollHint": "مرر للاستكشاف"
  }
}
```

> [!IMPORTANT]
> Arabic copy must be written by a native speaker or carefully reviewed. Never auto-translate from English for a professional portfolio.

---

## RTL Implementation Rules

### ✅ Use CSS Logical Properties (RTL-safe by default)
```css
/* ✅ Correct — automatically mirrors in RTL */
.card { margin-inline-start: 2rem; padding-inline: 1.5rem; }
.arrow { inset-inline-end: 1rem; }

/* ❌ Wrong — hard-coded to LTR */
.card { margin-left: 2rem; padding-left: 1.5rem; }
.arrow { right: 1rem; }
```

### What Mirrors vs. What Stays LTR

| Element | In RTL | Notes |
|---|---|---|
| Navigation flow | ✅ Mirror | Right-to-left reading |
| Text alignment | ✅ Mirror | Automatic with `text-align: start` |
| Layout columns | ✅ Mirror | Use `flex-direction: row` (mirrors auto) |
| Arrow/chevron icons | ✅ Mirror | Use `[dir="rtl"] .arrow { transform: scaleX(-1) }` |
| Media/play controls | ❌ Keep LTR | Universal convention |
| Phone numbers / URLs | ❌ Keep LTR | Use `dir="ltr"` on element |
| Code snippets | ❌ Keep LTR | Always `dir="ltr"` on `<code>` |
| Data charts | ❌ Keep LTR | Scientific convention |

---

## Language Toggle Component

```tsx
// components/ui/LanguageToggle.tsx
'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

export function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en'
    // Replace /en/... with /ar/... (or vice versa)
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`)
    router.push(newPath)
  }

  return (
    <button
      onClick={switchLocale}
      data-magnetic
      className="lang-toggle font-mono text-sm uppercase tracking-wider"
      aria-label={locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      {locale === 'en' ? 'ع' : 'EN'}
    </button>
  )
}
```

### Toggle Animation (Framer Motion)
```tsx
// Smooth layout flip when switching direction
<motion.div layout layoutRoot>
  {/* Page content */}
</motion.div>
```

---

## Arabic Typography Rules (Critical)

```css
/* Apply to all Arabic text */
[lang="ar"] {
  font-family: var(--font-arabic), sans-serif;
  line-height: 1.9;        /* More space between Arabic lines */
  /* NO letter-spacing — breaks Arabic cursive letter connections */
}

/* Arabic body text needs slightly larger font size */
[lang="ar"] .text-body {
  font-size: calc(1em + 2px);
}

/* Bidirectional inline text (phone numbers, URLs within AR text) */
.ltr-in-rtl {
  direction: ltr;
  display: inline-block;
  unicode-bidi: embed;
}
```

---

## SEO: Bilingual Meta Tags

```tsx
// app/[locale]/page.tsx
export function generateMetadata({ params: { locale } }: Props) {
  return {
    alternates: {
      canonical: `https://yoursite.com/${locale}`,
      languages: {
        'en': 'https://yoursite.com/en',
        'ar': 'https://yoursite.com/ar',
      },
    },
  }
}
```

---

## Animation Direction Awareness

When locale is Arabic (RTL), certain GSAP animations must flip their directional axis:

```ts
// lib/animations/directionAware.ts
export function getDirectionalClipPath(dir: 'ltr' | 'rtl') {
  // Reveal from the "start" side (left in LTR, right in RTL)
  return dir === 'rtl'
    ? 'inset(0 0 0 100%)'   // reveal from right
    : 'inset(0 100% 0 0)'   // reveal from left
}

// Usage in GSAP
const dir = document.documentElement.dir as 'ltr' | 'rtl'
gsap.from(el, {
  clipPath: getDirectionalClipPath(dir),
  duration: 1.2,
  ease: 'power4.out',
})
```
