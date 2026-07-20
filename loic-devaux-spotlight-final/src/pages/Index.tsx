import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
