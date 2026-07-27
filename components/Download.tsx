import Reveal from "./Reveal";

export default function Download() {
  return (
    <section id="download" className="relative overflow-hidden px-6 py-32">
      {/* Spotlight glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet/[0.14] to-cyan/[0.12] blur-[120px]" />

      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold tracking-tight text-ink">
            It&apos;s <span className="text-glow">showtime</span>
          </h2>
          <p className="mb-10 text-lg text-muted">
            Get TogglePresent and take control of your Mac before every
            meeting, demo, or presentation.
          </p>

          <a
            href="https://dodo.pe/togglepresent"
            className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-violet to-cyan px-8 py-4 text-base font-bold text-void transition-all hover:shadow-[0_0_44px_rgba(139,124,255,0.55)]"
          >
            Get TogglePresent
          </a>

          <p className="mt-6 font-mono text-[12px] text-muted">
            macOS 14.0+ · Apple Silicon &amp; Intel
          </p>
        </div>
      </Reveal>
    </section>
  );
}
