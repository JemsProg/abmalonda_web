# Code conventions

Follow these so new code is indistinguishable from existing code. These were reverse-engineered
from the current codebase, not aspirational — if you deliberately introduce a better pattern,
update this file to describe the new one.

## Styling

- Tailwind utility classes only, inline in `className`. No CSS modules, no styled-components, no
  separate `.css` files per component.
- Brand colors are theme tokens defined once in `frontend/src/index.css`:
  ```css
  @theme {
    --color-primary: #004aad;
    --color-secondary: #fffafa;
    --color-primary-hover: #0057c2;
    --color-accent: #2fa9e0;       /* lighter sky-blue — CTAs, badges, highlights */
    --color-accent-hover: #2890be;
    --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  }
  ```
  Use `bg-primary`, `text-primary`, `bg-secondary`, `hover:bg-primary-hover`, `bg-accent`,
  `text-accent`, `hover:bg-accent-hover`, etc. Never hardcode `#004aad`/`#2fa9e0` or similar in a
  component — this is Tailwind v4's CSS-first theme config, there is no `tailwind.config.js`.
  `primary` is the main brand color (nav, headings, primary buttons); `accent` is a lighter,
  monochromatic sky-blue (deliberately picked over an earlier teal that clashed with the brand blue)
  used for badges/pills and the more prominent of two side-by-side CTAs (e.g. Header's
  quick-call button, Hero's "Get Free Quote", `MobileCTA`'s Viber button) — don't add a third brand
  color without a reason; reuse these two.
- Page hero badge pill (small pill above every `<h1>`): `inline-flex items-center gap-1.5
  rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent
  backdrop-blur-md`, usually with a `RiSnowyFill` icon. Every page hero (`Hero.jsx`, `AboutHero.jsx`,
  `Services.jsx`'s `ServicesHero`, `Projects.jsx`'s hero) uses this — add it to any new page hero too.
- Common decorative pattern: an `aria-hidden="true"` absolutely-positioned `<div>` with a radial-
  gradient `background` inline style, layered behind content for a soft "glow"/spotlight effect.
  Reuse this rather than inventing a new background treatment.
- Glassmorphism cards: `bg-white/70` (or `/10` on dark sections) + `backdrop-blur-md`/`xl` + subtle
  `border border-black/10` or `ring-1 ring-white/25` + soft shadow. Used for contact cards, feature
  cards, modals.
- Page hero sections consistently use: `bg-gradient-to-br from-[#f4f8ff] via-[#e9f0ff] to-white` with
  the same radial-gradient overlay div, an `h1` styled `text-3xl font-extrabold text-primary sm:text-5xl`,
  and a `motion.p` subtitle. Copy this block for any new page hero rather than restyling.

## Animation

- `framer-motion` for all animation. Two recurring patterns:
  - Entrance on mount: `initial={{ opacity: 0, y: ... }} animate={{ opacity: 1, y: 0 }}`.
  - Entrance on scroll: same but `whileInView` + `viewport={{ once: true, amount: 0.3–0.4 }}` instead
    of `animate`, so it fires once when scrolled into view.
- Stagger lists by offsetting `transition={{ delay: i * 0.05 }}` per mapped item.
- Respect `useReducedMotion()` for interactive/expand animations (see `Service.jsx`,
  `pages/Services.jsx`) — zero out the duration when the user prefers reduced motion.
- Expand/collapse content (accordions) use `AnimatePresence` + `layout` + animating `height: "auto"`.

## Icons

- `react-icons`, predominantly the Remix Icon set (`import { RiXxxFill } from "react-icons/ri"`).
  A few exceptions: `FaFacebookF`/`FaQuoteLeft` (`react-icons/fa`), `SiViber` (`react-icons/si`).
  Prefer an existing `Ri*` icon before pulling in a new icon set.

## Data shape

- Page/section content that repeats (services, testimonials, projects, stats, values, partners) is a
  plain JS array of objects defined at module scope, above the component, in ALL_CAPS
  (`SERVICES`, `PROJECTS`, `TESTIMONIALS`, `STATS`, `VALUES`, `PARTNERS`). Components `.map()` over
  these. To add/edit content, edit the array — there is no external data source.
- Contact numbers/links are defined as named constants near the top of the file that uses them
  (see `ContactSection.jsx`'s `CONTACT` object and `Footer.jsx`'s `PHONE_*`/`VIBER_DEEPLINK`
  constants) rather than being centralized — if you add a third place that needs these, consider
  extracting a shared constants module and updating this doc.

## SEO (no react-helmet)

Each page sets its own `document.title` and `<meta>` tags imperatively, either via a small
`useSEO()` hook defined at the top of the page file (`Services.jsx`, `Projects.jsx`) or inline in a
`useEffect` (`Hero.jsx` for Home, `Service.jsx` component). Pattern:

```js
useEffect(() => {
  document.title = "...";
  const setMeta = (name, content) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };
  setMeta("description", "...");
}, []);
```

JSON-LD structured data is added either as a literal `<script type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />` in the returned JSX (`Services.jsx`,
`Projects.jsx`, `About.jsx`), or created/appended to `<head>` imperatively with cleanup on unmount
(`Service.jsx`, keyed by an `id` so it can find/remove the previous script). Either is acceptable;
match whichever pattern the file you're editing already uses.

Do not add `react-helmet`/`react-helmet-async` — this project deliberately avoids it.

## Routing

- `react-router-dom` v7 with `BrowserRouter`. Route table lives in `App.jsx` only. Add new pages
  there and to `Header.jsx`'s `NAV` array (and `Footer.jsx` links, if relevant).
- In-page section anchors use `#id` hashes (e.g. `/services#install`) matched to an `id` prop on the
  corresponding card, not `react-router` hash routing.

## Imports / component style

- Function components, `export default function X() { ... }` for page-level/primary components;
  some smaller pieces use `export default X;` at the bottom instead — either is fine, no strict rule.
- `import React from "react"` appears at the top of most files even though it's not required by the
  new JSX transform — keep it for consistency when editing those files.
- No PropTypes/TypeScript — props are destructured directly in the function signature with no
  runtime or compile-time validation.
