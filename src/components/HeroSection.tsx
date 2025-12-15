import { useState } from "react";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#f6f4ff] via-[#faf9ff] to-white text-slate-900">
      {/* Enhanced background blobs with animation */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 animate-blob rounded-full bg-gradient-to-br from-[#3d8cd8]/35 via-[#6d4ad3]/25 to-[#f3a6b3]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-32 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-gradient-to-br from-[#f3a6b3]/30 via-[#f6d1c5]/40 to-[#6d4ad3]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 animate-blob animation-delay-4000 rounded-full bg-gradient-to-tr from-[#3d8cd8]/15 via-[#6d4ad3]/25 to-[#f3a6b3]/20 blur-3xl" />

      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/70 shadow-sm backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo area */}
          <div className="group flex cursor-pointer items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-[0_10px_30px_rgba(109,74,211,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(109,74,211,0.6)]">
              <img
                src="src/assets/logo.png"
                alt="Quick Cuts Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-wide text-slate-900">
                Quick Cuts
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                Digital queue for salons
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
            {["How it works", "For salons", "Features"].map((link) => (
              <a
                key={link}
                href={"#" + link.toLowerCase().replaceAll(" ", "-")}
                className="group relative transition-colors hover:text-[#6d4ad3]"
              >
                {link}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="group relative overflow-hidden rounded-full border border-slate-200 bg-white/70 px-5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-[#6d4ad3]/60 hover:text-[#6d4ad3] hover:shadow-[0_10px_25px_rgba(109,74,211,0.18)]">
              <span className="relative z-10">For salons & barbers</span>
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-[#f6f0ff] to-[#edf3ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            <a
              href="#get-the-app"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(61,140,216,0.55)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(61,140,216,0.65)] hover:brightness-110"
            >
              Get the app
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/80 p-2.5 text-slate-700 shadow-sm transition-all hover:bg-white md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {!isMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="animate-slideDown border-t border-slate-200 bg-white/90 backdrop-blur-xl md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm">
              {["How it works", "For salons", "Features"].map((link, idx) => (
                <a
                  key={link}
                  href={"#" + link.toLowerCase().replaceAll(" ", "-")}
                  className="rounded-lg px-3 py-2.5 text-slate-800 transition-all hover:bg-slate-100 hover:text-[#6d4ad3]"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {link}
                </a>
              ))}

              <div className="mt-3 flex flex-col gap-2.5">
                <button className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition-all hover:border-[#6d4ad3]/60 hover:text-[#6d4ad3] hover:shadow-sm">
                   <a src="src\components\WhySalonsLove.jsx">For salons & barbers</a>
                </button>
                <a
                  href="#get-the-app"
                  className="w-full rounded-full bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-[0_12px_26px_rgba(61,140,216,0.55)] transition-all hover:brightness-110"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get the app
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 pb-24 pt-10 lg:flex-row lg:items-center lg:gap-20 lg:px-8 lg:pb-32 lg:pt-16">
        {/* Left: text */}
        <div className="max-w-2xl lg:flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-1.5 text-xs font-medium text-slate-600 shadow-lg backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-r from-[#3d8cd8] to-[#6d4ad3] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-[#3d8cd8] to-[#6d4ad3]"></span>
            </span>
            Digital queue for modern salons
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
            Save{" "}
            <span className="relative inline-block bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] bg-clip-text text-transparent">
              time, not style.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C50 2.5 100 1 150 2.5C200 4 250 5.5 299 5.5"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3d8cd8" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#6d4ad3" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#f3a6b3" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Quick Cuts lets customers join salon queues remotely, track their
            turn in real time, and walk in exactly when the chair is free—while
            salons cut walk-outs and grow revenue with a smarter, calmer
            workflow.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#get-the-app"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] px-8 py-4 text-center text-base font-semibold text-white shadow-[0_16px_35px_rgba(61,140,216,0.55)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_45px_rgba(61,140,216,0.65)] hover:brightness-110"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get the app
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <button className="group rounded-full border-2 border-slate-200 bg-white/80 px-8 py-4 text-base font-medium text-slate-800 shadow-sm transition-all duration-300 hover:border-[#6d4ad3]/60 hover:bg-white hover:text-[#6d4ad3] hover:shadow-md">
              Book a demo for salons
            </button>
          </div>

          {/* Features list */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            {[
              { icon: "⚡", text: "Real-time wait" },
              { icon: "📅", text: "Smart scheduling" },
              { icon: "🎯", text: "Predictive timings" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm font-medium text-slate-600"
              >
                <span className="text-lg">{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3]"
                />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-slate-900">
                500+ salons onboarded
              </p>
              <p className="text-slate-600">Join the queue revolution</p>
            </div>
          </div>
        </div>

        {/* Right: app preview */}
        <div className="flex w-full max-w-md justify-center lg:flex-1 lg:justify-end">
          <div className="relative w-full max-w-sm animate-fadeIn">
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#3d8cd8]/50 via-[#6d4ad3]/45 to-[#f3a6b3]/50 opacity-80 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/80 bg-white/95 p-5 shadow-[0_25px_70px_rgba(31,41,55,0.2)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_30px_80px_rgba(31,41,55,0.25)]">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] text-white text-sm font-bold shadow-[0_10px_28px_rgba(109,74,211,0.6)] transition-transform duration-300 hover:scale-110">
                    QC
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-slate-900">
                      Downtown Fade Studio
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                      7 people in queue • Live
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-gradient-to-r from-[#f6f0ff] to-[#edf3ff] px-3 py-1.5 text-xs font-semibold text-[#6d4ad3]">
                  ⏱ 22 min
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                {[
                  {
                    name: "You",
                    eta: "19 min",
                    status: "In queue",
                    highlight: true,
                    position: "4th",
                  },
                  {
                    name: "Rahul",
                    eta: "Now",
                    status: "In chair",
                    position: "1st",
                  },
                  {
                    name: "Aman",
                    eta: "7 min",
                    status: "Next up",
                    position: "2nd",
                  },
                  {
                    name: "Simran",
                    eta: "14 min",
                    status: "Waiting",
                    position: "3rd",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-xs transition-all duration-300 hover:scale-[1.02] ${
                      item.highlight
                        ? "border-2 border-[#d2c6ff] bg-gradient-to-r from-[#f6f0ff] via-[#edf3ff] to-[#ffeef5] shadow-md"
                        : "border border-slate-100 bg-slate-50/80 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] text-xs font-bold text-white shadow-md ${
                          item.highlight
                            ? "ring-2 ring-[#6d4ad3]/30 ring-offset-2"
                            : ""
                        }`}
                      >
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <span
                          className={`block font-semibold ${
                            item.highlight ? "text-slate-900" : "text-slate-800"
                          }`}
                        >
                          {item.name === "You" ? "You" : item.name}
                        </span>
                        <p className="text-[11px] text-slate-500">
                          {item.status}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`block text-sm font-bold ${
                          item.highlight ? "text-[#6d4ad3]" : "text-slate-700"
                        }`}
                      >
                        {item.eta}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {item.position}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white px-4 py-3 text-xs text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="text-base">🤖</span>
                  AI keeps your turn synced in real time
                </span>
                <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#3d8cd8]/10 to-[#6d4ad3]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#6d4ad3]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#6d4ad3]"></span>
                  Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
