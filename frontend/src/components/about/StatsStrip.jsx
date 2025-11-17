// src/components/about/StatsStrip.jsx
import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { label: "Installs & Services", value: "1,000+" },
  { label: "Avg. Response", value: "Same-day" },
  { label: "Customer Rating", value: "5.0 ★" }, // adjust anytime
];

export default function StatsStrip() {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#f6f9ff] to-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur-md md:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl bg-white/60 p-4 text-center ring-1 ring-black/5"
            >
              <div className="text-2xl font-extrabold text-primary">
                {s.value}
              </div>
              <div className="text-xs text-black/60">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
