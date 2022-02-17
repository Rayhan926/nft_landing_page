import AboutWhitePaper from "../components/AboutWhitePaper";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection, { HeroSectionLeftBox } from "../components/HeroSection";
import NFTCollections from "../components/NFTCollections";
import NFTLikeNoOtherSection from "../components/NFTLikeNoOtherSection";
import NFTTextCard from "../components/NFTTextCard";

export default function Home() {
  return (
    <div style={{ backgroundImage: 'url(/img/kopalnia_bg.jpg)' }} className="bg-cover" >
      <Header />
      <HeroSection />
      <AboutWhitePaper />
      <NFTCollections />
      <section className="mt-10">
        <div className="container">
          <div className="bg-white/30 px-4 py-10 md:px-16 md:py-20 grid gap-10 md:gap-5 grid-cols-1 place-items-center md:grid-cols-2 rounded-xl">
            <div className="md:w-[350px]">
              <Card imgSrc="/img/punkpng.png" />
            </div>
            <HeroSectionLeftBox />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <NFTTextCard />
            <NFTTextCard />
          </div>
        </div>
      </section>

      <NFTLikeNoOtherSection />
      <Footer />
    </div>
  )
}
