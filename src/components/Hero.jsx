
import hero from "../assets/hero.png";
import green1 from "../assets/green1.png";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function Hero() {
  return (
    <div className="">
      <div className="flex justify-around lg:px-5 md:px-10 sm:px-3 sm:py-3 lg:py-10">
        <div className="font-poppins text-txt lg:mt-20 md:mt-20 sm:mt-10">
          <div className="lg:text-xl sm:-mt-10">100% Healthy & Tasty</div>
          <div className="flex lg:gap-6 sm:gap-1 ">
            <h1 className="text-gree font-bold md:text-5xl lg:text-7xl">
              ORGANIC
            </h1>
            <h1 className=" text-trt font-bold md:text-5xl lg:text-7xl">
              FOOD
            </h1>
          </div>
          <div className="sm:text-[10px] lg:text-lg md:text-base">
            A place where help you to buy fresh grocery.Tasty and <br /> 100%
            healthy{" "}
          </div>
          <div className="lg:px-2 lg:py-2 md:py-2 md:px-2 flex gap-4">
            <button className="bg-re text-white lg:p-2 md:text-[10px] md:p-2 sm:text-[9px] sm:p-1 lg:text-sm rounded-lg hover:opacity-90 hover:border-none">
              How to Order
            </button>
            <button className="border-2 border-b-txt sm:text-[9px] md:text-[10px] md:p-1 lg:text-sm sm:p-2 lg:p-1 lg:px-4 font-medium rounded-lg hover:bg-txt hover:text-white hover:border-none">
              Get Sale
            </button>
          </div>
          <div className="z-10 sm:hidden h-20 w-40">
            {" "}
            <TECarousel
              showControls
              showIndicators
              crossfade
              ride="carousel"
              prevBtnIcon={
                <>
                  <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                  </span>
                </>
              }
              nextBtnIcon={
                <>
                  <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Next
                  </span>
                </>
              }
              theme={{
                indicator:
                  "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
              }}
            >
              <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <TECarouselItem
                  itemID={1}
                  className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                    <h5 className="text-xl">First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </TECarouselItem>
                <TECarouselItem
                  itemID={2}
                  className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                    <h5 className="text-xl">Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </TECarouselItem>
                <TECarouselItem
                  itemID={3}
                  className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                    <h5 className="text-xl">Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </TECarouselItem>
              </div>
            </TECarousel>{" "}
          </div>
        </div>
        <div className="z-50">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className=" lg:-mt-60 sm:-mt-16 px-0 py-0">
        <img src={green1} alt="" className="w-screen " />
      </div>
    </div>
  );
}
