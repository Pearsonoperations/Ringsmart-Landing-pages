"use client";

import { useRef, useEffect } from "react";

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


export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for heading fade in (once only)
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-100px 0px" }
    );

    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  // Horizontal scroll for cards — desktop only
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const updatePosition = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrollDist = sectionHeight - viewportHeight;
      const scrolled = -rect.top;

      let progress = scrolled / scrollDist;
      progress = Math.max(0, Math.min(1, progress));

      const vw = window.innerWidth;
      const startPad = vw * 0.75;
      const rightPad = vw * 0.1;
      const cardsWidth = track.scrollWidth - startPad - rightPad;
      const centerPad = Math.max((vw - cardsWidth) / 2, vw * 0.05);
      const maxTrans = startPad - centerPad;
      track.style.transform = `translate3d(${-(progress * maxTrans)}px, 0, 0)`;
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updatePosition);
    updatePosition();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="hiw-section">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="hiw-sticky">
        <div
          ref={headingRef}
          className="section-heading text-center pb-12 px-6"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brand">
            How It Works
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            From assessment to{" "}
            <span className="text-gradient">action</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Three steps to a training plan that actually fits how you fight.
          </p>
        </div>

        {/* Desktop: horizontal scroll track */}
        <div ref={trackRef} className="hiw-track">
          {steps.map((step, index) => (
            <div key={step.number} className="hiw-card relative group">
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-5 z-10">
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
              )}

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
            </div>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden flex flex-col gap-4 px-6">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <div className="glow-card rounded-2xl border border-white/5 bg-card/50 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-bold text-white/[0.04] leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
