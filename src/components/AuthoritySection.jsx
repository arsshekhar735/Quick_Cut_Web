function AuthoritySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f9f7ff]/90 via-white/95 to-[#f6f4ff]/90 py-24 px-6">

      {/* Floating gradient magic */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-[#3d8cd8]/20 to-[#6d4ad3]/15 blur-3xl animate-pulse-slow" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-gradient-to-tr from-[#f3a6b3]/20 to-[#6d4ad3]/15 blur-3xl animate-pulse-slow [animation-delay:2s]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="animate-slideUp">
          <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/90 px-5 py-2 text-sm font-bold text-slate-700 shadow-xl backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#3d8cd8] to-[#6d4ad3] animate-ping" />
            The Problem We’re Solving
          </div>

          <h2 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight text-slate-900">
            Salon visits shouldn’t feel like
            <span className="block bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] bg-clip-text text-transparent animate-gradientShift">
              waiting in chaos.
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
            In many Indian cities, customers wait
            <span className="font-bold text-slate-900"> 30–90 minutes </span>
            without knowing their exact turn. Overcrowded salons create stress,
            frustration, and lost time.
          </p>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-xl">
            Salon owners struggle with
            <span className="font-semibold text-[#6d4ad3]">
              {" "}unpredictable flow, crowd management,
            </span>
            and missed revenue opportunities.
          </p>
        </div>

        {/* RIGHT SIDE — GLASS IMPACT CARD */}
        <div className="relative animate-fadeInUp">
          <div className="rounded-[2.5rem] border border-white/60 bg-white/90 p-10 shadow-[0_30px_80px_rgba(109,74,211,0.15)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_40px_100px_rgba(109,74,211,0.25)]">

            <h3 className="text-2xl font-black text-slate-900 mb-8">
              The Hidden Cost of Waiting
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-4xl font-black bg-gradient-to-r from-[#3d8cd8] to-[#6d4ad3] bg-clip-text text-transparent">
                  30–90 min
                </p>
                <p className="text-slate-600 mt-2">
                  Average peak-hour waiting time
                </p>
              </div>

              <div>
                <p className="text-4xl font-black bg-gradient-to-r from-[#6d4ad3] to-[#f3a6b3] bg-clip-text text-transparent">
                  40%+
                </p>
                <p className="text-slate-600 mt-2">
                  Customers leave before their turn
                </p>
              </div>

              <div>
                <p className="text-4xl font-black text-[#f3a6b3]">
                  High Stress
                </p>
                <p className="text-slate-600 mt-2">
                  Overcrowding ruins the experience
                </p>
              </div>

            </div>

            {/* Bottom highlight */}
            <div className="mt-10 rounded-xl bg-gradient-to-r from-[#3d8cd8]/10 via-[#6d4ad3]/10 to-[#f3a6b3]/10 p-5 text-sm text-slate-700 font-medium">
              Quick Cuts replaces physical waiting with a
              <span className="font-bold text-[#6d4ad3]">
                {" "}smart virtual queue
              </span>
              , so customers arrive exactly when their turn is near.
            </div>

          </div>
        </div>

      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientShift {
          0%,100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(10deg); }
        }
        .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-pulse-slow { animation: pulse 6s infinite; }
      `}</style>

    </section>
  );
}

export default AuthoritySection;
