import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SectionOptions from "./components/SectionOptions";
import HowItWorks from "./components/HowItWorks";
import WhySalonsLove from "./components/WhySalonsLove";
import WhyInvest from "./components/WhyInvest";
import GetTheApp from "./components/GetTheApp";
import Footer from "./components/Footer";

import CareersModal from "./components/CareersModal";

function App() {
  const [careersOpen, setCareersOpen] = useState(false);

  return (
    <div className="scroll-smooth">
      
      <HeroSection />
      <SectionOptions />
      <HowItWorks />
      <WhySalonsLove />
      <WhyInvest />
      <GetTheApp />
      <Footer onOpenCareers={() => setCareersOpen(true)} />
      <CareersModal open={careersOpen} onClose={() => setCareersOpen(false)} />
    </div>
  );
}

export default App;
