import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Support — RingSmart",
  description: "Get help with RingSmart. Contact our support team.",
};

export default function Support() {
  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden flex flex-col">
      {/* Background gradient orbs matching main page */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-light/5 blur-[100px] pointer-events-none" />

      {/* Content */}
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center flex-1">
        <Image
          src="/images/logo-full.png"
          alt="RingSmart"
          width={280}
          height={280}
          className="mx-auto mb-8"
          priority
        />
        <h1 className="text-4xl font-extrabold tracking-tight">
          Support
        </h1>

        <div className="mt-12 text-[15px] leading-relaxed text-foreground/90">
          <p>If you need help, contact us at:</p>
          <p className="mt-4">
            <a
              href="mailto:support@ringsmart.tech"
              className="text-brand hover:text-brand-light transition-colors font-medium text-lg"
            >
              support@ringsmart.tech
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/50">
        <div className="mx-auto max-w-3xl px-6 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} RingSmart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
