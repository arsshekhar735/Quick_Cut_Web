const benefits = [
  {
    title: "Fewer walk‑outs, more revenue",
    description:
      "Show live wait times at the door and online so customers don't leave. Every empty minute becomes a booked minute.",
    icon: "📉",
    tag: "Reduce no‑shows",
  },
  {
    title: "Smart chair & staff planning",
    description:
      "Balance walk‑ins and appointments across chairs, see who is idle, and plan staff shifts with clear data.",
    icon: "🪑",
    tag: "Optimize chairs",
  },
  {
    title: "AI‑powered time predictions",
    description:
      "Quick Cuts learns your average service durations and live flow to give accurate ETAs your customers can trust.",
    icon: "🤖",
    tag: "Accurate ETAs",
  },
  {
    title: "Happier waiting experience",
    description:
      "Customers wait from home or on the go instead of crowding your reception, keeping your shop calm and premium.",
    icon: "😊",
    tag: "Calm reception",
  },
  {
    title: "Insights, not guesswork",
    description:
      "See peak hours, service mix, repeat customers, and lost opportunity so you can make better business decisions.",
    icon: "📊",
    tag: "Queue analytics",
  },
  {
    title: "Ready for growth & chains",
    description:
      "Whether you run one shop or many, manage queues and performance across branches from a single dashboard.",
    icon: "🏬",
    tag: "Multi‑branch",
  },
];

const WhySalonsLove = () => {
  return (
    <section
      id="for-salons"
      className="relative z-10 overflow-hidden border-b border-slate-100/50 bg-gradient-to-b from-white/80 via-[#f7f5ff]/90 to-white/70 backdrop-blur-xl"
    >
      {/* Clean background accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#f6f0ff]/90 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-[#3d8cd8]/10 via-[#6d4ad3]/5 to-[#f3a6b3]/8 blur-3xl animate-pulse" />

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        {/* Fixed heading - no SVG */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/95 px-6 py-2.5 text-sm font-bold text-slate-700 shadow-2xl backdrop-blur-xl">
            <div className="h-2.5 w-2.5 animate-ping rounded-full bg-gradient-to-r from-[#6d4ad3] to-[#f3a6b3]" />
            Why salons love Quick Cuts
          </div>
          
          <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Turn{" "}
            <span className="bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] bg-clip-text text-transparent">
              waiting time
            </span>{" "}
            into business growth.
          </h2>
          
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl max-w-2xl mx-auto">
            Quick Cuts is built for owners and managers who want smoother floors,
            happier customers, and predictable revenue every day.
          </p>
        </div>

        {/* Fixed benefit grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item, idx) => (
            <div
              key={item.title}
              className="group relative flex h-full flex-col rounded-[2.5rem] border border-white/70 bg-white/95 p-8 shadow-[0_25px_70px_rgba(148,163,184,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_35px_90px_rgba(61,140,216,0.25)] hover:scale-[1.02]"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Fixed gradient border - no absolute positioning issues */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-[#3d8cd8]/5 via-[#6d4ad3]/5 to-[#f3a6b3]/5 p-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Fixed pill badge */}
              <div className="mb-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-slate-50/90 to-slate-100/90 px-5 py-2.5 text-sm font-bold text-slate-800 shadow-lg backdrop-blur-xl border border-slate-100/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105 z-10 relative">
                <div 
                  className="flex h-6 w-6 items-center justify-center rounded-xl text-lg shadow-md group-hover:scale-110 transition-transform duration-200"
                  style={{ 
                    backgroundImage: 'linear-gradient(135deg, #3d8cd8, #6d4ad3)', 
                    color: 'white' 
                  }}
                >
                  {item.icon}
                </div>
                <span>{item.tag}</span>
              </div>

              {/* Clean title */}
              <h3 className="z-10 relative text-2xl font-black leading-tight text-slate-900 mb-4 group-hover:text-[#6d4ad3] transition-all duration-300">
                {item.title}
              </h3>
              
              {/* Clean description */}
              <p className="z-10 relative mb-8 text-base leading-relaxed text-slate-600 sm:text-lg flex-1">
                {item.description}
              </p>

              {/* Fixed CTA footer */}
              <div className="z-10 relative flex items-center justify-between pt-2">
                <div className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600">
                  <span className="text-lg">👥</span>
                  Built for salons
                </div>
                <div className="group/cta flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#3d8cd8]/10 to-[#6d4ad3]/10 px-4 py-2.5 text-sm font-bold text-[#6d4ad3] shadow-sm backdrop-blur border border-[#3d8cd8]/20 hover:shadow-md hover:bg-gradient-to-r hover:from-[#3d8cd8]/20 hover:to-[#6d4ad3]/20 transition-all duration-300">
                  <span>Learn more</span>
                  <svg className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Simple floating blob */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-3xl bg-gradient-to-br from-[#3d8cd8]/8 to-[#6d4ad3]/4 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySalonsLove;
