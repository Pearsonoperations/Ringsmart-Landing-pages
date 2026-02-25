"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import Image from "next/image";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function IntroScreen() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blackoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("intro-active");
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("intro-active");
    };
  }, []);

  const handleEnter = useCallback(() => {
    if (!screenRef.current || !contentRef.current || !overlayRef.current) return;

    const isMobile = window.innerWidth < 768;
    const tl = gsap.timeline();

    if (isMobile) {
      // Mobile: instant — skip straight to homepage
      document.documentElement.classList.remove("intro-active");
      document.body.style.overflow = "";
      window.dispatchEvent(new Event("intro-complete"));
      if (overlayRef.current) overlayRef.current.style.display = "none";
      return;
    } else {
      // Desktop: full zoom-into-phone animation
      const screenRect = screenRef.current.getBoundingClientRect();
      const cx = screenRect.left + screenRect.width / 2;
      const cy = screenRect.top + screenRect.height / 2;
      contentRef.current.style.transformOrigin = `${cx}px ${cy}px`;

      tl.to(buttonRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });

      tl.to(
        contentRef.current,
        { scale: 25, duration: 1.4, ease: "power2.in" },
        0.15
      );

      tl.to(
        blackoutRef.current,
        { opacity: 1, duration: 0.8, ease: "power2.in" },
        0.15
      );

      tl.call(
        () => {
          document.documentElement.classList.remove("intro-active");
          document.body.style.overflow = "";
          window.dispatchEvent(new Event("intro-complete"));
        },
        [],
        0.8
      );

      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
          onComplete: () => {
            if (overlayRef.current) overlayRef.current.style.display = "none";
          },
        },
        0.8
      );
    }
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50"
    >
      {/* Content layer — this entire layer gets scaled from the phone screen center */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center pt-12 pb-24 md:pt-0"
        style={{ willChange: "transform" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        />

        {/* Dark overlay on background */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Animated blue dots — desktop only (Three.js too heavy for mobile) */}
        <DottedSurface className="z-[1] opacity-60 hidden md:block" />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 30%, black 100%)",
            opacity: 0.5,
          }}
        />

        {/* Phone mockup */}
        <div className="relative z-10">
          <div className="phone-mockup relative w-[280px] md:w-[300px] overflow-hidden p-2">
            <div
              ref={screenRef}
              className="rounded-[34px] overflow-hidden bg-[#09090b]"
            >
              <Image
                src="/images/hero.png"
                alt="RingSmart App"
                width={300}
                height={650}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Glassmorphism button */}
        <button
          ref={buttonRef}
          onClick={handleEnter}
          className="relative z-10 mt-10 w-[280px] md:w-[300px] py-3 rounded-xl font-bold text-lg tracking-wide cursor-pointer transition-transform hover:scale-105 active:scale-95 intro-glass-btn intro-pulse-glow"
        >
          Enter the Ring
        </button>
      </div>

      {/* Blackout — fades in over everything as we dive into the phone darkness */}
      <div
        ref={blackoutRef}
        className="absolute inset-0 z-10 bg-[#09090b] pointer-events-none"
        style={{ opacity: 0 }}
      />
    </div>
  );
}
