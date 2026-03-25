"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "70vh" }}
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/photos/cigarette_wall.jpg"
          alt="E Smoke & Vapor store interior"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        {/* White-to-transparent left gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.7) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Text panel */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-lg">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
            style={{ color: "var(--esmoke-red)" }}
          >
            Reading, PA · Est. 2019
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--esmoke-text)",
            }}
          >
            Reading&apos;s Premier Smoke &amp; Vape Shop
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--esmoke-muted)" }}
          >
            Your one-stop shop for vapes, cigars, pipes, tobacco, CBD, and more.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="https://maps.google.com/?q=1915+N+5th+Street+Hwy,+Reading,+PA+19605"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-sm font-semibold text-white rounded-sm transition-opacity hover:opacity-80"
              style={{ background: "var(--esmoke-red)" }}
            >
              Get Directions →
            </a>
            <a
              href="tel:4848695837"
              className="inline-block px-8 py-3 text-sm font-semibold rounded-sm border transition-opacity hover:opacity-70"
              style={{ color: "var(--esmoke-text)", borderColor: "var(--esmoke-border)" }}
            >
              (484) 869-5837
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
