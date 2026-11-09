import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../features/home/components/HeroSection";
import TourSearchForm from "../features/home/components/TourSearchForm";
import DestinationGrid from "../features/home/components/DestinationGrid";
import WhyLaagGoSection from "../features/home/components/WhyLaagGoSection";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <TourSearchForm />
        <DestinationGrid />
        <WhyLaagGoSection />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;