import React from "react";
import Image, { StaticImageData } from "next/image";

export default function Page({
  title,
  imgSrc,
  description,
  level,
}: {
  title: string;
  imgSrc: StaticImageData;
  description: string;
  level: string;
}) {
  return (
    <main className="">
      <div className="flex flex-col h-[28rem] w-full md:w-[17rem]  bg-gray-5s00 rounded-lg shadow-xl">
        <div className="relative h-[14rem] md:h-[15rem] rounded-t-lg overflow-hidden bg-slate-950">
          <Image
            src={imgSrc}
            loading="lazy"
            alt="ibex"
            width={400}
            height={400}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="p-6 pt-8">
          <h1 className="pb-6">
            <a className="font-medium" href="">{`Area: `}</a>
            {title}
          </h1>

          <p className="text-sm flex text-left leading-snug text-gray-700">
            {description}
          </p>
          <h3 className="pb-2 pt-2">
            {`Difficulty level:`}{" "}
            <span className="rounded-md font-extrabold ">{level}</span>{" "}
          </h3>
          <div className=" h-4"></div>
          <div className="justify-start ">
            <button className="mt-4 p-2 rounded-md flex bg-slate-600 hover:bg-slate-800 text-white transition duration-300">
              {" "}
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
