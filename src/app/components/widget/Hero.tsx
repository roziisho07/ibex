import React from "react";
import Image from "next/image";
import ibexImg from "/public/images/Ibeee.jpg";

function Hero() {
  return (
    <div>
      <div className="relative  h-screen  text-white overflow-hidden ">
        <div className="absolute  inset-0 ">
          <div
            className="bg-cover bg-center h-full w-full"
            // style={{ backgroundImage: `url('/images/ibeee.jpg')` }}
          >
            <Image
              src={ibexImg}
              alt="image of ibex on a mountain"
              className="object-cover object-center w-full h-full"
            />
          </div>
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
    </div>
  );
}

export default Hero;
