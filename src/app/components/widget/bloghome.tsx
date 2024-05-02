import maps from "../../../../public/images/map.jpg";
import treks from "../../../../public/images/trek.jpg";
import pablo from "../../../../public/images/ibexhunt.png";

import CardsHome from "./CardsHome";

export default function BlogHome() {
  return (
    <section className="mt-20 mb-10 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden  bg-gradient-to-b from-gray-100 to-gray-600">
      <h1 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl mt-6 mb-4">
        LATEST OF OUR BLOGS
      </h1>
      <p className="text-center text-sm sm:text-base lg:text-lg mb-8">
        Learn more about the trip and the region where you are going to hunt
      </p>
      <div className="grid lg:grid-flow-col gap-y-2 sm:grid-flow-row justify-between sm:flex-row  sm:justify-between  drop-shadow-lg  p-8">
        <CardsHome
          title="Treking"
          image={treks}
          link=""
          description="Hunt with the breathtaking scenery of the
                Himalayas Map Description hunt with the breathtaking scenery Map
                Description hunt with the breathtaking scenery Map Description
                hunt with the breathtaking scenery"
        />
        <CardsHome
          title="Maps"
          image={maps}
          link=""
          description="Hunt with the breathtaking scenery of the
                Himalayas Map Description hunt with the breathtaking scenery Map
                Description hunt with the breathtaking scenery Map Description
                hunt with the breathtaking scenery"
        />
        <CardsHome
          title="Pablo from Mexico hunts 43'"
          image={pablo}
          link=""
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, accusantium dolores eos quis sit reprehenderit ex enim soluta vel repudiandae dolorem eveniet! Facilis, id eaque accusantium nostrum mollitia quia unde?"
        />
      </div>
    </section>
  );
}
