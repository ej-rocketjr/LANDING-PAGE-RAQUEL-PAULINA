import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Differentials from "./components/Differentials";
import Reviews from "./components/Reviews";
import CtaBanner from "./components/CtaBanner";
import Faq from "./components/Faq";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Differentials />
        <Reviews />
        <CtaBanner />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
