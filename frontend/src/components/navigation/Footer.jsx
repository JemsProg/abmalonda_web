// src/components/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { RiPhoneFill, RiMapPin2Fill } from "react-icons/ri";
import { SiViber } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const PHONE_LANDLINE = "8823-3771";
const PHONE_LANDLINE_TEL = "+63288233771";
const PHONE_MOBILE = "0905-493-1351";
const PHONE_MOBILE_TEL = "+639054931351";
const VIBER_DEEPLINK = "viber://chat?number=%2B639054931351";
const FB_URL = "https://www.facebook.com/abmalonda.ac/";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 bg-white">
      {/* soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-10 h-44 w-44 rounded-full bg-primary/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 h-48 w-48 rounded-full bg-[#6aa1ff33] blur-2xl"
      />

      {/* main footer */}
      <div className="relative border-t border-black/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
          {/* brand */}
          <div className="space-y-3">
            <div className="leading-tight">
              <div className="text-lg font-extrabold tracking-wide text-primary">
                AB MALONDA
              </div>
              <div className="text-[11px] tracking-[0.2em] text-black/70">
                AIRCONDITIONING CO.
              </div>
            </div>
            <p className="max-w-xs text-sm text-black/70">
              Trusted air conditioning services across Metro Manila—from
              installation to deep cleaning, preventive maintenance, and repair.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AB Malonda on Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary/20 text-primary transition hover:bg-primary-hover hover:text-secondary"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* quick links */}
          <nav className="space-y-3">
            <h4 className="text-sm font-semibold text-black/80">Company</h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li>
                <Link to="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>

          {/* services */}
          <nav className="space-y-3">
            <h4 className="text-sm font-semibold text-black/80">Services</h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li>
                <Link to="/services#install" className="hover:text-primary">
                  Installation
                </Link>
              </li>
              <li>
                <Link to="/services#clean" className="hover:text-primary">
                  Cleaning / Preventive Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services#repair" className="hover:text-primary">
                  Repair & Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/services#ocular" className="hover:text-primary">
                  Ocular Visit
                </Link>
              </li>
            </ul>
          </nav>

          {/* contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-black/80">Contact</h4>

            <div className="flex items-start gap-3 rounded-xl border border-black/10 bg-white/70 p-3 shadow-sm backdrop-blur-md">
              <RiMapPin2Fill className="mt-0.5 text-lg text-primary" />
              <address className="not-italic text-sm text-black/70">
                AB Malonda Airconditioning Co.
                <br />
                3830, Parañaque, Metro Manila
              </address>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={`tel:${PHONE_LANDLINE_TEL}`}
                className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold text-black hover:bg-white"
              >
                <RiPhoneFill className="text-primary" />
                {PHONE_LANDLINE}
              </a>
              <a
                href={`tel:${PHONE_MOBILE_TEL}`}
                className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold text-black hover:bg-white"
              >
                <RiPhoneFill className="text-primary" />
                {PHONE_MOBILE}
              </a>
              <a
                href={VIBER_DEEPLINK}
                className="inline-flex items-center gap-2 rounded-lg border border-primary bg-white/70 px-3 py-2 text-sm font-semibold text-primary hover:bg-primary-hover hover:text-secondary"
              >
                <SiViber />
                Message via Viber
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-black/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-black/60 sm:flex-row sm:px-6">
            <p>© {year} AB Malonda Airconditioning Co. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-primary">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-primary">
                Terms
              </Link>
              <a
                href="https://www.google.com/maps/place/AB+Malonda+Airconditioning+Co./"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
