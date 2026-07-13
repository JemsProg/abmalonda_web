// src/pages/Projects.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiToolsFill,
  RiBrush2Fill,
  RiSettings5Fill,
  RiSearchLine,
  RiMapPin2Fill,
  RiCalendarEventFill,
  RiCloseLine,
  RiSnowyFill,
} from "react-icons/ri";

/* ----------------------------- SEO (no Helmet) ---------------------------- */
function useSEO() {
  useEffect(() => {
    const title = "Projects | AB Malonda Airconditioning Co.";
    const desc =
      "A look at our installation, cleaning/PM, and repair projects across Metro Manila—neat routing, correct commissioning, and tidy results.";
    document.title = title;
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", desc);
    setMeta(
      "keywords",
      "aircon projects, installation portfolio, aircon cleaning, repair, Metro Manila, AB Malonda"
    );
  }, []);
}

/* --------------------------------- Data ---------------------------------- */
/** type: 'installation' | 'cleaning' | 'repair' */
const PROJECTS = [
  {
    id: "p1",
    title: "2.5HP Split-type Install (Office)",
    type: "installation",
    location: "Sucat, Parañaque",
    date: "2025-02-03",
    cover:
      "https://images.unsplash.com/photo-1581092801224-0cecdfc13a50?q=80&w=1200&auto=format&fit=crop",
    before: null,
    after: null,
    highlights: [
      "Hidden pipe route; vibration pads",
      "Deep vacuum + nitrogen hold",
      "Commissioning & orientation",
    ],
  },
  {
    id: "p2",
    title: "Deep Cleaning / PM (Condo Unit)",
    type: "cleaning",
    location: "Taguig",
    date: "2025-01-22",
    cover:
      "https://images.unsplash.com/photo-1604882737200-b230b83a1b40?q=80&w=1200&auto=format&fit=crop",
    before:
      "https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?q=80&w=1200&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1581093588401-16d5b68f83f0?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Coil & blower wheel wash",
      "Drain pan/line flush",
      "Noise reduction & temp drop",
    ],
  },
  {
    id: "p3",
    title: "No-cool Repair & Diagnostics",
    type: "repair",
    location: "Makati",
    date: "2024-12-14",
    cover:
      "https://images.unsplash.com/photo-1578632292335-df3abbb0d69c?q=80&w=1200&auto=format&fit=crop",
    before: null,
    after: null,
    highlights: [
      "Capacitor + contactor replacement",
      "Leak test & recharge (R32)",
      "Performance verification",
    ],
  },
  {
    id: "p4",
    title: "Window-type Install (Home Office)",
    type: "installation",
    location: "Las Piñas",
    date: "2024-11-05",
    cover:
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae4?q=80&w=1200&auto=format&fit=crop",
    before: null,
    after: null,
    highlights: ["Proper framing", "Load check", "Clean finish"],
  },
  {
    id: "p5",
    title: "Blower Wheel Cleaning (Cafe)",
    type: "cleaning",
    location: "Pasay",
    date: "2024-10-10",
    cover:
      "https://images.unsplash.com/photo-1598300183692-7c8dbb8b2883?q=80&w=1200&auto=format&fit=crop",
    before: null,
    after: null,
    highlights: ["Odor removal", "Airflow restored", "Drain fix"],
  },
  {
    id: "p6",
    title: "PCB Repair (Split-type)",
    type: "repair",
    location: "Muntinlupa",
    date: "2024-09-02",
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    before: null,
    after: null,
    highlights: ["Board isolation", "Sensor + wiring", "Run test"],
  },
];

/* ------------------------------- Icons map ------------------------------- */
const TYPE_META = {
  installation: { label: "Installation", icon: RiToolsFill },
  cleaning: { label: "Cleaning / PM", icon: RiBrush2Fill },
  repair: { label: "Repair & Diagnostics", icon: RiSettings5Fill },
};

/* -------------------------- Filter & search UI --------------------------- */
function Toolbar({ active, setActive, query, setQuery, counts }) {
  const tabs = [
    { key: "all", label: `All (${counts.all})` },
    { key: "installation", label: `Installation (${counts.installation})` },
    { key: "cleaning", label: `Cleaning / PM (${counts.cleaning})` },
    { key: "repair", label: `Repair (${counts.repair})` },
  ];

  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
              active === t.key
                ? "border-primary bg-primary text-secondary"
                : "border-black/10 bg-white/70 text-black hover:bg-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <label className="relative block w-full md:w-72">
        <RiSearchLine className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
          className="w-full rounded-full border border-black/10 bg-white/70 py-2 pl-9 pr-3 text-sm shadow-sm outline-none transition placeholder:text-black/40 focus:border-primary"
        />
      </label>
    </div>
  );
}

