import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ShopPreviewSection from "../components/ShopPreviewSection";
import HowToOrderSection from "../components/HowToOrder";
import LookbookSection from "../components/LookbookSection"
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ShopPreviewSection/>
      <HowToOrderSection/>
      <LookbookSection/>
      <ContactSection/>
      {/* Next section will go here */}
    </>
  );
}
