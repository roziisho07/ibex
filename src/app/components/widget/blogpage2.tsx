import Image from "next/image";
// import trek2 from "../../../../public/images/borithsnip.png";
import circleborith from "../../../../public/images/borithlake.jpg";
import circlegulmitlake from "../../../../public/images/gulmitlake.jpg";
import Link from 'next/link'

export default function BlogPage2() {
  return (
    <div className="flex flex-row items-center  mt-20 mr-10 ml-10 lg:mt-28 lg:ml-28 lg:mr-[140px] overflow-hidden">
      <div className="flex flex-col items-center lg:flex-row bg-white lg:mr-60 shadow-2xl rounded-2xl">
        <Image
          src={circleborith}
          alt="blogmap"
          // Set initial height of the image
          className="rounded-lg h-[20rem] w-[13rem] "
        />
        <div className="lg:ml-6 lg:mr-6 lg:mt-4 pr-4 pl-4 pb-4">
          <h1 className="font-bold text-center">Hunza WildLife</h1>
          <p className="mt-4 text-center">
            In the heart of nature&apos;s tapestry, wildlife dances with vibrant
            hues, Creatures of the wild, guardians of ancient views. From
            majestic eagles soaring in the azure sky, To the delicate rustle
            From majestic eagles soaring in the azure sky,From majestic eagles
            soaring in the azure sky,{" "}
          </p>
          <div className="flex justify-center mt-6">
          <Link href={'/blogs/hunzawildlife'}>
            <button className="bg-slate-900 text-white rounded-lg pr-6 pl-6 pt-2 pb-2">READ</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Hide this div for small and medium screens */}
      <div className="hidden md:hidden lg:block">
        <div className=" justify-center items-center ">
          <div className="rounded-full overflow-hidden pb-2 w-40 h-40 flex">
            <Image
              src={circleborith} // Assuming your image paths are correct
              alt="wildlife"
              width={160} // Adjust dimensions to fit your layout
              height={160}
              className=""
            />
          </div>
          <h2 className="text-center"> Gulmit Gojal Hunza</h2>
        </div>
        <div className="">
          <div className="rounded-full overflow-hidden pt-2  w-40 h-40 flex">
            <Image
              src={circlegulmitlake} // Assuming your image paths are correct
              alt="wildlife"
              width={160} // Adjust dimensions to fit your layout
              height={160}
              className=""
            />
          </div>
          <h2 className="text-center"> Gulmit Gojal Hunza</h2>
        </div>
      </div>
    </div>
  );
}
