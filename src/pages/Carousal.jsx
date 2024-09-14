import React, { useState, useEffect } from "react";
import Main from "../assets/main.avif"; // Test with jpg/png
import Second from "../assets/second.avif";
import Third from "../assets/third.avif";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const images = [Main, Second, Third];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden rounded-lg h-[100vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={image}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-[27vh] md:top-80 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-[25vh] md:top-1/2 left-4 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/50 hover:bg-white/70 focus:ring-4 focus:ring-white -translate-y-1/2"
      >
        <FiChevronLeft className="w-6 h-6 text-black" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-[25vh] md:top-1/2 right-4 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/50 hover:bg-white/70 focus:ring-4 focus:ring-white -translate-y-1/2"
      >
        <FiChevronRight className="w-6 h-6 text-black" />
      </button>

      {/* Dots Indicators */}
      <div className="absolute top-[35vh] md:top-[90vh] z-30 flex space-x-3 bottom-[10vh] left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-red-600" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
