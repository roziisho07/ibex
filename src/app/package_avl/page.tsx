import Packages from "../components/widget/packages"
import Ghulkin_area from "../components/widget/ghulkin_area"
import Contactpackage from "../components/widget/contactpackage"
import Passu_area from "../components/widget/passu_area"
import Footer from "../components/widget/footer"

export default function package_avl() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[35rem] w-full"
        style={{ backgroundImage: `url('/images/gulmit.jpg')` }}
      ></div>
      <Packages/>
      <Ghulkin_area/>
      <Passu_area/>
      <Contactpackage/>
      <Footer/>
    </div>
  );
}
