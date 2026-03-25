import Image from "next/image";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Reviews", href: "#reviews" },
  { label: "Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 px-6"
      style={{ background: "var(--esmoke-dark)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo + tagline — above the grid */}
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="E Smoke & Vapor"
            width={160}
            height={46}
            className="brightness-0 invert mb-4"
          />
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            Your neighborhood smoke &amp; vape shop since 2019
          </p>
        </div>

        {/* Three-column grid: Address | Hours | Links */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Address */}
          <div>
            <p
              className="text-xs tracking-[0.25em] uppercase font-semibold mb-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Find Us
            </p>
            <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              1915 N 5th Street Hwy
              <br />
              Reading, PA 19605
            </p>
            <a
              href="tel:4848695837"
              className="text-sm block transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              (484) 869-5837
            </a>
          </div>

          {/* Hours */}
          <div>
            <p
              className="text-xs tracking-[0.25em] uppercase font-semibold mb-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Hours
            </p>
            <div className="space-y-1 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              <p>Mon – Thu: 10 AM – 9 PM</p>
              <p>Fri – Sat: 10 AM – 10 PM</p>
              <p>Sun: 10 AM – 7 PM</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs tracking-[0.25em] uppercase font-semibold mb-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Links
            </p>
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs uppercase tracking-wider transition-opacity hover:opacity-70"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          <p>
            You must be 21 or older to purchase tobacco products. Please consume responsibly.
          </p>
          <p className="whitespace-nowrap">
            © {new Date().getFullYear()} E Smoke &amp; Vapor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
