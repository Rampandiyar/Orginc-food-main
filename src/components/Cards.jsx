import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";


export default function Cards() {
  return (
    <div className="bg-bgfa font-poppins px-4 py-10">
      <div className="py-10">
        <div className="flex justify-center pb-10">
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl underline decoration-gree decoration-[4px] underline-offset-8 text-center">
            Our Best Categories
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full max-w-7xl">
            {/* Card 1 */}
            <div className="flex flex-col items-center bg-white scale-100 hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl drop-shadow-xl rounded-xl h-[390px] w-full max-w-[225px] mx-auto">
              <img
                src={c1}
                alt="Vegetables"
                className="rounded-t-lg w-full h-[200px] object-cover"
              />
              <h1 className="text-lg font-semibold mt-3">Vegetables</h1>
              <p className="text-center text-sm mt-3 text-trt">
                Purchasing from select <br /> family farmers who <br /> farm
                organically
              </p>
              <button className="text-txt border-2 border-gree hover:bg-gree hover:text-white px-4 py-2 mt-3 font-medium rounded-lg transition-colors">
                Order Now
              </button>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center bg-white scale-100 hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl drop-shadow-xl rounded-xl h-[390px] w-full max-w-[225px] mx-auto">
              <img
                src={c2}
                alt="Fruits"
                className="rounded-t-lg w-full h-[200px] object-cover"
              />
              <h1 className="text-lg font-semibold mt-3">Fruits</h1>
              <p className="text-center text-sm mt-3 text-trt">
                Purchasing from select <br /> family farmers who <br /> farm
                organically
              </p>
              <button className="text-txt border-2 border-gree hover:bg-gree hover:text-white px-4 py-2 mt-3 font-medium rounded-lg transition-colors">
                Order Now
              </button>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center bg-white scale-100 hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl drop-shadow-xl rounded-xl h-[390px] w-full max-w-[225px] mx-auto">
              <img
                src={c3}
                alt="Salads"
                className="rounded-t-lg w-full h-[200px] object-cover "
              />
              <h1 className="text-lg font-semibold mt-3">Salads</h1>
              <p className="text-center text-sm mt-3 text-trt">
                Purchasing from select <br /> family farmers who <br /> farm
                organically
              </p>
              <button className="text-txt border-2 border-gree hover:bg-gree hover:text-white px-4 py-2 mt-3 font-medium rounded-lg transition-colors">
                Order Now
              </button>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col justify-center items-center bg-gree text-white scale-100 hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl drop-shadow-xl rounded-xl h-[390px] w-full max-w-[225px] mx-auto">
              <h1 className="font-semibold text-xl">Order</h1>
              <h2 className="text-lg">Milk, Tools, Spice, etc.</h2>
              <button className="border-2 border-white px-4 py-2 rounded-lg mt-3 hover:bg-white hover:text-gree transition-colors">
                See Others
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
