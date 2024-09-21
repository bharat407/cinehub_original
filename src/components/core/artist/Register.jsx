import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Navbar from "../../common/Navbar";
import ParentalConsentForm from "./ParentalConsent";
import CategorySelectionScreen from "./Category";

const TalentPlatform = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [currentRecruiterIndex, setCurrentRecruiterIndex] = useState(0);
  const [showConsentForm, setShowConsentForm] = useState(false);
  const [showCategorySelection, setShowCategorySelection] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
    ageCategory: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAgeChange = (selected) => {
    setFormData((prevData) => ({
      ...prevData,
      ageCategory: selected,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title) errors.title = "Please select a title";
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.mobile) errors.mobile = "Mobile number is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.ageCategory)
      errors.ageCategory = "Please select an age category";
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      if (formData.ageCategory === "below18") {
        setShowConsentForm(true);
      } else {
        setShowCategorySelection(true);
      }
    }
  };

  const handleConsentFormClose = () => {
    setShowConsentForm(false);
    setShowCategorySelection(true);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="mt-8 bg-red-800 w-full min-h-screen">
          <div className="bg-red-900 p-4 md:p-8 min-h-screen flex items-center justify-center">
            <div className="flex flex-col justify-center md:flex-row md:space-x-4 mt-4 md:mt-10 max-w-6xl w-full">
              {/* Register as Artist */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-[70%] mb-4 md:mb-0">
                <h2 className="text-red-600 font-bold text-xl mb-4 text-center">
                  REGISTER AS ARTIST
                </h2>
                <div className="border-b-2 border-red-600 w-1/6 mx-auto mb-6"></div>
                <form onSubmit={handleSubmit}>
                  <div className="flex space-x-4 mb-4">
                    <label className="flex items-center text-sm md:text-base">
                      <input
                        type="radio"
                        name="title"
                        value="Mr."
                        checked={formData.title === "Mr."}
                        onChange={handleInputChange}
                        className="mr-2"
                      />{" "}
                      Mr.
                    </label>
                    <label className="flex items-center text-sm md:text-base">
                      <input
                        type="radio"
                        name="title"
                        value="Ms."
                        checked={formData.title === "Ms."}
                        onChange={handleInputChange}
                        className="mr-2"
                      />{" "}
                      Ms.
                    </label>
                  </div>
                  {formErrors.title && (
                    <p className="text-red-500 text-sm">{formErrors.title}</p>
                  )}

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full p-2 border rounded mb-4 text-sm md:text-base"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm">{formErrors.name}</p>
                  )}

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full p-2 border rounded mb-4 text-sm md:text-base"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile"
                    className="w-full p-2 border rounded mb-4 text-sm md:text-base"
                  />
                  {formErrors.mobile && (
                    <p className="text-red-500 text-sm">{formErrors.mobile}</p>
                  )}

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className="w-full p-2 border rounded mb-4 text-sm md:text-base"
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
                  {formErrors.password && (
                    <p className="text-red-500 text-sm">
                      {formErrors.password}
                    </p>
                  )}

                  <div className="mb-4">
                    <div className="flex justify-evenly items-center gap-x-6 text-sm md:text-base">
                      <label className="cursor-pointer flex items-center">
                        <input
                          type="radio"
                          name="ageCategory"
                          value="above18"
                          checked={formData.ageCategory === "above18"}
                          onChange={() => handleAgeChange("above18")}
                          className="mr-2"
                        />
                        I am 18 or above
                      </label>

                      <label className="cursor-pointer flex items-center">
                        <input
                          type="radio"
                          name="ageCategory"
                          value="below18"
                          checked={formData.ageCategory === "below18"}
                          onChange={() => handleAgeChange("below18")}
                          className="mr-2"
                        />
                        I am below 18
                      </label>
                    </div>
                  </div>

                  {formErrors.ageCategory && (
                    <p className="text-red-500 text-sm">
                      {formErrors.ageCategory}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="bg-red-600 text-white px-4 md:px-6 py-2 rounded-full mx-auto block text-sm md:text-base"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Conditionally render the Parental Consent Form modal */}
          {showConsentForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="p-4 md:p-8 w-full md:w-auto h-auto md:h-[10vh]">
                <ParentalConsentForm onClose={handleConsentFormClose} />
              </div>
            </div>
          )}

          {/* Conditionally render the Category Selection Screen modal */}
          {showCategorySelection && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="p-4 md:p-8 w-full md:w-auto">
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
