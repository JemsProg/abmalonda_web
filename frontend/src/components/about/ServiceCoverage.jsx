// src/components/about/ServiceCoverage.jsx
import React from "react";
import { motion } from "framer-motion";
import { RiMapPin2Fill } from "react-icons/ri";

export default function ServiceCoverage() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-2xl border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
        >
          <div className="aspect-video w-full">
            <iframe
              title="Service Area"
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

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl"
        >
          <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
            <RiMapPin2Fill className="text-primary" /> Service Coverage
          </h3>
          <p className="mt-2 text-sm text-black/70">
            We primarily serve Parañaque and nearby cities across Metro Manila.
            For projects outside the metro, contact us and we’ll coordinate
            schedules and materials.
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-black/75">
            <li>• Parañaque</li>
            <li>• Las Piñas</li>
            <li>• Muntinlupa</li>
            <li>• Pasay</li>
            <li>• Makati</li>
            <li>• Taguig</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
