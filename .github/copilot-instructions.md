# AI instructions — abmalonda_web

This is a **static, frontend-only** marketing website for **AB Malonda Airconditioning Co.**
(an HVAC service business in Metro Manila). There is no backend, API, database, or CMS —
all content is hardcoded in the React components as JS data arrays.

Before making changes, read the detailed docs in [`.github/context/`](./context/README.md):

- [`context/project-overview.md`](./context/project-overview.md) — what this is, tech stack, business context
- [`context/folder-structure.md`](./context/folder-structure.md) — where things live and why
- [`context/pages-and-components.md`](./context/pages-and-components.md) — every route/page/component, one line each
- [`context/conventions.md`](./context/conventions.md) — code patterns to follow so new code matches existing code

## Quick rules

- Work happens in `frontend/` (Vite + React 19 + Tailwind v4 + react-router-dom v7 + framer-motion).
- Styling is Tailwind utility classes only. Brand colors are theme tokens `primary` / `secondary` /
  `primary-hover` defined in `frontend/src/index.css` — never hardcode the brand blue, use the tokens.
- No global state library, no CMS, no fetch/axios calls — content edits mean editing the data arrays
  inside the relevant component/page file directly.
- Per-page SEO (title/meta/JSON-LD) is done manually with `useEffect` in each page — this project does
  not use `react-helmet`. Follow the existing pattern rather than introducing a new one.
- **[`context/README.md`](./context/README.md) explains when these context docs must be updated** —
  keep them in sync whenever you add/rename/remove pages, components, routes, or dependencies.
