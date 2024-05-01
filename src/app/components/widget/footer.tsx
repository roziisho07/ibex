import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-6 sm:p-12 bg-gray-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* First Row */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Packages</li>
              <li>Services</li>
              <li>Pages</li>
              <li>About</li>
            </ul>
          </div>
          {/* Second Row */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* Third Row */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p>Contact Us</p>
            <p>Monday to Friday 9:00 am to 8:00 pm</p>
            <p>Saturday from 9:00 am to 12:00 pm</p>
            <p>Gulmit Gojal Hunza Gilgit-Baltistan</p>
            <p>Phone: +923475159863</p>
            <p>Email: ukiramat5@gmail.com</p>
          </div>
          {/* Fourth Row */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">More</h4>
            <p>Passionate about hunting</p>
            <p>Sign up for HunzaVista newsletter and get to know more about their hunting adventures</p>
            <Link href={"/contactus"}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Contact Us
            </button></Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
