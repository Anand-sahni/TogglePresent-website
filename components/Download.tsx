export default function Download() {
  return (
    <section id="download" className="relative bg-white px-6 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/60 to-white" />

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Ready to present like a pro?
        </h2>
        <p className="mb-10 text-lg text-slate-500">
          Download TogglePresent and take control of your Mac before every
          meeting, demo, or presentation.
        </p>

        <a
          href="https://dodo.pe/togglepresent"
          className="group inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
        >
          Get Toggle Present
        </a>

        <p className="mt-5 text-[13px] text-slate-400">
          macOS 14.0+ &middot; Apple Silicon &amp; Intel
        </p>
      </div>
    </section>
  );
}
