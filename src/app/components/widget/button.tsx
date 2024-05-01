import Link from "next/link";


export default function Button() {
  return (
    <div className="bg-slate-100 h-40 sm:h-64 flex justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center bg-slate-300 p-8 rounded-lg shadow-md">
        <h1 className="text-xl  font-semibold mb-4 text-center">Let&apos;s team up and track them down together </h1>
        <div className="flex justify-center">
        <Link href={"/contactus"}>
              <button className="bg-slate-600 hover:bg-slate-800 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-blue-600">
              Contact Us
            </button></Link>
        </div>
        
      </div>
    </div>
  )
}
