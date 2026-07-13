# Project overview

## What this is

Marketing/brochure website for **AB Malonda Airconditioning Co.**, an HVAC (air conditioning)
service business operating in Metro Manila, Philippines (based in Parañaque). The site presents
the business, its services, past projects, and contact channels. There is no login, no e-commerce,
no user accounts, and no dashboard.

## Business content (for context, not code)

- Services offered: aircon **installation**, **cleaning/preventive maintenance**, **repair &
  diagnostics**, and **ocular/site visits** — for split-type and window-type units.
- Coverage area: Metro Manila (Parañaque, Las Piñas, Muntinlupa, Pasay, Makati, Taguig).
- Contact channels: landline, mobile, Viber (deep link on mobile, QR/modal on desktop), Facebook,
  Google Maps embed. No contact form, no email capture — everything routes to `tel:`/Viber/Facebook.
- Brand partners displayed (aircon manufacturers/suppliers): Samsung, Carrier, Condura, Totaline,
  Mitsubishi Heavy Industries, Koppel, OX, Midea, AUX.

## It is a static site

- **No backend, no API, no database.** All page content (services, testimonials, projects,
  partner logos) is hardcoded as JS arrays/objects inside the component files.
- **No CMS.** Editing content = editing the data array in the relevant `.jsx` file directly (e.g.
  `frontend/src/pages/Projects.jsx`'s `PROJECTS` array).
- Builds to static assets via Vite (`npm run build` → `frontend/dist/`) suitable for any static
  host (Netlify, Vercel, GitHub Pages, S3, etc.). No server-side rendering.

## Tech stack

| Concern | Choice |
|---|---|
| Framework | React 19 (`react`, `react-dom`) |
| Build tool | Vite 6 (`@vitejs/plugin-react`) |
| Routing | `react-router-dom` v7, client-side `BrowserRouter` |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` plugin (CSS-first config, no `tailwind.config.js`) |
| Font | Google Fonts "Plus Jakarta Sans", loaded via `<link>` in `index.html`, set as `--font-sans` theme token |
| Animation | `framer-motion` (scroll-reveal, hover, layout transitions) |
| Icons | `react-icons` (mostly Remix Icon `ri`, a few `fa`/`si`) |
| Marquee/carousel | `react-fast-marquee` (partner logos strip) |
| Linting | ESLint 9 flat config (`eslint.config.js`) with `react-hooks` + `react-refresh` plugins |
| Package manager | npm (`package-lock.json` present) |

No TypeScript, no test runner, no state management library, no CSS-in-JS, no `react-helmet`.

## Where the actual app lives

The whole React app is nested one level down, in **`frontend/`** — not the repo root. Run all
`npm`/`vite` commands from inside `frontend/`.
