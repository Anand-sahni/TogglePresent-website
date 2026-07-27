import Reveal from "./Reveal";

const included = [
  "All 5 presentation switches",
  "Lifetime access — pay once, use forever",
  "All future updates included free",
  "Apple Silicon & Intel support",
  "macOS 14.0 and later",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-28">
      {/* Ambient glow behind the card */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/[0.09] blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="mb-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              Pricing
            </span>
            <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Pay once. Present forever.
            </h2>
            <p className="mx-auto max-w-lg text-base text-muted">
              No subscriptions. No hidden fees. One license, yours for good.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto max-w-sm">
            {/* Gradient border wrapper */}
            <div className="rounded-3xl bg-gradient-to-b from-violet/60 via-line-bright to-cyan/40 p-px shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
              <div className="rounded-[calc(1.5rem-1px)] bg-panel p-8 sm:p-10">
                {/* Sale chip — green because it's ON */}
                <div className="mb-6 flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_rgba(61,230,140,0.8)]" />
                    Launch sale on
                  </span>
                </div>

                {/* Plan name */}
                <p className="mb-3 text-center font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
                  Lifetime license
                </p>

                {/* Price */}
                <div className="mb-1 flex items-baseline justify-center gap-3">
                  <span className="text-2xl font-medium text-muted/60 line-through decoration-ember/60 decoration-2">
                    $10
                  </span>
                  <span className="font-display text-[64px] font-extrabold leading-none tracking-tight text-ink">
                    $4.99
                  </span>
                </div>
                <p className="mb-8 text-center text-sm text-muted">
                  One-time payment · Limited-time offer
                </p>

                {/* Divider */}
                <div className="mb-8 h-px bg-line" />

                {/* Features */}
                <ul className="mb-8 space-y-3.5">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] text-ink/90"
                    >
                      {/* Mini toggle in the ON position */}
                      <span className="mt-1 flex h-3.5 w-6 shrink-0 items-center rounded-full bg-signal/25 px-0.5">
                        <span className="ml-auto h-2.5 w-2.5 rounded-full bg-signal" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://dodo.pe/togglepresent"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-cyan px-6 py-4 text-[15px] font-bold text-void transition-all hover:shadow-[0_0_36px_rgba(139,124,255,0.5)]"
                >
                  Get TogglePresent
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <p className="mt-5 text-center font-mono text-[11px] text-muted">
                  7-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
