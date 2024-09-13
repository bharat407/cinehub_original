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
    return null; // Return null if the modal is closed
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative p-8">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          <FaTimes size={24} />
        </button>
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
          SELECT CATEGORY
        </h1>

        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white">
              <FaChartPie size={20} />
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
              <FaUser size={20} />
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
              <FaImage size={20} />
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
              <FaPen size={20} />
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Category &nbsp; Personal &nbsp; Location &nbsp; Finish
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
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
                className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-2 ${
                  selectedCategory === category.name
                    ? "border-red-600"
                    : "border-gray-300"
                }`}
              >
                <category.icon size={24} />
              </div>
              <span className="text-xs text-center">{category.name}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
          >
            Back
          </button>
          <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectionScreen;
