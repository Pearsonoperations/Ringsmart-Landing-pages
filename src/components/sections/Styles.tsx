"use client";

import { motion } from "framer-motion";

const styles = [
  {
    name: "Pressure Fighter",
    description: "Closing distance and forcing engagement",
    traits: ["Forward momentum", "High contact rate", "Tight space comfort"],
  },
  {
    name: "Out-Boxer / Mover",
    description: "Distance control and movement",
    traits: [
      "Lateral movement",
      "Long-range engagement",
      "Space & timing reliance",
    ],
  },
  {
    name: "Counter Puncher",
    description: "Reaction, timing, making opponents miss",
    traits: [
      "Waiting for initiation",
      "Defensive-first",
      "Sharp single shots",
    ],
  },
  {
    name: "Boxer-Puncher",
    description: "Balanced offense and adaptability",
    traits: [
      "Combination punching",
      "Mid-range comfort",
      "Role switching",
    ],
  },
  {
    name: "Brawler",
    description: "Physical exchanges and durability",
    traits: [
      "Forward pressure",
      "Willingness to trade",
      "Relentless energy",
    ],
  },
];

export default function Styles() {
  return (
    <section id="styles" className="relative py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Your Style
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Discover how you{" "}
            <span className="text-gradient">really fight</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            RingSmart classifies your fighting style and builds a training plan
            around your strengths, tendencies, and risks.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {styles.map((style, index) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/5 bg-card/50 p-6 transition-all hover:border-brand/30 hover:bg-card/80"
            >
              <h3 className="text-lg font-bold group-hover:text-brand transition-colors">
                {style.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {style.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {style.traits.map((trait) => (
                  <span
                    key={trait}
                    className="rounded-full bg-brand/5 border border-brand/10 px-3 py-1 text-xs text-brand-light"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/10 to-brand/5 p-6 flex flex-col justify-center items-center text-center sm:col-span-2 lg:col-span-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/20 mb-4">
              <svg
                className="w-6 h-6 text-brand"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold">What&apos;s yours?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Take the 2-minute assessment and find out.
            </p>
            <a
              href="#download"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light transition-colors"
            >
              Get started
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
