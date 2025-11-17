// src/components/Partners.jsx
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

// Logos
import samsungLogo from "../../assets/partners/samsung_log.png";
import carrierLogo from "../../assets/partners/carrier_logo.png";
import conduraLogo from "../../assets/partners/condura_logo.png";
import totalineLogo from "../../assets/partners/totaline_logo.png";
import mitsubishiLogo from "../../assets/partners/mitsubishi_logo.png";
import koppelLogo from "../../assets/partners/koppel_logo.png";
import oxLogo from "../../assets/partners/ox_logo.png";
import mideaLogo from "../../assets/partners/midea_log.png";
import auxLogo from "../../assets/partners/aux_logo.png";

const PARTNERS = [
  { name: "Samsung", src: samsungLogo, link: "https://www.samsung.com/ph/" },
  { name: "Carrier", src: carrierLogo, link: "https://www.carrier.com.ph/" },
  { name: "Condura", src: conduraLogo, link: "https://condura.com/" },
  { name: "Totaline", src: totalineLogo, link: "https://www.totaline.com/" },
  {
    name: "Mitsubishi Heavy Industries",
    src: mitsubishiLogo,
    link: "https://www.mhi.com/",
  },
  { name: "Koppel", src: koppelLogo, link: "https://www.koppel.ph/" },
  { name: "OX Air Conditioner", src: oxLogo, link: "https://oxaircon.com/" },
  { name: "Midea", src: mideaLogo, link: "https://www.midea.com/ph" },
  { name: "AUX", src: auxLogo, link: "https://www.auxgroup.com/en/" },
];

function LogoCard({ item }) {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className="group mx-5 block select-none"
      aria-label={item.name}
      title={item.name}
    >
      <div className="relative h-24 w-[220px] sm:h-28 sm:w-[260px] md:h-28 md:w-[300px] rounded-2xl p-[1px] bg-gradient-to-br from-primary/20 to-black/5">
        <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-white/70 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
          {/* soft shine */}
          <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(60%_100%_at_0%_0%,rgba(255,255,255,0.45),transparent_60%)]" />
          <img
            src={item.src}
            alt={`${item.name} logo`}
            loading="lazy"
            className="max-h-40 sm:max-h-40 md:max-h-40 w-auto object-contain opacity-95 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </div>
    </motion.a>
  );
}

export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="mb-6 text-4xl font-semibold text-primary">
          Our Valued Partners
        </h3>

        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="h-50"
        >
          {PARTNERS.map((p) => (
            <LogoCard key={`row1-${p.name}`} item={p} />
          ))}
        </Marquee>

        <p className="mt-4 text-xs text-black/60">
          We work with leading air conditioner brands and parts suppliers to
          ensure reliable installs, repairs, and genuine components.
        </p>
      </div>
    </section>
  );
}
