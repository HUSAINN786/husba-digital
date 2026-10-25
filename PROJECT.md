# HUSBA DIGITAL — Portfolio Website

## Building a Modern Digital Branding Agency Website

This is a full technical and creative breakdown of the HUSBA DIGITAL portfolio website — built from scratch as a high-performance, animation-rich, multi-page React application.

---

## 1. Project Overview

**Client:** HUSBA DIGITAL — a digital branding & content agency specializing in social media management, content creation, and brand identity.

**Goal:** Build a visually striking portfolio site that matches the agency's creative caliber. Dark theme, purple brand palette, smooth scrolling, scroll-triggered animations, and a premium feel throughout.

**Scope:** 4 pages — Home, Projects, About, Contact — with shared Navbar and Footer.

---

## 2. Tech Stack

| Layer | Tool | Version | Purpose |
|---|---|---|---|
| Build | Vite | 5.x | Dev server, HMR, production builds |
| Framework | React | 18.x | Component-based UI |
| Routing | React Router DOM | 6.x | Client-side SPA routing |
| Styling | Tailwind CSS | 3.x | Utility-first CSS framework |
| Animations | GSAP + ScrollTrigger | 3.15 | Scroll-triggered reveals, staggered entrances, timeline animations |
| Smooth Scroll | Lenis | 1.x | Butter-smooth scroll physics |
| 3D | Three.js + React Three Fiber + Drei | 0.185 | 3D scenes (installed, ready for integration) |
| Icons | Lucide React | 0.294 | Clean, consistent icon system |
| PostCSS | Autoprefixer | 10.x | Vendor prefixing |
| Language | JavaScript (ES Modules) | — | No TypeScript (for speed) |

### Why this stack?
- **Vite** over CRA/Webpack — instant HMR, native ESM, fast builds
- **GSAP** over Framer Motion for scroll work — ScrollTrigger gives precise control over scrub, pin, and stagger timelines
- **Lenis** — lightweight, physics-based smooth scroll that integrates cleanly with GSAP's ScrollTrigger
- **Three.js/R3F** — installed for future 3D hero scenes and interactive elements
- **Tailwind** — rapid prototyping with consistent design tokens

---

## 3. Brand Identity

### Color Palette

| Name | Hex | Usage |
|---|---|---|
| **Primary Purple** | `#643D91` | Main brand color, buttons, CTAs, gradients, nav logo |
| **Light Violet** | `#A78BFA` | Accent highlights, gradient endpoints, hover states |
| **Dark Navy** | `#0F172A` | Background base, dark sections |
| **White** | `#FFFFFF` | Headlines, body text on dark backgrounds |

#### Extended Palette (Tailwind `brand` scale)

```
brand-50:  #f3f0f9   (lightest tint)
brand-100: #e0d9f0
brand-200: #c4b5e0
brand-300: #a78bfa   ← accent / gradient endpoint
brand-400: #8b6be0   ← hover state for primary
brand-500: #643D91   ← PRIMARY
brand-600: #5a3682   ← active/pressed state
brand-700: #4a2d6b
brand-800: #3a2355
brand-900: #2a1a3e
brand-950: #0F172A   ← matches dark background
```

#### Dark Scale

```
dark:      #0F172A   (default body bg)
dark-50:   #f8fafc
dark-100:  #f1f5f9
...
dark-900:  #0f172a
dark-950:  #020617   (deepest black)
```

### Typography

| Role | Font | Weights | Source |
|---|---|---|---|
| **Body / Sans** | Inter | 300, 400, 500, 600, 700, 800, 900 | Google Fonts |
| **Display / Headlines** | Cal Sans (fallback: Inter) | — | Self-hosted or system |

- **Headline sizes:** `text-5xl` (3rem) → `text-7xl` (4.5rem) → `text-[120px]` (hero)
- **Body:** 16px base, `text-white/40` for secondary, `text-white` for primary
- **Tracking:** Headlines use `tracking-tight`, uppercase labels use `tracking-[0.3em]`
- **Line height:** Headlines `leading-[0.95]`, body `leading-relaxed`

### Visual Effects

