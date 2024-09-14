import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
  {
    type: "ACTOR",
    title: "Casting Call For Male/Female Actors For Fashion Brand Shoot",
    date: "03 Sep 2024",
    roles: 5,
  },
  {
    type: "ACTOR",
    title: "Looking For Female Actor For A Bollywood Movie Shoot",
    date: "25 Aug 2024",
    roles: 1,
  },
  // Add more projects here...
];

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="w-full mx-auto bg-[#e9e9e9] p-4 sm:p-6">
      <h2 className="text-center text-xl sm:text-2xl font-bold mb-4">
        <span className="text-red-600">TOP PROJECTS ON </span>
        <span className="text-black">Cine</span>
        <span className="text-red-600">Hub</span>
      </h2>
      <div className="border-b-2 border-red-600 w-32 sm:w-40 mx-auto mb-6"></div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          aria-label="Previous project"
        >
          <FiChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          aria-label="Next project"
        >
          <FiChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
        </button>

        <div className="flex flex-col sm:flex-row overflow-hidden">
          {projects
            .slice(currentIndex, currentIndex + 2)
            .map((project, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 px-2 sm:px-4 mb-4 sm:mb-0"
              >
                <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
                  <h3 className="text-gray-600 font-semibold text-sm sm:text-base mb-2">
                    {project.type}
                  </h3>
                  <h4 className="text-red-600 font-bold text-base sm:text-lg mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-sm mb-4">
                    Posted on: {project.date}
                  </p>
                  <button className="bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base">
                    View{" "}
                    {project.roles > 1 ? `all ${project.roles} roles` : "role"}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-red-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
