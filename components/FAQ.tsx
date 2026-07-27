import Reveal from "./Reveal";

const faqs = [
  {
    question: "What macOS versions are supported?",
    answer:
      "TogglePresent requires macOS 14.0 (Sonoma) or later and works on both Apple Silicon and Intel Macs.",
  },
  {
    question: "Is this a one-time purchase?",
    answer:
      "Yes. You pay $4.99 once and get lifetime access to TogglePresent, including all future updates at no extra cost.",
  },
  {
    question: "How does the menu bar toggle work?",
    answer:
      "Once configured, a single click on the TogglePresent icon in your menu bar activates all your chosen settings (hide icons, mute audio, etc.). Click again to restore everything.",
  },
  {
    question: "Does it work with multiple displays?",
    answer:
      "Yes, TogglePresent works across all connected displays on your Mac.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="relative px-6 py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-line-bright to-transparent" />

      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="mb-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              FAQ
            </span>
            <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Questions, answered
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-2xl border border-line bg-panel">
            {faqs.map((faq, i) => (
              <details
                key={faq.question}
                className={`group ${i > 0 ? "border-t border-line" : ""}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[15px] font-semibold text-ink transition-colors hover:bg-panel-2 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg
                    className="h-4 w-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </summary>
                <p className="px-6 pb-6 text-[14px] leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