- **Text gradient:** `from-brand-300 via-brand-500 to-brand-300` — purple shimmer on key headlines
- **Glass morphism:** `bg-white/5 backdrop-blur-xl border border-white/10` — cards, navbar
- **Film grain overlay:** SVG-based fractal noise, fixed position, 50% opacity, pointer-events: none
- **Purple glow orbs:** Large blurred circles (`blur-[120px]`) with `brand-500/20` opacity for ambient lighting
- **Grid lines:** Subtle `white/[0.02]` lines in hero background

---

## 4. Design System — Tailwind Utilities

### Component Classes (defined in `index.css`)

| Class | Description |
|---|---|
| `.btn-primary` | Rounded-full purple button with glow on hover, scale animation |
| `.btn-secondary` | Ghost button with white/20 border, brand tint on hover |
| `.glass` | White/5 bg + backdrop blur + white/10 border |
| `.glass-dark` | Darker variant using brand-950/60 |
| `.text-gradient` | Purple gradient text (brand-300 → brand-500 → brand-300) |
| `.text-gradient-light` | White → brand-300 → white gradient text |
| `.section-padding` | Consistent horizontal + vertical padding across pages |
| `.container-custom` | Max-width 7xl centered container |
| `.grain-overlay` | Full-viewport film grain texture |

### Animations

| Name | Effect |
|---|---|
| `float` | Y-axis bob (0 → -20px → 0), 6s loop |
| `float-delayed` | Same, 2s delay for staggered orbs |
| `float-slow` | 8s variant for subtle movement |
| `pulse-glow` | Box-shadow pulse in brand purple |
| `spin-slow` | 20s continuous rotation |
| `grain` | Position shift for film grain animation |

---

## 5. Page Structure & Architecture

```
src/
├── main.jsx              # React DOM entry
├── App.jsx               # Router + Lenis + GSAP setup + grain overlay
├── index.css             # Tailwind base + component classes
├── components/
│   ├── Navbar.jsx        # Fixed nav, glass on scroll, mobile menu
│   ├── Footer.jsx        # 4-column footer with GSAP reveal
│   ├── Hero.jsx          # Animated hero with orbs + grid + GSAP timeline
│   ├── Services.jsx      # 6-card grid with scroll-triggered stagger
│   └── HomeSections.jsx  # Stats bar + CTA section (shared exports)
└── pages/
    ├── Home.jsx          # Hero → Services → Stats → CTA
    ├── Projects.jsx      # Filterable project grid + category tabs
    ├── About.jsx         # Values → Timeline → Team → Stats → CTA
    └── Contact.jsx       # Form + sidebar info + FAQ accordion
```

### Routing

| Path | Page |
|---|---|
| `/` | Home |
| `/projects` | Projects |
| `/about` | About |
| `/contact` | Contact |

---

## 6. Animation Patterns

### GSAP Setup (in `App.jsx`)

```javascript
// Lenis smooth scroll integrated with GSAP
const lenis = new Lenis({ duration: 1.2, easing: ... })
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
```

### Common Patterns Used

**1. Hero entrance (timeline)**
```
tl.from(headline, { y: 120, opacity: 0, rotateX: 40, duration: 1.2 })
  .from(subtitle, { y: 40, opacity: 0 }, '-=0.6')
  .from(ctaButtons, { y: 30, opacity: 0, stagger: 0.1 }, '-=0.4')
```

**2. Scroll-triggered stagger (cards, values, etc.)**
```
gsap.from('.service-card', {
  y: 80, opacity: 0,
  stagger: 0.1,
  scrollTrigger: { trigger: '.service-grid', start: 'top 80%' }
})
```

**3. Ambient floating (orbs)**
```
gsap.to(orbRef, {
  y: -30, x: 20,
  duration: 6, repeat: -1, yoyo: true,
  ease: 'sine.inOut'
})
```

**4. Mobile menu (height anim)**
```
gsap.to(menuRef, { height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 })
```

**5. Scroll-to-top on route change**
```
useEffect(() => { window.scrollTo(0, 0) }, [pathname])
```

---

## 7. Component Breakdown

### Navbar
- Fixed position, z-50
- Transparent → glass-dark on scroll (50px threshold)
- Desktop: horizontal links with underline hover animation
- Mobile: hamburger with GSAP height/opacity slide
- Logo: Purple square icon + "HUSBA DIGITAL" text

