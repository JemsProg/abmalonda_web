// src/components/navigation/MobileCTA.jsx
import React from "react";
import { RiPhoneFill } from "react-icons/ri";
import { SiViber } from "react-icons/si";

const PHONE_MOBILE_TEL = "+639054931351";
const VIBER_DEEPLINK = "viber://chat?number=%2B639054931351";

export default function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-black/10 bg-white/95 p-3 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={`tel:${PHONE_MOBILE_TEL}`}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-secondary shadow-sm"
      >
        <RiPhoneFill /> Call Now
      </a>
      <a
        href={VIBER_DEEPLINK}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-secondary shadow-sm"
      >
        <SiViber /> Viber
      </a>
    </div>
  );
}
