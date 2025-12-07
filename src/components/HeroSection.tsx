import { useState } from "react";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#020617] text-white relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />
      <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[180px]" />

      {/* Navbar */}
      <header className="border-b border-white/10 backdrop-blur-lg bg-black/20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-0 transition-all">
          {/* Logo */}
          <div className="group flex items-center gap-2 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-lime-400 text-slate-950 font-semibold shadow-[0_0_25px_rgba(34,197,94,0.35)] group-hover:scale-110 transition">
              QC
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-wide">
                Quick Cuts
              </span>
              <span className="text-[11px] text-slate-400">
                The Barber Booking
              </span>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            {["How it works", "For salons", "Features"].map((link) => (
              <a
                key={link}
                href={"#" + link.toLowerCase().replaceAll(" ", "-")}
                className="hover:text-emerald-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.3)]"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-slate-200 hover:border-emerald-400 hover:text-emerald-200 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all">
              For salons & barbers
            </button>
            <button className="rounded-full bg-emerald-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:bg-emerald-300 transition-all">
              Get the app
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-slate-200 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {!isMenuOpen ? (
              <svg
                className="h-6 w-6"
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
                className="h-6 w-6"
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
          <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-md md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm">
              {["How it works", "For salons", "Features"].map((link) => (
                <a
                  key={link}
                  href={"#" + link.toLowerCase().replaceAll(" ", "-")}
                  className="rounded-md px-2 py-2 text-slate-100 hover:bg-white/5 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </a>
              ))}

              <div className="mt-2 flex flex-col gap-2">
                <button className="w-full rounded-full border border-white/15 px-4 py-2 text-xs font-medium hover:border-emerald-400 hover:text-emerald-200 transition">
                  For salons & barbers
                </button>
                <button className="w-full rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,197,94,0.45)] hover:bg-emerald-300 transition">
                  Get the app
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-12 lg:flex lg:items-center lg:gap-20 lg:px-0 lg:pb-28 lg:pt-20 relative z-10">
        {/* Left: text */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 backdrop-blur shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live virtual queues for salons
          </div>

          <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Transform your salon with{" "}
            <span className="block mt-2 bg-gradient-to-r from-emerald-300 via-lime-300 to-emerald-400 bg-clip-text text-transparent">
              smart virtual queues.
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Quick Cuts lets customers join queues remotely, track wait time
            live, and arrive just in time — while salons boost efficiency,
            reduce walk-outs, and increase revenue through AI-powered scheduling.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(16,185,129,0.45)] hover:bg-emerald-300 transition-all">
              Get the app
            </button>
            <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
              Book a demo for salons
            </button>
          </div>

          <div className="mt-4 text-xs text-slate-400 tracking-wide">
            Real-time wait times • Smart scheduling • AI-powered predictions
          </div>
        </div>

        {/* Right: App Mockup */}
        <div className="mt-14 w-full max-w-md lg:mt-0 lg:flex-1 flex justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-400/50 via-lime-400/40 to-emerald-600/50 blur-3xl opacity-50 animate-pulse" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-xl">
              {/* App Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div>
                  <span className="text-sm font-medium text-slate-100">
                    Downtown Fade Studio
                  </span>
                  <p className="text-[11px] text-slate-400">
                    Queue • 7 people waiting
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                  Avg. wait 22 min
                </span>
              </div>

              {/* Queue List */}
              <div className="mt-3 space-y-2">
                {[
                  { name: "You", eta: "19 min", status: "In queue", highlight: true },
                  { name: "Rahul", eta: "Now", status: "In chair" },
                  { name: "Aman", eta: "7 min", status: "Next" },
                  { name: "Simran", eta: "14 min", status: "3rd" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between rounded-2xl px-3 py-2 text-xs ${
                      item.highlight
                        ? "bg-emerald-500/10 border border-emerald-400/40 shadow-[0_0_15px_rgba(34,197,94,0.25)]"
                        : "bg-white/5 border border-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-[10px] text-slate-100">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <span className="font-medium text-slate-100">
                          {item.name === "You" ? "You • Walk-in" : item.name}
                        </span>
                        <p className="text-[11px] text-slate-400">
                          {item.status}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-emerald-300">
                      {item.eta}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-3 flex items-center justify-between rounded-2xl bg-slate-900/70 px-3 py-2 text-[11px] text-slate-300">
                <span>AI predicting your turn live</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300">
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
