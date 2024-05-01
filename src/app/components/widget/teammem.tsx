import React from "react";
import Image from "next/image";
import kirama from "../../../../public/images/kiramatt.jpeg";
import hassan from "../../../../public/images/hassan.jpg";
import nahid from "../../../../public/images/karimalishah.jpg";
import Shared from "../widget/shared"
import { FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa";




export default function Teammem() {
    return (
      <section className="mt-10 pt-20 md:mt-20 mb-20 bg-gray-100 overflow-hidden">
        <h1 className="text-center text-2xl font-bold font-serif">OUR FABULOUS TEAM</h1>
        <p className="text-center text-sm font-bold font-serif m-3">MEET OUR FABULOUS TEAM OF EXPERT GUIDES AND HUNTERS</p>
        <main className="flex flex-col md:flex-row md:justify-center md:space-x-8">
          <div className="m-4 md:m-8 flex flex-col items-center">
            <div className="w-[12rem] md:w-[16rem] h-[14.25rem] md:h-[18.25rem] relative">
              <Image
                src={kirama}
                alt="huntimage"
                className="absolute inset-0 w-full h-full object-cover shadow-2xl rounded-2xl"
              />
            </div>
            <div className="flex flex-row pt-6">
              <Shared url="https://web.facebook.com/kiramat.ullah.1048">
              <FaFacebook/>
            </Shared>
            <Shared url="https://www.instagram.com/kiramat__/">
              <FaInstagram />
            </Shared>
            <Shared url="www.facebook.com">
              <FaYoutube/>
            </Shared></div>
            
            <h2 className="mt-4 md:mt-6 font-semibold text-center">Kiramat Saleem</h2>
            <h3 className="mt-1 md:mt-3 text-center">Gulmit Gojal Hunza</h3>
          </div>
          <div className="m-4 md:m-8 flex flex-col items-center">
            <div className="w-[12rem] md:w-[16rem] h-[14.25rem] md:h-[18.25rem] relative">
              <Image
                src={hassan}
                alt="huntimage"
                className="absolute inset-0 w-full h-full object-cover shadow-2xl rounded-2xl"
              />
            </div>
            <div className="flex flex-row pt-6">
              <Shared url="www.facebook.com">
              <FaFacebook/>
            </Shared>
            <Shared url="www.instagram.com">
              <FaInstagram />
            </Shared>
            <Shared url="www.facebook.com">
              <FaYoutube/>
            </Shared></div>
            <h2 className="mt-4 md:mt-6 font-semibold text-center">Hassan Aziz</h2>
            <h3 className="mt-1 md:mt-3 text-center">Gulmit Gojal Hunza</h3>
          </div>
          <div className="m-4 md:m-8 flex flex-col items-center">
            <div className="w-[12rem] md:w-[16rem] h-[14.25rem] md:h-[18.25rem] relative">
              <Image
                src={nahid}
                alt="huntimage"
                className="absolute inset-0 w-full h-full object-cover shadow-2xl rounded-2xl"
              />
            </div>
            <div className="flex flex-row pt-6">
              <Shared url="www.facebook.com">
              <FaFacebook/>
            </Shared>
            <Shared url="www.instagram.com">
              <FaInstagram />
            </Shared>
            <Shared url="www.facebook.com">
              <FaYoutube/>
            </Shared></div>
            <h2 className="mt-4 md:mt-6 font-semibold text-center">Karim Ali Shah</h2>
            <h3 className="mt-1 md:mt-3 text-center">Gulmit Gojal Hunza</h3>
          </div>
        </main>
      </section>
    );
  }
  