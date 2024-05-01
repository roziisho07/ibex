import Image from "next/image";
import maps from "../../../../public/images/map.jpg";
import treks from "../../../../public/images/trekk.jpg";

export default function BlogHome() {
  return (
    <section className="mt-20 mb-10 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      <h1 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl mt-6 mb-4">LATEST OF OUR BLOGS</h1>
      <p className="text-center text-sm sm:text-base lg:text-lg mb-8">Learn more about the trip and the region where you are going to hunt</p>
      <div className="flex flex-col m-24 sm:flex-row justify-center sm:justify-between items-center">
        {/* First main section */}
        <main className="flex flex-col w-full sm:w-auto mb-8 sm:mb-0 lg:border-8 lg:border-black lg:p-4 lg:rounded-2xl">
          {/* Image and header/paragraph div */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <Image src={maps} alt="map"  className="h-80 w-[200px] " />
            </div>
            <div className="h-80 w-[280px] text-center sm:text-left">
              {/* Header */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Map Header</h2>
              {/* Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg lg:text-justify text-gray-600 max-w-xs sm:max-w-none">
                Map Description hunt with the breathtaking scenery of the Himalayas Map Description hunt with the breathtaking scenery Map Description hunt with the breathtaking scenery Map Description hunt with the breathtaking scenery Map Description hunt with the breathtaking scenery
              </p>
            </div>
          </div>
        </main>

        {/* Second main section */}
        <main className="flex flex-col w-full sm:w-auto lg:border-8 lg:border-black lg:p-4 lg:rounded-2xl">
          {/* Image and header/paragraph div */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <Image src={treks} alt="trek"  className="h-80 w-[200px]" />
            </div>
            <div className="h-80 w-[280px] text-center sm:text-left">
              {/* Header */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Trek Header</h2>
              {/* Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg lg:text-justify text-gray-600 max-w-xs sm:max-w-none">
                Trek Description hunt with the breathtaking scenery of the Himalayas Map Description hunt with the breathtaking scenery Map Description hunt with the breathtaking scenery Map Description hunt with the breathtaking scenery
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
