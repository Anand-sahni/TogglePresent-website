const faqs = [
  {
    question: "What macOS versions are supported?",
    answer:
      "TogglePresent requires macOS 14.0 (Sonoma) or later and works on both Apple Silicon and Intel Macs.",
  },
  {
    question: "Is this a one-time purchase?",
    answer:
      "Yes! You pay $5 once and get lifetime access to TogglePresent, including all future updates at no extra cost.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Absolutely. If you're not satisfied, we offer a 7-day money-back guarantee — no questions asked.",
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

export default function FAQ() {
  return (
    <section id="faq" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-[12px] font-semibold uppercase tracking-widest text-blue-600">
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-base text-slate-500">
            Everything you need to know about TogglePresent.
          </p>
        </div>

        <div className="divide-y divide-blue-100">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-6">
              <h3 className="mb-2 text-[15px] font-semibold text-slate-900">
                {faq.question}
              </h3>
              <p className="text-[14px] leading-relaxed text-slate-500">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
