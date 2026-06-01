# karina-cv — Personal Resume Website

> A minimalist static personal website for Karina Malyshkina (Head of AI / Team Lead), showcasing her experience, skills and contact info for potential employers and clients.

## Project Status

- [x] Discovery / Requirements
- [x] Architecture agreed
- [ ] MVP
- [ ] Production-ready
- [ ] Deployed

**Current stage:** Building MVP — static HTML/CSS/JS, deploy to GitHub Pages, then custom domain.

---

## Business Context

### Problem
Karina needs a professional online presence beyond a PDF resume — a link she can share with recruiters and potential clients that makes a strong first impression and is easy to find.

### Users
- Recruiters and hiring managers — primary audience
- Potential clients / partners — secondary
- Expected traffic: low (tens of visitors/month), no scalability concerns
- Scenario: someone receives a link, opens it, browses in 1–3 minutes, contacts via Telegram or email

### Success Criteria
- The site loads fast and looks polished on mobile and desktop
- Contact form sends messages to karinamalyskina@gmail.com via Formspree
- All three photos appear naturally in different sections
- Deployed on GitHub Pages; ready to switch to a custom domain without code changes

---

## Functional Requirements

### Must have (MVP)
1. **Hero section** — name, title, one-liner summary, one photo, links to Telegram and email
2. **About / Summary section** — short bio text, second photo
3. **Work Experience section** — timeline of positions with company, role, dates, bullet points of achievements
4. **Education section** — three entries (University of Vienna MSc, HSE BSc, MSU)
5. **Skills section** — grouped: Technical skills, Languages
6. **Contact section** — contact form (Formspree) + direct links to Telegram (`@kmalyshkina`) and email (`karinamalyskina@gmail.com`); third photo used here or in About
7. **Responsive layout** — works well on mobile and desktop
8. **Smooth scroll navigation** — fixed top nav with anchor links to sections

### Should have (v1.0)
1. Subtle scroll animations (fade-in on section enter)
2. Downloadable PDF resume button
3. Meta tags for SEO and social sharing (og:image, description)
4. Favicon

### Nice to have (later)
1. Dark mode toggle
2. Language switcher (EN / RU)
3. Blog / Notes section

---

## Tech Stack

### Frontend (static only — no backend)
- **HTML5** — semantic markup
- **CSS3** — custom properties (CSS vars), Flexbox/Grid, no frameworks
- **JavaScript** — vanilla JS only, no build step required
- **Fonts** — Google Fonts (Inter or similar clean sans-serif)
- **Icons** — inline SVG or a lightweight icon set (e.g. Lucide via CDN)

