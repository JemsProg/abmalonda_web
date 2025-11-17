// src/pages/Service.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  RiToolsFill,
  RiBrush2Fill,
  RiSettings5Fill,
  RiSearchEyeFill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const SERVICES = [
  {
    key: "installation",
    icon: RiToolsFill,
    title: "Aircon Installation",
    summary:
      "Professional aircon installation for split-type & window-type units with proper sizing, tidy routing, and correct commissioning for efficient cooling and lower power use.",
    details: [
      "Bracket placement, leveling & vibration pads",
      "Copper pipe, insulation, drain & power route (clean & hidden)",
      "Deep vacuum, nitrogen hold & leak detection",
      "Commissioning: amperage, pressure & airflow checks",
      "User orientation (remote modes) & maintenance schedule",
    ],
  },
  {
    key: "cleaning",
    icon: RiBrush2Fill,
    title: "Aircon Cleaning / Preventive Maintenance",
    summary:
      "Deep cleaning that reaches the blower wheel & coils to restore airflow, reduce noise, remove odor, and improve indoor air quality.",
    details: [
      "Full disassembly wash of evaporator coil, blower wheel & drain pan",
      "Safe coil chemicals; sanitation against mold/mildew",
      "Outdoor condenser rinse; fin straightening if needed",
      "Drain line flush to stop leaks/water drips",
      "System health check: temperature drop, amperage & noise",
    ],
  },
  {
    key: "repair",
    icon: RiSettings5Fill,
    title: "Aircon Repair & Diagnostics",
    summary:
      "No-guesswork troubleshooting with clear findings and a quoted fix. We service most AC brands and models across Metro Manila.",
    details: [
      "Capacitor, fan motor, contactor & sensor replacement",
      "PCB/control board and wiring fault isolation",
      "Refrigerant recovery, leak test & recharge (R32/R410A)",
      "Fix low cooling, icing, tripping & error codes",
      "Post-repair performance verification & run test",
    ],
  },
  {
    key: "ocular",
    icon: RiSearchEyeFill,
    title: "Ocular Visit / Site Survey",
    summary:
      "On-site inspection to recommend the right AC size, placement, and materials—prevent rework and ensure neat drain, power and piping routes.",
    details: [
      "Heat-load estimate & brand/model suggestions",
      "Indoor/outdoor placement (sun/rain & airflow)",
      "Drain, copper pipe & electrical route planning",
      "Bill of materials & installation timeline",
      "Safety & warranty considerations",
    ],
  },
];

function ServiceCard({
  open,
  onToggle,
  icon: Icon,
  title,
  summary,
  details,
  id,
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      id={id}
      itemScope
      itemType="https://schema.org/Service"
      layout
      onClick={onToggle}
      whileTap={{ scale: reduce ? 1 : 0.985 }}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-white/80 p-4 shadow-md ring-1 ring-primary/10 backdrop-blur transition-colors focus-within:ring-primary/40"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle()}
      aria-expanded={open}
    >
      {/* soft corner glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rotate-12 rounded-2xl bg-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-14 bottom-0 h-24 w-24 -rotate-12 rounded-2xl bg-primary/10 blur-2xl" />

      {/* Header row */}
      <div className="flex items-center gap-3">
        <motion.div
          animate={open ? { scale: 1.05, rotate: 6 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 ring-1 ring-primary/20"
          aria-hidden="true"
        >
          <Icon className="text-[22px] text-primary" />
        </motion.div>

        <div className="flex min-w-0 flex-col">
          <h2
            className="truncate text-lg font-semibold text-primary"
            itemProp="name"
          >
            {title}
          </h2>
          <p
            className="mt-0.5 line-clamp-2 text-[13px] leading-6 text-gray-700 md:line-clamp-none"
            itemProp="description"
          >
            {summary}
          </p>
          <meta itemProp="areaServed" content="Metro Manila" />
          <meta itemProp="serviceType" content={title} />
        </div>

        {/* chevron */}
        <motion.span
          className="ml-auto hidden text-primary md:block"
          animate={open ? { rotate: 180 } : { rotate: 0 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
          aria-hidden="true"
        >
          ▾
        </motion.span>
      </div>

      {/* Expandable details */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            layout
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 8 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: reduce ? 0 : 0.28 }}
          >
            <ul className="mt-1 list-disc pl-5 text-[13px] leading-6 text-gray-700">
              {details.map((d, i) => (
                <li key={i} className="marker:text-primary">
                  {d}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-3 flex items-center justify-end">
              <Link
                to={`/contact?service=${encodeURIComponent(title)}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-secondary shadow-sm transition-colors hover:bg-primary-hover"
                aria-label={`Book ${title}`}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Service() {
  const [openKey, setOpenKey] = useState(null);
  const { pathname } = useLocation();

  // Route-level SEO (no Helmet)
  useEffect(() => {
    document.title =
      "Aircon Services | Installation, Cleaning & Repair | AB Malonda";
    const ensureMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    ensureMeta(
      "description",
      "AB Malonda offers professional aircon services in Metro Manila: installation, deep cleaning/preventive maintenance, and repair/diagnostics for split-type and window-type units."
    );

    // JSON-LD ItemList of Services
    const scriptId = "services-jsonld";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: SERVICES.map((s, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
          areaServed: "Metro Manila",
          provider: {
            "@type": "Organization",
            name: "AB Malonda Airconditioning Co.",
          },
          // Make each service linkable
          url: `https://abmalonda.example.com${pathname}#${s.key}`,
          serviceType: s.title,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    script.text = JSON.stringify(itemList);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [pathname]);

  return (
    <section
      className="relative bg-white py-12 px-4 sm:px-6"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        <h1
          id="services-heading"
          className="mb-8 text-2xl font-bold text-primary md:text-3xl"
        >
          Services we offer
        </h1>

        <div className="flex flex-col gap-4">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.key}
              id={s.key}
              open={openKey === s.key}
              onToggle={() => setOpenKey(openKey === s.key ? null : s.key)}
              icon={s.icon}
              title={s.title}
              summary={s.summary}
              details={s.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
