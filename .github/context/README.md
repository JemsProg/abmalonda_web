# AI context folder

This folder is documentation written **for AI coding assistants** (GitHub Copilot, Claude Code, etc.)
so they understand this repo's purpose and structure without having to re-derive it from scratch every
session. It is not user-facing documentation — see `frontend/README.md` for the standard Vite readme.

## Files

| File | Contents |
|---|---|
| [`project-overview.md`](./project-overview.md) | What the site is, who it's for, tech stack, hosting model |
| [`folder-structure.md`](./folder-structure.md) | Annotated directory tree of `frontend/` |
| [`pages-and-components.md`](./pages-and-components.md) | Every route, page, and component with a one-line description |
| [`conventions.md`](./conventions.md) | Recurring code patterns (styling, animation, SEO, icons, data shape) to copy for new work |

## Keeping this up to date

This folder decays if it isn't maintained. Update it in the **same PR/commit** as the code change
whenever you:

- Add, rename, or remove a **page** or **route** → update `pages-and-components.md` (and `App.jsx` routes
  section in the same file).
- Add, rename, or remove a **component** → update `pages-and-components.md`.
- Add, remove, or upgrade a major **dependency** (React, Tailwind, react-router, framer-motion, icon
  library, etc.) → update `project-overview.md`.
- Change the **folder layout** (new top-level dir under `src/`, restructure `components/`, etc.) →
  update `folder-structure.md`.
- Introduce a **new recurring pattern** (e.g. a new way of doing SEO, a new animation convention, a form
  library, a CMS/API integration) → update `conventions.md` and note that it replaces/extends the old
  pattern.

If you (the AI) make a structural change and don't see instructions to update these docs, update them
anyway — that's the point of this folder.
