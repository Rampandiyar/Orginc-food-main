import { FiArrowRight } from "react-icons/fi"; // Importing the redirect icon
import b1 from "../assets/b.png"
import b from "../assets/b1.png"
import b2 from "../assets/b2.png"
import b3 from "../assets/b3.png"

const images = [b1, b, b2, b3];
export default function Blog() {
  return (
    <div className="font-poppins bg-gray-50 py-10">
      <div className="text-center mb-10">
        <h1 className="font-bold underline underline-offset-8 decoration-gree decoration-4 text-3xl md:text-4xl text-gray-800">
          Our Blog
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer bg-white w-full shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden transform hover:-translate-y-2"
            >
              <div className="group relative overflow-hidden">
                <img
                  src={image}
                  alt={`Organic Nutrient ${index}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Dark overlay and redirect icon on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <FiArrowRight
                  size={40}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-green-500 text-xs font-semibold">Organic Nutrients</p>
                <h1 className="text-lg font-semibold my-2 leading-tight">
                  {index === 0
                    ? "The Benefits of Organic Fruits"
                    : index === 1
                    ? "Why You Should Choose Organic Vegetables"
                    : index === 2
                    ? "Whole Grains: A Key to Healthy Living"
                    : "Nuts and Seeds: Nutrient Powerhouses"}
                </h1>
                <p className="text-gray-500 text-sm mt-3 mb-5">
                  {index === 0
                    ? "Discover how organic fruits can boost your health and vitality..."
                    : index === 1
                    ? "Learn the advantages of consuming organic vegetables for better nutrition..."
                    : index === 2
                    ? "Explore the importance of whole grains in a balanced diet..."
                    : "Find out how nuts and seeds contribute to a nutritious lifestyle..."}
                </p>
                <div className="flex items-center">
                  <img
                    src={`https://picsum.photos/80?random=${index}`} // Using random images for authors
                    alt="Author"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h1 className="text-sm font-bold">
                      {index === 0
                        ? "Alex Green"
                        : index === 1
                        ? "Sara Wellness"
                        : index === 2
                        ? "Grain Guru"
                        : "Nutty Nutritionist"}
                    </h1>
                    <p className="text-xs text-gray-400">
                      {index === 0
                        ? "Jan 10, 2023"
                        : index === 1
                        ? "Feb 15, 2023"
                        : index === 2
                        ? "Mar 20, 2023"
                        : "Apr 25, 2023"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
