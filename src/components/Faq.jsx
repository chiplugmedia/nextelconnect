const FAQS = [
  {
    q: 'What is Nextel Connect?',
    a: 'Nextel Connect is a licensed virtual telecom operator that lets Nigerians hold an eSIM and manage contacts on partner carrier networks. The platform offers 7 activity areas: Call activity tracking, Real-time dashboard, Massive market, Airtime + data on activation, Network transfer, Nextel ATM card, and Safe, fast & secure. Members get rewarded for activity on the network. Rewards subject to change.',
  },
  {
    q: 'How much does membership cost?',
    a: 'Choose Any Plan of your choice. One-time payment per membership, no recurring fees, no hidden charges, and no auto-renewals.',
  },
  {
    q: "What happens if I don't renew my plan?",
    a: 'Your line stays active for 7 days on a limited "essentials" mode — enough to receive calls and top up — before it pauses. No cancellation fees either way.',
  },
  {
    q: 'How does the referral credit work?',
    a: 'Share your code with a friend. Once they activate a paid plan, you both receive ₦500 in airtime credit — a one-time thank-you, not an ongoing income stream.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-inkSoft text-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-28">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-brandBright">FA Questions</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
            We've answered the most common questions about the Nextel eSIM membership.
          </h2>
        </div>

        <div className="mt-10 max-w-3xl divide-y divide-paper/10 border-t border-b border-paper/10">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer">
                <span className="font-display font-semibold">{item.q}</span>
                <span className="chev shrink-0 text-2xl leading-none text-paper/50 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-paper/60 text-sm leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
