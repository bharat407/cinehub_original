import React, { useState, useEffect } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Navbar from "../../common/Navbar";
import ParentalConsentForm from "./ParentalConsent"; // Ensure the correct path
import CategorySelectionScreen from "./Category"; // Ensure the correct path

const TalentPlatform = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentRecruiterIndex, setCurrentRecruiterIndex] = useState(0);
  const [ageCategory, setAgeCategory] = useState("");
  const [showConsentForm, setShowConsentForm] = useState(false);
  const [showCategorySelection, setShowCategorySelection] = useState(false);

  const recruiters = [
    {
      id: 1,
      logo: "https://s.talentrack.in/images/application/modules/desktop/partners/4_lions.png",
    },
    {
      id: 2,
      logo: "https://s.talentrack.in/images/application/modules/desktop/partners/tess_joseph.png",
    },
    {
      id: 3,
      logo: "https://s.talentrack.in/images/application/modules/desktop/partners/humara_movies.png",
    },
    { id: 4, logo: "/api/placeholder/100/100" },
    { id: 5, logo: "/api/placeholder/100/100" },
    { id: 6, logo: "/api/placeholder/100/100" },
    { id: 7, logo: "/api/placeholder/100/100" },
    { id: 8, logo: "/api/placeholder/100/100" },
  ];

  const recruitersPerSlide = 3;
  const totalSlides = Math.ceil(recruiters.length / recruitersPerSlide);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 30000);
    return () => clearInterval(intervalId);
  }, [currentRecruiterIndex]);

  const nextSlide = () => {
    setCurrentRecruiterIndex(
      (prevIndex) => (prevIndex + recruitersPerSlide) % recruiters.length
    );
  };

  const prevSlide = () => {
    setCurrentRecruiterIndex(
      (prevIndex) =>
        (prevIndex - recruitersPerSlide + recruiters.length) % recruiters.length
    );
  };

  const handleAgeChange = (selected) => {
    setAgeCategory(selected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ageCategory === "below18") {
      setShowConsentForm(true);
    } else {
      setShowCategorySelection(true);
    }
  };

  const handleConsentFormClose = () => {
    setShowConsentForm(false);
    setShowCategorySelection(true); // Navigate to CategorySelectionScreen after closing consent form
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="mt-8 bg-red-800 w-full min-h-screen">
          <div className="bg-red-900 p-8 min-h-screen flex items-center justify-center">
            <div className="flex space-x-4 mt-10 max-w-6xl h-[88vh] w-full">
              {/* Testimonials */}
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-red-600 font-bold text-xl mb-4 text-center">
                  TESTIMONIALS
                </h2>
                <div className="border-b-2 border-red-600 w-1/2 mx-auto mb-6"></div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://www.talentrack.in/uploads/testimonial_images/f3f287a4-5cec-0426-1c60-881705ba504a.png"
                    alt="Testimonial"
                    className="rounded-full w-24 h-24 mb-4"
                  />
                  <blockquote className="text-center mb-4">
                    <p className="mb-2">
                      "I finally got my first project with Nimrat Motion
                      Pictures for a music video on Talentrack. I'm so thankful
                      & blessed. Thank your Talentrack!"
                    </p>
                  </blockquote>
                  <p className="font-bold">SIMRAN</p>
                  <p className="text-sm text-gray-600">
                    Actor/Model/Influencer
                  </p>
                </div>
                <button className="bg-red-600 text-white px-6 py-2 rounded-full mt-4 mx-auto block">
                  View All
                </button>
              </div>

              {/* Register as Artist */}
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-red-600 font-bold text-xl mb-4 text-center">
                  REGISTER AS ARTIST
                </h2>
                <div className="border-b-2 border-red-600 w-1/2 mx-auto mb-6"></div>
                <form onSubmit={handleSubmit}>
                  <div className="flex space-x-4 mb-4">
                    <label className="flex items-center">
                      <input type="radio" name="title" className="mr-2" /> Mr.
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="title" className="mr-2" /> Ms.
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border rounded mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded mb-4"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile"
                    className="w-full p-2 border rounded mb-4"
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full p-2 border rounded mb-4"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-2 text-gray-500"
                    >
                      {showPassword ? (
                        <HiEyeOff size={20} />
                      ) : (
                        <HiEye size={20} />
                      )}
                    </button>
                  </div>
                  <div className="mb-4">
                    <label className=" cursor-pointer items-center mb-2">
                      <input
                        type="radio"
                        checked={ageCategory === "above18"}
                        onChange={() => handleAgeChange("above18")}
                        className="mr-2"
                      />
                      I am 18 or above and I agree to the
                      <br />
                      <span className="text-red-600">
                        {" "}
                        Terms & Conditions and Privacy Policy
                      </span>
                      .
                    </label>
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        checked={ageCategory === "below18"}
                        onChange={() => handleAgeChange("below18")}
                        className="mr-2"
                      />
                      I am below 18
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded-full mx-auto block"
                  >
                    Next
                  </button>
                </form>
              </div>

              {/* Top Recruiters */}
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-red-600 font-bold text-xl mb-4 text-center">
                  TOP RECRUITERS
                </h2>
                <div className="border-b-2 border-red-600 w-1/2 mx-auto mb-6"></div>
                <div className="relative">
                  <div className="grid grid-rows-3 gap-4">
                    {recruiters
                      .slice(
                        currentRecruiterIndex,
                        currentRecruiterIndex + recruitersPerSlide
                      )
                      .map((recruiter) => (
                        <div key={recruiter.id} className="flex justify-center">
                          <img
                            src={recruiter.logo}
                            alt={`Recruiter ${recruiter.id}`}
                            className="w-[30vh] h-24"
                          />
                        </div>
                      ))}
                  </div>
                  <div className="flex justify-center mt-4">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
                          index ===
                          Math.floor(currentRecruiterIndex / recruitersPerSlide)
                            ? "bg-red-600"
                            : "bg-gray-300"
                        }`}
                        onClick={() =>
                          setCurrentRecruiterIndex(index * recruitersPerSlide)
                        }
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conditionally render the Parental Consent Form modal */}
          {showConsentForm && (
            <div className="fixed inset-0 h-[20vh]  flex items-center justify-center z-50">
              <div className=" p-8 w-full h-[10vh]">
                <ParentalConsentForm onClose={handleConsentFormClose} />
              </div>
            </div>
          )}

          {/* Conditionally render the Category Selection Screen modal */}
          {showCategorySelection && (
            <div className="fixed inset-0 mt-[-10vh] h-[100vh] flex items-center justify-center z-50">
              <div className=" p-8">
                <CategorySelectionScreen />
              
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalentPlatform;
