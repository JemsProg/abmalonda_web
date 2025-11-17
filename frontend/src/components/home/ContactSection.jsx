// src/components/ContactSection.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiPhoneFill,
  RiPhoneLine,
  RiClipboardLine,
  RiCheckLine,
} from "react-icons/ri";
import { SiViber } from "react-icons/si";

const CONTACT = {
  landline: { label: "Landline", raw: "8823-3771", tel: "+63288233771" },
  mobile: { label: "Mobile", raw: "0905-493-1351", tel: "+639054931351" },
  viber: {
    label: "Viber",
    raw: "0905-493-1351",
    deep: "viber://chat?number=%2B639054931351",
    download: "https://www.viber.com/download/",
  },
};

// naive, good-enough check
function useIsMobile() {
  return useMemo(() => {
    if (typeof navigator === "undefined") return false;
    const ua = navigator.userAgent || "";
    const coarse =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(pointer: coarse)").matches;
    return /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || coarse;
  }, []);
}

function ContactRow({ icon, label, number, onClick, onCopy, copied }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-full text-left
        flex items-center gap-3 rounded-xl
        border border-black/10 bg-white/70 p-4
        shadow-sm backdrop-blur-md transition-colors
        hover:bg-white
      "
    >
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
        {icon}
      </span>

      <div className="min-w-0">
        <p className="text-xs text-black/60">{label}</p>
        <span className="block truncate text-sm font-semibold tracking-wide text-black">
          {number}
        </span>
      </div>

      <span
        onClick={(e) => {
          e.stopPropagation();
          onCopy();
        }}
        className="ml-auto rounded-md p-2 text-black/60 hover:bg-black/[0.06] cursor-pointer"
        title="Copy"
        aria-label={`Copy ${label}`}
      >
        {copied ? (
          <RiCheckLine className="text-green-600" />
        ) : (
          <RiClipboardLine />
        )}
      </span>
    </button>
  );
}

function ActionModal({ kind, open, onClose }) {
  if (!open) return null;

  const isCall = kind === "call";
  const title = isCall ? "Call AB Malonda" : "Message via Viber";
  const number = CONTACT.mobile.raw;

  const actions = isCall
    ? [
        {
          label: "Call with phone app",
          href: `tel:${CONTACT.mobile.tel}`,
          primary: true,
        },
      ]
    : [
        { label: "Open Viber app", href: CONTACT.viber.deep, primary: true },
        {
          label: "Download Viber",
          href: CONTACT.viber.download,
          primary: false,
        },
      ];

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        key="modal"
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.18 }}
        className="fixed inset-x-4 top-[15%] z-[61] mx-auto max-w-md rounded-2xl border border-black/10 bg-white/90 p-5 shadow-xl backdrop-blur-xl"
        role="dialog"
        aria-modal="true"
      >
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <p className="mt-1 text-sm text-black/70">
          {isCall
            ? "Click below to start the call, or dial this number from your phone:"
            : "If Viber is installed, open it. Otherwise, download Viber first:"}
        </p>

        <div className="mt-3 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-black">
          {number}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              onClick={onClose}
              className={
                a.primary
                  ? "rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-secondary hover:bg-primary-hover"
                  : "rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-hover hover:text-secondary"
              }
            >
              {a.label}
            </a>
          ))}
          <button
            onClick={onClose}
            className="ml-auto rounded-lg px-4 py-2 text-sm font-semibold text-black/60 hover:bg-black/[0.06]"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ContactSection() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState("");
  const [modal, setModal] = useState(null); // 'call' | 'viber' | null

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1400);
    } catch {}
  };

  const handleCall = () => {
    if (isMobile) {
      window.location.href = `tel:${CONTACT.mobile.tel}`;
    } else {
      setModal("call");
    }
  };

  const handleViber = () => {
    if (isMobile) {
      window.location.href = CONTACT.viber.deep;
    } else {
      setModal("viber");
    }
  };

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-2xl border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
        >
          <div className="aspect-video w-full">
            <iframe
              title="AB Malonda Airconditioning Co. — Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.885594935695!2d121.03551709999998!3d14.491256399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf6dfb5addad%3A0xe6f1cc7f696f9781!2sAB%20Malonda%20Airconditioning%20Co.!5e0!3m2!1sen!2sph!4v1755084739906!5m2!1sen!2sph"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              style={{ border: 0 }}
            />
          </div>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-bl-[80px]"
            style={{
              background:
                "radial-gradient(120px 120px at 100% 0%, rgba(0,74,173,0.12), transparent 70%)",
            }}
          />
          <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
          <p className="mt-1 text-sm text-black/70">
            Call or message us for installs, cleaning, PM, and repair.
          </p>

          <div className="mt-6 space-y-4">
            <ContactRow
              icon={<RiPhoneFill />}
              label={CONTACT.landline.label}
              number={CONTACT.landline.raw}
              onClick={handleCall}
              onCopy={() => copy(CONTACT.landline.raw, "landline")}
              copied={copied === "landline"}
            />
            <ContactRow
              icon={<RiPhoneLine />}
              label={CONTACT.mobile.label}
              number={CONTACT.mobile.raw}
              onClick={handleCall}
              onCopy={() => copy(CONTACT.mobile.raw, "mobile")}
              copied={copied === "mobile"}
            />
            <ContactRow
              icon={<SiViber />}
              label={CONTACT.viber.label}
              number={CONTACT.viber.raw}
              onClick={handleViber}
              onCopy={() => copy(CONTACT.viber.raw, "viber")}
              copied={copied === "viber"}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleCall}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-secondary hover:bg-primary-hover"
            >
              Call Now
            </button>
            <button
              onClick={handleViber}
              className="rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-hover hover:text-secondary"
            >
              Message via Viber
            </button>
          </div>
        </motion.div>
      </div>

      {/* custom modal shown only on desktop to avoid system prompt */}
      <ActionModal kind={modal} open={!!modal} onClose={() => setModal(null)} />
    </section>
  );
}
