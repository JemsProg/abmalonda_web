// src/components/about/ValuesGrid.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  RiToolsFill,
  RiShieldCheckFill,
  RiUserHeartFill,
} from "react-icons/ri";

const VALUES = [
  {
    icon: RiToolsFill,
    title: "Experienced Technicians",
    text: "Hands-on experience across split- & window-type ACs, from install to repair.",
  },
  {
    icon: RiShieldCheckFill,
    title: "Quality Assurance",
    text: "Workmanship focused on safety, neat routing, and correct commissioning.",
  },
  {
    icon: RiUserHeartFill,
    title: "Customer-first Service",
    text: "Clear pricing, on-time arrivals, and friendly technicians who respect your space.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <h2 className="mb-6 text-xl font-bold text-primary">Why Choose Us</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur-md"
            >
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <v.icon />
              </div>
              <h3 className="text-base font-semibold text-primary">
                {v.title}
              </h3>
              <p className="mt-1 text-sm text-black/70">{v.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
