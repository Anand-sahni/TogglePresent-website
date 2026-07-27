import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Install",
    description:
      "Download the DMG, drag TogglePresent to your Applications folder, and launch it.",
  },
  {
    number: "02",
    title: "Activate",
    description:
      "Enter the license key sent to your email after purchase to unlock TogglePresent.",
  },
  {
    number: "03",
    title: "Configure",
    description:
      "Pick which switches to flip — hide icons, mute audio, silence notifications, and more.",
  },
  {
    number: "04",
    title: "Present",
    description:
      "Click the menu bar icon and every setting flips at once. Click again to restore.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-line-bright to-transparent" />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="mb-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              How it works
            </span>
            <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              From download to showtime
            </h2>
            <p className="mx-auto max-w-lg text-base text-muted">
              Four steps. About ninety seconds.
            </p>
          </div>
        </Reveal>

        <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-transparent via-line-bright to-transparent md:block" />

          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <div className="relative flex flex-col items-center text-center">
                {/* Keycap-style number */}
                <div className="relative z-10 mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-line-bright bg-panel-2 font-mono text-[15px] font-bold text-cyan shadow-[inset_0_-3px_0_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.4)]">
                  {step.number}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="max-w-[260px] text-[14px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
