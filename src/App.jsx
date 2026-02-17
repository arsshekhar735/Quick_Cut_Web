import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SectionOptions from "./components/SectionOptions";
import HowItWorks from "./components/HowItWorks";
import WhySalonsLove from "./components/WhySalonsLove";
import WhyInvest from "./components/WhyInvest";
import GetTheApp from "./components/GetTheApp";
import Footer from "./components/Footer";
import TermsPolicy from "./components/TermsPolicy";
import CareersModal from "./components/CareersModal";
import FAQ from "./components/FAQ";
import FAQModal from "./components/FAQModal";
import AuthoritySection from "./components/AuthoritySection";

function App() {
  const [careersOpen, setCareersOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="scroll-smooth">
      <HeroSection />
      <SectionOptions />
      <HowItWorks />
      <WhySalonsLove />
      <WhyInvest />
      <AuthoritySection />
      <GetTheApp />
      
      <Footer
        onOpenCareers={() => setCareersOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenFAQ={() => setFaqOpen(true)}
      />

      <CareersModal open={careersOpen} onClose={() => setCareersOpen(false)} />

      <TermsPolicy open={termsOpen} onClose={() => setTermsOpen(false)} />

      <FAQModal open={faqOpen} onClose={() => setFaqOpen(false)} />
    </div>
  );
}

export default App;
