const options = [
  {
    id: "for-customers",
    title: "For Customers",
    subtitle: "Skip the waiting, not the haircut.",
    description:
      "See live wait times, join the queue from anywhere, and walk in exactly when your chair is free.",
    badge: "Walk‑in made smart",
    gradientFrom: "#3d8cd8",
    gradientTo: "#6d4ad3",
    imageBg: "from-[#e3f0ff] to-[#eef3ff]",
    icon: "👤",
  },
  {
    id: "for-salons",
    title: "For Salons",
    subtitle: "Organize your walk‑ins and appointments.",
    description:
      "Cut walk‑outs, balance chairs and staff, and run your floor with one calm, real‑time dashboard.",
    badge: "Boost revenue",
    gradientFrom: "#6d4ad3",
    gradientTo: "#f3a6b3",
    imageBg: "from-[#f5ecff] to-[#ffeef5]",
    icon: "💈",
  },
  {
    id: "for-chains",
    title: "For Chains",
    subtitle: "Control queues across all branches.",
    description:
      "Standardize service, view live performance, and keep every location running on time.",
    badge: "Multi‑branch ready",
    gradientFrom: "#f3a6b3",
    gradientTo: "#3d8cd8",
    imageBg: "from-[#fff4f5] to-[#edf6ff]",
    icon: "🏢",
  },
];

const SectionOptions = () => {
  return (
    <section className="relative z-10 overflow-hidden border-b border-slate-100/50 bg-gradient-to-b from-white/70 via-[#faf9ff]/80 to-[#f6f4ff]/70 backdrop-blur-xl">
      {/* Background decoration matching hero theme */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-[#3d8cd8]/10 via-[#6d4ad3]/5 to-[#f3a6b3]/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">

        {/* Enhanced heading with better hierarchy */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-lg backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-[#3d8cd8] to-[#6d4ad3]" />
            One platform. Three experiences.
          </div>
          
          <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Choose how you{" "}
            <span className="relative bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] bg-clip-text text-transparent">
              plug into
              <svg className="absolute -bottom-3 left-0 w-full opacity-75" height="12" viewBox="0 0 300 12" fill="none">
                <path d="M0 6C50 3 100 2 150 4C200 6 250 8 300 6" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3d8cd8" stopOpacity="0.4"/>
                    <stop offset="50%" stopColor="#6d4ad3" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#f3a6b3" stopOpacity="0.4"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Customers skip lines. Salons stay organized. Chains scale effortlessly.
          </p>
        </div>

        {/* Enhanced cards grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((card, index) => (
            <a
              key={card.id}
              href={`#${card.id}`}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/95 shadow-[0_25px_60px_rgba(148,163,184,0.15)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_35px_80px_rgba(61,140,216,0.25)] lg:hover:scale-[1.02]"
            >
              {/* Enhanced top visual block with glassmorphism */}
              <div
                className={`relative h-48 w-full bg-gradient-to-br ${card.imageBg} p-6`}
              >
                {/* Floating glass card */}
                <div className="absolute inset-6 rounded-[1.75rem] bg-white/40 backdrop-blur-xl shadow-2xl border border-white/50" />
                
                {/* Main icon - larger and elevated */}
                <div
                  className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl text-3xl shadow-[0_20px_50px_rgba(109,74,211,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientTo})`,
                    color: "#ffffff",
                  }}
                >
                  {card.icon}
                </div>

                {/* Enhanced badge with pulse */}
                <div className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-xl bg-white/95 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-lg backdrop-blur-sm border border-white/60">
                  <div
                    className="h-2 w-2 animate-pulse rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientTo})`,
                    }}
                  />
                  {card.badge}
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-4 right-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-white/60 to-transparent blur-sm" />
              </div>

              {/* Enhanced text block with better spacing */}
              <div className="relative flex flex-1 flex-col gap-3 p-6 pb-8 sm:p-8">
                {/* Gradient border accent */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-[#3d8cd8]/5 via-[#6d4ad3]/5 to-[#f3a6b3]/5 p-px group-hover:from-[#3d8cd8]/10 group-hover:via-[#6d4ad3]/10 group-hover:to-[#f3a6b3]/10" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black leading-tight text-slate-900 group-hover:text-[#6d4ad3] sm:text-2xl">
                    {card.title}
                  </h3>
                  
                  <p className="mt-1 text-lg font-semibold text-slate-700 leading-tight">
                    {card.subtitle}
                  </p>
                  
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {card.description}
                  </p>
                </div>

                {/* Enhanced CTA with arrow animation */}
                <div className="relative z-10 mt-auto flex items-center justify-between gap-3 pt-2 text-sm font-bold">
                  <span className="inline-flex items-center gap-2 text-[#6d4ad3] transition-all duration-300 group-hover:gap-3">
                    Learn more
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  
                  <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-50 to-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 shadow-sm transition-all group-hover:bg-slate-100 group-hover:shadow-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    Deep dive
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionOptions;
