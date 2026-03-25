"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AgeGate() {
  const [visible, setVisible] = useState(false);
  const [denied, setDenied] = useState(false);
  const confirmRef = useRef<HTMLButtonElement>(null);
  const denyRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!localStorage.getItem("esmoke_age_verified")) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      confirmRef.current?.focus();
    }
  }, [visible]);

  // Lock body scroll when gate is visible
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "Tab") return;
    const focusable = [confirmRef.current, denyRef.current].filter(
      Boolean
    ) as HTMLElement[];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function handleConfirm() {
    localStorage.setItem("esmoke_age_verified", "1");
    setVisible(false);
  }

  function handleDeny() {
    setDenied(true);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onKeyDown={handleKeyDown}
        >
          <div
            className="w-full max-w-sm text-center"
            role="dialog"
            aria-modal="true"
            aria-label="Age verification"
          >
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="E Smoke & Vapor"
                width={160}
                height={46}
                unoptimized
                className="mx-auto"
                priority
              />
            </div>

            {denied ? (
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                Sorry, you must be 21 or older to enter this site.
              </p>
            ) : (
              <>
                <h1
                  className="text-white text-xl font-semibold mb-2"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  You must be 21 or older to enter
                </h1>
                <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                  This site contains tobacco and nicotine products.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    ref={confirmRef}
                    onClick={handleConfirm}
                    className="px-8 py-3 text-sm font-semibold text-white rounded-sm transition-opacity hover:opacity-80"
                    style={{ background: "var(--esmoke-red)" }}
                  >
                    Yes, I&apos;m 21+
                  </button>
                  <button
                    ref={denyRef}
                    onClick={handleDeny}
                    className="px-8 py-3 text-sm font-semibold rounded-sm border transition-colors hover:border-white/40"
                    style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.2)" }}
                  >
                    No, I&apos;m under 21
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
