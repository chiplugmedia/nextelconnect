import { Link } from "react-router-dom";

const STEPS = [
  {
    number: "01",
    title: "Register for Free",
    body: "Create your account in just a few steps and access our amazing features within seconds.",
  },
  {
    number: "02",
    title: "Choose Package",
    body: "Once registered, navigate to your dashboard and select a package to browse and connect with our network of verified eSIM retailers.",
  },
  {
    number: "03",
    title: "Connect, Grow & Earn",
    body: "Launch targeted ads, connect with verified users, and let our users make every ad worthwhile. The value they create becomes an economic opportunity for them to earn.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] animate-pulse" />

        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gray-300/30 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white shadow-sm text-xs uppercase tracking-[0.3em] text-black/60 animate-bounce">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 font-display font-bold text-4xl md:text-6xl leading-tight tracking-tight animate-[fadeInUp_0.8s_ease-out]">
            Start in Minutes.
            <br />
            <span className="text-black/40">Grow Without Limits.</span>
          </h2>

          <p className="mt-6 text-lg text-black/60 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_1s_ease-out]">
            Join a modern digital ecosystem built to help you connect,
            advertise, expand your reach, and unlock new earning opportunities.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-white/80 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-black/20 animate-[fadeInUp_0.8s_ease-out]"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Hover Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[shine_1.2s_linear]" />
              </div>

              {/* Step Number */}
              <div className="relative w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-black">
                {step.title}
              </h3>

              {/* Body */}
              <p className="mt-4 text-black/60 leading-relaxed">{step.body}</p>

              {/* Progress Line */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-black/10"></div>
                <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          from {
            transform: translateX(-200px) rotate(12deg);
          }
          to {
            transform: translateX(600px) rotate(12deg);
          }
        }
      `}</style>
    </section>
  );
}