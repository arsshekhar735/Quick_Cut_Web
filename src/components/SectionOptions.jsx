import { useEffect } from "react";
import { useState } from "react";


const options = [
  {
    id: "for-customers",
    title: "For Customers",
    subtitle: "Your time is yours again.",
    description:
      "Discover live wait times, join from anywhere, and arrive exactly when your turn begins. No crowded benches. No uncertainty. Just precision.",
    badge: "Zero physical waiting",
    gradientFrom: "#3d8cd8",
    gradientTo: "#6d4ad3",
    imageBg: "from-[#e3f0ff] to-[#eef3ff]",
    icon: "👤",
    popup: {
      title: "Reclaim Your Time.",
      opening:
        "Waiting shouldn’t be part of your lifestyle. Your time is valuable — and predictable service should be the standard, not the exception.",

      section1Title: "The Problem",
      section1Points: [
        "Uncertain wait times",
        "Crowded waiting areas",
        "Wasted weekends",
        "No visibility into when your turn actually starts",
      ],

      section2Title: "The Quick Cuts Experience",
      section2Points: [
        "See live wait times before leaving home",
        "Join the queue remotely",
        "Track your real-time position",
        "Arrive exactly when your chair is ready",
      ],

      impactPoints: [
        "No more guessing",
        "No more physical waiting",
        "No more lost time",
      ],

      closing: "Time is limited. Waiting shouldn’t steal it.",
      cta: "Download the App",
    },
  },
  {
    id: "for-businesses",
    title: "For Businesses",
    subtitle: "Turn walk-ins into predictable revenue.",
    description:
      "Eliminate walk-outs, balance staff intelligently, and replace chaotic queues with structured, real-time flow control.",
    badge: "Operational clarity",
    gradientFrom: "#6d4ad3",
    gradientTo: "#f3a6b3",
    imageBg: "from-[#f5ecff] to-[#ffeef5]",
    icon: "💼",
    popup: {
      title: "Turn Chaos Into Predictable Revenue.",
      opening:
        "Walk-in businesses lose revenue every day due to unmanaged queues, walk-outs, and uneven staff utilization.",

      section1Title: "The Hidden Problem",
      section1Points: [
        "Peak-hour overload",
        "Customers leaving mid-wait",
        "Idle chairs during slow hours",
        "No visibility into real-time demand",
      ],

      section2Title: "The Quick Cuts Platform",
      section2Points: [
        "Live queue control",
        "Demand visibility",
        "Intelligent staff flow",
        "Reduced walk-outs",
        "Performance insights",
      ],

      impactPoints: [
        "Higher daily revenue",
        "Better chair utilization",
        "Calmer floor operations",
        "Improved customer satisfaction",
      ],

      closing: "Structure your time. Scale your revenue.",
      cta: "Schedule a Demo",
    },
  },
  {
    id: "for-enterprise",
    title: "For Enterprise & Chains",
    subtitle: "Standardize time across locations.",
    description:
      "Gain centralized visibility, compare performance across branches, and deploy a unified waiting experience at scale.",
    badge: "Multi-location intelligence",
    gradientFrom: "#f3a6b3",
    gradientTo: "#3d8cd8",
    imageBg: "from-[#fff4f5] to-[#edf6ff]",
    icon: "🏢",
    popup: {
      title: "Standardize Time Across Every Location.",
      opening:
        "Scaling walk-in operations across multiple branches without queue intelligence leads to inconsistent service and lost efficiency.",

      section1Title: "Enterprise Challenges",
      section1Points: [
        "No centralized visibility",
        "Inconsistent wait experiences",
        "Manual coordination",
        "Performance gaps between locations",
      ],

      section2Title: "The Enterprise Layer",
      section2Points: [
        "Real-time multi-location dashboards",
        "Standardized queue policies",
        "Performance comparison analytics",
        "Centralized operational oversight",
      ],

      impactPoints: [
        "Brand-level consistency",
        "Operational transparency",
        "Time efficiency at scale",
      ],

      closing: "When time is standardized, growth becomes predictable.",
      cta: "Talk to Our Team",
    },
  },
];

