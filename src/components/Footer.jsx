
import Log from "../assets/Log.png";
import insta from "../assets/insta.png";
export default function Footer() {
  return (
    <div className="font-poppins">
      <div className="flex items-center justify-center ">
        <div className="flex justify-between items-center px-4 py-5 bg-re lg:w-[900px] rounded-t-lg">
          <div>
            <img src={Log} alt="" />
          </div>
          <div className="text-sm text-white">
            <h1>©2022 | Green Studio | All Rights Reserved</h1>
          </div>
          <div>
            <img src={insta} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
