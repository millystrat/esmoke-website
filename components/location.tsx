"use client";

import { motion } from "framer-motion";

type HourEntry = {
  day: string;
  time: string;
};

const hours: HourEntry[] = [
  { day: "Monday – Thursday", time: "10 AM – 9 PM" },
  { day: "Friday – Saturday", time: "10 AM – 10 PM" },
  { day: "Sunday", time: "10 AM – 7 PM" },
];

export function Location() {
  return (
    <section
      id="hours"
      className="py-24 px-6"
      style={{ background: "var(--esmoke-bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-2 font-semibold"
                style={{ color: "var(--esmoke-red)" }}
              >
                Address
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--esmoke-text)" }}
              >
                1915 N 5th Street Hwy
                <br />
                Reading, PA 19605
              </p>
            </div>

            <div>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-2 font-semibold"
                style={{ color: "var(--esmoke-red)" }}
              >
                Phone
              </p>
              <a
                href="tel:4848695837"
                className="text-base transition-opacity hover:opacity-70"
                style={{ color: "var(--esmoke-text)" }}
              >
                (484) 869-5837
              </a>
            </div>

            <div>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold"
                style={{ color: "var(--esmoke-red)" }}
              >
                Hours
              </p>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-2"
                    style={{ borderBottom: "1px solid var(--esmoke-border)" }}
                  >
                    <span className="text-sm" style={{ color: "var(--esmoke-muted)" }}>
                      {h.day}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--esmoke-text)" }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-sm shadow-sm"
            style={{ border: "1px solid var(--esmoke-border)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3040.0016395980338!2d-75.9266957!3d40.364488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c677cf778564f1%3A0xa3e1e417ac781a32!2sE%20Smoke%20%26%20Vapor!5e0!3m2!1sen!2sus!4v1774415234408!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="E Smoke & Vapor location map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
