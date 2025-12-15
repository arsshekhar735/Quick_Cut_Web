
// adjust path if needed

const GetTheApp = () => {
  return (
    <section
      id="get-the-app"
      className="relative z-10 overflow-hidden border-b border-slate-100/20 bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3]"
    >
      {/* subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="grid items-center gap-10 text-white lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
              Ready when your customers are
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.4rem]">
              Put Quick Cuts in every pocket
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              Customers book without calling. Salons manage queues without chaos.
              Quick Cuts keeps both sides perfectly in sync.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="group w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1 sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Get the app
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
              </button>
              <button className="w-full rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto">
                Book a demo for salons
              </button>
            </div>

            {/* Store badges, compact */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-white/85">
              <span className="font-semibold uppercase tracking-[0.16em]">
                Coming soon on
              </span>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-black/25 px-3 py-2 backdrop-blur-sm">
                  <span className="text-base"></span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[9px] uppercase tracking-[0.14em]">
                      Download on the
                    </span>
                    <span className="text-[11px] font-semibold">App Store</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-black/25 px-3 py-2 backdrop-blur-sm">
                  <span className="text-base">▶</span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[9px] uppercase tracking-[0.14em]">
                      Get it on
                    </span>
                    <span className="text-[11px] font-semibold">Google Play</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: phone card with your logo + animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-72 w-40 rounded-3xl bg-white/15 p-2 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 hover:scale-105 sm:h-80 sm:w-44">
              {/* outer glow */}
              <div className="pointer-events-none absolute -inset-2 rounded-[1.9rem] bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-70 blur-xl" />
              {/* screen */}
              <div className="relative h-full w-full rounded-2xl bg-slate-950/5 p-2">
                <div className="h-full w-full rounded-2xl bg-white/95 p-3">
                  {/* top: logo + shop */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-8 w-8 overflow-hidden rounded-xl bg-slate-100 shadow-sm">
                      <img
                        src="src\assets\logo.png"
                        alt="Quick Cuts logo"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="truncate text-[11px] font-semibold text-slate-900">
                        Downtown Fade Studio
                      </p>
                      <p className="flex items-center gap-1 text-[10px] text-slate-500">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        7 in queue • Live
                      </p>
                    </div>
                  </div>

                  {/* queue preview */}
                  <div className="space-y-2 text-[10px]">
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-2 py-2">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-[#3d8cd8] to-[#6d4ad3] text-[9px] font-semibold text-white">
                          Y
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">You</p>
                          <p className="text-[9px] text-slate-500">
                            In queue • Walk‑in
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-[#6d4ad3]">
                        19 min
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50/70 px-2 py-2">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 text-[9px] font-semibold text-white">
                          R
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">Rahul</p>
                          <p className="text-[9px] text-slate-500">In chair</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-600">
                        Now
                      </span>
                    </div>

                    <div className="rounded-xl bg-slate-50 px-2 py-1.5 text-[9px] text-slate-600">
                      AI keeps your turn synced in real time.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTheApp;
