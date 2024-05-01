"use client"
export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center mb-28 min-h-screen overflow-hidden">
      <div className="max-w-4xl w-full md:w-1/2 p-8">
        <h1 className="text-xl mt-20 md:mt-40 mb-10 md:mb-20 bg-slate-700 text-white rounded-lg text-center pb-4 pt-4 font-bold">GET IN TOUCH WITH OUR PROFESSIONAL TEAM</h1>
        <div className="space-y-8 md:space-y-12 font-semibold text-center">
          <p>Are you looking for more detailed information about the hunt</p>
          <p>For all hunting-related queries and collaborations, connect with us through our Contact Us page and let the adventure begin</p>
          <p>Address: Gulmit Gojal Hunza, Gilgit Baltistan, Pakistan</p>
          <p>Phone: +923475159863</p>
          <p>Email: ukiramat54@gmail.com</p>
          <p>Monday to Friday 9.00 am to 12.00 pm <br/>Saturday from 9.00 am to 12.00 pm</p>
        </div>
      </div>
      <div className="max-w-4xl w-full md:w-1/2 mt-10 md:mt-0 bg-slate-700 rounded-3xl shadow-2xl">
        <h1 className="bg-slate-500 text-center rounded-3xl text-white text-xl font-bold ">OR</h1>
        <form className="text-white p-6 md:p-20">
          <div className="mb-4 text-black ">
            <label htmlFor="name" className="block font-semibold text-white mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
          </div>
          <div className="mb-4 text-black ">
            <label htmlFor="email" className="block font-semibold text-white mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
          </div>
          <div className="mb-4 text-black">
            <label htmlFor="whatsapp" className="block font-semibold text-white mb-1">Whatsapp</label>
            <input type="text" id="whatsapp" name="whatsapp" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
          </div>
          <div className="mb-4 text-black">
            <label htmlFor="subject" className="block font-semibold text-white mb-1">Subject</label>
            <input type="text" id="subject" name="subject" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
          </div>
          <div className="mb-4 text-black">
            <label htmlFor="message" className="block font-semibold text-white mb-1">Message</label>
            <textarea id="message" name="message" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Message</button>
        </form>
      </div>
    </div>
  );
};
