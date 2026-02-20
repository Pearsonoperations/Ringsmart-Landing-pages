"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fightStyles = [
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
    traits: ["Combination punching", "Mid-range comfort", "Role switching"],
  },
  {
    name: "Brawler",
    description: "Physical exchanges and durability",
    traits: ["Forward pressure", "Willingness to trade", "Relentless energy"],
  },
];

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-slate-400/[0.12] overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0d1321 0%, #162033 25%, #1a2740 50%, #162033 75%, #0d1321 100%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

export default function Styles() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end end"],
  });

  // Header + intro card appear together
  const headerOpacity = useTransform(scrollYProgress, [0, 0.04], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.04], [20, 0]);

  // Intro card: appears WITH header, holds for a good while, then fades quickly
  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.4, 0.45],
    [0, 1, 1, 0]
  );
  const introScale = useTransform(scrollYProgress, [0.4, 0.45], [1, 0.85]);

  // Style cards: snap visible right when intro is gone, then spread
  const spreadPx = 240;
  const card0X = useTransform(scrollYProgress, [0.45, 0.7], [0, -2 * spreadPx]);
  const card1X = useTransform(scrollYProgress, [0.45, 0.7], [0, -1 * spreadPx]);
  const card2X = useTransform(scrollYProgress, [0.45, 0.7], [0, 0]);
  const card3X = useTransform(scrollYProgress, [0.45, 0.7], [0, 1 * spreadPx]);
  const card4X = useTransform(scrollYProgress, [0.45, 0.7], [0, 2 * spreadPx]);
  const cardXValues = [card0X, card1X, card2X, card3X, card4X];

  // Cards appear instantly once intro is fully gone — no crossfade overlap
  const cardsOpacity = useTransform(scrollYProgress, [0.45, 0.47], [0, 1]);

  return (
    <section ref={sectionRef} id="styles" className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      {/* Desktop: Sticky scroll-driven card spread */}
      <div className="hidden lg:block min-h-[220vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
          {/* Header — fades in fast */}
          <motion.div
            style={{ opacity: headerOpacity, y: headerY }}
            className="text-center mb-6"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-brand">
              Your Style
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Discover how you{" "}
              <span className="text-gradient">really fight</span>
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              RingSmart classifies your fighting style and builds a training plan
              around your strengths, tendencies, and risks.
            </p>
          </motion.div>

          {/* Cards area */}
          <div className="relative w-full max-w-7xl flex items-center justify-center" style={{ height: 400 }}>
            {/* Intro card — solid background, high z-index, no bleed */}
            <motion.div
              style={{
                opacity: introOpacity,
                scale: introScale,
              }}
              className="absolute z-30 pointer-events-none"
            >
              <GlassCard className="w-[260px] h-[380px] border-brand/25 shadow-2xl">
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/15 mb-8 ring-1 ring-brand/20">
                    <svg
                      className="w-8 h-8 text-brand"
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
                  <h3 className="text-2xl font-bold tracking-tight">
                    This is your style
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Every fighter has a unique approach. RingSmart identifies
                    yours and builds around it.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* 5 style cards — hidden until intro gone, then fan out */}
            {fightStyles.map((style, index) => (
              <motion.div
                key={style.name}
                style={{
                  x: cardXValues[index],
                  opacity: cardsOpacity,
                  zIndex: 10 - Math.abs(index - 2),
                }}
                className="absolute"
              >
                <GlassCard className="w-[220px] h-[360px] transition-all duration-300 hover:border-brand/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.15),inset_0_0_20px_rgba(59,130,246,0.05)] hover:-translate-y-1">
                  <div className="flex flex-col items-center justify-center text-center h-full p-5">
                    <h3 className="text-lg font-bold">{style.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {style.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1.5 mt-5">
                      {style.traits.map((trait) => (
                        <span
                          key={trait}
                          className="rounded-full bg-brand/5 border border-brand/10 px-2.5 py-1 text-xs text-brand-light"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Standard scroll layout */}
      <div className="lg:hidden py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Your Style
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Discover how you{" "}
            <span className="text-gradient">really fight</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            RingSmart classifies your fighting style and builds a training plan
            around your strengths, tendencies, and risks.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {fightStyles.map((style, index) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="h-full hover:border-brand/30 transition-colors duration-300">
                <div className="p-5">
                  <h3 className="text-lg font-bold">{style.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {style.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {style.traits.map((trait) => (
                      <span
                        key={trait}
                        className="rounded-full bg-brand/5 border border-brand/10 px-2.5 py-1 text-xs text-brand-light"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
