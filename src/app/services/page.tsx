import React from "react";
import Image from "next/image";
import img from "../../../public/images/gulmitlake.jpg";
import Services from "../components/widget/services"
import Footer from "../components/widget/footer"

export default function services() {
  return (
    <div>
      <Image src={img} alt="hunting" className="w-full h-70"></Image>
      <Services/>
      <Footer/>
    </div>
  );
}