const SectionOptions = () => {
  const [activeCard, setActiveCard] = useState(null);
  useEffect(() => {
  if (activeCard) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const handleEsc = (e) => {
    if (e.key === "Escape") {
      setActiveCard(null);
    }
  };

  window.addEventListener("keydown", handleEsc);

  return () => {
    document.body.style.overflow = "auto";
    window.removeEventListener("keydown", handleEsc);
  };
}, [activeCard]);
  return (
    <section className="relative z-10 overflow-hidden border-b border-slate-100/50 bg-gradient-to-b from-white/70 via-[#faf9ff]/80 to-[#f6f4ff]/70 backdrop-blur-xl">
      {/* Background decoration matching hero theme */}
      <div className="pointer-events-none absolute right-0  h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-[#3d8cd8]/10 via-[#6d4ad3]/5 to-[#f3a6b3]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6  lg:px-8 lg:py-14">
        {/* Enhanced heading with better hierarchy */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-lg backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-[#3d8cd8] to-[#6d4ad3]" />
            One infrastructure layer. Multiple stakeholders.
          </div>

          <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Built for the entire {"          "}
            <span className="relative bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] bg-clip-text text-transparent">
              waiting ecosystem.
              <svg
                className="absolute -bottom-3 left-0 w-full opacity-75"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M0 6C50 3 100 2 150 4C200 6 250 8 300 6"
                  stroke="url(#paint0_linear)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3d8cd8" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#6d4ad3" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f3a6b3" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            From individuals reclaiming their time to multi-location operators
            seeking operational control — Quick Cuts connects every layer of the
            walk-in economy.
          </p>
        </div>

        {/* Enhanced cards grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((card, index) => (
            <a
              key={card.id}
              onClick={() => setActiveCard(card)}
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
                <div className="relative z-10 mt-auto flex items-center justify-between gap-3 pt-2 text-sm font-bold hidden">
                  <span className="inline-flex items-center gap-2 text-[#6d4ad3] transition-all duration-300 group-hover:gap-3">
                    Explore the experience
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-50 to-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 shadow-sm transition-all group-hover:bg-slate-100 group-hover:shadow-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    View details
                  </div>
                </div>
              </div>
            </a>
          ))}
          {/* {activeCard && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-2xl transition-all duration-300"
              onClick={() => setActiveCard(null)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl transform rounded-[2.5rem] border border-white/30 bg-white/80 p-10 shadow-[0_60px_120px_rgba(0,0,0,0.35)] backdrop-blur-3xl transition-all duration-500 animate-[modalEnter_.4s_ease]"
              >
                
                <button
                  onClick={() => setActiveCard(null)}
                  className="absolute right-8 top-8 text-slate-400 transition hover:text-slate-700 text-xl"
                >
                  ✕
                </button>

                
                <div
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl text-3xl shadow-xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${activeCard.gradientFrom}, ${activeCard.gradientTo})`,
                    color: "#fff",
                  }}
                >
                  {activeCard.icon}
                </div>

                
                <h2 className="text-4xl font-black leading-tight text-slate-900">
                  {activeCard.popup.title}
                </h2>

                
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  {activeCard.popup.opening}
                </p>

                <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                
                <h3 className="text-xl font-bold text-slate-900">
                  {activeCard.popup.section1Title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {activeCard.popup.section1Points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span
                        className="mt-2 h-2 w-2 rounded-full"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${activeCard.gradientFrom}, ${activeCard.gradientTo})`,
                        }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                
                <h3 className="text-xl font-bold text-slate-900">
                  {activeCard.popup.section2Title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {activeCard.popup.section2Points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span
                        className="mt-2 h-2 w-2 rounded-full"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${activeCard.gradientFrom}, ${activeCard.gradientTo})`,
                        }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                
                <div className="space-y-2">
                  {activeCard.popup.impactPoints.map((point, i) => (
                    <div
                      key={i}
                      className="text-sm font-semibold text-slate-700"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm text-slate-500">
                  {activeCard.popup.closing}
                </p>

                <div className="mt-8">
                  <button
                    className="rounded-full px-8 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${activeCard.gradientFrom}, ${activeCard.gradientTo})`,
                    }}
                  >
                    👉 {activeCard.popup.cta}
                  </button>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default SectionOptions;
