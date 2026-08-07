const FEATURES = [
  {
    badge: 'HD',
    badgeBg: 'bg-brand/15',
    badgeText: 'text-brand',
    title: 'Crystal-clear VoLTE',
    body: 'Calls carried over 4G/5G, not the old 2G voice network — noticeably clearer, especially indoors.',
  },
  {
    badge: '↻',
    badgeBg: 'bg-brandBright/25',
    badgeText: 'text-ink',
    title: 'Data rollover',
    body: "Unused data on Plus and Unlimited plans carries into next month — you don't lose what you paid for.",
  },
  {
    badge: '24',
    badgeBg: 'bg-brandDeep/15',
    badgeText: 'text-brandDeep',
    title: 'Support that answers',
    body: 'In-app chat staffed around the clock, plus a call line for account and billing issues.',
  },
  {
    badge: '₦',
    badgeBg: 'bg-brand/15',
    badgeText: 'text-brand',
    title: 'No contracts',
    body: 'Pay week to week or month to month. Switch plans or cancel anytime from the app, no calls needed.',
  },
  {
    badge: '#',
    badgeBg: 'bg-brandBright/25',
    badgeText: 'text-ink',
    title: 'Keep your number',
    body: 'Port in from any Nigerian network in-app — most numbers move over within 24 hours.',
  },
  {
    badge: '◐',
    badgeBg: 'bg-brandDeep/15',
    badgeText: 'text-brandDeep',
    title: 'Dual eSIM',
    body: 'Run Nextel Connect alongside your existing SIM — no need to give up a second line to switch.',
  },
];

export default function Features() {
  return (
    <section className="bg-paperDeep">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-28">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">Why Nextel Connect</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
            Built for how people actually use their phones.
          </h2>
        </div>

        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-paper rounded-2xl p-7">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold ${f.badgeBg} ${f.badgeText}`}
              >
                {f.badge}
              </div>
              <h3 className="font-display font-semibold text-lg mt-4">{f.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
