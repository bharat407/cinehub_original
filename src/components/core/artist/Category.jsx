import React, { useState, useRef } from "react";
import {
  CalendarIcon,
  GridIcon,
  UserIcon,
  MapPinIcon,
  CheckIcon,
  ChevronDownIcon,
} from "lucide-react";

import {
  FaCamera,
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

const topLocations = [
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Kolkata",
  "Pune",
  "Chennai",
  "Lucknow",
  "Ahmedabad",
  "Jaipur",
];

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
  const [step, setStep] = useState(1);
  const dateInputRef = useRef(null);

  const handleCalendarClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };
  // Track current step
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({
    dob: "",
    languages: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const [currentLocation, setCurrentLocation] = useState("");
  const [workLocations, setWorkLocations] = useState([]);
  const [customLocation, setCustomLocation] = useState("");
  const [customWorkLocation, setCustomWorkLocation] = useState("");

  const handleWorkLocationChange = (location) => {
    setWorkLocations((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location]
    );
  };

  const handleNext = () => {
    // Add validation before proceeding to the next step
    if (step === 1 && !selectedCategory) {
      alert("Please select a category to proceed.");
      return;
    }
    setStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form Data Submitted:", { selectedCategory, ...formData });
    // Close the modal or perform other actions as needed
    setIsModalOpen(false);
    alert("Form submitted successfully!");
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg md:max-w-2xl lg:max-w-3xl max-h-[90vh] overflow-y-auto relative p-4 sm:p-6 md:p-8">
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-6 text-center">
          PERSONAL INFO & MEMBERSHIP
        </h1>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-8">
          {/* Step 1: Category */}
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 ${
                step >= 1 ? "bg-red-600" : "bg-gray-300"
              } rounded-full flex items-center justify-center text-white`}
            >
              <GridIcon size={20} />
            </div>
            <span
              className={`${
                step >= 1 ? "text-red-600" : "text-gray-500"
              } text-sm mt-1`}
            >
              Category
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 2: Personal */}
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 ${
                step >= 2 ? "bg-red-600" : "bg-gray-300"
              } rounded-full flex items-center justify-center text-white`}
            >
              <UserIcon size={20} />
            </div>
            <span
              className={`${
                step >= 2 ? "text-red-600" : "text-gray-500"
              } text-sm mt-1`}
            >
              Personal
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 3: Location */}
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 ${
                step >= 3 ? "bg-red-600" : "bg-gray-300"
              } rounded-full flex items-center justify-center text-white`}
            >
              <MapPinIcon size={20} />
            </div>
            <span
              className={`${
                step >= 3 ? "text-red-600" : "text-gray-500"
              } text-sm mt-1`}
            >
              Location
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 4: Finish */}
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 ${
                step >= 4 ? "bg-red-600" : "bg-gray-300"
              } rounded-full flex items-center justify-center text-white`}
            >
              <CheckIcon size={20} />
            </div>
            <span
              className={`${
                step >= 4 ? "text-red-600" : "text-gray-500"
              } text-sm mt-1`}
            >
              Finish
            </span>
          </div>
        </div>

        {/* Step Content */}
        <div className="space-y-6">
          {/* Step 1: Category Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 text-center">
                SELECT CATEGORY
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  const isSelected = selectedCategory === category.name;
                  return (
                    <div
                      key={category.name}
                      className={`flex flex-col items-center cursor-pointer ${
                        isSelected ? "text-red-600" : "text-gray-600"
                      }`}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 flex items-center justify-center mb-2 transition 
                        ${
                          isSelected
                            ? "border-red-600 bg-red-100"
                            : "border-gray-300 bg-gray-100"
                        }`}
                      >
                        <IconComponent size={24} />
                      </div>
                      <span className="text-sm sm:text-base text-center">
                        {category.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {step === 2 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 text-center">
                PERSONAL INFORMATION
              </h2>
              <div className="space-y-4">
                {/* Date of Birth */}
                <div>
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date of Birth
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="dob"
                      ref={dateInputRef}
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    <CalendarIcon
                      className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                      size={20}
                      onClick={handleCalendarClick}
                    />
                  </div>
                </div>

                {/* Languages You Speak */}
                <div>
                  <label
                    htmlFor="languages"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Languages You Speak
                  </label>
                  <div className="relative">
                    <select
                      id="languages"
                      value={formData.languages}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 appearance-none focus:outline-none focus:ring-1 focus:ring-red-500"
                    >
                      <option value="">Select Language</option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Hindi">Hindi</option>
                      {/* Add more language options as needed */}
                    </select>
                    <ChevronDownIcon
                      className="absolute right-3 top-2.5 text-gray-400"
                      size={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Location Information */}
          {step === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">
                  Where are you located?
                </h2>
                <p className="font-semibold mb-2">SELECT FROM TOP LOCATIONS</p>
                <div className="grid grid-cols-2 gap-4">
                  {topLocations.map((location) => (
                    <label
                      key={location}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="radio"
                        name="currentLocation"
                        value={location}
                        checked={currentLocation === location}
                        onChange={() => setCurrentLocation(location)}
                        className="form-radio text-red-600"
                      />
                      <span>{location}</span>
                    </label>
                  ))}
                </div>
                <p className="font-semibold mt-4 mb-2">OR FIND YOUR LOCATION</p>
                <input
                  type="text"
                  value={customLocation}
                  onChange={(e) => setCustomLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter your location"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">
                  Where are you available for work?
                </h2>
                <label className="flex items-center space-x-2 mb-4">
                  <input
                    type="checkbox"
                    checked={workLocations.includes("Anywhere in India")}
                    onChange={() =>
                      handleWorkLocationChange("Anywhere in India")
                    }
                    className="form-checkbox text-red-600"
                  />
                  <span>Anywhere in India</span>
                </label>
                <p className="font-semibold mb-2">
                  OR SELECT FROM TOP LOCATIONS
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Delhi NCR",
                    "Mumbai",
                    "Chennai",
                    "Kolkata",
                    "Hyderabad",
                    "Bangalore",
                  ].map((location) => (
                    <label
                      key={location}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={workLocations.includes(location)}
                        onChange={() => handleWorkLocationChange(location)}
                        className="form-checkbox text-red-600"
                      />
                      <span>{location}</span>
                    </label>
                  ))}
                </div>
                <p className="font-semibold mt-4 mb-2">
                  OR FIND AND ADD LOCATION(S)
                </p>
                <input
                  type="text"
                  value={customWorkLocation}
                  onChange={(e) => setCustomWorkLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter work locations"
                />
              </div>
            </div>
          )}

          {/* Step 4: Finish */}
          {step === 4 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 text-center">
                REVIEW & SUBMIT
              </h2>
              <div className="space-y-4">
                {/* Selected Category */}
                <div>
                  <h3 className="text-md font-medium text-gray-700">
                    Category:
                  </h3>
                  <p className="text-gray-600">{selectedCategory}</p>
                </div>

                {/* Date of Birth */}
                <div>
                  <h3 className="text-md font-medium text-gray-700">
                    Date of Birth:
                  </h3>
                  <p className="text-gray-600">{formData.dob}</p>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-md font-medium text-gray-700">
                    Languages You Speak:
                  </h3>
                  <p className="text-gray-600">{formData.languages}</p>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-md font-medium text-gray-700">
                    Address:
                  </h3>
                  <p className="text-gray-600">{formData.address}</p>
                </div>

                {/* City */}
                <div>
                  <h3 className="text-md font-medium text-gray-700">
                    Current Location:
                  </h3>
                  <p className="text-gray-600">
                    {currentLocation || customLocation}
                  </p>
                  <h3 className="text-md font-medium text-gray-700">
                    Work Locations:{" "}
                  </h3>
                  <p className="text-gray-600">
                    {workLocations.length
                      ? workLocations.join(", ")
                      : customWorkLocation}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 text-white text-sm sm:text-base rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
            >
              Back
            </button>
          )}
          {step < 4 && (
            <button
              onClick={handleNext}
              className="ml-auto px-4 py-2 sm:px-6 sm:py-3 bg-red-600 text-white text-sm sm:text-base rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
            >
              Next
            </button>
          )}
          {step === 4 && (
            <button
              onClick={handleSubmit}
              className="ml-auto px-4 py-2 sm:px-6 sm:py-3 bg-green-600 text-white text-sm sm:text-base rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySelectionScreen;
