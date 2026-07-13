// src/components/home/Hero.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiSnowyFill } from "react-icons/ri";
import Hero_img from "../../assets/home/hero_image.webp";

export default function Hero() {
  useEffect(() => {
    document.title =
      "Aircon Installation, Cleaning & Repair | AB Malonda Airconditioning Co.";

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
      "AB Malonda provides professional aircon installation, cleaning, preventive maintenance, and repair in Metro Manila. Reliable HVAC technicians, transparent pricing, and fast service."
    );
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f8ff] via-[#e9f0ff] to-white md:pt-4">
      {/* soft blue spotlight + mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 75% 45%, rgba(0,74,173,0.12) 0%, rgba(0,74,173,0.06) 40%, rgba(0,74,173,0) 70%)",
          maskImage:
            "radial-gradient(1200px 600px at 80% 40%, black 40%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent backdrop-blur-md">
            <RiSnowyFill /> HVAC Experts • Metro Manila
          </span>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-primary sm:text-5xl">
            Aircon Installation, Cleaning &amp; Repair
          </h1>

          <p className="mt-3 max-w-xl text-sm/6 text-black/70 sm:text-base/7">
            Keep your home or office cool and efficient. Our certified
            technicians handle split-type and window-type units—installation,
            deep cleaning, preventive maintenance, and fast diagnostics.
          </p>

          <ul className="mt-4 grid max-w-xl grid-cols-1 gap-2 text-sm text-black/75 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Transparent pricing
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              On-time, professional technicians
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Residential &amp; commercial
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Warranty on service
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              aria-label="See all aircon services"
            >
              View Services
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-secondary shadow-sm transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              aria-label="Contact AB Malonda for a free quote"
            >
              Get Free Quote
            </Link>
          </div>
        </motion.div>

        {/* Right: angled image with glass frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="relative mx-auto w-full max-w-[560px]">
            {/* glass frame with gradient border */}
            <div className="relative -rotate-2 rounded-2xl bg-white/20 p-2 shadow-2xl ring-1 ring-white/50 backdrop-blur-xl">
              <div className="rounded-xl bg-gradient-to-br from-primary to-[#2a6be6] p-[2px]">
                <div className="overflow-hidden rounded-[10px] bg-white">
                  <img
                    src={Hero_img}
                    alt="Aircon technician performing installation and cleaning on a split-type unit"
                    className="block w-full rotate-2 object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* outer glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] blur-2xl"
                style={{
                  background:
                    "radial-gradient(40% 60% at 70% 40%, rgba(0,74,173,0.35), rgba(0,74,173,0))",
                }}
              />
            </div>

            {/* floating glass badge */}
            <div className="absolute -left-4 -bottom-4 hidden rounded-xl border border-white/25 bg-white/50 px-3 py-2 text-xs text-black/80 backdrop-blur-md sm:block">
              <span className="font-semibold text-primary">AB Malonda</span> •
              Metro Manila
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
