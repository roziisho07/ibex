import Packages from "../components/widget/packages";
import Contactpackage from "../components/widget/contactpackage";
import Footer from "../components/widget/footer";
import ibexGhulkin from "/public/images/ibex_ghulkin_region.jpg";
import ibexxGulmit from "/public/images/YUKsh.jpg";
import ibexKhunj from "/public/images/Ibexphoto.jpg";
import ibexHussaini from "/public/images/Markhorei.jpg";
import Image from "next/image";
import imgGulmit from "/public/images/gulmit.jpg";
export default function package_avl() {
  return (
    <div className=" ">
      <div className="relative  h-[30rem]  text-white overflow-hidden ">
        <div className="absolute  inset-0 ">
          <div
            className="bg-cover bg-center h-full w-full"
            // style={{ backgroundImage: `url('/images/ibeee.jpg')` }}
          >
            <Image
              src={imgGulmit}
              loading="lazy"
              alt="image of ibex on a mountain"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="relative  flex flex-col justify-center items-start p-12 ml-14 h-full">
          <h1 className="text-3xl font-bold leading-tight mb-4">
            Explore the Best Places To Get Your Trophy
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Start with the difficulty level and your trophy choice
          </p>
          <a
            href="#"
            className="bg-yellow-500 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-md text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Contact us
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center p-8  gap-8  bg-slate-200  ">
        <Packages
          title={"Ghulkin"}
          imgSrc={ibexGhulkin}
          description={
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi laboriosam recusandae consectetur consequatur.!"
          }
          level={100}
        />
        <Packages
          title={"Khunjerab"}
          imgSrc={ibexKhunj}
          description={
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi laboriosam recusandae consectetur consequatur.!"
          }
          level={10}
        />
        <Packages
          title={"Gulmit"}
          imgSrc={ibexxGulmit}
          description={
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi laboriosam recusandae consectetur consequatur.!"
          }
          level={200}
        />
        <Packages
          title={"Hussaini"}
          imgSrc={ibexHussaini}
          description={
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi laboriosam recusandae consectetur consequatur.!"
          }
          level={80}
        />
        <Packages
          title={"Hussaini"}
          imgSrc={ibexHussaini}
          description={
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi laboriosam recusandae consectetur consequatur.!"
          }
          level={80}
        />{" "}
        <Packages
          title={"Hussaini"}
          imgSrc={ibexHussaini}
          description={
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi laboriosam recusandae consectetur consequatur.!"
          }
          level={80}
        />{" "}
        <Packages
          title={"Hussaini"}
          imgSrc={ibexHussaini}
          description={
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi laboriosam recusandae consectetur consequatur.!"
          }
          level={80}
        />
      </div>
      {/* <Ghulkin_area/> */}
      {/* <Passu_area/> */}

      <Contactpackage />
      <Footer />
    </div>
  );
}
