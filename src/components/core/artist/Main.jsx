import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Carousal from "./Carousal";
import Testomonial from "./Testomonial";
import Brand from "./Brand";
import Banner from "../../../assets/banner.avif";
import logo from "../../../assets/CineHub.png";
import { NavLink } from "react-router-dom";

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
    <div className="artist-container">
      <header className="flex flex-col sm:flex-row justify-around items-center p-4 bg-gray-100">
        <NavLink to="/">
          <div className="text-2xl font-medium text-[#d10001]">CineHub</div>
        </NavLink>
      </header>

      <div>
        <div className="relative">
          <div className="relative cursor-pointer flex justify-around bg-gray-100">
            <div className="banner-text absolute top-[15vh] sm:top-[20vh] md:top-[25vh] lg:top-[30vh] transform -translate-x-1/4 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal z-10 text-left flex flex-col items-start">
              <h3>Over</h3>
              <h2 className="font-medium">7,00,000</h2>
              <h3>Self-registered</h3>
              <h3>Artists &amp; Counting...</h3>
            </div>

            <img
              className="w-full h-auto"
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
          <div className="fixed bottom-0 left-0 w-full bg-[#d10001] shadow-lg p-2 flex flex-col sm:flex-row justify-evenly items-center z-50">
            <span className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-0 sm:mr-4 text-center sm:text-left">
              Fast-track your Career in the media & entertainment industry
            </span>
            <span
              className="text-lg sm:text-xl md:text-2xl uppercase font-semibold bg-white border border-solid py-2 px-4 rounded-md text-[#d10001] cursor-pointer"
              onClick={handleNavigateToForm}
            >
              Register now
            </span>
          </div>
        )}

        <div className="relative">
          <img
            src={logo}
            className="h-[50vh] sm:h-[60vh] md:h-[70vh] w-full object-cover"
            alt="Talentrack banner"
          />
          <div className="absolute inset-0 flex">
            <div className="w-full sm:w-2/3 p-4 sm:p-8 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
                Download the
                <br />
                <span className="text-red-600">Talentrack</span> App
              </h1>
              <p className="text-base sm:text-lg mb-6 text-black">
                Life is mobile so are you!
                <br />
                We are 2x faster on the app. Explore hundreds
                <br className="hidden sm:block" />
                of opportunities & discounts
              </p>
              <div className="flex space-x-4">
                <img
                  src="/api/placeholder/120/40"
                  alt="Google Play"
                  className="h-8 sm:h-10"
                />
                <img
                  src="/api/placeholder/120/40"
                  alt="App Store"
                  className="h-8 sm:h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
