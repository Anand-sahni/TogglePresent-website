import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — TogglePresent",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-blue-100 bg-slate-50 px-6 py-20 text-center">
        <Link
          href="/"
          className="mb-6 inline-block text-sm text-blue-600 hover:text-blue-700"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: February 14, 2026
        </p>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-10 text-sm leading-relaxed text-slate-600">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              1. Introduction
            </h2>
            <p>
              TogglePresent ("we", "our", or "the App") is committed to
              protecting your privacy. This Privacy Policy explains how we
              handle information when you use our macOS application.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              2. Information We Collect
            </h2>
            <p>
              <strong>We do not collect any personal data.</strong>{" "}
              TogglePresent runs entirely on your Mac. The App does not
              transmit, store, or process any personal information on external
              servers. All settings and preferences are stored locally on your
              device.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              3. Data Storage
            </h2>
            <p>
              All app data, including your preferences and configuration, is
              stored locally on your Mac. We do not use cloud storage or
              external databases. No data leaves your device.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              4. Analytics & Tracking
            </h2>
            <p>
              TogglePresent does not include any analytics, tracking, or
              telemetry software. We do not track your usage, behavior, or any
              other activity within the App.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              5. Third-Party Services
            </h2>
            <p>
              The App does not integrate with or send data to any third-party
              services. There are no third-party SDKs, advertising frameworks,
              or external dependencies that collect user data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              6. macOS Permissions
            </h2>
            <p>
              TogglePresent may request certain macOS permissions to function
              properly, such as accessibility permissions to hide desktop icons
              and manage notifications. These permissions are used solely for
              the App&apos;s intended functionality and are processed entirely
              on your device.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              7. Children&apos;s Privacy
            </h2>
            <p>
              Since we do not collect any personal data, there are no special
              provisions for children&apos;s data. The App is safe for users of
              all ages.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. Your
              continued use of the App after any changes constitutes acceptance
              of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              9. Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:support@macoshunt.com"
                className="text-blue-600 hover:text-blue-700"
              >
                support@macoshunt.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
