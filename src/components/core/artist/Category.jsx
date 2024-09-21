import React, { useState, useRef } from "react";
import { GridIcon, UserIcon, MapPinIcon, CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
    if (step === 2) {
      const { dob, languages, address, city, state, zipcode } = formData;
      if (!dob || !languages || !address || !city || !state || !zipcode) {
        alert("Please fill in all personal information fields.");
        return;
      }
    }
    if (step === 3 && !currentLocation && !customLocation) {
      alert("Please select or enter your current location.");
      return;
    }
    if (step === 3 && workLocations.length === 0 && !customWorkLocation) {
      alert("Please select or enter at least one work location.");
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
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Additional validation on submit

    navigate("/");

    const { dob, languages, address, city, state, zipcode } = formData;
    if (
      !selectedCategory ||
      !dob ||
      !languages ||
      !address ||
      !city ||
      !state ||
      !zipcode
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    if (!currentLocation && !customLocation) {
      alert("Please select or enter your current location.");
      return;
    }
    if (workLocations.length === 0 && !customWorkLocation) {
      alert("Please select or enter at least one work location.");
      return;
    }

    console.log("Form Data Submitted:", { selectedCategory, ...formData });
    setIsModalOpen(false);
    alert("Form submitted successfully!");
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg md:max-w-2xl lg:max-w-3xl max-h-[90vh] overflow-y-auto relative p-4 sm:p-6 md:p-8">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-6 text-center">
          PERSONAL INFO & MEMBERSHIP
        </h1>

        <div className="flex justify-between items-center mb-8">
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

        <div className="space-y-6">
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
                      <IconComponent
                        className={`mb-2 text-4xl ${
                          isSelected ? "text-red-600" : "text-gray-400"
                        }`}
                      />
                      <span>{category.name}</span>
                      {isSelected && (
                        <div className="mt-1 text-sm text-red-600">
                          Selected
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 text-center">
                PERSONAL INFO
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="dob" className="block text-gray-600 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    ref={dateInputRef}
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md p-2 w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="languages"
                    className="block text-gray-600 mb-1"
                  >
                    Languages
                  </label>
                  <input
                    type="text"
                    id="languages"
                    value={formData.languages}
                    onChange={handleInputChange}
                    placeholder="Enter languages you speak"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-gray-600 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-gray-600 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md p-2 w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-gray-600 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md p-2 w-full"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="zipcode" className="block text-gray-600 mb-1">
                    Zipcode
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md p-2 w-full"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 text-center">
                LOCATION
              </h2>
              <div>
                <label className="block text-gray-600 mb-2">
                  Current Location
                </label>
                <input
                  type="text"
                  value={currentLocation}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                  placeholder="Enter current location"
                  className="border border-gray-300 rounded-md p-2 w-full mb-4"
                />
                <div>
                  <label className="block text-gray-600 mb-2">
                    Top Locations
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {topLocations.map((location) => (
                      <div key={location} className="flex items-center">
                        <input
                          type="checkbox"
                          id={location}
                          checked={workLocations.includes(location)}
                          onChange={() => handleWorkLocationChange(location)}
                          className="mr-2"
                        />
                        <label htmlFor={location} className="text-gray-600">
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <input
                  type="text"
                  value={customWorkLocation}
                  onChange={(e) => setCustomWorkLocation(e.target.value)}
                  placeholder="Add custom work location"
                  className="border border-gray-300 rounded-md p-2 w-full mt-4"
                />
              </div>
            </div>
          )}

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
                  <h3 className="text-md font-medium text-gray-800">
                    Address:
                  </h3>
                  <p className=" text-gray-600">{formData.address}</p>
                  <p className="text-md font-medium text-gray-800">City: </p>
                  <p className="text-gray-600"> {formData.city}</p>
                  <p className="text-md font-medium text-gray-800">State: </p>
                  <p className="text-gray-600"> {formData.state}</p>
                  <p className="text-md font-medium text-gray-800">PinCode: </p>
                  <p className="text-gray-600"> {formData.zipcode}</p>
                </div>

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

        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400 disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={step === 4 ? handleSubmit : handleNext}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            {step === 4 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectionScreen;
