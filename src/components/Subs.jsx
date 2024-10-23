
import big from "../assets/bgi1.png";

export default function Subs() {
  return (
    <div className="font-poppins py-20">
      <div>
        <div className="flex  flex-col items-center">
          <h1 className=" font-semibold underline underline-offset-8 decoration-gree decoration-[4px] text-2xl">
            Subscribe to Newslatter
          </h1>
          <p className="text-base text-trt pt-3">
            To get weekly recipe updates
          </p>
        </div>
        <div className="flex items-center justify-evenly bg-gree w-full lg:h-[200px] sm:h-[120px] md:h-[150px] mt-20">
          <div>
            <img src={big} alt="" className="" />
          </div>
          <div>
            <div className="flex gap-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email address"
                className="bg-gree text-white border-white border-2 outline-none rounded-lg lg:pr-32 pl-2 py-2 "
              />
              <button className="text-white bg-re py-2 px-3 rounded-lg hover:opacity-90">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
