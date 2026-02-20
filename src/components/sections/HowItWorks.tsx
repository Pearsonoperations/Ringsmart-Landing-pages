"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Take the Assessment",
    description:
      "Answer questions about your stance, experience, fighting style, and where you struggle. It takes less than 2 minutes.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get Your Diagnosis",
    description:
      "RingSmart analyses your responses to build your fighter profile — identifying mechanical tendencies, style patterns, and priority weaknesses.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Train with Purpose",
    description:
      "Access your personalised drill library, build opponent gameplans, time your nutrition, and follow your conditioning programme.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
        />
      </svg>
    ),
  },
];

function SplitHeading() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["-50vw", "0vw"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["50vw", "0vw"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={ref} className="text-center mb-20 overflow-hidden">
      <motion.span
        style={{ opacity }}
        className="inline-block text-sm font-semibold uppercase tracking-widest text-brand"
      >
        How It Works
      </motion.span>
      <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight flex flex-col sm:flex-row items-center justify-center gap-x-3">
        <motion.span style={{ x: leftX, opacity }}>
          From assessment
        </motion.span>
        <motion.span style={{ x: rightX, opacity }}>
          to <span className="text-gradient">action</span>
        </motion.span>
      </h2>
      <motion.p
        style={{ opacity }}
        className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
      >
        Three steps to a training plan that actually fits how you fight.
      </motion.p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-32 bg-white/[0.01]"
    >
      {/* Top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <SplitHeading />

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting arrows between cards (desktop) */}
          {[0, 1].map((i) => (
            <div
              key={i}
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 items-center"
              style={{
                left: `calc(${((i + 1) * 100) / 3}% - 16px)`,
              }}
            >
              <svg
                className="w-8 h-8 text-brand/20"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          ))}

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, boxShadow: [
                "0 0 0px rgba(59,130,246,0)",
                "0 0 50px rgba(59,130,246,0.6), 0 0 100px rgba(59,130,246,0.3)",
                "0 0 0px rgba(59,130,246,0)",
              ]}}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                opacity: { duration: 0.6, delay: index * 0.2 },
                y: { duration: 0.6, delay: index * 0.2 },
                boxShadow: { duration: 1.2, delay: index * 0.8 + 0.5, ease: "easeInOut" },
              }}
              className="relative group rounded-2xl"
            >
              <div className="glow-card rounded-2xl border border-white/5 bg-card/50 p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-5xl font-bold text-white/[0.04] group-hover:text-brand/10 transition-colors leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
