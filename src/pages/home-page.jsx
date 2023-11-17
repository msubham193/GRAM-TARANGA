import AboutUsSection from "@/components/aboutUs/aboutus-section";
import HeroSection from "@/components/hero/hero-section";
import ChooseUs from "../components/chooseUs/chooseus-Section";

const HomePage = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <ChooseUs />
      <AboutUsSection />
    </div>
  );
};

export default HomePage;
