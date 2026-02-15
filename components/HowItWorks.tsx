const steps = [
  {
    number: "01",
    title: "Install",
    description:
      "Download the DMG, drag TogglePresent to your Applications folder, and launch it.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Activate",
    description:
      "Enter the license key sent to your email after purchase to activate TogglePresent.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Configure",
    description:
      "Choose which features to toggle hide icons, mute audio, disable notifications, and more.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Present",
    description:
      "Click the menu bar icon to toggle all your settings on or off in one click.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full px-3 py-1 text-5xl font-extrabold uppercase tracking-widest text-blue-600">
            How It Works
          </span>
          <h2 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
            Get started in seconds
          </h2>
          <p className="mx-auto max-w-lg text-base text-slate-500">
            Four simple steps to presentation-ready.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent md:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-md shadow-blue-100/50">
                {step.icon}
              </div>
              <span className="mb-2 font-mono text-[12px] font-semibold tracking-wider text-blue-500">
                {step.number}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="max-w-[260px] text-[14px] leading-relaxed text-slate-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
