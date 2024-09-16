import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Carousal from "./Carousal";
import Testomonial from "./Testomonial";
import Brand from "./Brand";
import Banner from "../../../assets/banner.avif";
import logo from "../../../assets/CineHub.png";
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



        {/* <div className="relative mt-12 mb-24">
          <img
            src={logo}
            className="h-[60vh] sm:h-[70vh] md:h-[80vh] w-full object-cover rounded-lg shadow-xl"
            alt="Talentrack banner"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center rounded-lg">
            <div className="w-full sm:w-2/3 p-8 sm:p-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                Download the
                <br />
                <span className="text-red-500">Talentrack</span> App
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white">
                Life is mobile so are you!
                <br />
                We are 2x faster on the app. Explore hundreds
                <br className="hidden sm:block" />
                of opportunities & discounts
              </p>
              <div className="flex space-x-6">
                <img
                  src="/api/placeholder/160/60"
                  alt="Google Play"
                  className="h-12 sm:h-14 rounded-md shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                />
                <img
                  src="/api/placeholder/160/60"
                  alt="App Store"
                  className="h-12 sm:h-14 rounded-md shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Artist;
