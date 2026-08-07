import logo from '@/assets/img/logo.webp';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Nextel Logo" className="w-20 h-20 object-contain" />
          </div>
          <p className="mt-4 text-sm text-ink/50 max-w-xs">
            A digital-first eSIM network for Nigeria. Real data, real calls, no shop queues.
          </p>
        </div>
        <div>
          <div className="font-display font-semibold text-sm">Product</div>
          <ul className="mt-4 space-y-2.5 text-sm text-ink/60">
            <li><a href="#plans" className="hover:text-ink">Plans</a></li>
            <li><a href="#coverage" className="hover:text-ink">Coverage</a></li>
            <li><a href="#how" className="hover:text-ink">How it works</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display font-semibold text-sm">Support</div>
          <ul className="mt-4 space-y-2.5 text-sm text-ink/60">
            <li><a href="#faq" className="hover:text-ink">FAQ</a></li>
            <li><a href="#" className="hover:text-ink">Contact us</a></li>
            <li><a href="#" className="hover:text-ink">Report an issue</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display font-semibold text-sm">Company</div>
          <ul className="mt-4 space-y-2.5 text-sm text-ink/60">
            <li><a href="#" className="hover:text-ink">About</a></li>
            <li><a href="#" className="hover:text-ink">Privacy policy</a></li>
            <li><a href="#" className="hover:text-ink">Terms of service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-ink/40 text-center">
          <span>© 2026 Nextel Connect. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
