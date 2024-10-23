import React from "react";
import bottle from "../assets/bottle.png";
import rect from "../assets/rect.png";
export default function Hero3() {
  return (
    <div className="bg-white -mt-10 rounded-3xl py-10">
      <div className="flex justify-evenly lg:flex-row md:flex-row sm:flex-col">
        <div className="lg:mt-40 sm:mt-20 px-10">
          <img src={bottle} alt="" />
        </div>
        <div className="px-2">
          <div className="font-poppins lg:mt-32 sm:mt-14">
            <h1 className="text-gree lg:text-2xl font-bold">HIGH QUALITY</h1>
            <h1
              className="lg:text-2xl font-semibold mt-2
            "
            >
              ORGANIC FOOD STORE
            </h1>
            <p className="mt-5 sm:text-[11px] md:text-[8px] lg:text-base">
              Founded in 2009, GROCE is a family business that started with a
              3,500 <br /> square meter farm located in Karyawangi Village, West
              Bandung. It soon <br /> expanded to an organic movement that
              encourages people to not only <br /> consume organic vegetables,
              but also plant it too, wherever they may be. <br /> From them you
              can purchase both the farm produce (vegetables, <br />{" "}
              microgreens, etc) and also tools and supplies to start your own
              garden.
            </p>
            <div className="mt-4 flex">
              <img src={rect} alt="" />
              <p className="px-2 lg:text-[13px] md:text-[8px] sm:text-[9px] text-trt">
                Finding organic food in Jakarta can be tricky but it’s not
                impossible! Here are some <br /> great organic food sellers who
                delivers right to your door!
              </p>
            </div>
            <div className="py-5">
              <h1 className=" font-calli">John Doe</h1>
              <p className="text-[12px] text-trt font-medium">Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
