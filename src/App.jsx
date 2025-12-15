import HeroSection from "./components/HeroSection";

import SectionOptions from "./components/SectionOptions";
import HowItWorks from "./components/HowItWorks";
import WhySalonsLove from "./components/WhySalonsLove";
import WhyInvest from "./components/WhyInvest";
import GetTheApp from "./components/GetTheApp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <SectionOptions />
      <HowItWorks />
      <WhySalonsLove />
      <WhyInvest />
      <GetTheApp />
      <Footer />
    </div>
  );
}

export default App;
