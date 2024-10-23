import React from "react";
import bg from "../assets/bg.png";
export default function Hero2() {
  return (
    <div>
      <div className="-mt-10">
        <div className="bg-gree shadow-xl h-full rounded-t-3xl">
          <img src={bg} alt="" />
          <div className="flex lg:gap-8 sm:gap-3 md:gap-4 sm:px-9 sm:-mt-10 justify-around items-center lg:px-60 text-white font-poppins lg:-mt-40 lg:pb-20 ">
            <h1 className="lg:text-4xl md:-mt-36 md:text-2xl lg:-mt-5 sm:-mt-10 py-10 font-semibold">
              1975+ <br />{" "}
              <span className="lg:text-sm sm:text-[10px] font-light">
                Total Products
              </span>
            </h1>
            <h1 className="lg:text-4xl md:text-2xl md:-mt-36 lg:-mt-5 sm:-mt-10 font-semibold">
              2880+ <br />{" "}
              <span className="lg:text-sm sm:text-[10px] font-light">
                {" "}
                Satisfied Clients
              </span>
            </h1>
            <h1 className="lg:text-4xl md:-mt-36 md:text-2xl lg:-mt-5 sm:-mt-10 font-semibold">
              3219+ <br />{" "}
              <span className="lg:text-sm sm:text-[10px] -mt-5 font-light">
                {" "}
                Project Completed
              </span>
            </h1>
            <h1 className="lg:text-4xl md:-mt-36 md:text-2xl lg:-mt-5 sm:-mt-10 font-semibold">
              100% <br />{" "}
              <span className="lg:text-sm  sm:text-[10px] font-light">
                {" "}
                Guarantee{" "}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
