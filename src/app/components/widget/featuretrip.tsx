import Image from "next/image";
import img1 from "../../../../public/images/ibeximage.jpg";
import img2 from "../../../../public/images/mark.jpg";
import img3 from "../../../../public/images/markhoree.jpg";

export default function Featuretrip() {
  return (
    <section>
      <main className="flex justify-center">
        <div  className="m-6">
        <div className="w-[20rem] h-[21.25rem] relative">
            <Image
                 src={img1}
                alt="huntimage"
                className="absolute inset-0 w-full h-full object-center shadow-2xl rounded-2xl"
             />
        </div>

          
        </div>
        <div className="m-6">
        <div className="w-[20rem] h-[21.25rem] relative">
            <Image
                 src={img2}
                alt="huntimage"
                className="absolute inset-0 w-full h-full object-center shadow-2xl rounded-2xl"
             />
        </div>
          
        </div>
        <div className="m-6">
        <div className="w-[20rem] h-[21.25rem] relative">
            <Image
                 src={img3}
                alt="huntimage"
                className="absolute inset-0 w-full h-full object-center shadow-2xl rounded-2xl"
             />
        </div>
            
        </div>        
    </main>
  </section>
    
  );
}
