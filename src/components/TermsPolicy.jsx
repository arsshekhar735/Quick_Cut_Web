import React, { useState, useEffect } from "react";

const TermsPolicy = ({ open, onClose }) => {
  if (!open) return null;

  const sections = [
    // ===== Privacy Policy =====
    {
      id: "privacy-1",
      title: "Quick-Cuts Privacy Policy",
      content:
        "Last Updated: January 2026\n\nQuick-Cuts (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights when you use the Quick-Cuts platform (website or mobile application).",
    },
    {
      id: "privacy-2",
      title: "1. Who We Are",
      content:
        "Quick-Cuts is a technology platform that enables users to discover, book, and pay for grooming and salon services offered by independent service providers (“Partners”). Quick-Cuts does not itself provide grooming services.",
    },
    {
      id: "privacy-3",
      title: "2. Information We Collect",
      content:
        "We collect only data that is necessary to operate the platform.\n\n• Name\n• Mobile number\n• Email address\n• Location\n• Booking details\n• Reviews and feedback\n\nPayment details are handled securely by third-party gateways. We do not store card or UPI details.",
    },
    {
      id: "privacy-11",
      title: "11. Grievance Redressal & Contact",
      content:
        "Company Name: Quick-Cuts Technologies Private Limited (to be finalized)\nEmail: support@quickcuts.shop\nGrievance Officer: To be appointed as per DPDP Act.",
    },

    // ===== Terms of Service =====
    {
      id: "terms-1",
      title: "Quick-Cuts – Terms of Service",
      content:
        "Last Updated: January 2026\n\nThese Terms govern your access to and use of the Quick-Cuts platform. By using Quick-Cuts, you agree to be bound by these Terms.",
    },
    {
      id: "terms-2",
      title: "1. About Quick-Cuts",
      content:
        "Quick-Cuts is a discovery and booking platform connecting users with independent salons and grooming professionals. Quick-Cuts does not itself provide salon services.",
    },
    {
      id: "terms-17",
      title: "17. Refund Policy",
      content:
        "Refunds may be issued if:\n• Payment made accidentally\n• Overcharged amount\n• Service not availed\n\nRefunds are processed within 7 working days.",
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* background click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* modal */}
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 shadow-2xl">
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 rounded-full bg-black/80 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
        >
          ✕ Close
        </button>

        <div className="p-6 md:p-12">
          {/* header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-teal-600 bg-clip-text text-transparent">
              Terms & Privacy
            </h1>
            <p className="mt-3 text-slate-700">
              Transparency, trust, and your rights at Quick-Cuts
            </p>
          </header>

          {/* content card */}
          <div className="mx-auto max-w-4xl bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-purple-200/50 p-8">
            <h2 className="mb-6 text-2xl font-bold bg-gradient-to-r from-purple-700 to-teal-700 bg-clip-text text-transparent flex items-center">
              <span className="mr-3 h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping" />
              {sections[currentSection].title}
            </h2>

            <div className="whitespace-pre-wrap text-slate-800 leading-relaxed max-h-64 overflow-y-auto pr-4 scrollbar-thin">
              {sections[currentSection].content}
            </div>

            {/* footer */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6">
              <span className="text-sm text-slate-600">
                Section {currentSection + 1} of {sections.length}
              </span>
              <button
                onClick={() =>
                  setCurrentSection((p) => (p + 1) % sections.length)
                }
                className="rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 px-6 py-2 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* scrollbar styling */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar { width: 8px; }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #c084fc, #ec4899);
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default TermsPolicy;
