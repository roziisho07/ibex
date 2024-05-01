import Image from "next/image";
import map from "../../../../public/images/map.jpg";
import Link from 'next/link'

import React from "react";

export default function Blogpage() {
  return (
    <div className="flex flex-row items-center mt-20 mr-10 ml-10 lg:mt-28 lg:ml-28 lg:mr-40 overflow-hidden">
      <div className="flex flex-col items-center lg:flex-row bg-white lg:mr-60 shadow-2xl rounded-2xl">
        <Image
          src={map}
          alt="blogmap"
          width={200} // Set initial width of the image
          height={200} // Set initial height of the image
          className="rounded-lg "
        />
        <div className="lg:ml-6 lg:mr-6 lg:mt-4 pr-4 pl-4 pb-4">
        <h1 className="font-bold text-center">Hunza Pakistan</h1>
        <p className="mt-4 text-center">
          It lies in the mountains of Northern Pakistan, the gigantic and
          colorful Hunza Valley far in the Gilgit Baltistan region near the
          China border. Hunza Valley is one of the most beautiful places to
          visit Valley is one of the most beautiful places to visit Valley is
          one of the most beautiful places{" "}
        </p>
        <div className="flex justify-center mt-6">
            <Link href={'/blogs/hunzavalley'}>
            <button className="bg-slate-900 text-white rounded-lg pr-6 pl-6 pt-2 pb-2">READ</button>
            </Link>
           
        </div>
          
        </div>
      </div>
      {/* Hide this div for small and medium screens */}
      <div className="hidden md:hidden lg:block">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">CATEGORIES</h2>

        <p className="text-gray-700 pl-6 pb-2 font-bold">Hunting Region</p>
        <p className="text-gray-700 pl-6 pb-2 font-bold">Accommodation</p>
        <p className="text-gray-700 pl-6 pb-2 font-bold">Office</p>
        <p className="text-gray-700 pl-6 pb-2 font-bold"></p>
      </div>
    </div>
  );
}
