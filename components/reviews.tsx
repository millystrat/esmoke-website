"use client";

import { motion } from "framer-motion";

type Review = {
  name: string;
  stars: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Rychardson",
    stars: 5,
    text: "I had an excellent experience at this smoke shop, definitely the best smoke shop in town, my favorite for over 3 plus years. Great and friendly knowledgeable staff.",
  },
  {
    name: "Mariel Valentin",
    stars: 5,
    text: "Great! People are nice and friendly. Went in to buy a vape. They had a raffle on the brand I bought and I actually won a TV. Thank you!!!",
  },
  {
    name: "KYM POSSYBLE",
    stars: 5,
    text: "Great prices. Very helpful in explaining everything. Not even from PA and he made us feel at home!!!!!!!",
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 px-6"
      style={{ background: "var(--esmoke-bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="font-bold mb-2"
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--esmoke-text)",
            }}
          >
            4.7{" "}
            <span aria-label="stars" style={{ color: "var(--esmoke-red)" }}>
              ★
            </span>{" "}
            on Google
          </h2>
          <p className="text-sm" style={{ color: "var(--esmoke-muted)" }}>
            117 reviews · Reading&apos;s most trusted smoke shop
          </p>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: i === 1 ? 0 : i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-sm p-6 shadow-sm"
              style={{
                background: "var(--esmoke-bg)",
                border: "1px solid var(--esmoke-border)",
              }}
            >
              <div
                role="img"
                className="text-sm font-bold mb-3"
                aria-label={`${r.stars} out of 5 stars`}
                style={{ color: "var(--esmoke-red)" }}
              >
                {"★".repeat(r.stars)}
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--esmoke-text)" }}
              >
                &ldquo;{r.text}&rdquo;
              </p>
              <p
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--esmoke-muted)" }}
              >
                — {r.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
