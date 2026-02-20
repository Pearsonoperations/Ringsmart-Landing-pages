"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is RingSmart?",
    answer:
      "RingSmart is an AI-powered boxing training app that diagnoses your weaknesses, identifies your fighting style, and builds a personalised training plan — including targeted drills, opponent gameplans, nutrition guidance, and a 13-week conditioning programme.",
  },
  {
    question: "Do I need boxing experience?",
    answer:
      "Not at all. RingSmart is designed for all levels — from beginners looking to build fundamentals to experienced fighters preparing for competition. The assessment adapts to your experience and creates a plan that matches where you are.",
  },
  {
    question: "What do I get with the app?",
    answer:
      "You get a full diagnostic of your weaknesses with targeted drills, tactical gameplans for any opponent style, session-timed nutrition guidance, and a progressive 13-week strength & conditioning programme with gym and home workout options.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes — RingSmart includes a free trial so you can explore the full app, take the assessment, and see your personalised training plan before committing.",
  },
  {
    question: "What boxing styles does it cover?",
    answer:
      "RingSmart covers all 5 core boxing styles: Pressure Fighter, Out-Boxer/Mover, Counter Puncher, Boxer-Puncher, and Brawler. Your style is identified through the assessment and used to tailor every part of your training.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time through your App Store settings. There are no lock-in contracts or hidden fees.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-white/5"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-semibold pr-4 group-hover:text-brand transition-colors">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all duration-300 group-hover:border-brand/30 group-hover:text-brand ${
            isOpen ? "rotate-45 border-brand/30 text-brand" : ""
          }`}
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Frequently asked{" "}
            <span className="text-gradient">questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about RingSmart.
          </p>
        </motion.div>

        <div className="border-t border-white/5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
