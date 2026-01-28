import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import MusicPlayerSection from "@/components/MusicPlayerSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import MerchSection from "@/components/MerchSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MusicSection />
        <AnalyticsSection />
        <MusicPlayerSection />
        <EventsSection />
        <GallerySection />
        <AboutSection />
        <MerchSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
