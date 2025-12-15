const steps = [
  {
    id: 1,
    title: "Find your salon",
    description:
      "Open Quick Cuts, browse nearby salons, and pick the one that fits your style, budget, and time.",
    icon: "🔍",
    accent: "from-[#3d8cd8] to-[#6d4ad3]",
  },
  {
    id: 2,
    title: "Join the virtual queue",
    description:
      "Check live wait times, choose your preferred service, and join the queue remotely in a tap.",
    icon: "📲",
    accent: "from-[#6d4ad3] to-[#f3a6b3]",
  },
  {
    id: 3,
    title: "Track your turn",
    description:
      "Watch your position move in real time, get smart ETA updates, and plan exactly when to leave home.",
    icon: "⏱️",
    accent: "from-[#f3a6b3] to-[#3d8cd8]",
  },
  {
    id: 4,
    title: "Walk in, sit down",
    description:
      "Arrive just as your turn is near, skip the waiting area, and enjoy a calm, on‑time haircut.",
    icon: "💺",
    accent: "from-[#3d8cd8] to-[#f3a6b3]",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative z-10 overflow-hidden border-b border-slate-100/50 bg-gradient-to-b from-[#f6f4ff]/90 via-white/95 to-[#f9f7ff]/90 backdrop-blur-xl"
    >
      {/* Magical floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/4 h-12 w-12 animate-float1 rounded-full bg-gradient-to-r from-[#3d8cd8]/30 to-[#6d4ad3]/20 blur-xl" />
        <div className="absolute -right-24 top-1/3 h-16 w-16 animate-float2 rounded-full bg-gradient-to-r from-[#f3a6b3]/25 to-[#6d4ad3]/15 blur-xl" />
        <div className="absolute left-1/4 bottom-20 h-10 w-10 animate-float3 rounded-full bg-gradient-to-r from-[#3d8cd8]/20 to-[#f3a6b3]/20 blur-lg" />
      </div>

      {/* Enhanced background shapes with magic */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-[#3d8cd8]/15 via-[#6d4ad3]/10 to-[#f3a6b3]/15 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-gradient-to-tr from-[#f3a6b3]/12 via-[#6d4ad3]/8 to-[#3d8cd8]/12 blur-3xl [animation-delay:3s] animate-pulse-slow" />

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-7">
        {/* Enhanced heading with entrance animation */}
        <div className="mx-auto mb-10 max-w-4xl text-center animate-slideUp">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/90 px-5 py-2 text-sm font-bold text-slate-700 shadow-xl backdrop-blur-sm animate-floatIn">
            <div className="flex h-2.5 w-2.5 animate-ping rounded-full">
              <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#3d8cd8] to-[#6d4ad3]" />
            </div>
            How Quick Cuts works
          </div>
          
          <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl animate-titleGlow">
            From{" "}
            <span className="relative bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] bg-clip-text text-transparent animate-gradientShift">
              queue chaos
              <svg className="absolute -bottom-4 left-0 w-full opacity-60 animate-wave" height="16" viewBox="0 0 300 16" fill="none">
                <path d="M0 8C60 4 120 3 180 6C240 9 280 11 300 8" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3d8cd8" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="#6d4ad3" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#f3a6b3" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            to calm in 4 steps.
          </h2>
          
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl max-w-2xl mx-auto animate-fadeInUp">
            This is the journey for customers. Salons see the same flow from a
            powerful dashboard on their side.
          </p>
        </div>

        {/* Creative animated timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#3d8cd8]/20 via-[#6d4ad3]/40 to-[#f3a6b3]/20 animate-timelinePulse lg:hidden" />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className={`group relative flex flex-col rounded-[2.5rem] border border-white/60 bg-white/95 p-8 shadow-[0_25px_70px_rgba(148,163,184,0.15)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_35px_90px_rgba(61,140,216,0.25)] lg:hover:scale-[1.02] animate-staggerIn-[100ms_200ms_300ms_400ms] ${idx}`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                {/* Magical step number */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative z-10 animate-bounceIn">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800 text-sm font-black text-white shadow-2xl ring-4 ring-white/50 group-hover:scale-110 transition-all duration-300">
                      0{step.id}
                    </div>
                    {/* Glowing timeline node */}
                    <div className="absolute inset-0 h-5 w-5 rounded-full bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] shadow-[0_0_20px_rgba(109,74,211,0.4)] ring-2 ring-white -z-10 animate-pulse-glow" />
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200/50 to-slate-100 group-hover:via-[#6d4ad3]/30 transition-all duration-300 hidden lg:block" />
                  )}
                </div>

                {/* Floating icon with magic */}
                <div className="mb-6 flex items-start gap-4">
                  <div className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl text-2xl shadow-[0_15px_40px_rgba(109,74,211,0.4)] transition-all duration-700 group-hover:scale-115 group-hover:rotate-12 bg-gradient-to-br ${step.accent} animate-iconFloat`}>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br ${step.accent} blur-xl opacity-30 animate-pulse-glow -z-10" />
                    {step.icon}
                  </div>
                  <div className="animate-slideInRight">
                    <h3 className="text-2xl font-black leading-tight text-slate-900 group-hover:text-[#6d4ad3] transition-all duration-300 hover:drop-shadow-lg">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Animated description */}
                <p className="text-base leading-relaxed text-slate-600 mb-8 sm:text-lg animate-fadeInUp-[400ms]">
                  {step.description}
                </p>

                {/* Sparkling feature badges */}
                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold animate-staggerBadges">
                  {idx === 0 && (
                    <div className="group inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-emerald-700 border border-emerald-100 hover:bg-emerald-100 transition-all duration-200 animate-badgeSparkle">
                      <span className="text-lg animate-spin-slow">📱</span>
                      Android, iOS, Web
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="group inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-indigo-700 border border-indigo-100 hover:bg-indigo-100 transition-all duration-200 animate-badgeSparkle">
                      <span className="text-lg animate-pulse">🤖</span>
                      AI ETA updates
                    </div>
                  )}
                  {idx === 3 && (
                    <div className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3d8cd8]/10 to-[#6d4ad3]/10 px-3 py-1.5 text-[#6d4ad3] border border-[#3d8cd8]/20 font-bold hover:shadow-[0_0_15px_rgba(109,74,211,0.3)] transition-all duration-200">
                      <span className="text-lg animate-bounce-tiny">⚡</span>
                      Zero wait time
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatIn {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes titleGlow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(109,74,211,0.3)); }
          50% { filter: drop-shadow(0 0 20px rgba(109,74,211,0.6)); }
        }
        @keyframes gradientShift {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(10deg); }
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes timelinePulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(109,74,211,0.4); }
          50% { box-shadow: 0 0 25px rgba(109,74,211,0.8); }
        }
        @keyframes iconFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(-120deg); }
          66% { transform: translateY(15px) rotate(-240deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-tiny {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes badgeSparkle {
          0%, 100% { box-shadow: 0 0 5px rgba(0,0,0,0.1); }
          50% { box-shadow: 0 0 15px rgba(34,197,94,0.4); }
        }
        .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
        .animate-floatIn { animation: floatIn 0.7s ease-out forwards; }
        .animate-titleGlow { animation: titleGlow 3s ease-in-out infinite; }
        .animate-gradientShift { animation: gradientShift 4s ease-in-out infinite; }
        .animate-wave { animation: wave 2s ease-in-out infinite; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards 0.2s both; }
        .animate-fadeInUp\\[400ms\\] { animation: fadeInUp 0.6s ease-out forwards 0.4s both; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-timelinePulse { animation: timelinePulse 2s ease-in-out infinite; }
        .animate-bounceIn { animation: bounceIn 0.6s ease-out forwards; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-iconFloat { animation: iconFloat 3s ease-in-out infinite; }
        .animate-slideInRight { animation: slideInRight 0.6s ease-out forwards 0.1s both; }
        .animate-staggerIn-\\[100ms_200ms_300ms_400ms\\] { 
          animation: fadeInUp 0.8s ease-out forwards; 
        }
        .animate-staggerBadges * { animation-delay: 0.5s; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-tiny { animation: bounce-tiny 2s infinite; }
        .animate-badgeSparkle { animation: badgeSparkle 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HowItWorks;
