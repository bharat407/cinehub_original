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
    <div className="w-full mx-auto bg-[#e9e9e9] p-6">
      <h2 className="text-center text-2xl font-bold mb-4">
        <span className="text-red-600">TOP PROJECTS ON </span>
        <span className="text-black">Cine</span>
        <span className="text-red-600">Hub</span>
      </h2>
      <div className="border-b-2 border-red-600 w-40 mx-auto mb-6"></div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          <FiChevronLeft className="w-8 h-8 text-red-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          <FiChevronRight className="w-8 h-8 text-red-600" />
        </button>

        <div className="flex overflow-hidden">
          {projects
            .slice(currentIndex, currentIndex + 2)
            .map((project, index) => (
              <div key={index} className="w-full md:w-1/2 px-4">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-gray-600 font-semibold mb-2">
                    {project.type}
                  </h3>
                  <h4 className="text-red-600 font-bold text-lg mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 mb-4">
                    Posted on: {project.date}
                  </p>
                  <button className="bg-red-600 text-white px-4 py-2 rounded">
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

// Add this CSS in your stylesheet or in a style tag
const styles = `
@media (max-width: 768px) {
  .flex.overflow-hidden {
    flex-direction: column;
  }

  .w-full.md\\:w-1\\/2 {
    width: 100%;
    margin-bottom: 1rem;
  }

  h2.text-2xl {
    font-size: 1.5rem;
  }

  .w-8.h-8 {
    width: 1.5rem;
    height: 1.5rem;
  }
}
`;
