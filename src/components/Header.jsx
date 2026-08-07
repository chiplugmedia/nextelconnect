import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/img/logo.webp';

const NAV_LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#plans', label: 'Plans' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="Nextel Logo" className="h-9 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-ink/80">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink transition">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-semibold text-ink/80 hover:text-ink transition">
            Log in
          </a>
          <Link
            to="/register"
            className="text-sm font-semibold bg-brand text-paper rounded-full px-5 py-2.5 hover:bg-brandDeep transition"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-ink/10 bg-paper">
          <div className="px-5 py-4 flex flex-col gap-4 font-medium">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="py-1" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2 border-t border-ink/10">
              <a href="#" className="py-2 font-semibold">
                Log in
              </a>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="text-center bg-brand text-paper rounded-full px-5 py-3 font-semibold"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
