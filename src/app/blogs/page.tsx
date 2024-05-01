import Blogss from "../components/widget/blogpage"
import Blogs2 from "../components/widget/blogpage2"
import Blogs3 from "../components/widget/blogpage3"
import Footer from "../components/widget/footer"
import Buttononly from '../components/widget/buttononly'

export default function Blogs() {
  return (
    <div className="bg-gray-100 overflow-hidden">
      <div
        className="bg-cover bg-center h-[35rem] w-full "
        style={{ backgroundImage: `url('/images/borithlake.jpg')` }}
      ></div>
      <h1 className="text-center pt-20 text-2xl font-serif font-bold">CHOOSE US AFTER DOING YOUR RESEARCH</h1>
      <Blogss/>
      <Blogs2/>
      <Blogs3/>
      <Buttononly/>
      <Footer/>
      
    </div>
  );
}
