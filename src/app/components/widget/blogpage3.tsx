import Image from "next/image";
import trek2 from "../../../../public/images/kir3.jpeg"
import circleborith from "../../../../public/images/gulmit.jpg"
import circlegulmitlake from "../../../../public/images/trek.jpg"

export default function BlogPage3() {
    return (
        <div className="flex flex-row items-center mt-20  mb-20 mr-10 ml-10 lg:mt-28 lg:ml-28 lg:mr-[140px] overflow-hidden">
      <div className="flex flex-col items-center lg:flex-row bg-white lg:mr-60 shadow-2xl rounded-2xl">
        <Image
          src={trek2}
          alt="blogmap"
          // Set initial height of the image
          className="rounded-lg h-[20rem] w-[13rem] "
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
            <button className="bg-slate-900 text-white rounded-lg pr-6 pl-6 pt-2 pb-2">
              READ
            </button>
          </div>
        </div>
        
      </div>
      
      {/* Hide this div for small and medium screens */}
      <div className="hidden md:hidden lg:block">
        <div className="  ">
          <div className="rounded-full overflow-hidden pb-2 w-40 h-40 flex">
          <Image
            src={circleborith} // Assuming your image paths are correct
            alt="wildlife"
            width={160} // Adjust dimensions to fit your layout
            height={160}
            
          />
          </div>
            <h2 className="text-center"> Gulmit Gojal</h2>
        </div>
        <div className="">
          <div className="rounded-full overflow-hidden pt-2  w-40 h-40 flex">
          <Image
            src={circlegulmitlake} // Assuming your image paths are correct
            alt="wildlife"
            width={160} // Adjust dimensions to fit your layout
            height={160}
            
          />
          </div>
            <h2 className="text-center"> Gulmit Gojal</h2>
        </div>
      </div>
      
    </div>
    );
}