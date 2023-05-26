import HeroSection from "@/components/HeroSection/HeroSection";
import CoreTracks from "@/components/CoreTrack/CoreTracks";
import SpecializedTrack from "@/components/Specialized Track/SpecializedTrack";
import QuaterBoxes from "@/components/QuarterBoxes/QuaterBoxes";
import OutComeSection from "@/components/OutComeSection/OutComeSection";
import Footer from "@/components/Footer/Footer";
const Home = () => {
  return (
    <>
      <HeroSection />
      <CoreTracks />
      <SpecializedTrack />
      <QuaterBoxes />
      <OutComeSection />
      <Footer />
    </>
  );
};
export default Home;
