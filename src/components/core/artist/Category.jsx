import React, { useState } from "react";
import {
  FaCamera,
  FaMusic,
  FaMicrophone,
  FaGuitar,
  FaImage,
  FaPen,
  FaUsers,
  FaPencilAlt,
  FaTv,
  FaVolumeUp,
  FaTshirt,
  FaFilm,
  FaChartPie,
  FaSmile,
  FaUser,
  FaTimes,
} from "react-icons/fa";

const categories = [
  { name: "ACTOR", icon: FaUsers },
  { name: "MODEL", icon: FaCamera },
  { name: "SINGER", icon: FaMicrophone },
  { name: "MUSICIAN", icon: FaGuitar },
  { name: "PHOTOGRAPHER", icon: FaImage },
  { name: "WRITER", icon: FaPen },
  { name: "DANCER", icon: FaUsers },
  { name: "GRAPHICS & MOTION ARTIST", icon: FaPencilAlt },
  { name: "ANCHOR", icon: FaTv },
  { name: "VOICE-OVER ARTIST", icon: FaVolumeUp },
  { name: "STYLIST", icon: FaTshirt },
  { name: "FILMMAKER", icon: FaFilm },
  { name: "ADVERTISING PROFESSIONAL", icon: FaChartPie },
  { name: "STAND-UP COMEDIAN", icon: FaSmile },
  { name: "INFLUENCER", icon: FaUser },
];

const CategorySelectionScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl max-h-[90vh] overflow-y-auto relative p-4 sm:p-6 md:p-8">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          <FaTimes size={20}  />
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4 sm:mb-6 text-center">
          SELECT CATEGORY
        </h1>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 sm:space-x-4 mb-4 sm:mb-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded-full flex items-center justify-center text-white">
              <FaChartPie size={16} />
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
              <FaUser size={16} />
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
              <FaImage size={16} />
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
              <FaPen size={16} />
            </div>
          </div>
          <div className="text-xs sm:text-sm text-gray-600">
            Category &nbsp; Personal &nbsp; Location &nbsp; Finish
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 mb-6 sm:mb-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`flex flex-col items-center cursor-pointer ${
                selectedCategory === category.name
                  ? "text-red-600"
                  : "text-gray-600"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center mb-1 sm:mb-2 ${
                  selectedCategory === category.name
                    ? "border-red-600"
                    : "border-gray-300"
                }`}
              >
                <category.icon size={18}  />
              </div>
              <span className="text-[10px] sm:text-xs text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6 sm:mt-8">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 text-white text-sm sm:text-base rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
          >
            Back
          </button>
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-red-600 text-white text-sm sm:text-base rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectionScreen;
