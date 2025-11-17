// src/components/ChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  RiShieldCheckFill,
  RiTimer2Fill,
  RiTeamFill,
  RiMapPin2Fill,
  RiCustomerService2Fill,
  RiStarSmileFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const features = [
  {
    num: "1",
    title: "Experienced Technicians",
    desc: "Over a decade of hands-on experience across split-type and window-type units — residential and commercial.",
  },
  {
    num: "2",
    title: "Quality Assurance",
    desc: "Every job is backed by our service warranty and a post-service performance check.",
  },
  {
    num: "3",
    title: "Customer-first Service",
    desc: "Clear pricing, clean work, and on-time schedules. We treat your place like it’s ours.",
  },
];

const stats = [
  { icon: RiTeamFill, label: "Years in Service", value: "10+" },
  { icon: RiShieldCheckFill, label: "Jobs Under Warranty", value: "100%" },
  { icon: RiTimer2Fill, label: "Avg. Response", value: "< 24 hrs" },
  { icon: RiMapPin2Fill, label: "Coverage", value: "Metro Manila" },
];

export default function ChooseUs() {
  return (
    <section
      className="relative overflow-hidden bg-primary text-secondary"
      aria-labelledby="chooseus-heading"
    >
      {/* background light + vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 120% at 65% 35%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <motion.h2
          id="chooseus-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold sm:text-3xl"
        >
          Why Choose Us
        </motion.h2>

        {/* numbered reasons */}
        <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl bg-white/10 p-5 shadow-lg ring-1 ring-white/25 backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl font-extrabold leading-none">
                  {f.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm/6 text-white/85">{f.desc}</p>
                </div>
              </div>

              {/* subtle corner glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rotate-12 rounded-2xl bg-white/15 blur-2xl"
              />
            </motion.div>
          ))}
        </div>

        {/* quick trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4"
        >
          {stats.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="flex items-center gap-3 rounded-xl bg-white/10 p-4 ring-1 ring-white/25 backdrop-blur"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/15">
                <Icon className="text-xl" />
              </span>
              <div>
                <p className="text-xs/5 text-white/80">{label}</p>
                <p className="text-base font-semibold">{value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* micro highlights row */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/25 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <RiCustomerService2Fill className="text-2xl" />
              <h3 className="font-semibold">Clear Communication</h3>
            </div>
            <p className="mt-2 text-sm/6 text-white/85">
              From quote to completion, expect updates you can understand —
              transparent scope, timelines, and pricing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/25 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <RiShieldCheckFill className="text-2xl" />
              <h3 className="font-semibold">Safe & Tidy Work</h3>
            </div>
            <p className="mt-2 text-sm/6 text-white/85">
              Proper PPE, clean site practices, and a final checklist so your
              place is as neat as we found it — only cooler.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/25 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <RiStarSmileFill className="text-2xl" />
              <h3 className="font-semibold">Trusted by Homes & SMEs</h3>
            </div>
            <p className="mt-2 text-sm/6 text-white/85">
              Repeat customers and referrals power our growth — your experience
              is our best marketing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
