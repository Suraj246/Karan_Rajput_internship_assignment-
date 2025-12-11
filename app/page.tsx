import Banner from "./components/Banner";
import BikeLogos from "./components/BikeLogos";
import DownloadAd from "./components/DownloadAd";
import FormField from "./components/FormField";
import Navbar from "./components/Navbar";
import SectionFive from "./components/SectionFive";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import Carousel from "./components/Carousel";
import SectionEight from "./components/SectionEight";
import SectionNine from "./components/SectionNIne";
import StorySection from "./components/StorySection";
import FAQSection from "./components/FAQSection";
import SectionTen from "./components/SectionTen";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <BikeLogos />
      <SectionFour />
      <SectionFive />
      <FormField />
      <DownloadAd />
      <SectionSix />
      <SectionSeven />
      <Carousel />
      <SectionEight />
      <SectionNine />
      <StorySection />
      <FAQSection />
      <SectionTen />
      <Footer />
    </div>
  );
}
