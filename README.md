# Sajal Shrivastava

Static multi-page site for Sajal Shrivastava (landing, blog, and personal portfolio). Built with HTML, CSS, and JavaScript — no framework and no backend.

![Site screenshot](screenshot_hero.webp)

## Features

- **Landing** — Company overview, services, and contact CTA
- **Portfolio** — Projects, skills, and a contact form with client-side validation
- **Blog** — Article index with search + category filters, plus four post pages
- **Theme** — Dark/light toggle persisted in `localStorage` across pages
- **Responsive layout** — Desktop, tablet, and mobile
- **Accessibility** — Skip link, ARIA labels, keyboard navigation, `prefers-reduced-motion`

The contact form validates in the browser only. It does not send messages until a backend is wired to the marked `fetch()` call in `portfolio.html`.

## Tech stack

- HTML5
- CSS3 (shared tokens in `global.css`, page stylesheets for layout)
- Vanilla JavaScript
- Google Fonts — Fraunces + Source Sans 3
- Font Awesome 6

## Deploy (GitHub Pages)

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select the `main` branch and `/ (root)` folder
4. Save — the site will be at `https://<username>.github.io/<repo-name>/`

## Project structure

```
├── index.html              # MainCrafts landing page
├── portfolio.html          # Personal portfolio
├── blog.html               # Blog index
├── blog-post-1.html … 4    # Articles
├── global.css              # Shared design tokens
├── landing-styles.css
├── portfolio-styles.css
├── blog-styles.css
├── theme.js
├── blog.js
├── assets/                 # WebP images with PNG fallbacks
└── README.md
```

## Responsive breakpoints

| Breakpoint | Layout |
|------------|--------|
| > 1024px | Full desktop layouts |
| 769px–1024px | Two-column grids, condensed type |
| ≤ 768px | Single column, hamburger menu |

## License

MIT License — © 2026 Sajal Shrivastava
