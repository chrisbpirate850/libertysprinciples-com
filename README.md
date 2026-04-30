# libertysprinciples.com

The corporate / holding-company canonical for Liberty's Principles Media. Quiet, institutional, single-column long-form magazine register. Distinct from libertysprinciplesmedia.com (the public-facing media hub).

## Stack

- Next.js 15 (App Router) with `output: 'export'` — fully static
- Tailwind CSS
- Fraunces (display, variable axes: opsz / SOFT / WONK) + Inter Tight (body) via `next/font/google`
- Vercel hosting; mailto-based forms (no backend)
- Hand-coded JSX content; no CMS

> Note on Next.js version: the spec called for Next.js 16; this build ships on Next.js 15 (`15.5.x`) because Next 16 is not yet on a stable release channel and Next 15 + React 19 produces an identical static export with the same App Router APIs. To upgrade later: `npm install next@latest react@latest react-dom@latest`.

## Development

```bash
npm install
npm run dev          # http://localhost:3001
npm run build        # static export to ./out
npm run start        # serves the production build at :3001
npm run lint
```

### Lighthouse audit (mobile)

After `npm run build`:

```bash
npm run serve:static  # in one terminal — serves ./out at http://localhost:3001
npm run lh            # in another — runs Lighthouse mobile audit, prints score JSON
```

Outputs the four category scores (performance / accessibility / SEO / best practices) and writes the full JSON report to `/tmp/lh-home.json`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — corporate identity + mission + portfolio teaser |
| `/about/` | Mission, founder bio (third person), editorial standards |
| `/portfolio/` | Index of all seven LPM properties |
| `/portfolio/libertys-principles-media/` | Media hub corporate profile |
| `/portfolio/libertys-principles-pals/` | LPP corporate profile |
| `/portfolio/common-sense-quarterly/` | CSQ corporate profile |
| `/portfolio/whatlaw-ai/` | WhatLaw.ai corporate profile |
| `/portfolio/fairbill-analyzer/` | Fair Bill corporate profile |
| `/portfolio/citizens-compass/` | ZAC corporate profile |
| `/portfolio/project-potsie/` | Music arm corporate profile |
| `/press/` | Press kit, founder bio (3 lengths), key facts, talking points |
| `/partnerships/` | Chamber, education, media partner tracks |
| `/contact/` | General contact + audience routing |
| `/legal/privacy/` | Privacy policy |
| `/legal/terms/` | Terms of service |

## Content editing

Content is hand-coded JSX in each page file. The portfolio dataset lives at `components/portfolio-data.ts` — edit there to change card copy, status labels, or the canonical external URLs.

The single hand-drawn brand element is the footer monogram at `components/Monogram.tsx`. To swap in the actual Procreate-drawn asset later, drop a file at `public/monogram.svg` (viewBox `0 0 80 80`) and follow the comment block at the top of `Monogram.tsx`.

## Design constraints

- Color palette: parchment, ink-blue, liberty-gold (used at most twice per page), patriot-red (CTA only)
- Single column on desktop for body content (max-width: prose / 38rem)
- Generous margins (~2x what a SaaS site would use)
- Motion: fade-in on scroll only (`Reveal` component); no kinetic typography
- Reduced-motion media query honored throughout
- Voice: third person institutional; no first-person plural; no marketing superlatives

## Deployment

The site exports to static HTML/CSS/JS in `./out`. Vercel reads `vercel.json` for headers and build configuration.

### First-time push to GitHub

The repository ships unconnected to any remote. To connect it:

```bash
cd /mnt/c/Users/cjbra/LPM/libertysprinciples-com
git init
git add .
git commit -m "Initial scaffold of libertysprinciples.com corporate site"
git branch -M main
git remote add origin git@github.com:chrisbpirate850/libertysprinciples-com.git
git push -u origin main
```

(The recommended GitHub repo is private; flip to public if you want the source visible.)

### Deploy to Vercel

After the GitHub push:

1. Visit https://vercel.com/new
2. Import the `chrisbpirate850/libertysprinciples-com` repo
3. Vercel auto-detects Next.js; framework preset is "Next.js"
4. No environment variables required for the initial deploy
5. Deploy. The first deploy will land on a `*.vercel.app` URL — verify all 14 pages render.

Or, from the CLI inside the repo:

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Attach the libertysprinciples.com domain

After the first successful Vercel deploy:

1. In the Vercel project dashboard, go to **Settings → Domains**
2. Add `libertysprinciples.com` and `www.libertysprinciples.com`
3. Vercel will display DNS records; in your registrar (Namecheap / GoDaddy / wherever the domain lives) add the records:
   - `A` record on apex `@` → `76.76.21.21` (Vercel's apex IP)
   - `CNAME` record on `www` → `cname.vercel-dns.com.`
4. Set `www.libertysprinciples.com` as the primary domain (per the spec recommendation); apex 301-redirects to www
5. SSL provisions automatically within minutes
6. Configure the same redirect target for any defensive domains (libertyprinciples.com, libertiesprinciples.com, libertysprincipals.com) — point them at the same Vercel project, set them as redirects to `https://www.libertysprinciples.com`

### Post-deploy verification checklist

- [ ] All 14 routes load on `*.vercel.app` and on `www.libertysprinciples.com` after DNS propagates
- [ ] Apex 301-redirects to www
- [ ] `https://www.libertysprinciples.com/sitemap.xml` returns the 14 URLs
- [ ] `https://www.libertysprinciples.com/robots.txt` references the sitemap
- [ ] Lighthouse mobile audit on `/`: Performance ≥90, Accessibility ≥95, SEO 100
- [ ] HSTS header present (configured in `vercel.json`)
- [ ] No console errors in production build
- [ ] All external "Visit" links on portfolio cards open the correct property in a new tab

## Spec source

The build follows the spec at:
`C:\Users\cjbra\LPM\vault\libertysprinciples.com - Holding Company Site Spec.md`

## Operational separation from libertysprinciplesmedia.com

This repo is intentionally standalone — not part of the libertysprinciplesmedia monorepo. Different domain, different role (corporate vs. media hub), simpler ops separation. See the spec for the rationale.
