"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AppStoreBadge } from "@/components/StoreBadges";

export default function Hero() {
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    // Both mobile and desktop wait for intro-complete
    // Mobile: no delay (intro is instant), Desktop: 200ms delay (after zoom)
    const onIntroComplete = () => {
      if (mobile) {
        setReady(true);
      } else {
        setTimeout(() => setReady(true), 200);
      }
    };
    window.addEventListener("intro-complete", onIntroComplete);
    return () => window.removeEventListener("intro-complete", onIntroComplete);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs — desktop only (large blurs kill mobile GPU) */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brand/8 blur-[150px] pointer-events-none animate-float-slow" />
      <div className="hidden md:block absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-light/6 blur-[120px] pointer-events-none animate-float-medium" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand/4 blur-[100px] pointer-events-none animate-float-fast" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <div className="flex-1 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              You&apos;re Not Stuck.
              <br />
              You&apos;re{" "}
              <span className="text-gradient">Undiagnosed.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              Advanced boxing analysis and structured development —
              <br />
              from technique and tactics to conditioning and nutrition — tailored to how you fight.
            </motion.p>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 inline-block text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight text-gradient hover:opacity-80 transition-opacity"
            >
              Get Your Diagnosis
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center"
            >
              <AppStoreBadge />
            </motion.div>
          </div>

          {/* Mobile phone — single image, simple fade-up */}
          <motion.div
            className="lg:hidden flex-shrink-0"
            initial={{ opacity: 0, y: 60 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-brand/15 blur-[80px]" />
              <div className="phone-mockup relative w-[280px] overflow-hidden p-2">
                <div className="rounded-[34px] overflow-hidden bg-[#09090b]">
                  <Image
                    src="/images/hero.png"
                    alt="RingSmart App"
                    width={280}
                    height={607}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop phone — 3D rotate entrance + image carousel */}
          <div className="hidden lg:block flex-shrink-0" style={{ perspective: "1200px" }}>
            <motion.div
              initial={{ opacity: 0, y: 300, rotateY: -75 }}
              animate={ready
                ? { opacity: 1, y: 0, rotateY: 0 }
                : { opacity: 0, y: 300, rotateY: -75 }
              }
              transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-brand/15 blur-[80px]" />
                <div className="phone-mockup relative w-[300px] overflow-hidden p-2">
                  <div className="rounded-[34px] overflow-hidden bg-[#09090b]">
                    <div
                      className={ready ? "animate-phone-scroll" : "flex"}
                      style={{ width: "600%" }}
                    >
                      <Image
                        src="/images/hero.png"
                        alt="RingSmart Splash"
                        width={300}
                        height={650}
                        className="w-1/6 h-auto flex-shrink-0"
                        priority
                      />
                      <Image
                        src="/images/feature-fight-lab.png"
                        alt="Fight Lab"
                        width={300}
                        height={650}
                        className="w-1/6 h-auto flex-shrink-0"
                      />
                      <Image
                        src="/images/feature-tactics.png"
                        alt="Fight Tactics"
                        width={300}
                        height={650}
                        className="w-1/6 h-auto flex-shrink-0"
                      />
                      <Image
                        src="/images/feature-nutrition.png"
                        alt="Nutrition"
                        width={300}
                        height={650}
                        className="w-1/6 h-auto flex-shrink-0"
                      />
                      <Image
                        src="/images/feature-conditioning.png"
                        alt="Conditioning"
                        width={300}
                        height={650}
                        className="w-1/6 h-auto flex-shrink-0"
                      />
                      <Image
                        src="/images/app-home.png"
                        alt="RingSmart Dashboard"
                        width={300}
                        height={650}
                        className="w-1/6 h-auto flex-shrink-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
