import { Link } from 'react-router-dom';
import heroVisual from '@/assets/img/hero-visual.jpeg';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-black text-white min-h-[100svh] flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-16 sm:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full px-4 py-2 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-xs sm:text-sm text-white/70">
              Nigeria's Next Generation Earning Network
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            <span className="block">Connect.</span>

            <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Earn.
            </span>

            <span className="block text-white/70">Scale.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            NEXTEL Connect transforms your network into a digital asset. Build
            connections, unlock structured rewards, and earn real income through
            a premium ecosystem designed for growth.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/register"
              className="
            group
            w-full sm:w-auto
            flex items-center justify-center
            bg-white
            text-black
            px-8
            py-4
            rounded-2xl sm:rounded-full
            font-semibold
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]
          "
            >
              Start Earning
            </Link>

            <a
              href="#how"
              className="
            w-full sm:w-auto
            flex items-center justify-center
            border border-white/15
            bg-white/5
            backdrop-blur-xl
            px-8
            py-4
            rounded-2xl sm:rounded-full
            font-semibold
            hover:bg-white/10
            transition-all
          "
            >
              Explore Platform
            </a>
          </div>

          
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center mt-6 lg:mt-0">
          {/* Main Glass Card */}
          <div
            className="
          relative
          w-full
          max-w-md
          lg:max-w-xl
          rounded-[28px]
          lg:rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-5
          sm:p-8
          lg:p-10
          overflow-hidden
        "
          >
            <div className="absolute inset-0 " />

            <img
              src={heroVisual}
              alt="Nextel"
              className="
            relative
            z-10
            w-full
            object-contain
            
          "
            />
          </div>

          {/* Desktop Floating Card 1 */}
          <div
            className="
          hidden lg:block
          absolute
          top-8
          -left-8
          bg-white
          text-black
          rounded-3xl
          px-5
          py-4
          shadow-2xl
        "
          >
            <div className="text-xs font-medium text-gray-500">
              Daily Earnings
            </div>
            <div className="font-bold text-xl">₦8,250</div>
          </div>

          {/* Desktop Floating Card 2 */}
          <div
            className="
          hidden lg:block
          absolute
          bottom-8
          -right-8
          border
          border-white/10
          bg-white/10
          backdrop-blur-xl
          rounded-3xl
          px-5
          py-4
        "
          >
            <div className="text-xs text-white/50">Active Referrals</div>
            <div className="font-bold text-2xl">1,284</div>
          </div>

          {/* Desktop Floating Card 3 */}
          <div
            className="
          hidden lg:block
          absolute
          top-1/2
          -right-12
          border
          border-white/10
          bg-black
          rounded-2xl
          px-4
          py-3
        "
          >
            <div className="text-xs text-white/50">Network Growth</div>
            <div className="font-semibold">+38%</div>
          </div>
        </div>

        {/* Mobile Badge */}
        <div className="lg:hidden flex justify-center -mt-2">
          <div className="bg-white text-black px-5 py-3 rounded-2xl shadow-xl">
            <div className="text-xs text-gray-500">Trusted Network</div>
            <div className="font-bold">50,000+ Members</div>
          </div>
        </div>
      </div>
    </section>
  );
}
