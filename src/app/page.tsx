import Aboutparagraph from "./components/widget/aboutt";
import Expert from "./components/widget/expertteam";
import Huntinganimal from "./components/widget/huntinganimals";
import Bloghomeee from "./components/widget/bloghome";
import Teammem from "./components/widget/teammem";
import Footer from "./components/widget/footer";
import Button from "./components/widget/button";
import Hero from "./components/widget/Hero";
import CardsHome from "./components/widget/CardsHome";

export default function Home() {
  return (
    <div className="overflow-hidden bg-slate-100">
      <Hero />
      <Aboutparagraph />
      <Huntinganimal />
      {/* <Featuretrip/> */}

      {/* <Featureanimal /> */}
    
      <Bloghomeee />
      <Expert />
      <Teammem />
      <Button />
      <Footer />
    </div>
  );
}
