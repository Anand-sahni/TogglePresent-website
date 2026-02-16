import Link from "next/link";

export const metadata = {
  title: "Terms of Service — TogglePresent",
};

export default function TermsPage() {
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
          Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using TogglePresent ("the App"),
              you agree to be bound by these Terms of Service. If you do not
              agree to these terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              2. Description of Service
            </h2>
            <p>
              TogglePresent is a macOS menu bar application that helps you
              prepare your Mac for presentations by hiding desktop icons,
              muting audio, disabling notifications, minimizing active apps,
              and changing wallpaper, all with a single click.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              3. License
            </h2>
            <p>
              Upon purchase, you are granted a non-exclusive, non-transferable
              license to use the App on any Mac computers that you own or
              control. This license does not allow you to distribute, modify,
              reverse-engineer, or create derivative works based on the App.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              4. Purchases & Refunds
            </h2>
            <p>
              TogglePresent is available as a one-time purchase. All purchases
              include lifetime access and future updates. All sales are final
              and non-refundable. By completing a purchase, you acknowledge
              that no refunds will be issued.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              5. User Responsibilities
            </h2>
            <p>You agree to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Use the App only for its intended purpose</li>
              <li>
                Not attempt to reverse-engineer, decompile, or disassemble the
                App
              </li>
              <li>
                Not redistribute, sublicense, or share your license with others
              </li>
              <li>
                Comply with all applicable laws when using the App
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              6. Intellectual Property
            </h2>
            <p>
              All rights, title, and interest in and to the App, including all
              intellectual property rights, are owned by TogglePresent. These
              Terms do not grant you any rights to use the TogglePresent name,
              logo, or trademarks.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              7. Disclaimer of Warranties
            </h2>
            <p>
              The App is provided "as is" without warranties of any kind,
              either express or implied. We do not warrant that the App will be
              uninterrupted, error-free, or free of harmful components. Your
              use of the App is at your sole risk.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              8. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, TogglePresent shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of the
              App.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              9. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be posted on this page with an updated date. Your continued
              use of the App after changes constitutes acceptance of the
              revised Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              10. Contact
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
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
