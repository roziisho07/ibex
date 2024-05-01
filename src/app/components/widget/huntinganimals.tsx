import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ibex from "../../../../public/images/ibex_gulmit_region.jpg";
import ibex_ghulkin from "../../../../public/images/ibex_ghulkin_region.jpg";




export default function Page() {
  return (
    <main className='flex flex-col md:flex-row justify-center pt-8 md:pt-20 space-y-8 md:space-y-0 md:space-x-4'>
      <div className="flex flex-col h-[27rem] w-full md:w-[17rem]  bg-white rounded-lg shadow-xl">
        <div className="relative h-[14rem] md:h-[15rem] rounded-t-lg overflow-hidden">
          <Image
            src={ibex}
            alt="ibex"
            width={300}
            height={300}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="p-6 pt-8">
          <p className="text-sm flex text-center leading-snug text-gray-700">
            The ibex, a species of wild goat, thrives in rugged mountainous terrain, showcasing remarkable agility and majestic horns.
          </p>
          <div className='flex justify-center'>
            <button className='m-8 p-2 rounded-lg flex bg-slate-600 hover:bg-slate-800 text-white transition duration-300'> BOOK NOW</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[27rem] w-full md:w-[17rem] bg-white rounded-lg shadow-xl">
        <div className="relative h-[15rem] md:h-[15rem] rounded-t-lg overflow-hidden">
          <Image
            src={ibex_ghulkin}
            alt="ibex_ghulkin"
            width={300}
            height={300}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="p-6 pt-8">
          <p className="text-sm flex text-center leading-snug text-gray-700">
            The ibex, a species of wild goat, thrives in rugged mountainous terrain, showcasing remarkable agility and majestic horns.
          </p>
          <div className='flex justify-center'>
            <button className='m-8 p-2 rounded-lg flex bg-slate-600 hover:bg-slate-800 text-white transition duration-300'> BOOK NOW</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[27rem] w-full md:w-[17rem] bg-white rounded-lg shadow-xl">
        <div className="relative h-[15rem] md:h-[15rem] rounded-t-lg overflow-hidden">
          <Image
            src={ibex}
            alt="ibex"
            width={300}
            height={300}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="p-6 pt-8">
          <p className="text-sm flex text-center leading-snug text-gray-700">
            The ibex, a species of wild goat, thrives in rugged mountainous terrain, showcasing remarkable agility and majestic horns.
          </p>
          <div className='flex justify-center'>
            <button className='m-8 p-2 rounded-lg flex bg-slate-600 hover:bg-slate-800 text-white transition duration-300'> BOOK NOW</button>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col h-[27rem] w-full md:w-[17rem] bg-white rounded-lg shadow-xl">
        <div className="relative h-[15rem] md:h-[15rem] rounded-t-lg overflow-hidden">
          <Image
            src={ibex}
            alt="ibex"
            width={300}
            height={300}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="p-6 pt-8">
          <p className="text-sm flex text-center leading-snug text-gray-700">
            The ibex, a species of wild goat, thrives in rugged mountainous terrain, showcasing remarkable agility and majestic horns.
          </p>
          <div className='flex justify-center'>
            <button className='m-8 p-2 rounded-lg flex bg-blue-500 hover:bg-blue-600 text-white transition duration-300'> BOOK NOW</button>
          </div>
        </div>
      </div> */}
    </main>
  );
}