"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProductCard = {
  name: string;
  description: string;
  photo: string;
};

const products: ProductCard[] = [
  {
    name: "Vape & E-Cigs",
    description: "Disposables, mods, pods & accessories",
    photo: "/photos/vape_shelf.jpg",
  },
  {
    name: "Cigars & Tobacco",
    description: "Premium cigars, pipe tobacco & more",
    photo: "/photos/tobacco_section.jpg",
  },
  {
    name: "Glass & Pipes",
    description: "Hand pipes, bongs & glass accessories",
    photo: "/photos/glass_display.jpg",
  },
  {
    name: "CBD & Edibles",
    description: "Full-spectrum CBD, gummies & tinctures",
    photo: "/photos/cbd_edibles.jpg",
  },
  {
    name: "Lotto & Accessories",
    description: "Lottery tickets, lighters & supplies",
    photo: "/photos/store_front2.jpg",
  },
  {
    name: "Hookah & More",
    description: "Hookah tobacco, coals & accessories",
    photo: "/photos/vape_mods.jpg",
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="py-24 px-6"
      style={{ background: "var(--esmoke-bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
            style={{ color: "var(--esmoke-red)" }}
          >
            What We Carry
          </p>
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--esmoke-text)",
            }}
          >
            Everything You Need
          </h2>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-sm"
              style={{ border: "1px solid var(--esmoke-border)" }}
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>

              {/* Text */}
              <div
                className="p-4"
                style={{ borderTop: "2px solid var(--esmoke-red)" }}
              >
                <h3
                  className="font-bold text-base mb-1"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    color: "var(--esmoke-text)",
                  }}
                >
                  {p.name}
                </h3>
                <p className="text-sm" style={{ color: "var(--esmoke-muted)" }}>
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
