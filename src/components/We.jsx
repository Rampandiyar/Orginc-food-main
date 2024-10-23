import React from "react";
import list from "../assets/list.png";
import gps from "../assets/gps.png";
import as from "../assets/as.png";
import fast from "../assets/fast.png";
import food from "../assets/food.png";
import fresh from "../assets/fresh.png";
import shop from "../assets/shop.png";
export default function We() {
  return (
    <div className="font-poppins px-2 py-20">
      <div className="lg:flex justify-evenly">
        <div>
          <h1 className="font-semibold text-2xl">
            We are here{" "}
            <span className="text-gree font-semibold text-2xl"> for You </span>
          </h1>
          <p className="mt-8 sm:text-[11px] md:text-base lg:text-base">
            Groce could be your daily service. We set the high standard inspired{" "}
            <br /> by forest system to produce healthy crops with the authentic
            taste of <br /> vegetables
          </p>
          <ul className="pt-8 sm:text-[10px] md:text-base lg:text-base">
            <li className="flex items-center py-2">
              <img src={list} alt="" className="px-4 h-4" />
              Best service and fast response
            </li>
            <li className="flex items-center py-2">
              <img src={list} alt="" className="px-4 h-4" />
              Userfriendly app
            </li>
            <li className="flex items-center py-2">
              <img src={list} alt="" className="px-4 h-4" />
              Profesional staff
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <button>
              <img src={as} alt="" />
            </button>
            <button>
              <img src={gps} alt="" className="mt-2" />
            </button>
          </div>
        </div>
        <div className="lg:flex md:flex sm:mt-10 lg:flex-row sm:grid sm:grid-cols-1 items-center md:mt-10 gap-6">
          <div className="flex flex-col sm:items-center gap-5">
            <div className="shadow-xl drop-shadow-2xl rounded-xl flex px-7 py-6 h-32 w-[300px] items-center">
              <img src={fast} alt="" />
              <div className="flex flex-col px-2">
                <h1 className="font-semibold">Fast Delivery</h1>
                <p className="text-trt text-sm">
                  Deliver within 30 <br /> minutes
                </p>
              </div>
            </div>
            <div className="shadow-2xl rounded-xl flex px-7 py-6 h-32 w-[300px] items-center">
              {" "}
              <img src={food} alt="" />
              <div className="flex flex-col px-2">
                <h1 className="font-semibold">Dine in</h1>
                <p className="text-trt text-sm">
                  Enjoy your food fresh and <br /> healthy
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:items-center gap-5">
            <div className="shadow-2xl rounded-xl flex px-7 py-6 h-32 w-[300px] items-center">
              <img src={fresh} alt="" />
              <div className="flex flex-col px-2">
                <h1 className="font-semibold">Fresh Foods</h1>
                <p className="text-trt text-sm">
                  Enjoy your food fresh <br /> and healthy
                </p>
              </div>
            </div>
            <div className="shadow-2xl rounded-xl flex px-7 py-6 h-32 w-[300px] items-center">
              <img src={shop} alt="" />
              <div className="flex flex-col px-2">
                <h1 className="font-semibold">Pick up</h1>
                <p className="text-trt text-sm">
                  Delivery at your <br /> doorstep
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
