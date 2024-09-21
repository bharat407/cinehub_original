import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Carousal from "./Carousal";
import Testomonial from "./Testomonial";
import Brand from "./Brand";
import Banner from "../../../assets/banner.avif";
import Navbar from "../../common/Navbar";

const Artist = () => {
  const [showContinue, setShowContinue] = useState(true);
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate("/form");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 2950) {
        setShowContinue(false);
      } else {
        setShowContinue(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="artist-container min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="relative hidden md:block">
            <div className="banner-text absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-2">
                Over
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-2">
                7,00,000
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light">
                Self-registered
              </h3>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light">
                Artists &amp; Counting...
              </h3>
            </div>
            <img
              className="w-full h-auto object-cover"
              src={Banner}
              alt="Enhance your Casting & Talent-Management operations with Talentrack, KNOW MORE"
            />
          </div>

          <Card />
          <Carousal />
          <Brand />
          <Testomonial />
        </div>

        {showContinue && (
          <div className="fixed bottom-0 left-0 w-full bg-red-600 shadow-lg p-4 flex flex-col sm:flex-row justify-between items-center z-50">
            <span className="text-white text-xl sm:text-2xl font-medium mb-4 sm:mb-0 text-center sm:text-left">
              Fast-track your Career in the media & entertainment industry
            </span>
            <button
              className="text-xl sm:text-2xl uppercase font-semibold bg-white text-red-600 py-2 px-6 rounded-md transition duration-300 ease-in-out hover:bg-red-100"
              onClick={handleNavigateToForm}
            >
              Register now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artist;
