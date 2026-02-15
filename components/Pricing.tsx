const included = [
  "All 5 presentation features",
  "Lifetime access pay once, use forever",
  "All future updates included free",
  "Apple Silicon & Intel support",
  "macOS 14.0 and later",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white px-6 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/60 to-white" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full px-3 py-1 text-5xl font-extrabold uppercase tracking-widest text-blue-600">
            Pricing
          </span>
          <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
            Simple, one-time pricing
          </h2>
          <p className="mx-auto max-w-lg text-base text-slate-500">
            No subscriptions. No hidden fees. Pay once, own it forever.
          </p>
        </div>

        <div className="mx-auto max-w-sm">
          {/* Sale banner above card */}
          <div className="mb-4 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 shadow-lg shadow-blue-500/20">
            <span className="text-sm font-bold uppercase tracking-wider text-white">
              Launch Sale Great Price
            </span>
          </div>

          <div className="relative overflow-hidden rounded-3xl border-2 border-blue-200 bg-white shadow-2xl shadow-blue-200/50">
            {/* Top accent - gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />

            <div className="p-8 sm:p-10">

              {/* Plan name */}
              <p className="mb-1 text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
                Lifetime License
              </p>

              {/* Price */}
              <div className="mb-1 flex items-baseline justify-center gap-3">
                <span className="text-2xl font-medium text-slate-300 line-through decoration-blue-300 decoration-2">
                  $10
                </span>
                <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-[56px] font-extrabold leading-none tracking-tight text-transparent">
                  $4.99
                </span>
              </div>
              <p className="mb-8 text-center text-sm text-slate-400">
                One-time payment · Limited time offer
              </p>

              {/* Divider */}
              <div className="mb-8 h-px bg-blue-100" />

              {/* Features */}
              <ul className="mb-8 space-y-3.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-slate-700">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://dodo.pe/togglepresent"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-4 text-[15px] font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:brightness-110"
              >
                Get Toggle Present
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
