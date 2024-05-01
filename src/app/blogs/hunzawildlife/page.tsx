import React from "react";
import Link from "next/link"
import Footer from "../../components/widget/footer";
import Image from "next/image";
import accomodation from "../../../../public/images/accomodationpage.jpg"

export default function HunzaWildLife() {
  return (
    <div className="overflow-hidden">
     <div className="bg-gray-200 pt-10 pb-10 md:pb-20 ">
      <div className="bg-white mt-10 mx-5 md:mx-28 pb-10 md:pb-28 pt-5 md:pt-10 rounded-lg shadow-2xl">
        <div className="text-center">
          <h1 className="pb-4 md:pb-8 font-bold text-lg md:text-xl">
            Limited Availability: Reserve Your Wild Retreat Today!
          </h1>
        </div>
        <div className="flex justify-center">
          <Image
            src={accomodation}
            alt="accomodation image"
            height={700}
            width={800}
            className="center"
          />
        </div>
        <p className="font-serif text-justify leading-relaxed pt-5 md:pt-10 pr-5 md:pr-28 pl-5 md:pl-28 text-sm md:text-base">
          <strong>Awesome Places to Stay:</strong> <br />
          <br />
          Making Your Hunting Trip Super Cool! At [Your Hunting Company&apos;s Name],
          we know that having a great place to stay is super important when
          you&apos;re out hunting. That&apos;s why we&apos;ve made sure that where you sleep is
          as awesome as the adventures you have during the day! Our cabins and
          lodges are like cozy hideouts in the middle of nature. After a big day
          of exploring and hunting, you can come back to a comfy spot where you
          can relax and chill out. Picture yourself sitting by the fire, sharing
          stories with friends, and feeling all cozy and happy. But wait,
          there&apos;s more! We&apos;ve got some cool stuff to make your stay even better:
          <br />
          <br /> <strong>Yummy Food: </strong> <br />
          <br />
          Our chefs are experts at making delicious meals from fresh local
          ingredients. You won&apos;t go hungry here! Help When You Need It: Our team
          is always around to help you out. Whether you need a ride somewhere or
          want to go on a cool tour, we&apos;ve got you covered.
          <br /> <br /> <strong>Relaxing Time:</strong> <br />
          <br /> Treat yourself to some spa time or join in on fun outdoor
          activities like hiking or fishing. It&apos;s all about having a blast! So,
          when you come hunting with us at [Your Hunting Company&apos;s Name], you&apos;re
          not just getting an adventure in the wild – you&apos;re getting a cozy home
          away from home too. Book your trip with us today and get ready for an
          awesome hunting experience!
          <br />
          <br />
          Personalized Chef Services: Indulge in delectable meals prepared by
          our talented chefs, who specialize in crafting culinary delights using
          locally sourced ingredients. Whether you crave hearty comfort food or
          gourmet cuisine, our chefs will tantalize your taste buds with their
          culinary creations. Concierge Assistance: From arranging
          transportation to organizing guided tours and excursions, our
          dedicated concierge team is at your service around the clock. <br /><br />Let us
          handle the logistics so you can focus on enjoying your hunting
          adventure to the fullest. Spa and Wellness: Relax and rejuvenate your
          body and mind with our spa and wellness services. Treat yourself to a
          soothing massage or unwind in our sauna, surrounded by the tranquility
          of nature. Outdoor Activities: Explore the natural wonders that
          surround our accommodations with our curated outdoor activities.
          Whether you&apos;re interested in hiking, fishing, or wildlife photography,
          our knowledgeable guides will help you make the most of your time in
          the great outdoors. <br /><br />At [Your Hunting Company&apos;s Name], we believe that
          your accommodation should be more than just a place to rest your head;
          it should be an integral part of your hunting experience. With our
          luxurious lodging options and personalized services, we strive to
          create unforgettable memories that will last a lifetime. Experience
          the epitome of comfort and hospitality with [Your Hunting Company&apos;s
          Name]. Book your hunting adventure with us today and embark on a
          journey into the heart of nature&apos;s bounty.
        </p>
      </div>
      <div className="flex justify-center "><Link href={'/blogs'} ><button className="bg-slate-700 text-white p-3 rounded mt-8 hover:bg-gray-700 hover:text-gray-900">BACK TO BLOGS</button></Link></div>
    </div>
    
      <Footer />
    </div>
  );
}