### External Services
- **Formspree** (https://formspree.io) — contact form submissions → email, free tier (50 submissions/month), no backend needed
- **GitHub Pages** — hosting, free, deploys from `main` branch or `/docs` folder

### No backend, no database, no Docker needed.

---

## Architecture

### Project Structure
```
karina-cv/
├── index.html          # Single page, all sections
├── css/
│   └── style.css       # All styles, using CSS custom properties
├── js/
│   └── main.js         # Scroll animations, nav highlight, form handling
├── images/
│   ├── hero.jpg        # Photo 1 (IMG04386) — hero section
│   ├── about.jpg       # Photo 2 (IMG04500) — about section
│   └── contact.jpg     # Photo 3 (IMG04326) — contact section
├── assets/
│   └── karina-cv.pdf   # Optional: downloadable PDF resume
└── README.md
```

### Page Sections (in order)
| Section | Content | Photo |
|---------|---------|-------|
| `#hero` | Name, title, tagline, nav links, CTA button | `hero.jpg` |
| `#about` | Summary paragraph, key stats (5+ yrs, 10+ products, etc.) | `about.jpg` |
| `#experience` | Timeline: 5 positions with dates, company, role, bullets | — |
| `#education` | 3 entries with degree, university, location, thesis | — |
| `#skills` | Technical skills tags, languages with levels | — |
| `#contact` | Formspree form + Telegram / email links | `contact.jpg` |

### Color Palette (minimalist)
```css
--color-bg:         #FFFFFF;
--color-surface:    #F7F7F5;
--color-text:       #1A1A1A;
--color-text-muted: #6B6B6B;
--color-accent:     #1A1A1A;   /* black accent — change to a soft tone if desired */
--color-border:     #E5E5E5;
```

### Typography
```css
--font-body:    'Inter', sans-serif;
--font-size-base: 16px;
--line-height:  1.65;
```

---

## How to Run Locally

No build step required — just open the file:

```bash
git clone https://github.com/<username>/karina-cv.git
cd karina-cv

# Option 1: open directly
open index.html

# Option 2: local server (avoids CORS issues with images)
python3 -m http.server 8080
# then open http://localhost:8080
```

### Environment / Config
The only external dependency is the Formspree form endpoint.

| Variable | Where | Description |
|----------|-------|-------------|
| Formspree endpoint | `index.html` form `action` attribute | Replace `https://formspree.io/f/YOUR_ID` with the real form ID after registering at formspree.io |

---

## Deploy

### GitHub Pages
```bash
# Push to main branch
git add .
git commit -m "feat: initial site"
git push origin main

# In GitHub repo → Settings → Pages → Source: main branch / root
# Site available at: https://<username>.github.io/karina-cv
```

### Custom Domain (when ready)
1. Buy domain (e.g. karinamalyshkina.com)
2. In GitHub Pages settings → Custom domain → enter domain
3. At DNS provider: add CNAME record pointing to `<username>.github.io`
4. GitHub auto-provisions HTTPS via Let's Encrypt
5. No code changes needed — just DNS config

### Environments
| Environment | URL | Notes |
|-------------|-----|-------|
| Local | `http://localhost:8080` | Dev |
| GitHub Pages | `https://<username>.github.io/karina-cv` | Staging / initial prod |
| Production | `https://karinamalyshkina.com` | After domain purchase |

---

## Conventions

### HTML
- Semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Each section has an `id` matching the nav anchor: `<section id="experience">`
- Images have descriptive `alt` attributes
- Form inputs have `<label>` elements

### CSS
- All colors and spacing via CSS custom properties (`--var-name`)
- No `!important`
- Mobile-first media queries: `@media (min-width: 768px)`
- Class names: `kebab-case` (e.g. `.experience-item`, `.nav-link`)

### JavaScript
- Vanilla JS only, no jQuery, no frameworks
- Use `IntersectionObserver` for scroll animations
- Form submit: `fetch` to Formspree, show success/error message inline

### Git
- Commits: `feat:`, `fix:`, `style:`, `content:`, `docs:`
- Work directly on `main` for a solo project of this size

---

## Content Reference

All content below is sourced from the provided CV.

### Hero tagline (suggested)
> "Team Lead · AI & Automation — turning complex processes into shipped AI products."

### Summary (About section)
5+ years leading AI/LLM automation initiatives. Proven track from identifying high-impact opportunities and building business cases to shipping production-grade AI products. Comfortable owning the full product lifecycle: discovery → cross-functional delivery. Currently finishing an MSc in Data Science at the University of Vienna.

### Experience entries
1. **Head of AI** · NDA iGaming Company · 2025–present
2. **COO / Head of AI & IT Projects** · Espada Solutions · 2022–2025
3. **Lecturer, Computer Science** · Lomonosov Moscow State University · 2023–2024
4. **Product Manager** · truetest.app · 2020–2022
5. **Project Manager** · Center for Pedagogical Excellence · 2019–2020

### Education entries
1. MSc in Data Science · University of Vienna · 2024–2026
2. BSc in Computer Science · HSE · 2020–2024
3. Chemistry (incomplete) · Lomonosov MSU · 2018–2020

### Contact details
- Email: karinamalyskina@gmail.com
- Telegram: @kmalyshkina
- Location: Vienna, Austria

---

## Known Issues & Limitations

1. Formspree free tier limits 50 form submissions/month — sufficient for a personal site; upgrade if needed
2. Images should be optimized (WebP, max ~200KB each) before deploy to ensure fast load on mobile
3. No CMS — content updates require editing `index.html` directly

---

## TODO / Roadmap

### MVP tasks
- [ ] Create `index.html` with all 6 sections
- [ ] Write `css/style.css` with CSS vars and responsive layout
- [ ] Write `js/main.js` — scroll animations + form handler
- [ ] Optimize and place 3 photos into `/images/`
- [ ] Register on Formspree, get endpoint, plug into form
- [ ] Deploy to GitHub Pages
- [ ] Smoke test on mobile (iOS Safari + Android Chrome)

### v1.0 Backlog
- [ ] Add PDF download button
- [ ] Add SEO meta tags and og:image
- [ ] Add favicon (initials "KM" as SVG)
- [ ] Scroll-triggered fade-in animations
- [ ] Custom domain setup

---

## Decisions (ADR)

### 2025-05 — Static site, no framework
**Context:** Needed to choose between a static HTML/CSS/JS site vs a framework (Next.js, Astro, etc.)
**Decision:** Plain HTML/CSS/JS — no build step, no dependencies, easiest to deploy on GitHub Pages and hand off.
**Alternatives:** Astro (great for static sites but adds complexity), Next.js (overkill for a single-page resume)
**Consequences:** No hot reload in dev; updates require manual HTML edits — acceptable for a personal CV site that rarely changes.

### 2025-05 — Formspree for contact form
**Context:** Static site can't handle form submissions server-side.
**Decision:** Formspree free tier — zero backend, works with a plain `<form>` tag, sends to email.
**Alternatives:** Netlify Forms (requires Netlify hosting), EmailJS (JS-heavy), mailto link (unreliable UX)
**Consequences:** 50 submissions/month limit; submissions visible in Formspree dashboard + forwarded to email.

---

## Useful Links

- [Formspree docs](https://help.formspree.io/hc/en-us)
- [GitHub Pages docs](https://docs.github.com/en/pages)
- [Inter font on Google Fonts](https://fonts.google.com/specimen/Inter)
- [Lucide icons CDN](https://unpkg.com/lucide@latest)
- [WebP image converter](https://squoosh.app)

---

## Contacts

- **Owner:** Karina Malyshkina (karinamalyskina@gmail.com · @kmalyshkina)
- **Developer:** [your name / tg]
