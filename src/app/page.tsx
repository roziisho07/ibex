import Aboutparagraph from "./components/widget/aboutt";
import Expert from "./components/widget/expertteam";
import Huntinganimal from "./components/widget/huntinganimals";
import Bloghomeee from "./components/widget/bloghome";
import Teammem from "./components/widget/teammem";
import Footer from "./components/widget/footer";
import Button from "./components/widget/button";

export default function Home() {
  return (
    <div className="overflow-hidden bg-slate-100">
      <div className="relative  h-screen text-white overflow-hidden">
        <div className="absolute inset-0 ">
          <div
            className="bg-cover bg-center h-full w-full"
            style={{ backgroundImage: `url('/images/ibeee.jpg')` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Start Your Hunting Journey
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p>
          <a
            href="#"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>

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
