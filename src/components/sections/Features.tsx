"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
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
    color: "text-brand",
  },
  {
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
    color: "text-brand",
  },
  {
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
    color: "text-success",
  },
  {
    tag: "CONDITIONING",
    title: "13-Week Fight-Ready Programme",
    description:
      "A progressive strength & conditioning programme designed for boxers. Choose gym or home workouts, track your sessions, and build explosive power week by week.",
    bullets: [
      "Fight-ready cardio",
      "Explosive power",
      "Build lasting stamina",
    ],
    image: "/images/feature-conditioning.png",
    color: "text-brand",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            System Features
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need to{" "}
            <span className="text-gradient">train smarter</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Four integrated systems that work together to transform how you
            train, fight, fuel, and recover.
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.tag}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col gap-12 items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Phone mockup */}
              <div className="flex-shrink-0">
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
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <span
                  className={`text-sm font-bold uppercase tracking-widest ${feature.color}`}
                >
                  {feature.tag}
                </span>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 justify-center lg:justify-start"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10">
                        <svg
                          className="w-3.5 h-3.5 text-brand"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-sm font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
