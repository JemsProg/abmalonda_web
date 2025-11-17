// src/components/about/BrandStory.jsx
import React from "react";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl"
        >
          <h2 className="text-xl font-bold text-primary">Our Story</h2>
          <p className="mt-2 text-sm text-black/70">
            AB Malonda started with one simple goal: keep homes and businesses
            cool with clean, safe, and efficient air conditioning. We focus on
            tidy routing, correct commissioning, and transparent
            recommendations—so units perform well and last longer.
          </p>
          <p className="mt-3 text-sm text-black/70">
            From split-type installations to deep cleaning and diagnostics, our
            technicians are trained for both residential and commercial
            projects. We value punctuality, clear communication, and leaving
            your space cleaner than we found it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl"
        >
          <h3 className="text-lg font-semibold text-primary">
            What We Stand For
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-black/75">
            <li>
              • Proper sizing, tidy pipe/electrical routing, and deep vacuuming.
            </li>
            <li>
              • Preventive maintenance that restores airflow and cooling
              performance.
            </li>
            <li>
              • Diagnostics with clear findings and quoted fixes—no guesswork.
            </li>
            <li>
              • Respect for your time and space; we work clean and show up
              prepared.
            </li>
          </ul>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rotate-12 rounded-2xl bg-primary/10 blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
