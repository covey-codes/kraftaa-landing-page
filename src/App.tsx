import React from "react";
import HeroSection from "./components/HeroSection";
import GetInTouchSection from "./components/GetInTouchSection";
import WhyChooseSection from "./components/WhyChooseSection";
import AnyServicesSection from "./components/AnyServicesSection";
import FindArtisanSection from "./components/FindArtisanSection";
import HowKraftaaWorksSection from "./components/HowKraftaaWorksSection";
import DownloadmobileSection from "./components/DownloadmobileSection";
import FooterSection from "./components/FooterSection";

const App: React.FC = () => {
  return (
    <>
      <HeroSection />
      <GetInTouchSection />
      <WhyChooseSection />
      <AnyServicesSection />
      <FindArtisanSection />
      <HowKraftaaWorksSection />
      <DownloadmobileSection />
      <FooterSection />
    </>
  );
};

export default App;
