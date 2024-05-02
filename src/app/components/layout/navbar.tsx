"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Function to close the navigation when a link is clicked
  const closeNav = () => {
    setNav(false);
  };

  return (
    <header className="flex items-center  top-0  w-full shadow-lg h-20  z-[100] bg-gray-900 px-20 ">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 py-10">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="logoimage"
            width={100}
            height={100}
            className=" invert "
          />
        </Link>
        <div>
          <ul className="hidden md:flex items-center text-white">
            <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300  ">
              <Link href="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300">
              <Link href="/package_avl" onClick={closeNav}>
                Packages
              </Link>
            </li>
            <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300  ">
              <Link href="/services" onClick={closeNav}>
                Services
              </Link>
            </li>
            <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300  ">
              <Link href="/blogs" onClick={closeNav}>
                Blogs
              </Link>
            </li>
            <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300  ">
              <Link href="/contactus" onClick={closeNav}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Nav Hamburger */}
          <div onClick={handleNav} className="md:hidden bg-white">
            <AiOutlineMenu size="20" />
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      <div
        className={`${
          nav ? "md:hidden fixed  left-0 top-0 w-full h-screen bg-black/70" : ""
        }`}
      >
        <div
          className={`${
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }`}
        >
          <div className="flex w-full items-center justify-between">
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="logoimage"
                width={100}
                height={100}
                className=" rounded-full bg-white ]"
              />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-5"></div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase text-sm">
              <Link href="/" onClick={closeNav}>
                <li className="py-4">Home</li>
              </Link>
              <Link href="/package_avl" onClick={closeNav}>
                <li className="py-4">Packages</li>
              </Link>
              <Link href="/services" onClick={closeNav}>
                <li className="py-4">Services</li>
              </Link>
              <Link href="/blogs" onClick={closeNav}>
                <li className="py-4">Blogs</li>
              </Link>
              <Link href="/contactus" onClick={closeNav}>
                <li className="py-4">Contact Us</li>
              </Link>
            </ul>
            <div className="py-40"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
