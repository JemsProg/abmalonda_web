# Folder structure

```
abmalonda_web/                     # repo root
├── .github/
│   ├── copilot-instructions.md    # AI entry point (read this first)
│   └── context/                   # this folder — AI-facing project docs
└── frontend/                      # the entire React app lives here
    ├── index.html                 # Vite HTML entry; also carries default SEO meta + JSON-LD
    ├── vite.config.js             # Vite config: react + tailwindcss plugins only
    ├── eslint.config.js           # flat ESLint config
    ├── package.json
    ├── public/                    # static files served as-is (favicon/logo, vite.svg)
    └── src/
        ├── main.jsx                # ReactDOM root, wraps <App /> in <StrictMode>
        ├── App.jsx                 # <BrowserRouter> + route table + persistent <Header>/<Footer>
        ├── index.css                # Tailwind import + @theme brand color tokens
        ├── App.css                  # leftover from CRA/Vite template — largely unused
        ├── assets/
        │   ├── home/                # images used on the Home page (hero image)
        │   └── partners/            # partner/brand logo PNGs (Samsung, Carrier, Condura, ...)
        ├── pages/                   # one file per route, composes section components
        │   ├── Home.jsx             # route "/"
        │   ├── About.jsx            # route "/about"
        │   ├── Services.jsx         # route "/services"
        │   └── Projects.jsx         # route "/projects"
        └── components/
            ├── navigation/          # Header.jsx, Footer.jsx, MobileCTA.jsx — rendered on every page via App.jsx
            ├── home/                 # sections composed by pages/Home.jsx
            └── about/                # sections composed by pages/About.jsx
```

## Conventions this layout implies

- **`pages/`** = route-level components. Each page is a thin composition of section components
  plus page-level SEO (`document.title`, meta tags, JSON-LD) — it does not itself render much markup.
- **`components/<domain>/`** = section components scoped to the page(s) that use them. `home/` is
  only used by `pages/Home.jsx`; `about/` only by `pages/About.jsx`. `navigation/` is shared
  (rendered directly in `App.jsx`, outside the `<Routes>` switch, so it persists across route changes).
- There is currently no `components/shared/` or `components/ui/` folder — if a component needs to be
  reused across more than one domain, that's the natural place to create it (update this doc if you do).
- `Services.jsx` exists as **both** a page (`pages/Services.jsx`, route `/services`) and a component
  (`components/home/Service.jsx`, the services teaser embedded in the Home page) — these are
  intentionally separate, near-duplicate content, not a bug. Don't merge them without checking both.
