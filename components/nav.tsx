"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Products", href: "#products" },
    { label: "Reviews", href: "#reviews" },
    { label: "Hours", href: "#hours" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: "var(--esmoke-bg)", borderColor: "var(--esmoke-border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="E Smoke & Vapor"
            width={160}
            height={46}
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: "var(--esmoke-text)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:4848695837"
            className="text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: "var(--esmoke-red)" }}
          >
            (484) 869-5837
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden transition-opacity hover:opacity-70"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          style={{ color: "var(--esmoke-text)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ background: "var(--esmoke-bg)", borderColor: "var(--esmoke-border)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: "var(--esmoke-text)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:4848695837"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold"
            style={{ color: "var(--esmoke-red)" }}
          >
            (484) 869-5837
          </a>
        </div>
      )}
    </nav>
  );
}
