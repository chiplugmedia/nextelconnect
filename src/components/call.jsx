import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-black/[0.03] rounded-full blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-black
            text-white
            p-10
            md:p-16
            shadow-[0_30px_80px_rgba(0,0,0,0.15)]
          "
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />

          <div className="relative z-10 text-center">

            <span
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                border
                border-white/10
                bg-white/5
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/60
              "
            >
              Join Today
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Everything Starts With
              <br />
              A Free Account
            </h2>

            <p className="mt-6 text-white/60 max-w-2xl mx-auto text-lg">
              Register today, choose your preferred package,
              connect with verified retailers, launch campaigns,
              and unlock opportunities designed to help your
              business grow faster.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                to="/register"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-4
                  rounded-full
                  bg-white
                  text-black
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Create Free Account
              </Link>

              <Link
                to="/login"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/15
                  hover:bg-white/10
                  transition-all
                "
              >
                Sign In
              </Link>

            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl mx-auto">

              <div>
                <h3 className="text-3xl font-bold">50K+</h3>
                <p className="text-white/50 text-sm">
                  Active Users
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">₦100M+</h3>
                <p className="text-white/50 text-sm">
                  Earnings Paid
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-white/50 text-sm">
                  Support
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}