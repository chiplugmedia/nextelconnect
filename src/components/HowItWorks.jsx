const STEPS = [
  {
    n: '01',
    title: 'Sign up & scan',
    body: "Create an account in the Nextel Connect app and scan your personal QR code to install your eSIM instantly — no waiting for a courier.",
  },
  {
    n: '02',
    title: 'Pick a plan',
    body: 'Choose a data and call bundle that fits you, or let Nextel Connect auto-renew your favourite plan every month.',
  },
  {
    n: '03',
    title: "You're connected",
    body: 'Make your first call within minutes. Track usage, top up, and manage your line right from the app.',
    span: true,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-28">
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-brand">The process</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
          Three steps, one phone, no shop visit.
        </h2>
      </div>

      <div className="mt-10 md:mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {STEPS.map((step) => (
          <div
            key={step.n}
            className={`card-hover bg-white rounded-2xl p-7 border border-ink/5 shadow-sm ${
              step.span ? 'sm:col-span-2 md:col-span-1' : ''
            }`}
          >
            <span className="font-mono text-xs text-ink/40">{step.n}</span>
            <h3 className="font-display font-semibold text-xl mt-3">{step.title}</h3>
            <p className="mt-2 text-ink/60 text-sm leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
