import Contactuss from "../components/widget/contactuss"
import Footer from "../components/widget/footer"

export default function contactus() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[35rem] w-full "
        style={{ backgroundImage: `url('/images/accomodationpage.jpg')` }}
      ></div>
      <Contactuss/>
      <Footer/>
    </div>
  );
}