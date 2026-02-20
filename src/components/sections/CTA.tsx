"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";

export default function CTA() {
  return (
    <section id="download" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand/8 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/logo-r.png"
            alt="RingSmart"
            width={120}
            height={120}
            className="mx-auto mb-8 rounded-3xl"
          />

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Train With Clarity.{" "}
            <span className="text-gradient">Improve With Purpose.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Download RingSmart and get a structured boxing development plan
            tailored to how you fight.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <AppStoreBadge />
          <GooglePlayBadge />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Free trial included. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
