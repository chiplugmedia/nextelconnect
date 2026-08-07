const FAQS = [
  {
    q: 'Do I need a special phone for eSIM?',
    a: 'Most phones from 2019 onward support eSIM, including iPhone XS and later, and most Galaxy and Pixel devices. Check your phone\'s settings under "Add eSIM" to confirm before signing up.',
  },
  {
    q: 'Can I keep my current phone number?',
    a: 'Yes. Start a port-in request from the app with your current number and network — most transfers complete within 24 hours, and your old line stays active until it does.',
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
          <span className="font-mono text-xs uppercase tracking-widest text-brandBright">Questions</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
            Before you scan the code.
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
