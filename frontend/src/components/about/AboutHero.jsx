// src/components/about/AboutHero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
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
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-primary sm:text-5xl"
        >
          About AB Malonda Airconditioning Co.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-3 max-w-2xl text-sm/6 text-black/70 sm:text-base/7"
        >
          A Metro Manila–based team delivering aircon installation, deep
          cleaning, preventive maintenance, and repair—with neat workmanship and
          honest pricing.
        </motion.p>
      </div>
    </section>
  );
}