### Hero
- Full viewport height, centered content
- Two large purple glow orbs (animated floating)
- Subtle grid lines (5 vertical, 4 horizontal) at 2% opacity
- Headline: "We Craft / Digital Magic" with overflow-hidden clip reveal
- Dual CTA: Primary "View Our Work" + Secondary "Get in Touch"
- Scroll indicator: bouncing dot in bordered pill

### Services
- 6 cards in responsive grid (1 → 2 → 3 cols)
- Each card: icon in purple-tinted box, title, description
- Hover: border shifts to brand-500/30, background tints purple
- Staggered scroll-triggered entrance

### Stats
- 4-column grid: 150+ Projects, 50+ Clients, 12+ Team, 5+ Years
- Gradient text for numbers, muted labels
- Staggered entrance on scroll

### Projects
- Category filter tabs (All, Branding, Social Media, Content, Digital)
- Project cards: numbered placeholder, tags, category label, title, description
- Hover: gradient background shift, tag reveal
- Filtered with React state, re-animates on change

### About
- Hero section with large headline + description
- Values grid: 6 cards with icons
- Timeline: vertical line with dot markers, 6 milestones (2019–2024)
- Team grid: initials in gradient boxes, name, role
- Stats bar + CTA

### Contact
- 2-column layout: sidebar info + form
- Sidebar: contact info (email, phone, location) + quick facts
- Form: name, email, project type, budget, message — all with validation
- FAQ accordion: 5 questions with details/summary + animated caret

### Footer
- 4-column: brand + description, Services links, Company links, Contact info
- Social icons (Instagram, LinkedIn, Mail)
- Copyright bar
- GSAP scroll reveal on all sections

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | `< 768px` | Single column, hamburger nav, stacked CTAs |
| Tablet | `768px–1024px` | 2-column grids, visible nav |
| Desktop | `> 1024px` | 3-column grids, full nav, side-by-side layouts |

---

## 9. Performance Considerations

- **Vite** for instant HMR and optimized production builds
- **Lenis** over native scroll — lightweight, no layout thrashing
- **GSAP** over CSS animations — GPU-accelerated, no jank
- **Lucide** tree-shakeable icons — only imports what's used
- **Google Fonts** with `display=swap` — no FOIT
- **Tailwind purge** — only ships used CSS (23.57 KB gzipped → 5.08 KB)
- **Production JS bundle:** 343 KB (114 KB gzipped)
- **Production CSS bundle:** 23 KB (5 KB gzipped)

---

## 10. Development

```bash
# Install dependencies
npm install

# Start dev server (port 5000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 11. File Inventory

| File | Lines | Purpose |
|---|---|---|
| `tailwind.config.js` | 74 | Brand colors, fonts, animations, keyframes |
| `vite.config.js` | 11 | Dev server config (port 5000) |
| `postcss.config.js` | 5 | Tailwind + Autoprefixer |
| `index.html` | 16 | Entry HTML with meta tags |
| `src/index.css` | 112 | Tailwind layers + component classes |
| `src/main.jsx` | 10 | React root mount |
| `src/App.jsx` | 63 | Router + Lenis + GSAP + grain overlay |
| `src/components/Navbar.jsx` | 112 | Fixed navigation with mobile menu |
| `src/components/Footer.jsx` | 100 | 4-column footer |
| `src/components/Hero.jsx` | 110 | Animated hero section |
| `src/components/Services.jsx` | 90 | Services grid |
| `src/components/HomeSections.jsx` | 95 | Stats + CTA sections |
| `src/pages/Home.jsx` | 15 | Home page composition |
| `src/pages/Projects.jsx` | 175 | Projects with filtering |
| `src/pages/About.jsx` | 195 | About with timeline + team |
| `src/pages/Contact.jsx` | 210 | Contact form + FAQ |

---

## 12. Future Enhancements

- **Three.js 3D hero** — Replace static orbs with interactive 3D scene using React Three Fiber
- **Rive animations** — Add interactive motion graphics for service icons
- **GSAP page transitions** — Wrap routes with GSAP-powered enter/exit animations
- **CMS integration** — Webflow or headless CMS for project content
- **Dark/light toggle** — Currently dark-only, could add theme switcher
- **Form backend** — Connect contact form to API endpoint
- **SEO** — Add React Helmet for per-page meta tags
- **Analytics** — Posthog or Plausible integration
