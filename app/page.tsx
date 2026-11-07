import Hero from "./components/Hero";
import AreasStrip from "./components/AreasStrip";
import Differentials from "./components/Differentials";
import PracticeAreas from "./components/PracticeAreas";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Steps from "./components/Steps";
import Specialist from "./components/Specialist";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AreasStrip />
        <Differentials />
        <PracticeAreas />
        <Reviews />
        <About />
        <Steps />
        <Specialist />
      </main>
      <SiteFooter />
    </>
  );
}
