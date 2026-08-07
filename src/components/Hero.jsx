import { Link } from 'react-router-dom';
import heroVisual from '@/assets/img/hero-visual.jpeg';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brandBright/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-16 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-16 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Your World.
            <br />
            <span className="text-[#DEA441]">Your Network.</span>
            <br />
            Your Earnings.
          </h1>
          <p className="mt-6 text-lg text-paper/70 max-w-md">
            NEXTEL Connect is Nigeria's premium digital earning ecosystem — built around
            network participation, structured rewards, and real payouts.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/register"
              className="text-center bg-brandBright text-ink font-semibold rounded-full px-7 py-3.5 hover:bg-brandBright/90 transition"
            >
              Register
            </Link>
            <a
              href="#how"
              className="text-center border border-paper/25 font-semibold rounded-full px-7 py-3.5 hover:bg-paper/10 transition"
            >
              See how it works
            </a>
          </div>
          <p className="mt-5 text-xs text-paper/50">
            Works on any eSIM-capable phone. Keep your current number when you port in.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative h-64 sm:h-72 md:h-80 w-full flex items-center justify-center">
            <div className="absolute w-28 h-28 sm:w-36 sm:h-36">
              <span className="pulse-ring" />
              <span className="pulse-ring d2" />
              <span className="pulse-ring d3" />
            </div>

            <img
              src={heroVisual}
              alt="Nextel Logo"
              className="relative z-10 max-h-[85%] w-auto object-contain rounded-2xl sm:max-h-[90%] md:max-h-[100%]"
            />

            <div className="node-orbit absolute inset-0">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brandBright" />
            </div>

            <div
              className="node-orbit absolute inset-0"
              style={{ animationDuration: '20s', animationDirection: 'reverse' }}
            >
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-paper/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
