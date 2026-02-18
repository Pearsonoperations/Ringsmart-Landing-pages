import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy — RingSmart",
  description: "RingSmart Privacy Policy. How we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden">
      {/* Background gradient orbs matching main page */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-light/5 blur-[100px] pointer-events-none" />

      {/* Content */}
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center">
        <Image
          src="/images/logo-full.png"
          alt="RingSmart"
          width={280}
          height={280}
          className="mx-auto mb-8"
          priority
        />
        <h1 className="text-4xl font-extrabold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-muted-foreground">
          Effective Date: February 18, 2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-foreground/90">
          <p>
            RingSmart (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy. This
            Privacy Policy explains how we collect, use, and protect your
            information when you use the RingSmart mobile application (&ldquo;the
            App&rdquo;).
          </p>

          <div className="h-px bg-white/5" />

          <section>
            <h2 className="text-xl font-bold mb-4">1. Information We Collect</h2>
            <p className="mb-3">When you use RingSmart, we may collect:</p>
            <ul className="list-none space-y-2 text-foreground/80">
              <li>Email address</li>
              <li>Account information (such as name, if provided)</li>
              <li>Subscription status (managed through Apple)</li>
              <li>Basic usage information necessary to operate the app</li>
            </ul>
            <p className="mt-4">We do not sell your personal information.</p>
          </section>

          <div className="h-px bg-white/5" />

          <section>
            <h2 className="text-xl font-bold mb-4">2. How We Use Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-none space-y-2 text-foreground/80">
              <li>Create and manage your account</li>
              <li>Provide access to subscription features</li>
              <li>Improve and maintain the app</li>
              <li>Respond to support requests</li>
            </ul>
          </section>

          <div className="h-px bg-white/5" />

          <section>
            <h2 className="text-xl font-bold mb-4">3. Subscriptions</h2>
            <p>RingSmart offers auto-renewing subscriptions.</p>
            <p className="mt-3">
              Subscriptions are billed and managed through Apple via your Apple
              ID. Apple handles all billing, renewals, and cancellations.
            </p>
            <p className="mt-3">
              You can manage or cancel your subscription in your Apple ID account
              settings.
            </p>
          </section>

          <div className="h-px bg-white/5" />

          <section>
            <h2 className="text-xl font-bold mb-4">4. Account Deletion</h2>
            <p>
              You can delete your account at any time within the app by going to:
            </p>
            <p className="mt-3 inline-block rounded-lg border border-white/10 bg-card px-4 py-3 font-mono text-sm">
              Settings &rarr; Delete Account
            </p>
            <p className="mt-4">
              Deleting your account permanently removes your data from our
              systems.
            </p>
            <p className="mt-3 text-foreground/80">
              Deleting your account does not automatically cancel an active Apple
              subscription. Subscriptions must be managed through your Apple ID.
            </p>
          </section>

          <div className="h-px bg-white/5" />

          <section>
            <h2 className="text-xl font-bold mb-4">5. Data Retention</h2>
            <p>
              We retain your information only as long as necessary to provide the
              service or comply with legal obligations.
            </p>
          </section>

          <div className="h-px bg-white/5" />

          <section>
            <h2 className="text-xl font-bold mb-4">6. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact:
            </p>
            <p className="mt-3">
              <a
                href="mailto:support@ringsmart.tech"
                className="text-brand hover:text-brand-light transition-colors font-medium"
              >
                support@ringsmart.tech
              </a>
            </p>
          </section>
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
