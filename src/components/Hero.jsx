import { Link } from "react-router-dom";
import heroVisual from "@/assets/img/hero-visual.jpeg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft Gradient Background */}
        <div className="absolute inset-0 bg-white" />

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gray-100 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gray-100 rounded-full blur-[140px]" />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-black/[0.02] rounded-full blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto min-h-screen px-5 sm:px-8 py-24 flex flex-col items-center justify-center text-center">
        {/* Badge */}
        
        {/* Heading */}
        <h1 className="mt-8 font-black text-5xl sm:text-6xl lg:text-8xl leading-[0.9] tracking-tight text-black">
          <span className="block"> Turn those little pockets</span>

          <span className="block bg-gradient-to-r from-black via-gray-500 to-black bg-clip-text text-transparent">
            of free time
          </span>

          <span className="block text-black/40">into steady cash</span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg lg:text-xl text-black/60 leading-relaxed max-w-3xl">
          Earn by doing easy social tasks, grow your earnings by inviting
          friends, and learn valuable new abilities—all without leaving a tool
          that’s made for the way you really work online.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/register"
            className="
              flex
              items-center
              justify-center
              bg-black
              text-white
              px-8
              py-4
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
            "
          >
            Get Started
          </Link>

          <a
            href="#about"
            className="
              flex
              items-center
              justify-center
              border
              border-black/10
              bg-white
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:bg-gray-50
              transition-all
            "
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-14 max-w-lg w-full">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-black">
              50K+
            </div>

            <div className="text-black/50 text-sm">Members</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-black">
              ₦100M+
            </div>

            <div className="text-black/50 text-sm">Rewards</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-black">
              24/7
            </div>

            <div className="text-black/50 text-sm">Active</div>
          </div>
        </div>

        {/* ================= NFT IMAGE ================= */}
        <div className="relative mt-20 flex justify-center">
          {/* Glow */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-black/5 rounded-full blur-[120px]" />
          </div>

          {/* Orbit Rings */}
          <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] border border-black/10 rounded-full animate-[spin_30s_linear_infinite]" />

          <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] border border-black/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

          {/* Floating Dots */}
          <div className="absolute top-5 left-8 w-3 h-3 rounded-full bg-black animate-bounce" />

          <div className="absolute bottom-12 right-10 w-4 h-4 rounded-full bg-gray-400 animate-pulse" />

          {/* NFT Card */}
          <div className="relative animate-float">
            <div
              className="
                w-[320px]
                sm:w-[420px]
                lg:w-[520px]
                rounded-[40px]
                border
                border-black/10
                bg-white/80
                backdrop-blur-3xl
                p-4
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              "
            >
              <img
                src={heroVisual}
                alt="NFT"
                className="
                  rounded-[30px]
                  w-full
                  object-cover
                "
              />

              <div className="mt-4 p-4 rounded-2xl border border-black/10 bg-white">
                <div className="text-sm text-black/50">Featured Collection</div>

                <div className="font-bold text-xl text-black mt-1">
                  NEXTEL Genesis
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card Left */}
          <div
            className="
              hidden lg:block
              absolute
              -left-24
              top-16
              bg-black
              text-white
              rounded-3xl
              px-5
              py-4
              shadow-2xl
              animate-float
            "
          >
            <div className="text-xs text-white/60">Daily Earnings</div>

            <div className="font-bold text-xl">₦8,250</div>
          </div>

          {/* Floating Card Right */}
          <div
            className="
              hidden lg:block
              absolute
              -right-20
              bottom-10
              border
              border-black/10
              bg-white
              rounded-3xl
              px-5
              py-4
              shadow-xl
              animate-float-delay
            "
          >
            <div className="text-xs text-black/50">Referrals</div>

            <div className="font-bold text-xl text-black">1,284</div>
          </div>
        </div>
      </div>

      {/* ================= CUSTOM ANIMATIONS ================= */}
      <style>{`
        @keyframes float {
          0%,100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
