# Demetrius Tipton — Executive IT Portfolio

A premium, golf-inspired resume portfolio for **Demetrius Tipton, Executive Support Engineer**.
Built with **Astro**, **TypeScript**, and **Tailwind CSS**. Static, fast, SEO-ready.

> *Executive IT Support, Played with Precision.*

---

## Visual direction

- Country club / luxury golf brand aesthetic — never cartoonish.
- Palette: deep fairway green, cream, charcoal, white, with hairline gold accents.
- Typography: Cormorant Garamond (display), Inter (body), DM Mono (labels).
- Subtle golf cues: scorecard ledger, fairway contour lines, flag pin, trophy-case corner brackets, club tags, yardage markers.

---

## Project structure

```
.
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── resume-placeholder.txt   ← swap in your real resume.pdf
│   └── (drop og-image.jpg, resume.pdf here)
├── src/
│   ├── data/
│   │   └── content.ts           ← single source of truth for ALL copy
│   ├── styles/
│   │   └── global.css           ← Tailwind layers + base typography
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── Scorecard.astro
│   │   ├── TrophyCase.astro
│   │   ├── Experience.astro
│   │   ├── Toolbag.astro
│   │   ├── Clubhouse.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── SectionHeader.astro
│   │   └── FairwayDivider.astro
│   ├── layouts/
│   │   └── BaseLayout.astro     ← <head>, OG/Twitter, JSON-LD
│   └── pages/
│       └── index.astro          ← home page (the only page)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Quick start

Requires **Node.js 18.17+** (or 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (http://localhost:4321)
npm run dev

# 3. Build the static site (output: ./dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## Updating content

Almost everything you'll want to change lives in **one file**:

> `src/data/content.ts`

Sections in that file:

| Export | What it controls |
| --- | --- |
| `site` | Name, title, domain, OG image path, resume PDF path |
| `nav` | Top navigation labels and section anchors |
| `hero` | Hero headline, intro, eyebrow tag, course plaque |
| `scorecard` | The 9-row career scorecard |
| `trophyCase` | Featured wins / accomplishment cards |
| `experience` | Front Nine / Back Nine timeline roles |
| `toolbag` | Skills grid, grouped by category |
| `clubhouse` | Leadership-style pull quote + pillars |
| `contact` | Email, LinkedIn, resume link, CTA copy |

Each component imports from `content.ts`, so editing the data file updates the whole site. Types are exported alongside the data so your editor will autocomplete and warn on typos.

### Replace the resume PDF
1. Put your real PDF at `public/resume.pdf`.
2. If you want a different filename or path, update `site.resumePdf` in `src/data/content.ts`.

### Replace contact details
Edit `contact.links` in `src/data/content.ts` — update the `href` and `display` for email, LinkedIn, and any other channel you want.

### Add an OG image
Drop a 1200×630 image at `public/og-image.jpg` (or update `site.ogImage` to point elsewhere).

---

## Theming

All colors and typography are tokens in `tailwind.config.mjs`:

- `fairway` (primary deep green and variants)
- `cream` (paper/background variants)
- `charcoal` (text variants)
- `gold` (accent variants)

Edit the values there to retint the whole site without touching components.

Global typography lives in `src/styles/global.css`. Fonts are loaded via Google Fonts at the top of that file — swap `@import` URL to use other fonts.

---

## Deployment — GitHub Pages at `demetrius.tip10.tech`

This repo is wired to deploy automatically to GitHub Pages on every push to `main`.

### One-time setup (after the repo exists on GitHub)

1. **Push the code** (the workflow file is already at `.github/workflows/deploy.yml`).
2. **Enable Pages**: Repo → Settings → Pages → **Source: GitHub Actions**.
3. **DNS at your domain registrar** for `tip10.tech`:
   - Add a `CNAME` record:
     - **Name / Host**: `demetrius`
     - **Value / Target**: `meechi3t.github.io`
     - **TTL**: default
   - Wait for propagation (usually minutes; can be up to a few hours).
4. **Verify the custom domain in GitHub**: Repo → Settings → Pages → Custom domain → enter `demetrius.tip10.tech` → check "Enforce HTTPS" once available. The `public/CNAME` file in this repo also persists the domain across rebuilds.

After that, every `git push` to `main` triggers the Actions workflow, builds the static site, and publishes it to `https://demetrius.tip10.tech`.

### Resume PDF — public version

`public/resume.pdf` is **gitignored** because the original contains a phone number. To ship a downloadable resume on the live site:

1. Generate a sanitized PDF (no phone, redacted contact info as desired).
2. Save it to `public/resume.pdf`.
3. Either commit it manually (`git add -f public/resume.pdf` after removing the line from `.gitignore`), or upload it via the GitHub web UI directly.

Until that's done, the "Download Resume" button on the deployed site will 404 — locally everything still works.

### Deploy elsewhere (alternatives)

The `dist/` output is plain static files and works on any host:
- **Netlify**: connect repo, build `npm run build`, publish `dist`.
- **Vercel**: import repo, framework preset "Astro", defaults work.
- **Cloudflare Pages**: build `npm run build`, output `dist`.

---

## Accessibility & performance notes

- Skip-to-content link, semantic landmarks, ARIA labels on icons.
- Color contrast tuned for WCAG AA on body copy and primary buttons.
- `prefers-reduced-motion` honored — animations disable themselves.
- Static HTML output, inline-stylesheet auto strategy, compressed HTML.
- One Google Fonts request, three families with `display=swap`.

---

## License

Personal portfolio — content © Demetrius Tipton. Reuse the structure freely.
