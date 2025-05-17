import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ShopPreviewSection from "../components/sections/ShopPreviewSection";
import HowToOrderSection from "../components/sections/HowToOrderSection";
import LookbookPreviewSection from "../components/sections/LookbookPreviewSection"
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ShopPreviewSection/>
      <HowToOrderSection/>
      <LookbookPreviewSection/>
      <ContactSection/>
      {/* Next section will go here */}
    </>
  );
}
