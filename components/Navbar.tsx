import ToggleLogo from "./ToggleLogo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full px-4 pt-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-line bg-void/70 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <ToggleLogo size={26} interactive />
          <span className="font-display text-[15px] font-bold tracking-tight text-ink">
            TogglePresent
          </span>
        </a>

        {/* Center links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-[13px] font-medium text-muted transition-colors hover:bg-panel-2 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Download button */}
        <a
          href="https://github.com/Anand-sahni/TogglePresent/raw/main/TogglePresent.dmg"
          className="rounded-xl bg-gradient-to-r from-violet to-cyan px-4.5 py-2 text-[13px] font-semibold text-void transition-all hover:shadow-[0_0_24px_rgba(139,124,255,0.45)]"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
