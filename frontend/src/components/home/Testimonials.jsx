// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const TESTIMONIALS = [
  {
    name: "Maria Jaime Klaridel",
    rating: 5,
    text: "They arrived the same day, diagnosed the issue fast, and our AC has been cooling great since. Clear pricing and very professional.",
  },
  {
    name: "John Michael Reyes",
    rating: 5,
    text: "Split-type installation was neat — tidy piping and clean work area. They explained settings and maintenance clearly. Highly recommended!",
  },
  {
    name: "Sophia Dela Cruz",
    rating: 4,
    text: "Deep cleaning removed the odor and improved airflow. Quieter and colder now. Will book preventive maintenance again.",
  },
];

function Stars({ n }) {
  return (
    <div
      className="flex gap-0.5 text-yellow-400"
      aria-label={`${n} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-base ${i < n ? "opacity-100" : "opacity-30"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="relative bg-primary text-secondary"
      aria-labelledby="testimonials-heading"
    >
      {/* soft spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 120% at 70% 35%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2
          id="testimonials-heading"
          className="text-center text-2xl font-bold sm:text-3xl"
        >
          Testimonials
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="
                relative overflow-hidden rounded-2xl
                bg-white/10 p-5 text-white
                ring-1 ring-white/25 backdrop-blur-md
                shadow-[0_12px_28px_rgba(0,0,0,0.18)]
              "
            >
              {/* quote watermark + subtle glow */}
              <FaQuoteLeft className="pointer-events-none absolute -top-2 -left-2 text-white/10 text-6xl" />
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-24 w-40 rotate-6 bg-white/10 blur-2xl" />

              <figcaption className="mb-2 flex items-center justify-between gap-3">
                <p className="truncate text-base font-semibold">{t.name}</p>
                <Stars n={t.rating} />
              </figcaption>

              <blockquote className="text-sm/6 text-white/90">
                “{t.text}”
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
