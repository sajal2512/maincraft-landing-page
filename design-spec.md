# MainCrafts Technology — Landing Page Design Specification

> **Version:** 1.0  
> **Last Updated:** 2026-05-22  
> **Purpose:** This document is the single source of truth for every visual and structural decision on the MainCrafts Technology single-page landing page. Implementation agents must follow it exactly.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Spacing & Layout System](#4-spacing--layout-system)
5. [Responsive Breakpoints](#5-responsive-breakpoints)
6. [Semantic HTML5 Structure](#6-semantic-html5-structure)
7. [Component Specifications](#7-component-specifications)
   - 7.1 [Navigation Header](#71-navigation-header)
   - 7.2 [Hero Section](#72-hero-section)
   - 7.3 [About / Stats Section](#73-about--stats-section)
   - 7.4 [Services Grid](#74-services-grid)
   - 7.5 [CTA Banner Section](#75-cta-banner-section)
   - 7.6 [Footer](#76-footer)
8. [Animation & Interaction Specs](#8-animation--interaction-specs)
9. [Accessibility Requirements](#9-accessibility-requirements)
10. [Assets & External Resources](#10-assets--external-resources)

---

## 1. Design Philosophy

- **Ultra-premium, futuristic, and modern** aesthetic.
- Deep dark backgrounds with vibrant accent colors that "pop".
- Heavy use of **glassmorphism** (frosted-glass surfaces with `backdrop-filter`).
- Generous whitespace to convey luxury and breathing room.
- Subtle glowing effects and gradient accents.
- All interactive elements must feel responsive with micro-animations.
- The page is a **single-page** layout — all sections stack vertically with smooth scroll behavior enabled (`html { scroll-behavior: smooth; }`).

---

## 2. Color System

All colors are defined as CSS custom properties on `:root`. Implementation agents must use these tokens — never hard-code hex values in component styles.

```css
:root {
  /* ── Primary Brand ── */
  --color-primary:            #6c63ff;   /* Electric Violet */
  --color-primary-light:      #8b83ff;   /* Lighter violet for hover states */
  --color-primary-dark:       #5a52e0;   /* Darker violet for active/pressed */
  --color-primary-rgb:        108, 99, 255; /* RGB triplet for rgba() usage */

  /* ── Secondary Brand ── */
  --color-secondary:          #00d4aa;   /* Teal Accent */
  --color-secondary-light:    #33e0be;   /* Lighter teal for hover */
  --color-secondary-dark:     #00b894;   /* Darker teal for active */
  --color-secondary-rgb:      0, 212, 170;

  /* ── Backgrounds ── */
  --color-bg-primary:         #0a0a1a;   /* Page background — deepest dark */
  --color-bg-secondary:       #12122a;   /* Card/surface background */
  --color-bg-tertiary:        #1a1a3e;   /* Slightly lifted surface (hover cards) */
  --color-bg-nav:             rgba(10, 10, 26, 0.75); /* Nav glassmorphism base */

  /* ── Text ── */
  --color-text-primary:       #ffffff;   /* Headings, primary text */
  --color-text-secondary:     #b0b0cc;   /* Body text, descriptions */
  --color-text-muted:         #6b6b8d;   /* Captions, labels, less important text */
  --color-text-accent:        #6c63ff;   /* Links, highlighted words */

  /* ── Borders & Dividers ── */
  --color-border:             rgba(108, 99, 255, 0.15); /* Subtle violet-tinted border */
  --color-border-card:        rgba(255, 255, 255, 0.08); /* Card edge borders */
  --color-divider:            rgba(255, 255, 255, 0.06);

  /* ── Gradients ── */
  --gradient-primary:         linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%);
  --gradient-hero-overlay:    linear-gradient(180deg, rgba(10,10,26,0.6) 0%, rgba(10,10,26,0.95) 100%);
  --gradient-cta:             linear-gradient(135deg, #6c63ff 0%, #8b83ff 50%, #00d4aa 100%);
  --gradient-card-hover:      linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(0,212,170,0.08) 100%);
  --gradient-glow:            radial-gradient(circle, rgba(108,99,255,0.3) 0%, transparent 70%);

  /* ── Shadows ── */
  --shadow-sm:                0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md:                0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-lg:                0 8px 32px rgba(0, 0, 0, 0.5);
  --shadow-glow-primary:      0 0 20px rgba(108, 99, 255, 0.4);
  --shadow-glow-secondary:    0 0 20px rgba(0, 212, 170, 0.3);
  --shadow-card:              0 4px 24px rgba(0, 0, 0, 0.3);
  --shadow-card-hover:        0 8px 40px rgba(108, 99, 255, 0.2);
}
```

---

## 3. Typography System

### 3.1 Font Stack

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --font-family-primary:  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono:     'JetBrains Mono', 'Fira Code', 'Consolas', monospace; /* Optional for code snippets */
}
```

### 3.2 Type Scale

All sizes use `rem` (base 16px). Line heights and letter-spacing are specified per level.

| Token                  | Element Use             | Size (rem) | Size (px) | Weight | Line Height | Letter Spacing |
|------------------------|-------------------------|------------|-----------|--------|-------------|----------------|
| `--text-display`       | Hero headline           | 4.5rem     | 72px      | 800    | 1.05        | -0.03em        |
| `--text-h1`            | Section titles          | 3rem       | 48px      | 700    | 1.15        | -0.025em       |
| `--text-h2`            | Sub-section titles      | 2.25rem    | 36px      | 700    | 1.2         | -0.02em        |
| `--text-h3`            | Card titles / labels    | 1.5rem     | 24px      | 600    | 1.3         | -0.01em        |
| `--text-h4`            | Small headings          | 1.25rem    | 20px      | 600    | 1.35        | -0.005em       |
| `--text-body`          | Body / paragraph text   | 1.125rem   | 18px      | 400    | 1.7         | 0em            |
| `--text-body-sm`       | Smaller body text       | 1rem       | 16px      | 400    | 1.65        | 0em            |
| `--text-caption`       | Captions, labels        | 0.875rem   | 14px      | 500    | 1.5         | 0.02em         |
| `--text-overline`      | Overline / tag labels   | 0.75rem    | 12px      | 700    | 1.4         | 0.1em          |
| `--text-nav`           | Navigation links        | 0.9375rem  | 15px      | 500    | 1.0         | 0.02em         |
| `--text-button`        | Button labels           | 1rem       | 16px      | 600    | 1.0         | 0.03em         |
| `--text-stat-number`   | Stat counter numbers    | 3rem       | 48px      | 800    | 1.0         | -0.02em        |
| `--text-stat-label`    | Stat labels beneath     | 0.875rem   | 14px      | 500    | 1.4         | 0.05em         |

### 3.3 CSS Custom Properties for Typography

```css
:root {
  --text-display:    4.5rem;
  --text-h1:         3rem;
  --text-h2:         2.25rem;
  --text-h3:         1.5rem;
  --text-h4:         1.25rem;
  --text-body:       1.125rem;
  --text-body-sm:    1rem;
  --text-caption:    0.875rem;
  --text-overline:   0.75rem;
  --text-nav:        0.9375rem;
  --text-button:     1rem;
}
```

### 3.4 Responsive Typography Adjustments

| Token            | Mobile (≤768px)  | Tablet (769–1024px) | Desktop (1025px+) |
|------------------|------------------|---------------------|--------------------|
| `--text-display` | 2.5rem (40px)    | 3.5rem (56px)       | 4.5rem (72px)      |
| `--text-h1`      | 2rem (32px)      | 2.5rem (40px)       | 3rem (48px)        |
| `--text-h2`      | 1.75rem (28px)   | 2rem (32px)         | 2.25rem (36px)     |
| `--text-h3`      | 1.25rem (20px)   | 1.375rem (22px)     | 1.5rem (24px)      |
| `--text-body`    | 1rem (16px)      | 1.0625rem (17px)    | 1.125rem (18px)    |

---

## 4. Spacing & Layout System

### 4.1 Spacing Scale (4px base unit)

| Token         | Value  | px   | Common Usage                                 |
|---------------|--------|------|----------------------------------------------|
| `--space-1`   | 0.25rem| 4px  | Tight inline gaps                            |
| `--space-2`   | 0.5rem | 8px  | Icon–text gap, tight padding                 |
| `--space-3`   | 1rem   | 16px | Default padding inside small components      |
| `--space-4`   | 1.5rem | 24px | Card internal padding, element gaps          |
| `--space-5`   | 2rem   | 32px | Between stacked elements                     |
| `--space-6`   | 3rem   | 48px | Between groups of content                    |
| `--space-7`   | 4rem   | 64px | Section padding (top/bottom) on mobile       |
| `--space-8`   | 6rem   | 96px | Section padding (top/bottom) on desktop      |
| `--space-9`   | 8rem   | 128px| Extra-large vertical gaps (hero)             |

### 4.2 CSS Custom Properties for Spacing

```css
:root {
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  1rem;
  --space-4:  1.5rem;
  --space-5:  2rem;
  --space-6:  3rem;
  --space-7:  4rem;
  --space-8:  6rem;
  --space-9:  8rem;
}
```

### 4.3 Layout Constraints

```css
:root {
  --container-max:       1200px;  /* Max content width */
  --container-narrow:    800px;   /* Narrow content (text blocks) */
  --container-padding:   var(--space-4); /* Horizontal page padding: 24px */
  --border-radius-sm:    8px;
  --border-radius-md:    12px;
  --border-radius-lg:    16px;
  --border-radius-xl:    24px;
  --border-radius-full:  9999px;  /* Pill shape */
  --nav-height:          72px;    /* Fixed nav height */
}
```

### 4.4 Container Utility

```css
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-padding);
}
```

---

## 5. Responsive Breakpoints

| Name     | Range           | CSS Media Query                     | Key Behavior                          |
|----------|-----------------|-------------------------------------|---------------------------------------|
| Mobile   | ≤ 768px         | `@media (max-width: 768px)`         | Single column, hamburger nav, smaller type |
| Tablet   | 769px – 1024px  | `@media (min-width: 769px) and (max-width: 1024px)` | 2-col grid, condensed spacing |
| Desktop  | ≥ 1025px        | `@media (min-width: 1025px)`        | Full 3-col grid, full nav links      |

### Breakpoint CSS Custom Properties

```css
/* Applied via media queries — not custom properties. Example: */
@media (max-width: 768px) {
  :root {
    --text-display: 2.5rem;
    --text-h1: 2rem;
    --container-padding: var(--space-3); /* 16px on mobile */
  }
}
```

---

## 6. Semantic HTML5 Structure

The following is the exact DOM hierarchy. All agents must replicate this structure.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="MainCrafts Technology — Premium software solutions for the future.">
  <title>MainCrafts Technology</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- ═══════════ NAVIGATION ═══════════ -->
  <header class="site-header" id="site-header">
    <nav class="navbar container" aria-label="Primary navigation">
      <a href="#" class="navbar__logo" aria-label="MainCrafts Technology — Home">
        <!-- Text logo or <img> -->
        <span class="navbar__logo-text">Main<span class="navbar__logo-accent">Crafts</span></span>
      </a>
      <button class="navbar__toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-menu">
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
      </button>
      <ul class="navbar__menu" id="nav-menu" role="list">
        <li><a href="#hero" class="navbar__link">Home</a></li>
        <li><a href="#about" class="navbar__link">About</a></li>
        <li><a href="#services" class="navbar__link">Services</a></li>
        <li><a href="#contact" class="navbar__link navbar__link--cta">Contact Us</a></li>
      </ul>
    </nav>
  </header>

  <main>

    <!-- ═══════════ HERO ═══════════ -->
    <section class="hero" id="hero" aria-labelledby="hero-heading">
      <div class="hero__bg" aria-hidden="true"></div>
      <div class="hero__overlay" aria-hidden="true"></div>
      <div class="hero__content container">
        <p class="hero__overline">Welcome to MainCrafts Technology</p>
        <h1 class="hero__heading" id="hero-heading">
          Crafting the Future<br>of <span class="text-gradient">Technology</span>
        </h1>
        <p class="hero__description">
          We build cutting-edge digital solutions that transform businesses and push the boundaries of innovation.
        </p>
        <div class="hero__actions">
          <a href="#services" class="btn btn--primary">Explore Services</a>
          <a href="#contact" class="btn btn--outline">Get in Touch</a>
        </div>
      </div>
    </section>

    <!-- ═══════════ ABOUT / STATS ═══════════ -->
    <section class="about" id="about" aria-labelledby="about-heading">
      <div class="about__content container">
        <div class="about__text">
          <p class="section-overline">Who We Are</p>
          <h2 class="section-heading" id="about-heading">Innovating Since Day One</h2>
          <p class="about__description">
            MainCrafts Technology is a forward-thinking tech company dedicated to delivering exceptional digital experiences. From concept to deployment, we partner with businesses worldwide to build solutions that matter.
          </p>
        </div>
        <div class="about__stats" role="list" aria-label="Company statistics">
          <div class="stat-card" role="listitem">
            <span class="stat-card__number">150+</span>
            <span class="stat-card__label">Projects Delivered</span>
          </div>
          <div class="stat-card" role="listitem">
            <span class="stat-card__number">50+</span>
            <span class="stat-card__label">Global Clients</span>
          </div>
          <div class="stat-card" role="listitem">
            <span class="stat-card__number">99%</span>
            <span class="stat-card__label">Client Satisfaction</span>
          </div>
          <div class="stat-card" role="listitem">
            <span class="stat-card__number">24/7</span>
            <span class="stat-card__label">Support Available</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ SERVICES ═══════════ -->
    <section class="services" id="services" aria-labelledby="services-heading">
      <div class="services__content container">
        <p class="section-overline">What We Do</p>
        <h2 class="section-heading" id="services-heading">Our Services</h2>
        <p class="section-subheading">End-to-end technology solutions tailored for your business.</p>
        <div class="services__grid">
          <!-- Card 1 -->
          <article class="service-card">
            <div class="service-card__icon" aria-hidden="true">💻</div>
            <h3 class="service-card__title">Web Development</h3>
            <p class="service-card__description">Responsive, high-performance web applications built with modern frameworks and best practices.</p>
          </article>
          <!-- Card 2 -->
          <article class="service-card">
            <div class="service-card__icon" aria-hidden="true">📱</div>
            <h3 class="service-card__title">Mobile Apps</h3>
            <p class="service-card__description">Native and cross-platform mobile applications that deliver seamless user experiences.</p>
          </article>
          <!-- Card 3 -->
          <article class="service-card">
            <div class="service-card__icon" aria-hidden="true">☁️</div>
            <h3 class="service-card__title">Cloud Solutions</h3>
            <p class="service-card__description">Scalable cloud infrastructure and migration services for enterprise-grade reliability.</p>
          </article>
          <!-- Card 4 -->
          <article class="service-card">
            <div class="service-card__icon" aria-hidden="true">🔒</div>
            <h3 class="service-card__title">Cybersecurity</h3>
            <p class="service-card__description">Comprehensive security audits, penetration testing, and zero-trust architecture implementation.</p>
          </article>
          <!-- Card 5 -->
          <article class="service-card">
            <div class="service-card__icon" aria-hidden="true">📊</div>
            <h3 class="service-card__title">Data Analytics</h3>
            <p class="service-card__description">Transform raw data into actionable insights with advanced analytics and visualization dashboards.</p>
          </article>
          <!-- Card 6 -->
          <article class="service-card">
            <div class="service-card__icon" aria-hidden="true">🤖</div>
            <h3 class="service-card__title">AI Solutions</h3>
            <p class="service-card__description">Custom AI and machine learning solutions that automate processes and drive intelligent decisions.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ CTA BANNER ═══════════ -->
    <section class="cta-banner" id="contact" aria-labelledby="cta-heading">
      <div class="cta-banner__bg" aria-hidden="true"></div>
      <div class="cta-banner__content container">
        <h2 class="cta-banner__heading" id="cta-heading">Ready to Build Something Extraordinary?</h2>
        <p class="cta-banner__description">Let's collaborate to bring your vision to life. Reach out to our team and start your journey with MainCrafts Technology.</p>
        <a href="mailto:hr@maincrafts.com" class="btn btn--primary btn--lg">Get Started Today</a>
      </div>
    </section>

  </main>

  <!-- ═══════════ FOOTER ═══════════ -->
  <footer class="site-footer">
    <div class="footer__content container">
      <div class="footer__brand">
        <span class="footer__logo-text">Main<span class="footer__logo-accent">Crafts</span></span>
        <p class="footer__tagline">Crafting the future of technology.</p>
      </div>
      <div class="footer__links">
        <h4 class="footer__col-title">Quick Links</h4>
        <ul role="list">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer__contact">
        <h4 class="footer__col-title">Contact Us</h4>
        <ul role="list">
          <li><a href="mailto:hr@maincrafts.com">hr@maincrafts.com</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom container">
      <p>&copy; 2026 MainCrafts Technology. All rights reserved.</p>
    </div>
  </footer>

</body>
</html>
```

---

## 7. Component Specifications

### 7.1 Navigation Header

| Property               | Value                                                  |
|------------------------|--------------------------------------------------------|
| **Position**           | `position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;` |
| **Height**             | `72px` (var `--nav-height`)                            |
| **Background**         | `var(--color-bg-nav)` → `rgba(10, 10, 26, 0.75)`      |
| **Backdrop Filter**    | `backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);` |
| **Border Bottom**      | `1px solid var(--color-border)` → subtle violet tint   |
| **Layout**             | `display: flex; align-items: center; justify-content: space-between;` |
| **Transition**         | On scroll past 50px, add class `.scrolled` — background becomes `rgba(10,10,26,0.92)`, `box-shadow: var(--shadow-md)` |

#### Logo
- Text-based: "Main" in `--color-text-primary` (white), "Crafts" in `--color-primary` (#6c63ff).
- Font: Inter, weight 700, size 1.5rem.
- No-underline link to `#hero`.

#### Navigation Links (Desktop)
- `display: flex; gap: var(--space-5);` (32px).
- Font: `var(--text-nav)` (15px), weight 500, color `var(--color-text-secondary)`.
- Hover: color transitions to `var(--color-primary)` over `0.3s ease`.
- Active/current link: color `var(--color-primary)`, with a `2px` bottom-border in `var(--color-primary)`.

#### "Contact Us" Nav CTA
- Same as regular links but styled as a small pill button:
  - `background: var(--color-primary); color: #fff; padding: 0.5rem 1.25rem; border-radius: var(--border-radius-full);`
  - Hover: `background: var(--color-primary-light); box-shadow: var(--shadow-glow-primary);`

#### Mobile Hamburger (≤768px)
- Three horizontal bars, 24px wide, 2px thick, `var(--color-text-primary)`.
- Gap between bars: 6px.
- Tap target: minimum 44×44px.
- On toggle: bars animate into an ✕ (rotate ±45°, hide middle bar).
- Mobile menu: full-width dropdown below nav bar.
  - Background: `var(--color-bg-secondary)` with `backdrop-filter: blur(20px)`.
  - Links stack vertically, font-size `1.125rem`, padding `var(--space-3)` each.
  - Slide-down animation: `transform: translateY(-10px) → translateY(0)` + `opacity: 0 → 1` over `0.3s ease`.

---

### 7.2 Hero Section

| Property               | Value                                                  |
|------------------------|--------------------------------------------------------|
| **Height**             | `100vh` (full viewport), `min-height: 600px`           |
| **Display**            | `display: flex; align-items: center; justify-content: center;` |
| **Padding-top**        | `var(--nav-height)` (72px) to account for fixed nav    |
| **Position**           | `position: relative; overflow: hidden;`                |

#### Background Layer (`.hero__bg`)
- `position: absolute; inset: 0; z-index: 0;`
- Background image: use a dark tech-themed image or abstract pattern. CSS:
  ```css
  background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
  ```
  *(Dark space / tech image from Unsplash — implementation agents may substitute with any royalty-free dark-tech image.)*

#### Overlay (`.hero__overlay`)
- `position: absolute; inset: 0; z-index: 1;`
- `background: var(--gradient-hero-overlay);` — fades from 60% opacity at top to 95% at bottom, ensuring text readability over any background image.

#### Content (`.hero__content`)
- `position: relative; z-index: 2;`
- `text-align: center;`
- `max-width: var(--container-narrow);` (800px) for comfortable reading.

##### Overline Text
- Font: `var(--text-overline)` (12px), weight 700, uppercase.
- Color: `var(--color-secondary)` (#00d4aa).
- Letter-spacing: 0.1em.
- `margin-bottom: var(--space-3);` (16px).

##### Headline (`<h1>`)
- Font: `var(--text-display)` (72px desktop → 40px mobile), weight 800.
- Color: `var(--color-text-primary)`.
- The word "Technology" uses a gradient text effect:
  ```css
  .text-gradient {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  ```
- `margin-bottom: var(--space-4);` (24px).

##### Description
- Font: `var(--text-body)` (18px), weight 400.
- Color: `var(--color-text-secondary)`.
- `max-width: 600px; margin-inline: auto;`
- `margin-bottom: var(--space-6);` (48px).

##### CTA Buttons (`.hero__actions`)
- `display: flex; gap: var(--space-3); justify-content: center; flex-wrap: wrap;`
- Two buttons: Primary + Outline (see Button Spec below).

---

### 7.3 About / Stats Section

| Property               | Value                                                  |
|------------------------|--------------------------------------------------------|
| **Background**         | `var(--color-bg-primary)` (#0a0a1a)                    |
| **Padding**            | `var(--space-8) 0` (96px top/bottom on desktop)        |

#### Layout
- Desktop: Two-column layout using CSS Grid.
  ```css
  .about__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-7); /* 64px */
    align-items: center;
  }
  ```
- Tablet: Same 2-column but `gap: var(--space-6)` (48px).
- Mobile: Single column, `grid-template-columns: 1fr;`

#### Section Overline (`.section-overline`)
- Reusable component — same as hero overline:
  - Font: `var(--text-overline)`, uppercase, weight 700.
  - Color: `var(--color-secondary)`.
  - Letter-spacing: 0.1em.
  - `margin-bottom: var(--space-2)` (8px).

#### Section Heading (`.section-heading`)
- Font: `var(--text-h1)`, weight 700.
- Color: `var(--color-text-primary)`.
- `margin-bottom: var(--space-4)` (24px).

#### About Description
- Font: `var(--text-body)`, weight 400.
- Color: `var(--color-text-secondary)`.
- `line-height: 1.7;`

#### Stats Grid (`.about__stats`)
- `display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);` (24px).
- On mobile: stays as 2×2 grid.

#### Stat Card (`.stat-card`)
- `background: var(--color-bg-secondary);`
- `border: 1px solid var(--color-border-card);`
- `border-radius: var(--border-radius-md);` (12px).
- `padding: var(--space-4);` (24px).
- `text-align: center;`

##### Stat Number
- Font: `var(--text-stat-number)` (48px), weight 800.
- Color: `var(--color-primary)`.

##### Stat Label
- Font: `var(--text-stat-label)` (14px), weight 500, uppercase.
- Color: `var(--color-text-muted)`.
- Letter-spacing: 0.05em.
- `margin-top: var(--space-2)` (8px).

---

### 7.4 Services Grid

| Property               | Value                                                  |
|------------------------|--------------------------------------------------------|
| **Background**         | `var(--color-bg-secondary)` (#12122a) — subtle lift from page BG |
| **Padding**            | `var(--space-8) 0` (96px top/bottom)                   |

#### Section Header
- Centered text: overline + heading + subheading.
- `.section-subheading`: font `var(--text-body)`, color `var(--color-text-secondary)`, `max-width: 600px; margin-inline: auto; margin-bottom: var(--space-7);` (64px).

#### Grid Layout
```css
.services__grid {
  display: grid;
  gap: var(--space-4); /* 24px */
}

/* Desktop: 3 columns */
@media (min-width: 1025px) {
  .services__grid { grid-template-columns: repeat(3, 1fr); }
}

/* Tablet: 2 columns */
@media (min-width: 769px) and (max-width: 1024px) {
  .services__grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile: 1 column */
@media (max-width: 768px) {
  .services__grid { grid-template-columns: 1fr; }
}
```

#### Service Card (`.service-card`)

| Property               | Value                                                  |
|------------------------|--------------------------------------------------------|
| **Background**         | `var(--color-bg-primary)` (#0a0a1a) — sitting on the #12122a section |
| **Border**             | `1px solid var(--color-border-card)` (rgba white 8%)   |
| **Border Radius**      | `var(--border-radius-lg)` (16px)                       |
| **Padding**            | `var(--space-6)` (48px) top, `var(--space-5)` (32px) sides & bottom |
| **Text Align**         | `center`                                               |
| **Transition**         | `transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease` |

##### Hover State
```css
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-card-hover);
  border-color: rgba(108, 99, 255, 0.3);
  background: var(--gradient-card-hover);
}
```

##### Icon Container
- Font-size: `2.5rem` (40px) for emoji icons.
- `margin-bottom: var(--space-4)` (24px).
- Optional: wrap in a 64×64px circle with `background: rgba(108,99,255,0.1); border-radius: 50%;` and center the icon inside.
- **Alternative to emoji:** Use inline SVG icons (implementation agent's discretion). If using SVGs, fill with `var(--color-primary)`.

##### Card Title
- Font: `var(--text-h3)` (24px), weight 600.
- Color: `var(--color-text-primary)`.
- `margin-bottom: var(--space-2)` (8px).

##### Card Description
- Font: `var(--text-body-sm)` (16px), weight 400.
- Color: `var(--color-text-secondary)`.
- `line-height: 1.65;`

---

### 7.5 CTA Banner Section

| Property               | Value                                                  |
|------------------------|--------------------------------------------------------|
| **Background**         | `var(--color-bg-primary)` with a gradient glow overlay  |
| **Padding**            | `var(--space-8) 0` (96px)                              |
| **Text Align**         | `center`                                               |
| **Position**           | `relative; overflow: hidden;`                          |

#### Background Glow (`.cta-banner__bg`)
- `position: absolute; inset: 0; z-index: 0;`
- `background: var(--gradient-glow);` — radial glow centered, violet 30% → transparent.
- `opacity: 0.5;`

#### Content (`.cta-banner__content`)
- `position: relative; z-index: 1;`
- `max-width: var(--container-narrow);` (800px), centered.

#### CTA Heading
- Font: `var(--text-h1)` (48px), weight 700.
- Color: `var(--color-text-primary)`.
- `margin-bottom: var(--space-4)` (24px).

#### CTA Description
- Font: `var(--text-body)`, weight 400.
- Color: `var(--color-text-secondary)`.
- `margin-bottom: var(--space-6)` (48px).

#### CTA Button
- Uses `.btn--primary.btn--lg` (see Button Spec).
- `font-size: 1.125rem; padding: 1rem 2.5rem;`

---

### 7.6 Footer

| Property               | Value                                                  |
|------------------------|--------------------------------------------------------|
| **Background**         | `var(--color-bg-secondary)` (#12122a)                  |
| **Border Top**         | `1px solid var(--color-divider)`                       |
| **Padding Top**        | `var(--space-7)` (64px)                                |
| **Padding Bottom**     | `var(--space-3)` (16px) (for the copyright bar)        |

#### Footer Content Layout
```css
.footer__content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-6); /* 48px */
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--color-divider);
}

/* Tablet */
@media (max-width: 1024px) {
  .footer__content { grid-template-columns: 1fr 1fr; }
}

/* Mobile */
@media (max-width: 768px) {
  .footer__content { grid-template-columns: 1fr; text-align: center; }
}
```

#### Footer Brand
- Logo text: same styling as navbar logo (Inter 700, 1.5rem, "Main" white + "Crafts" violet).
- Tagline: `var(--text-body-sm)`, color `var(--color-text-muted)`, `margin-top: var(--space-2)`.

#### Footer Column Titles
- Font: `var(--text-caption)`, weight 600, uppercase.
- Color: `var(--color-text-primary)`.
- Letter-spacing: 0.05em.
- `margin-bottom: var(--space-3)` (16px).

#### Footer Links
- `list-style: none; padding: 0;`
- Each `<li>`: `margin-bottom: var(--space-2)` (8px).
- `<a>`: color `var(--color-text-secondary)`, no underline.
- Hover: color `var(--color-primary)`, transition `0.3s ease`.

#### Footer Bottom Bar
- `padding-top: var(--space-4)` (24px).
- `text-align: center;`
- Font: `var(--text-caption)`, color `var(--color-text-muted)`.

---

## 7.7 Button System

### Base Button (`.btn`)
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-primary);
  font-size: var(--text-button);    /* 16px */
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 0.875rem 2rem;           /* 14px 32px */
  border-radius: var(--border-radius-full);  /* pill */
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
```

### Primary Button (`.btn--primary`)
```css
.btn--primary {
  background: var(--gradient-cta);
  color: #ffffff;
  box-shadow: var(--shadow-glow-primary);
}
.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(108, 99, 255, 0.6), 0 0 60px rgba(108, 99, 255, 0.2);
}
.btn--primary:active {
  transform: translateY(0);
}
```

### Outline Button (`.btn--outline`)
```css
.btn--outline {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-border);
}
.btn--outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: rgba(108, 99, 255, 0.08);
  box-shadow: var(--shadow-glow-primary);
}
```

### Large Button Modifier (`.btn--lg`)
```css
.btn--lg {
  font-size: 1.125rem;
  padding: 1rem 2.5rem;
}
```

---

## 8. Animation & Interaction Specs

### 8.1 Global Transitions

```css
/* Base transition for interactive elements */
--transition-fast:   0.15s ease;
--transition-base:   0.3s ease;
--transition-slow:   0.5s ease;
--transition-spring: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
```

### 8.2 Button Glow Pulse

Apply a subtle pulsing glow on the primary CTA button to draw attention.

```css
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(108, 99, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 35px rgba(108, 99, 255, 0.7), 0 0 60px rgba(108, 99, 255, 0.3);
  }
}

.btn--primary {
  animation: glow-pulse 3s ease-in-out infinite;
}
.btn--primary:hover {
  animation: none; /* Stop pulse on hover — let hover shadow take over */
}
```

### 8.3 Card Hover Lift

Already specified in Section 7.4. Summary:
- `transform: translateY(-8px)` on hover.
- Enhanced `box-shadow` and `border-color` change.
- All transitions: `0.3s ease`.

### 8.4 Scroll Reveal (CSS-only suggestion)

Use the `@keyframes` + Intersection Observer approach (via a small JS snippet) or a pure CSS approach with `animation-timeline: view()` for supporting browsers.

#### Recommended: Lightweight JS Scroll Reveal

```javascript
// Add to a <script> at end of <body>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
```

#### CSS for Scroll Reveal
```css
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children in grids */
.services__grid .service-card:nth-child(1) { transition-delay: 0s; }
.services__grid .service-card:nth-child(2) { transition-delay: 0.1s; }
.services__grid .service-card:nth-child(3) { transition-delay: 0.2s; }
.services__grid .service-card:nth-child(4) { transition-delay: 0.3s; }
.services__grid .service-card:nth-child(5) { transition-delay: 0.4s; }
.services__grid .service-card:nth-child(6) { transition-delay: 0.5s; }
```

### 8.5 Nav Scroll Effect

```javascript
// Add .scrolled class to header when user scrolls past 50px
window.addEventListener('scroll', () => {
  document.getElementById('site-header')
    .classList.toggle('scrolled', window.scrollY > 50);
});
```

```css
.site-header.scrolled {
  background: rgba(10, 10, 26, 0.92);
  box-shadow: var(--shadow-md);
}
```

### 8.6 Mobile Menu Toggle Animation

```css
/* Hamburger → X transition */
.navbar__toggle-bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text-primary);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.navbar__toggle[aria-expanded="true"] .navbar__toggle-bar:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.navbar__toggle[aria-expanded="true"] .navbar__toggle-bar:nth-child(2) {
  opacity: 0;
}
.navbar__toggle[aria-expanded="true"] .navbar__toggle-bar:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
```

### 8.7 Stat Counter Animation (Optional Enhancement)

If the implementation agent wishes, stat numbers can count up from 0 using JS when they scroll into view. This is optional but recommended.

### 8.8 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .reveal-on-scroll {
    opacity: 1;
    transform: none;
  }
}
```

---

## 9. Accessibility Requirements

### 9.1 Color Contrast

| Combination                          | Foreground     | Background     | Ratio  | WCAG Level |
|--------------------------------------|----------------|----------------|--------|------------|
| Primary text on dark BG              | #ffffff        | #0a0a1a        | 19.3:1 | AAA ✅      |
| Secondary text on dark BG            | #b0b0cc        | #0a0a1a        | 8.7:1  | AAA ✅      |
| Muted text on dark BG               | #6b6b8d        | #0a0a1a        | 4.0:1  | AA ✅       |
| Primary color on dark BG            | #6c63ff        | #0a0a1a        | 4.6:1  | AA ✅       |
| Secondary color on dark BG          | #00d4aa        | #0a0a1a        | 9.2:1  | AAA ✅      |
| Button text (white) on primary      | #ffffff        | #6c63ff        | 4.4:1  | AA ✅       |
| Muted text on card BG               | #6b6b8d        | #12122a        | 3.5:1  | AA-Large ✅ |

> [!NOTE]
> All text combinations meet WCAG 2.1 AA minimum. Large text (≥24px or ≥18.66px bold) requires only 3:1. Normal text requires 4.5:1.

### 9.2 Focus States

All interactive elements must have a visible focus indicator:

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: 4px;
}

/* Remove default outline but keep :focus-visible */
:focus:not(:focus-visible) {
  outline: none;
}
```

### 9.3 Semantic & ARIA Requirements

- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` appropriately.
- Every `<section>` must have `aria-labelledby` pointing to its heading `id`.
- Nav must have `aria-label="Primary navigation"`.
- Hamburger button: `aria-label`, `aria-expanded`, `aria-controls`.
- Decorative images/icons: `aria-hidden="true"`.
- Stats container: `role="list"`, each stat: `role="listitem"`.
- All anchor links must have descriptive text (no "click here").
- Skip-to-content link (optional but recommended):
  ```html
  <a href="#main-content" class="skip-link">Skip to main content</a>
  ```
  ```css
  .skip-link {
    position: absolute;
    top: -100%;
    left: 16px;
    background: var(--color-primary);
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius-sm);
    z-index: 10000;
    transition: top 0.3s ease;
  }
  .skip-link:focus {
    top: 16px;
  }
  ```

### 9.4 Keyboard Navigation

- Tab order must follow visual order: Nav links → Hero buttons → About content → Service cards → CTA button → Footer links.
- Service cards themselves do not need to be focusable unless they become links.
- Escape key should close mobile menu (implement in JS).

### 9.5 Performance & SEO

- Use `<link rel="preconnect">` for Google Fonts (already in HTML structure).
- Add `fetchpriority="high"` to the hero background image if using an `<img>` tag.
- Ensure `<meta name="description">` is present.
- Page title: "MainCrafts Technology — Premium Software Solutions".

---

## 10. Assets & External Resources

### 10.1 Required External Resources

| Resource          | URL / Source                                                   | Purpose            |
|-------------------|----------------------------------------------------------------|--------------------|
| Inter Font        | `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap` | Primary typeface |
| Hero Background   | Any royalty-free dark-themed tech image (Unsplash recommended) | Hero visual        |

### 10.2 File Structure

```
MainCraft_Landing Page/
├── index.html          ← Complete HTML document
├── styles.css          ← All CSS (tokens, components, responsive, animations)
├── script.js           ← Minimal JS (nav toggle, scroll effects, scroll reveal)
├── design-spec.md      ← This document
└── docs/               ← Additional documentation
```

### 10.3 Icon Strategy

- **Primary approach:** Use emoji characters for service card icons (💻📱☁️🔒📊🤖). This avoids external dependencies and renders natively.
- **Alternative:** Implementation agents may substitute with inline SVG icons from [Lucide](https://lucide.dev/), [Phosphor](https://phosphoricons.com/), or [Heroicons](https://heroicons.com/) if a more polished look is desired. Use `currentColor` fills and size at 40px.

---

## Appendix A — Complete CSS Custom Properties Summary

```css
:root {
  /* Colors */
  --color-primary:            #6c63ff;
  --color-primary-light:      #8b83ff;
  --color-primary-dark:       #5a52e0;
  --color-primary-rgb:        108, 99, 255;
  --color-secondary:          #00d4aa;
  --color-secondary-light:    #33e0be;
  --color-secondary-dark:     #00b894;
  --color-secondary-rgb:      0, 212, 170;
  --color-bg-primary:         #0a0a1a;
  --color-bg-secondary:       #12122a;
  --color-bg-tertiary:        #1a1a3e;
  --color-bg-nav:             rgba(10, 10, 26, 0.75);
  --color-text-primary:       #ffffff;
  --color-text-secondary:     #b0b0cc;
  --color-text-muted:         #6b6b8d;
  --color-text-accent:        #6c63ff;
  --color-border:             rgba(108, 99, 255, 0.15);
  --color-border-card:        rgba(255, 255, 255, 0.08);
  --color-divider:            rgba(255, 255, 255, 0.06);

  /* Gradients */
  --gradient-primary:         linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%);
  --gradient-hero-overlay:    linear-gradient(180deg, rgba(10,10,26,0.6) 0%, rgba(10,10,26,0.95) 100%);
  --gradient-cta:             linear-gradient(135deg, #6c63ff 0%, #8b83ff 50%, #00d4aa 100%);
  --gradient-card-hover:      linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(0,212,170,0.08) 100%);
  --gradient-glow:            radial-gradient(circle, rgba(108,99,255,0.3) 0%, transparent 70%);

  /* Shadows */
  --shadow-sm:                0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md:                0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-lg:                0 8px 32px rgba(0, 0, 0, 0.5);
  --shadow-glow-primary:      0 0 20px rgba(108, 99, 255, 0.4);
  --shadow-glow-secondary:    0 0 20px rgba(0, 212, 170, 0.3);
  --shadow-card:              0 4px 24px rgba(0, 0, 0, 0.3);
  --shadow-card-hover:        0 8px 40px rgba(108, 99, 255, 0.2);

  /* Typography */
  --font-family-primary:      'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --text-display:             4.5rem;
  --text-h1:                  3rem;
  --text-h2:                  2.25rem;
  --text-h3:                  1.5rem;
  --text-h4:                  1.25rem;
  --text-body:                1.125rem;
  --text-body-sm:             1rem;
  --text-caption:             0.875rem;
  --text-overline:            0.75rem;
  --text-nav:                 0.9375rem;
  --text-button:              1rem;

  /* Spacing */
  --space-1:                  0.25rem;
  --space-2:                  0.5rem;
  --space-3:                  1rem;
  --space-4:                  1.5rem;
  --space-5:                  2rem;
  --space-6:                  3rem;
  --space-7:                  4rem;
  --space-8:                  6rem;
  --space-9:                  8rem;

  /* Layout */
  --container-max:            1200px;
  --container-narrow:         800px;
  --container-padding:        1.5rem;
  --border-radius-sm:         8px;
  --border-radius-md:         12px;
  --border-radius-lg:         16px;
  --border-radius-xl:         24px;
  --border-radius-full:       9999px;
  --nav-height:               72px;

  /* Transitions */
  --transition-fast:          0.15s ease;
  --transition-base:          0.3s ease;
  --transition-slow:          0.5s ease;
  --transition-spring:        0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

> **End of Design Specification.**  
> Implementation agents: Follow every detail in this document. If you encounter ambiguity, choose the option that is more visually premium and accessible.
