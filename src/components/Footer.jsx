import logo from "../assets/logo.png"; // update the path if different

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#020617] text-slate-300">
      {/* top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/35 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        {/* top row */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-800 pb-5 sm:flex-row sm:items-center">
          {/* logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.85)] ring-1 ring-slate-700/60">
              <img
                src={logo}
                alt="Quick Cuts logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-white">
                Quick Cuts
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Digital queue for salons
              </span>
            </div>
          </div>

          {/* country / language */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
            <button className="flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 shadow-sm hover:border-slate-500 hover:bg-slate-800 transition">
              <span className="text-sm">🌐</span>
              <span>India</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 shadow-sm hover:border-slate-500 hover:bg-slate-800 transition">
              <span className="text-sm">🇬🇧</span>
              <span>English</span>
            </button>
          </div>
        </div>

        {/* middle links */}
        <div className="mt-8 grid gap-8 text-sm md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Quick Cuts
            </h3>
            <p className="text-xs leading-relaxed text-slate-400/90">
              Virtual queues and smart scheduling for barbershops and salons who
              want less chaos, happier customers, and more revenue.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Company
            </h3>
            <ul className="space-y-1.5">
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              For salons
            </h3>
            <ul className="space-y-1.5">
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Why Quick Cuts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Book a demo
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Support
            </h3>
            <ul className="space-y-1.5">
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Privacy &amp; terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-4 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Quick Cuts. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {["Instagram", "LinkedIn", "Twitter"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-slate-100 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