/* ------------------------------ Project card ----------------------------- */
function ProjectCard({ project, onOpen }) {
  const meta = TYPE_META[project.type];
  const Icon = meta.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-2xl border border-black/10 bg-white/70 shadow-sm backdrop-blur-md"
    >
      <button
        onClick={() => onOpen(project)}
        className="block w-full text-left"
        aria-label={`Open project: ${project.title}`}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          {project.cover ? (
            <img
              src={project.cover}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary/20 to-transparent" />
          )}
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-4">
          <div className="mb-1 flex items-center gap-2 text-xs text-black/60">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-primary ring-1 ring-primary/20">
              <Icon /> {meta.label}
            </span>
            <span className="inline-flex items-center gap-1">
              <RiMapPin2Fill /> {project.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <RiCalendarEventFill />{" "}
              {new Date(project.date).toLocaleDateString()}
            </span>
          </div>
          <h3 className="line-clamp-2 text-base font-semibold text-primary">
            {project.title}
          </h3>
          {project.highlights?.length ? (
            <ul className="mt-2 list-disc pl-5 text-[13px] leading-6 text-black/70">
              {project.highlights.slice(0, 3).map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </button>
    </motion.article>
  );
}

/* ------------------------------ Modal viewer ----------------------------- */
function ProjectModal({ open, project, onClose }) {
  const hasCompare = project?.before && project?.after;
  const [pos, setPos] = useState(50);

  useEffect(() => {
    if (!open) setPos(50);
  }, [open]);

  return (
    <AnimatePresence>
      {open && project && (
        <>
          <motion.div
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed inset-0 z-[71] grid place-items-center px-4"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
          >
            <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-black/10 bg-white/95 shadow-2xl backdrop-blur-xl">
              <button
                onClick={onClose}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/70"
                aria-label="Close"
              >
                <RiCloseLine className="text-lg" />
              </button>

              {/* Media */}
              <div className="relative bg-black/5">
                {hasCompare ? (
                  <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl select-none">
                    <img
                      src={project.after}
                      alt={`${project.title} (after)`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div
                      className="absolute inset-y-0 left-0"
                      style={{ width: `${pos}%` }}
                    >
                      <img
                        src={project.before}
                        alt={`${project.title} (before)`}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-y-0 right-[-1px] w-[2px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.2)]" />
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={pos}
                      onChange={(e) => setPos(Number(e.target.value))}
                      className="absolute bottom-3 left-1/2 -translate-x-1/2"
                      style={{ width: "60%" }}
                      aria-label="Compare before and after"
                    />
                  </div>
                ) : (
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="mx-auto aspect-[16/9] w-full max-w-5xl object-cover"
                  />
                )}
              </div>

              {/* Details */}
              <div className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    {project.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-black/60">
                    <span className="inline-flex items-center gap-1">
                      <RiMapPin2Fill /> {project.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <RiCalendarEventFill />{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                  </div>
                  {project.highlights?.length ? (
                    <ul className="mt-2 list-disc pl-5 text-[13px] leading-6 text-black/70">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-secondary hover:bg-primary-hover"
                >
                  Book Similar Service
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* --------------------------------- Page ---------------------------------- */
export default function Projects() {
  useSEO();

  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [shown, setShown] = useState(6);

  const counts = useMemo(() => {
    const base = {
      all: PROJECTS.length,
      installation: 0,
      cleaning: 0,
      repair: 0,
    };
    PROJECTS.forEach((p) => (base[p.type] += 1));
    return base;
  }, []);

  const list = useMemo(() => {
    let arr = [...PROJECTS];
    if (active !== "all") arr = arr.filter((p) => p.type === active);
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          TYPE_META[p.type].label.toLowerCase().includes(q)
      );
    }
    return arr;
  }, [active, query]);

  const openModal = (p) => {
    setSelected(p);
    setModalOpen(true);
  };

  /* JSON-LD (Collection of projects) */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AB Malonda Projects",
    hasPart: PROJECTS.map((p, i) => ({
      "@type": "CreativeWork",
      position: i + 1,
      name: p.title,
      about: TYPE_META[p.type].label,
      spatialCoverage: p.location,
      datePublished: p.date,
      image: p.cover || undefined,
    })),
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f8ff] via-[#e9f0ff] to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 60% at 75% 45%, rgba(0,74,173,0.12) 0%, rgba(0,74,173,0.06) 40%, rgba(0,74,173,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent backdrop-blur-md"
          >
            <RiSnowyFill /> Recent Work • Metro Manila
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-3xl font-extrabold text-primary sm:text-5xl"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-3 max-w-2xl text-sm/6 text-black/70 sm:text-base/7"
          >
            A snapshot of our recent installation, cleaning/PM, and repair work
            across Metro Manila.
          </motion.p>
        </div>
      </section>

      {/* Listing */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <Toolbar
            active={active}
            setActive={setActive}
            query={query}
            setQuery={setQuery}
            counts={counts}
          />

          {list.length === 0 ? (
            <p className="rounded-xl border border-black/10 bg-white/70 p-6 text-sm text-black/60 shadow-sm backdrop-blur-md">
              No projects matched your filter. Try a different keyword or tab.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {list.slice(0, shown).map((p) => (
                  <ProjectCard key={p.id} project={p} onOpen={openModal} />
                ))}
              </div>

              {shown < list.length && (
                <div className="mt-6 grid place-items-center">
                  <button
                    onClick={() => setShown((s) => s + 6)}
                    className="rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-hover hover:text-secondary"
                  >
                    Load more
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        open={modalOpen}
        project={selected}
        onClose={() => setModalOpen(false)}
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
