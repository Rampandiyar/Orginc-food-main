import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import nav from "../assets/nav.png";
import sear from "../assets/sear.png";
import ham from "../assets/Ham.svg";
import X from "../assets/X.svg";
export default function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <div className="lg:px-5 sm:px-3  sm:py-3 lg:py-5 font-poppins">
      <div className="flex justify-between items-center">
        <div>
          <img src={Logo} alt="" className="h-9" />
        </div>
        <div className=" text-txt flex items-center cursor-pointer">
          <div
            onClick={() => setOpen(!open)}
            className="absolute flex left-28 z-50  top-7 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <img src={X} alt="" /> : <img src={ham} alt="" />}
          </div>
          {/* linke items */}
          <ul
            className={`md:flex gap-5 md:items-center md:pb-0 mt-5 pb-12 absolute md:static z-10 bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-10" : "top-[-490px]"
            }`}
          >
            <li className="hover:font-semibold">Home</li>
            <li className="hover:font-semibold">Categories</li>
            <li className="hover:font-semibold">Contact</li>
            <li className="hover:font-semibold">Blog</li>
            <li className="hover:font-semibold">Service</li>
          </ul>
          {/* button */}
        </div>
        <div className="flex lg:pt-0 sm:pt-3 cursor-pointer">
          <img src={nav} alt="" className="px-2  h-7" />
          <img src={sear} alt="" className="px-2 h-7" />
          <button className="text-white bg-gree hover:opacity-90 text-sm font-medium font-monst p-2 rounded-xl px-3">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}
