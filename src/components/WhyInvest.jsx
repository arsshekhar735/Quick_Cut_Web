const reasons = [
  {
    title: "Huge everyday problem",
    description:
      "Walk‑in salons and barbershops still run on paper, memory, or basic chat apps. Every visit burns 30–45 minutes in dead waiting time, and owners silently lose thousands each month when customers walk out instead of waiting.",
    punchline:
      "Quick Cuts converts this wasted time into predictable, monetizable demand.",
  },
  {
    title: "Asset‑light, SaaS‑first model",
    description:
      "Quick Cuts runs on subscription + per‑shop pricing with no heavy hardware, no complex installations, and no long integrations—just a QR code, an app, and a dashboard.",
    punchline:
      "The same product scales from a single‑chair barbershop to a multi‑city chain with minimal marginal cost.",
  },
  {
    title: "Dual‑sided, compounding network",
    description:
      "Every new salon onboarded brings its loyal customers onto Quick Cuts. Those customers then discover nearby partner salons and carry their profile, history, and preferences with them.",
    punchline:
      "Over time, this compounds into a defensible, two‑sided network that is hard for a point solution to displace.",
  },
  {
    title: "Built for emerging markets first",
    description:
      "Quick Cuts is designed around how salons actually operate in India and similar markets: walk‑in heavy, owner‑run, mobile‑first, and price sensitive, with onboarding that fits into a single visit.",
    punchline:
      "This makes the product naturally portable to other high‑density, service‑led markets across Asia, the Middle East, and Africa.",
  },
];

const metrics = [
  {
    label: "Minutes saved per visit",
    value: "30+",
    accent: "from-emerald-400 to-lime-300",
    detail: "Customers reclaim time that used to be lost in queues.",
  },
  {
    label: "Targetable salons in major Indian cities",
    value: "100K+",
    accent: "from-[#3d8cd8] to-[#6d4ad3]",
    detail: "Highly fragmented, under‑digitised daily‑need service market.",
  },
  {
    label: "Extra revenue / chair / month",
    value: "₹5K–₹15K",
    accent: "from-[#f3a6b3] to-[#f97373]",
    detail: "From fewer walk‑outs, better utilisation, and timely upsell.",
  },
];

const WhyInvest = () => {
  return (
    <section
      id="why-invest"
      className="relative z-10 border-b border-slate-100 bg-gradient-to-b from-white via-[#f7f5ff]/70 to-white"
    >
      {/* soft background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f6f0ff]/80 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#3d8cd8] to-[#6d4ad3]" />
            For investors & partners
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why invest in{" "}
            <span className="bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] bg-clip-text text-transparent">
              Quick Cuts
            </span>
            ?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Quick Cuts is building the operating system for walk‑in salons:
            turning offline, unstructured queues into a predictable, data‑driven
            platform that creates value for customers, owners, and long‑term
            investors.
          </p>
        </div>

        {/* layout: metrics + reasons */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:items-start">
          {/* metrics / stats card */}
          <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white/95 p-5 shadow-[0_18px_45px_rgba(148,163,184,0.18)] backdrop-blur">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Key opportunity in numbers
            </h3>

            {/* metric tiles */}
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center rounded-2xl bg-slate-50/80 px-3 py-4 text-center shadow-sm"
                >
                  <div
                    className={`mb-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r ${m.accent} px-3 py-1.5 text-xs font-semibold text-slate-900`}
                  >
                    {m.value}
                  </div>
                  <p className="text-[11px] font-medium text-slate-600">
                    {m.label}
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">{m.detail}</p>
                </div>
              ))}
            </div>

            {/* explanatory line */}
            <p className="mt-4 text-[11px] text-slate-500">
              These are directional, early‑stage estimates based on current
              pilots and market research.
            </p>

            {/* contact strip */}
            <div className="mt-4 flex flex-col gap-2 rounded-2xl bg-gradient-to-r from-[#f6f0ff]/90 via-[#edf3ff]/90 to-[#ffeef5]/90 px-3 py-3 text-[11px] text-slate-700 sm:flex-row sm:items-center sm:justify-between">
              <span>
                <span className="font-semibold text-[#6d4ad3]">
                  Want to go deeper?
                </span>{" "}
                Reach out for the full deck, detailed cohorts, and roadmap.
              </span>
              <a
                href="mailto:founders@quickcuts.app"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-[#6d4ad3] px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#3d8cd8] sm:mt-0"
              >
                Contact founders
              </a>
            </div>

            {/* bottom summary + “Let’s do it together.” */}
            <div className="mt-3 rounded-xl bg-slate-50/80 px-3 py-2 text-[11px] leading-relaxed text-slate-600">
              <span className="block">
                Built for high‑frequency, service‑led markets with asset‑light SaaS economics.
              </span>
              <span className="mt-1 block font-semibold text-[#6d4ad3]">
                Let’s do it together.
              </span>
            </div>
          </div>

          {/* reasons list */}
          <div className="space-y-4">
            {reasons.map((reason, idx) => (
              <div
                key={reason.title}
                className="group flex gap-3 rounded-3xl border border-slate-100 bg-white/95 p-4 shadow-[0_14px_35px_rgba(148,163,184,0.16)] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(148,163,184,0.26)]"
              >
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-[11px] font-semibold text-white transition-colors group-hover:bg-[#6d4ad3]">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {reason.description}
                  </p>
                  {reason.punchline && (
                    <p className="mt-2 text-[11px] font-semibold text-[#6d4ad3]">
                      {reason.punchline}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-3 rounded-2xl border border-dashed border-[#6d4ad3]/40 bg-[#f6f0ff]/60 px-4 py-3 text-[11px] font-medium text-slate-700">
              Quick Cuts sits at the intersection of{" "}
              <span className="font-semibold text-[#6d4ad3]">
                everyday consumer habit
              </span>
              ,{" "}
              <span className="font-semibold text-[#6d4ad3]">
                high‑frequency local services
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#6d4ad3]">
                asset‑light SaaS economics
              </span>
              —a combination built for compounding returns, not one‑time wins.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
