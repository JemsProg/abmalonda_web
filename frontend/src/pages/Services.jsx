// src/pages/Services.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  RiToolsFill,
  RiBrush2Fill,
  RiSettings5Fill,
  RiSearchEyeFill,
  RiCheckFill,
  RiTimer2Fill,
  RiShieldCheckFill,
  RiSnowyFill,
} from "react-icons/ri";

/* ----------------------------- SEO (no Helmet) ---------------------------- */
function useSEO() {
  useEffect(() => {
    const title =
      "Aircon Installation, Cleaning & Repair | AB Malonda Airconditioning Co.";
    const desc =
      "Professional aircon installation, deep cleaning/PM, and repair across Metro Manila. Neat routing, correct commissioning, and clear pricing.";
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
      "aircon installation, aircon cleaning, aircon repair, preventive maintenance, split type, window type, Metro Manila, HVAC"
    );
  }, []);
}

/* --------------------------------- Data ---------------------------------- */
const SERVICES = [
  {
    key: "install",
    icon: RiToolsFill,
    title: "Installation",
    summary:
      "Proper sizing, tidy routing, and correct commissioning so your unit cools faster and uses less power.",
    bullets: [
      "Bracket placement, leveling & vibration pads",
      "Copper pipe, insulation, drain & power route (clean & hidden)",
      "Deep vacuum, nitrogen hold & leak detection",
      "Commissioning: amperage, pressure & airflow checks",
      "Orientation on remote settings & maintenance schedule",
    ],
  },
  {
    key: "clean",
    icon: RiBrush2Fill,
    title: "Cleaning / Preventive Maintenance",
    summary:
      "Deep cleaning that reaches the blower wheel & coils to restore airflow, reduce noise, and remove odor.",
    bullets: [
      "Full disassembly wash of coil, blower wheel & drain pan",
      "Safe coil chemicals; sanitation against mold/mildew",
      "Outdoor condenser rinse; fin straightening if needed",
      "Drain line flush to stop leaks / water drips",
      "System health check: temp drop, amperage, noise",
    ],
  },
  {
    key: "repair",
    icon: RiSettings5Fill,
    title: "Repair & Diagnostics",
    summary:
      "Clear findings and quoted fix before work starts. We repair most brands/models—no guesswork.",
    bullets: [
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
    title: "Ocular Visit",
    summary:
      "Quick site survey to recommend the right AC size, placement & materials and avoid rework.",
    bullets: [
      "Heat-load estimate & model suggestions",
      "Indoor/outdoor placement (sun/rain & airflow)",
      "Drain, pipe & electrical route planning",
      "Bill of materials & install timeline",
      "Safety & warranty considerations",
    ],
  },
];

/* ------------------------------ UI helpers ------------------------------- */
function SectionContainer({ children, tint = false }) {
  return (
    <section
      className={`relative ${
        tint
          ? "bg-gradient-to-br from-white via-[#f4fbfb] to-white"
          : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">{children}</div>
    </section>
  );
}

/* ------------------------------- Hero block ------------------------------ */
function ServicesHero() {
  return (
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
          <RiSnowyFill /> Installation • Cleaning • Repair
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-3 text-3xl font-extrabold text-primary sm:text-5xl"
        >
          Aircon Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-3 max-w-2xl text-sm/6 text-black/70 sm:text-base/7"
        >
          Installation, deep cleaning/PM, repair & diagnostics, and ocular
          survey—done right the first time with neat workmanship and honest
          pricing.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------------------- Services listing --------------------------- */
function ServiceCard({
  open,
  onToggle,
  icon: Icon,
  title,
  summary,
  bullets,
  id,
}) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      layout
      id={id}
      onClick={onToggle}
      whileTap={{ scale: reduce ? 1 : 0.985 }}
      className="
        group relative cursor-pointer overflow-hidden rounded-xl
        bg-white/80 p-4 shadow-md ring-1 ring-primary/10 backdrop-blur
        transition-colors focus-within:ring-primary/40
      "
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle()}
      aria-expanded={open}
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={open ? { scale: 1.05, rotate: 6 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 ring-1 ring-primary/20"
        >
          <Icon className="text-[22px] text-primary" />
        </motion.div>

        <div className="flex min-w-0 flex-col">
          <h3 className="truncate text-lg font-semibold text-primary">
            {title}
          </h3>
          <p className="mt-0.5 line-clamp-2 text-[13px] leading-6 text-gray-700 md:line-clamp-none">
            {summary}
          </p>
        </div>

        <motion.span
          className="ml-auto hidden text-primary md:block"
          animate={open ? { rotate: 180 } : { rotate: 0 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
        >
          ▾
        </motion.span>
      </div>

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
              {bullets.map((d, i) => (
                <li key={i} className="marker:text-primary">
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center justify-between gap-3">
              <Link
                to="/contact"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-secondary shadow-sm transition-colors hover:bg-primary-hover"
                aria-label={`Book ${title}`}
              >
                Book Now
              </Link>
              <a
                href="#top"
                onClick={(e) => e.stopPropagation()}
                className="text-xs text-black/60 hover:text-primary"
              >
                Back to top
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function ServicesList() {
  const [openKey, setOpenKey] = useState("install");
  return (
    <SectionContainer>
      <h2 className="mb-6 text-2xl font-bold text-primary">What we offer</h2>
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
            bullets={s.bullets}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

/* ---------------------------- Process / How we work ---------------------------- */
function ProcessStrip() {
  const STEPS = [
    {
      icon: RiTimer2Fill,
      title: "1) Quick scheduling",
      text: "Message or call—we’ll confirm the date and basic details.",
    },
    {
      icon: RiSearchEyeFill,
      title: "2) Site check",
      text: "Ocular survey or pre-service checklist for smooth execution.",
    },
    {
      icon: RiToolsFill,
      title: "3) Service day",
      text: "Neat routing, correct procedures, and safety at all times.",
    },
    {
      icon: RiShieldCheckFill,
      title: "4) QA & handover",
      text: "Performance check, cleanup, and usage tips/warranty info.",
    },
  ];
  return (
    <SectionContainer tint>
      <h2 className="mb-6 text-2xl font-bold text-primary">How we work</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur-md"
          >
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <s.icon />
            </div>
            <div className="text-sm font-semibold text-primary">{s.title}</div>
            <p className="mt-1 text-sm text-black/70">{s.text}</p>
          </motion.div>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-2 text-xs text-black/60">
        <RiCheckFill className="text-primary" /> Pricing varies by capacity,
        brand, location, and materials. We’ll confirm a quote after a quick
        check.
      </p>
    </SectionContainer>
  );
}

/* ---------------------------------- FAQ ---------------------------------- */
function FAQ() {
  const QA = [
    {
      q: "How often should I book cleaning/PM?",
      a: "Every 3–6 months for homes; 1–3 months for commercial or dusty areas. Regular PM restores airflow and cooling efficiency.",
    },
    {
      q: "Do you handle all brands and types?",
      a: "Yes—split-type and window-type units across most brands. For rare parts/boards, we’ll advise lead times.",
    },
    {
      q: "Do you provide warranty?",
      a: "Yes—service warranty on workmanship. Replacement parts carry manufacturer warranty when applicable.",
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <SectionContainer>
      <h2 className="mb-6 text-2xl font-bold text-primary">FAQs</h2>
      <div className="flex flex-col divide-y divide-black/10 rounded-xl border border-black/10 bg-white/70 shadow-sm backdrop-blur-md">
        {QA.map((item, i) => (
          <details
            key={i}
            open={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
            className="group p-4"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="text-sm font-semibold text-primary">
                {item.q}
              </span>
              <span className="text-primary transition group-open:rotate-180">
                ▾
              </span>
            </summary>
            <p className="mt-2 text-sm text-black/70">{item.a}</p>
          </details>
        ))}
      </div>
    </SectionContainer>
  );
}

/* --------------------------------- Page ---------------------------------- */
export default function Services() {
  useSEO();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "AB Malonda Airconditioning Co.",
    areaServed: "Metro Manila",
    url: "https://abmalonda.example.com/",
    telephone: "+63 905 493 1351",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Aircon services",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
          areaServed: "Metro Manila",
          serviceType: s.title,
        },
      })),
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://abmalonda.example.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://abmalonda.example.com/services",
      },
    ],
  };

  return (
    <main id="top" className="bg-white">
      <ServicesHero />
      <ServicesList />
      <ProcessStrip />
      <FAQ />

      {/* JSON-LD scripts (safe to place in body) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </main>
  );
}
