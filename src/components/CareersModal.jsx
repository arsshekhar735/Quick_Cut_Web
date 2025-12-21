const openings = [
  {
    title: "Founding Frontend Engineer",
    type: "Full‑time • Remote / Bengaluru",
    description:
      "Own the Quick Cuts web & mobile experience end‑to‑end using React, React Native, and Tailwind. Work directly with founders to ship fast.",
  },
  {
    title: "Founding Backend Engineer",
    type: "Full‑time • Remote / Bengaluru",
    description:
      "Design and build queue, notification, and analytics APIs using Node.js, PostgreSQL/MySQL, and cloud infra.",
  },
  {
    title: "City Launch Manager",
    type: "Full‑time • On‑site • Major Indian cities",
    description:
      "Onboard salons, train staff, and own growth metrics as we expand Quick Cuts across new cities.",
  },
];

const CareersModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* modal card */}
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.55)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-[#f6f4ff] via-[#faf9ff] to-white px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Careers at Quick Cuts
            </h2>
            <p className="text-xs text-slate-500">
              Join the team building the digital queue for salons.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-slate-200 bg-white px-2 py-1 text-xs text-slate-500 hover:bg-slate-100"
          >
            Close
          </button>
        </div>

        {/* content */}
        <div className="flex flex-col gap-4 overflow-y-auto px-6 py-4 sm:py-5">
          <p className="text-sm text-slate-600">
            Quick Cuts is a product‑first, remote‑friendly team. If you love
            solving real‑world problems around queues, time, and operations, we’d
            like to hear from you.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {openings.map((job) => (
              <div
                key={job.title}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {job.title}
                </h3>
                <p className="mt-1 text-[11px] font-medium text-slate-500">
                  {job.type}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {job.description}
                </p>
                <button className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-gradient-to-r from-[#3d8cd8] via-[#6d4ad3] to-[#f3a6b3] px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm hover:brightness-110">
                  Express interest
                </button>
              </div>
            ))}
          </div>

          <div className="mt-1 rounded-2xl bg-slate-50 px-4 py-3 text-[11px] text-slate-500">
            Don’t see a role that fits? Send your profile to{" "}
            <span className="font-semibold text-slate-700">
              hr@quickcuts.shop
            </span>{" "}
            and tell us how you’d like to help.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersModal;
