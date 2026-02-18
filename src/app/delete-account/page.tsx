import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Delete Account — RingSmart",
  description: "Delete your RingSmart account and associated data.",
};

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden flex flex-col">
      {/* Background gradient orbs matching main page */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-light/5 blur-[100px] pointer-events-none" />

      {/* Content */}
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-20 flex-1">
        <div className="text-center">
          <Image
            src="/images/logo-full.png"
            alt="RingSmart"
            width={280}
            height={280}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="text-4xl font-extrabold tracking-tight">
            Delete Your RingSmart Account
          </h1>
        </div>

        <div className="mt-12 text-[15px] leading-relaxed text-foreground/90 space-y-10">
          <p>
            If you would like to delete your RingSmart account and associated
            data, you can do so at any time.
          </p>

          {/* Option 1 */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              Option 1: Delete Inside the App
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Open the RingSmart app</li>
              <li>Go to Settings</li>
              <li>Select Delete Account</li>
              <li>Confirm your request</li>
            </ol>
            <p className="mt-4">Your account will be permanently deleted.</p>
          </section>

          <hr className="border-white/10" />

          {/* Option 2 */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              Option 2: Request Deletion by Email
            </h2>
            <p>
              If you are unable to access the app, you can request account
              deletion by contacting:
            </p>
            <p className="mt-4">
              <a
                href="mailto:support@ringsmart.tech"
                className="text-brand hover:text-brand-light transition-colors font-medium text-lg"
              >
                support@ringsmart.tech
              </a>
            </p>
            <p className="mt-4">
              Please include the email address associated with your account.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Important: Active Subscriptions */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              Important: Active Subscriptions
            </h2>
            <p>
              Deleting your RingSmart account does not automatically cancel your
              subscription.
            </p>
            <p className="mt-4">
              If you subscribed through Apple App Store or Google Play, you must
              cancel your subscription directly through your device&apos;s
              subscription settings.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-2">
              <li>
                <strong>iOS:</strong> Settings &rarr; Apple ID &rarr;
                Subscriptions
              </li>
              <li>
                <strong>Android:</strong> Google Play &rarr; Payments &amp;
                Subscriptions &rarr; Subscriptions
              </li>
            </ul>
          </section>

          <hr className="border-white/10" />

          {/* What Happens */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              What Happens When You Delete Your Account
            </h2>
            <p>When your account is deleted:</p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-2">
              <li>Your profile information is permanently removed</li>
              <li>Diagnostic results and reports are deleted</li>
              <li>Saved training data and preferences are erased</li>
              <li>Authentication data is removed</li>
            </ul>
            <p className="mt-4">
              We do not retain personal data after deletion, except where
              required by law (for example, basic transaction records for legal
              or tax compliance).
            </p>
            <p className="mt-4">
              Account deletion requests are processed within 7 days.
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
