import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCard = ({ title, description, date, roles }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
    <h3 className="text-gray-600 uppercase mb-2">{title}</h3>
    <h2 className="text-red-600 font-bold mb-2">{description}</h2>
    <p className="text-gray-500 mb-4">Posted on: {date}</p>
    <button className="bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base">
      View {roles > 1 ? `all ${roles} roles` : "role"}
    </button>
  </div>
);

const projects = [
  {
    type: "ACTOR",
    title: "Actors For Fashion Brand Shoot",
    description: "Casting Call For Male/Female Actors",
    date: "03 Sep 2024",
    roles: 5,
  },
  {
    type: "ACTOR",
    title: "Looking For Female Actor For A Bollywood Movie Shoot",
    description: "Looking For Female Actor",
    date: "25 Aug 2024",
    roles: 2,
  },
  {
    type: "ACTOR",
    title: "Looking For Male Actor For A Bollywood Movie Shoot",
    description: "Looking For Male Actor",
    date: "25 Aug 2024",
    roles: 3,
  },
  {
    type: "ACTOR",
    title: "Casting Shoot",
    description: "Casting Call For Fashion Shoot",
    date: "03 Sep 2024",
    roles: 5,
  },
  // Add more projects...
];

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % projects.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 2 : prevIndex - 2
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Get the projects to be displayed
  const getVisibleProjects = () => {
    const firstIndex = currentIndex;
    const secondIndex = (currentIndex + 1) % projects.length;
    return [projects[firstIndex], projects[secondIndex]];
  };

  return (
    <div className="w-full mx-auto bg-[#e9e9e9] p-4 sm:p-6 relative">
      <h2 className="text-center text-xl sm:text-2xl font-bold mb-4">
        <span className="text-red-600">TOP PROJECTS ON </span>
        <span className="text-black">Cine</span>
        <span className="text-red-600">Hub</span>
      </h2>
      <div className="border-b-2 border-red-600 w-32 sm:w-40 mx-auto mb-6"></div>

      <div className="relative overflow-hidden">
        {/* Previous Slide Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Previous project"
        >
          <ChevronLeft className="text-red-600" />
        </button>

        {/* Projects displayed side by side */}
        <div className="flex justify-center space-x-4">
          {getVisibleProjects().map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 min-w-[300px]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Next Slide Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Next project"
        >
          <ChevronRight className="text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
