import ToggleLogo from "./ToggleLogo";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Column 1: Logo & description */}
          <div>
            <div className="flex items-center gap-2.5">
              <ToggleLogo size={28} interactive />
              <span className="text-base font-semibold text-slate-900">
                Toggle Present.
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              A macOS menu bar app that instantly prepares your Mac for
              presentations. One click. Full focus.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Legal & Support
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/terms"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@macoshunt.app"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  support@macoshunt.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-blue-100 pt-8 sm:flex-row">
          <p className="text-[13px] text-slate-400">
            &copy; {new Date().getFullYear()} TogglePresent. All rights
            reserved.
          </p>
          <p className="text-[13px] text-slate-400">
            Made for macOS
          </p>
        </div>
      </div>
    </footer>
  );
}
