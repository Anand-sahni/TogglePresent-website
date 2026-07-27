import ToggleLogo from "./ToggleLogo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Column 1: Logo & description */}
          <div>
            <div className="flex items-center gap-2.5">
              <ToggleLogo size={26} interactive />
              <span className="font-display text-base font-bold text-ink">
                TogglePresent
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A macOS menu bar app that instantly flips your Mac into show
              mode. One click. Full focus.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Quick links
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted transition-colors hover:text-cyan"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-muted transition-colors hover:text-cyan"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-muted transition-colors hover:text-cyan"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-muted transition-colors hover:text-cyan"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Legal &amp; support
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/terms"
                  className="text-sm text-muted transition-colors hover:text-cyan"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-muted transition-colors hover:text-cyan"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@macoshunt.com"
                  className="text-sm text-muted transition-colors hover:text-cyan"
                >
                  support@macoshunt.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-[13px] text-muted/70">
            &copy; {new Date().getFullYear()} TogglePresent. All rights
            reserved.
          </p>
          <p className="inline-flex items-center gap-2 font-mono text-[12px] text-muted/70">
            <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_6px_rgba(61,230,140,0.7)]" />
            Made for macOS
          </p>
        </div>
      </div>
    </footer>
  );
}
