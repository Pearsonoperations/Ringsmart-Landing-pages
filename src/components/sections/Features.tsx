"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const features = [
  {
    number: "01",
    tag: "ASSESSMENT",
    title: "Get Diagnosed in Minutes",
    description:
      "Answer a short series of questions about your stance, habits, and tendencies. RingSmart analyses your responses and builds your complete fighter profile — no guesswork, no generic plans.",
    bullets: [
      "Takes under 2 minutes",
      "Covers stance, style & habits",
      "Powers every feature in the app",
    ],
    image: "/images/feature-assessment.png",
  },
  {
    number: "02",
    tag: "FIGHTER ANALYSIS",
    title: "Know the Fighter You Are",
    description:
      "RingSmart identifies your fighting style, breaks down your mechanical tendencies, and flags the risks that come with how you fight — so you can train with full awareness.",
    bullets: [
      "Identify your fighting style",
      "Understand your tendencies",
      "See your style risks",
    ],
    image: "/images/feature-analysis.png",
  },
  {
    number: "03",
    tag: "FIGHT LAB",
    title: "Diagnose & Fix Your Weaknesses",
    description:
      "Your personalised diagnostic report identifies priority weaknesses — from linear retreats to panic exchanges. Each weakness comes with targeted drills to correct it fast.",
    bullets: [
      "Turn insights into drills",
      "Correct priority weaknesses",
      "Fix mistakes fast",
    ],
    image: "/images/feature-fight-lab.png",
  },
  {
    number: "04",
    tag: "FIGHT TACTICS",
    title: "Build Gameplans for Any Opponent",
    description:
      "Select your opponent's stance and style, and RingSmart generates a complete gameplan — danger zones, dos and don'ts, recommended combos, and if-then tactical responses.",
    bullets: [
      "Read the opponent",
      "Build the gameplan",
      "Control the spar",
    ],
    image: "/images/feature-tactics.png",
  },
  {
    number: "05",
    tag: "NUTRITION",
    title: "Fuel Every Session Right",
    description:
      "Timing matters. Get personalised meal guidance based on your training type and how long until your session — from full meals to quick energy top-ups.",
    bullets: [
      "Fuel training properly",
      "Support recovery",
      "Perform consistently",
    ],
    image: "/images/feature-nutrition.png",
  },
  {
    number: "06",
    tag: "CONDITIONING",
    title: "Fight-Ready Conditioning Programme",
    description:
      "A progressive strength & conditioning programme designed for boxers. Choose gym or home workouts, track your sessions, and build explosive power week by week.",
    bullets: [
      "Fight-ready cardio",
      "Explosive power",
      "Build lasting stamina",
    ],
    image: "/images/feature-conditioning.png",
  },
];

function PhoneMockup({ feature }: { feature: (typeof features)[0] }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-[50px] bg-brand/10 blur-[40px] scale-90" />
      <div className="phone-mockup relative w-[260px] overflow-hidden p-2">
        <div className="rounded-[34px] overflow-hidden bg-[#09090b]">
          <Image
            src={feature.image}
            alt={feature.tag}
            width={260}
            height={560}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureContent({ feature, align }: { feature: (typeof features)[0]; align: "left" | "right" }) {
  return (
    <div className={`${align === "left" ? "lg:text-right" : "lg:text-left"} text-center`}>
      <span className="text-sm font-bold uppercase tracking-widest text-brand">
        {feature.tag}
      </span>
      <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
        {feature.title}
      </h3>
      <p className={`mt-4 text-muted-foreground leading-relaxed max-w-lg ${align === "left" ? "lg:ml-auto" : ""} mx-auto lg:mx-0 ${align === "left" ? "lg:ml-auto" : ""}`}>
        {feature.description}
      </p>
      <ul className="mt-6 space-y-3">
        {feature.bullets.map((bullet) => (
          <li
            key={bullet}
            className={`flex items-center gap-3 justify-center ${align === "left" ? "lg:justify-end" : "lg:justify-start"}`}
          >
            {align === "right" && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10">
                <svg className="w-3.5 h-3.5 text-brand" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
            )}
            <span className="text-sm font-medium">{bullet}</span>
            {align === "left" && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10">
                <svg className="w-3.5 h-3.5 text-brand" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineFeature({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const isOdd = index % 2 === 0; // 01,03 = phone left, text right

  return (
    <div className="relative">
      {/* Mobile layout */}
      <div className="lg:hidden flex flex-col items-center gap-8">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand/30 bg-[#09090b] text-sm font-bold text-brand-light shadow-[0_0_20px_rgba(59,130,246,0.15)]"
        >
          {feature.number}
        </motion.span>
        <PhoneMockup feature={feature} />
        <FeatureContent feature={feature} align="right" />
      </div>

      {/* Desktop 3-column grid: left | center line+badge | right */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_80px_1fr] lg:items-center lg:gap-0">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`${isOdd ? "flex justify-end pr-8" : "pr-8"}`}
        >
          {isOdd ? (
            <PhoneMockup feature={feature} />
          ) : (
            <FeatureContent feature={feature} align="left" />
          )}
        </motion.div>

        {/* Center column — number badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand/30 bg-[#09090b] text-sm font-bold text-brand-light shadow-[0_0_20px_rgba(59,130,246,0.15)] z-10">
            {feature.number}
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className={`${!isOdd ? "flex pl-8" : "pl-8"}`}
        >
          {isOdd ? (
            <FeatureContent feature={feature} align="right" />
          ) : (
            <PhoneMockup feature={feature} />
          )}
        </motion.div>
      </div>
    </div>
  );
}

function TimelineConnector() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px]">
      {/* Background track */}
      <div className="absolute inset-0 bg-white/5" />
      {/* Animated blue fill */}
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute inset-0 bg-brand/40"
      />
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            System Features
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Structured boxing development —
            <br />
            <span className="text-gradient">without guesswork.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Six integrated systems that work together to transform how you
            train, fight, fuel, and recover.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          <TimelineConnector />

          <div className="space-y-32">
            {features.map((feature, index) => (
              <TimelineFeature
                key={feature.number}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
