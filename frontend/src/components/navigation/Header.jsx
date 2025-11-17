// src/components/navigation/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 text-secondary">
      <div className="relative bg-primary supports-[backdrop-filter]:bg-primary/95">
        {/* Subtle glow effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(60% 120% at 80% 50%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Brand */}
            <Link to="/" className="group flex flex-col leading-tight">
              <span className="text-lg font-extrabold tracking-wide">
                AB MALONDA
              </span>
              <span className="text-[11px] tracking-[0.2em] opacity-90">
                AIRCONDITIONING CO.
              </span>
              <span className="mt-0.5 h-0.5 w-0 bg-secondary/70 transition-all duration-200 group-hover:w-full" />
            </Link>

            {/* Desktop nav (right-aligned) */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm tracking-wide opacity-90 transition-colors hover:opacity-100 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 rounded"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile burger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-primary-hover/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                {open ? (
                  <path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3 10.6 10.6 16.9 4.3z" />
                ) : (
                  <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden">
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />
          {/* Slide-out menu */}
          <nav className="fixed inset-y-0 right-0 w-[78%] max-w-xs bg-primary px-4 py-5 shadow-xl">
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm opacity-95 hover:bg-primary-hover/20 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
