# Pages, routes, and components

## Routes (defined in `frontend/src/App.jsx`)

| Path | Page component |
|---|---|
| `/` | `pages/Home.jsx` |
| `/about` | `pages/About.jsx` |
| `/services` | `pages/Services.jsx` |

`Header` and `Footer` (`components/navigation/`) wrap the `<Routes>` in `App.jsx`, so they render on
every page. There is no 404/catch-all route defined yet.

**`pages/Projects.jsx` is temporarily unlinked** (2026-07-13): its route was removed from `App.jsx`
and its nav/footer links removed, pending a rebuild backed by a CMS so non-technical staff can update
project entries without editing JSX. The file, its `PROJECTS` data array, and all its components
(filter/search toolbar, before/after comparison slider modal, etc.) are still in the repo unchanged —
see the description below, which is kept for when the CMS-backed version is built. Don't delete it.

## `pages/Home.jsx`

Composes, in order: `Hero` → `Service` → `ChooseUs` → `Testimonials` → `Partners` → `ContactSection`
(all from `components/home/`).

- **`Hero.jsx`** — above-the-fold banner: headline, value-prop bullet list, CTA buttons ("View
  Services", "Get Free Quote"), angled hero image. Also sets `document.title` + meta description
  for `/` via a `useEffect`.
- **`Service.jsx`** — accordion-style list of the 4 services (installation, cleaning/PM, repair,
  ocular visit) with expandable detail bullets and a "Book Now" link to `/contact` (note: `/contact`
  is not a defined route — see Known gaps below). Also injects an `ItemList` JSON-LD script into
  `<head>` on mount/route change.
- **`ChooseUs.jsx`** — "Why Choose Us": 3 numbered reasons, a 4-stat trust strip (years in service,
  warranty %, response time, coverage), and 3 highlight cards. Static copy, no external data.
- **`Testimonials.jsx`** — 3 hardcoded customer quotes with star ratings.
- **`Partners.jsx`** — infinite marquee (`react-fast-marquee`) of 9 partner/brand logos, each a link
  to the brand's official site. Logos imported from `assets/partners/`.
- **`ContactSection.jsx`** — map iframe (Google Maps embed) + contact card with landline/mobile/Viber
  rows (click-to-copy) and Call/Viber buttons. On mobile, buttons deep-link directly
  (`tel:`/`viber://`); on desktop they open an in-page confirmation modal instead of relying on the
  OS to handle the protocol link.

## `pages/About.jsx`

Composes, in order: `AboutHero` → `BrandStory` → `ValuesGrid` → `StatsStrip` → `ServiceCoverage`
(all from `components/about/`). Also renders an `HVACBusiness` JSON-LD `<script>` inline in the page
(not via a `useEffect`, unlike Home/Services/Projects).

- **`AboutHero.jsx`** — page hero banner (title + short intro), same gradient/style as other page
  heroes.
- **`BrandStory.jsx`** — two-column "Our Story" / "What We Stand For" static copy blocks.
- **`ValuesGrid.jsx`** — 3-card grid of company values (experienced technicians, quality assurance,
  customer-first).
- **`StatsStrip.jsx`** — 3-stat highlight bar (installs count, avg. response, customer rating) —
  comment in source notes these numbers should be "adjust[ed] anytime" as real figures change.
- **`ServiceCoverage.jsx`** — map iframe + list of cities covered (Parañaque, Las Piñas, Muntinlupa,
  Pasay, Makati, Taguig).

## `pages/Services.jsx`

Self-contained page (no `components/services/` subfolder). Renders:

- **Hero** (`ServicesHero`, inline function) — page banner.
- **`ServicesList`** — same accordion pattern as `components/home/Service.jsx` but with its own
  `SERVICES` data array (near-duplicate copy — see `folder-structure.md` note).
- **`ProcessStrip`** — 4-step "How we work" timeline (scheduling → site check → service day → QA).
- **`FAQ`** — native `<details>`-based accordion, 3 Q&As.

Sets SEO via `useSEO()` (`document.title`/meta) and injects two JSON-LD scripts (`HVACBusiness`
service catalog + `BreadcrumbList`) directly in the returned JSX, not via `useEffect`.

## `pages/Projects.jsx`

Self-contained page (no `components/projects/` subfolder). Renders:

- **Hero** — page banner.
- **`Toolbar`** — filter tabs (All/Installation/Cleaning/Repair) + text search over the `PROJECTS`
  array (title/location/type match).
- **`ProjectCard`** grid — "Load more" pagination (6 at a time) over the filtered/searched list.
- **`ProjectModal`** — lightbox with an optional before/after image comparison slider (`<input
  type="range">`-driven reveal) when a project has both `before` and `after` images; falls back to a
  single cover image otherwise.

`PROJECTS` data currently uses Unsplash stock photo URLs as placeholders, not real jobsite photos.
Sets SEO via `useSEO()` and injects a `CollectionPage` JSON-LD script.

## `components/navigation/`

- **`Header.jsx`** — sticky top nav. Desktop: inline links. Mobile: hamburger → slide-out drawer.
  Nav items are a `NAV` array of `{ label, to }` — add new top-level pages here.
- **`Footer.jsx`** — 4-column footer (logo + brand blurb + Facebook link, company links, service
  anchor links to `/services#install` etc., contact block) + bottom bar with copyright and `/privacy`
  `/terms` links (also not defined as routes — see below).
- **`MobileCTA.jsx`** — fixed bottom bar (Call / Viber buttons), `md:hidden` only, rendered once in
  `App.jsx` alongside `Footer` so it persists across routes. `Footer` has `pb-16 md:pb-0` so this bar
  doesn't cover its bottom content on mobile.

## Known gaps (do not "fix" without asking — may be intentional/in-progress)

- Links to `/contact`, `/privacy`, and `/terms` exist in several components but **no matching route
  is defined** in `App.jsx`. Contact is instead handled by the `ContactSection` on the home page.
- No `NotFound`/404 page or catch-all `<Route path="*">`.
