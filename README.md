# Group 77 — Beyond Markets. Building Legacies

Corporate website for **Group 77**, a Johannesburg-based infrastructure, business solutions, and asset management group, implemented from the Group 77 Figma design.

**Live Site:** https://dog-star-ai.github.io/group-77-website/
**Repository:** https://github.com/Dog-star-AI/group-77-website

## Tech Stack

- **React 19** + **TypeScript**
- **Vite**
- **React Router** (`react-router-dom`)
- **Oxlint**

## Routes

- `/` — Homepage (Hero, Our Group Structure, About Group 77, Our Vision for Africa, Our Philosophy, Partner with Us)
- `/about` — About Us (Where We Started, Our Story, Our Businesses Showcase)
- `/businesses` — Our Businesses (Business Solutions, Infrastructure, Asset Management)
- `/approach` — Our Approach (Our Values 7-item interactive accordion)
- `/vision` — Our Vision (Our Vision for Africa 7-pillar interactive accordion)
- `/contact` — Contact Us (Inquiry form with validation)

## Local Development

```bash
npm install
npm run dev
```

## Production Build & Lint

```bash
npm run build
npm run lint
```

Production builds target `/group-77-website/` for GitHub Pages deployment via `.github/workflows/deploy.yml`, while `npm run dev` serves locally from `/`.
