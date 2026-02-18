"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section id="download" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/logo-r.png"
            alt="RingSmart"
            width={64}
            height={64}
            className="mx-auto mb-8 rounded-2xl"
          />

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Start training
            <br />
            <span className="text-gradient">smarter today</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Less than the cost of a single PT session — and it trains you every
            day. Download RingSmart and get your personalised boxing training
            plan.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white text-black px-8 py-4 text-base font-semibold transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-white/10"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] font-normal uppercase tracking-wider opacity-60">
                  Download on the
                </div>
                <div className="text-lg font-semibold leading-tight -mt-0.5">
                  App Store
                </div>
              </div>
            </a>

            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white text-black px-8 py-4 text-base font-semibold transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-white/10"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 9.006l-2.302 2.302L5.864 2.658z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] font-normal uppercase tracking-wider opacity-60">
                  Get it on
                </div>
                <div className="text-lg font-semibold leading-tight -mt-0.5">
                  Google Play
                </div>
              </div>
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Free trial included. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
