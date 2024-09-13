/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import castingData from "../../../data/castingData";
import Video from "./Videocard";
import Testimonial from "./Testimonial";
import { NavLink } from "react-router-dom";
import Recruiter from "../../models/Recruiter";

const benefitsData = [
  {
    icon: "https://www.talentrack.in/images/application/modules/default/rec_reg/team.svg",
    text: "Access to 7 lakh+ artists pan-India",
  },
  {
    icon: "https://www.talentrack.in/images/application/modules/default/rec_reg/smartphone.svg",
    text: "Directly connect to artists over call/mail",
  },
  {
    icon: "https://www.talentrack.in/images/application/modules/default/rec_reg/clip_path_group.svg",
    text: "No paying further commission",
  },
  {
    icon: "https://www.talentrack.in/images/application/modules/default/rec_reg/online-privacy.svg",
    text: "Organise and secure your talent data",
  },
];

const categories = [
  {
    name: "Actor",
    img: "https://s.talentrack.in/images/application/modules/default/rec_reg/actor.png",
  },
  {
    name: "Actor",
    img: "https://s.talentrack.in/images/application/modules/default/rec_reg/actor.png",
  },
  {
    name: "Actor",
    img: "https://s.talentrack.in/images/application/modules/default/rec_reg/actor.png",
  },
  {
    name: "Actor",
    img: "https://s.talentrack.in/images/application/modules/default/rec_reg/actor.png",
  },
];

const Home = () => {
  const [showRecruiterModal, setShowRecruiterModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const formRef = useRef(null);
  const [showContinue, setShowContinue] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
    phone: "",
    iAgree: false,
  });

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 2350) {
        setShowContinue(false);
      } else {
        setShowContinue(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRecruiterModal(true);
    }, 5000); // Modal opens after 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer when the component is unmounted
  }, []);

  const closeModal = () => {
    setShowRecruiterModal(false);
  };

  return (
    <>
      <header className="flex justify-around items-center p-4 bg-gray-100">
        <NavLink to="/">
          <div className="text-2xl font-medium text-[#d10001]">CineHub</div>
        </NavLink>
        <img
          className=""
          src="https://www.talentrack.in/images/application/modules/desktop/logo_campaign_txt.png"
          alt="Find Stardom. Find Stars."
        />
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="p-4 cursor-pointer flex justify-center bg-gray-100">
          <img
            className="w-full max-w-4xl h-auto"
            src="https://www.talentrack.in/images/application/modules/default/rec_reg/banner.svg"
            alt="Enhance your Casting & Talent-Management operations with Talentrack, KNOW MORE"
          />
        </div>

        {/* Popular recruiters */}
        <div className="py-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center">
            Popular recruiters, who cast with us
          </h2>
          <div className="mt-8">
            <ul className="flex flex-wrap justify-center gap-4">
              {castingData.map((item, index) => (
                <li key={index} className="flex justify-center">
                  <a
                    className="bg-[#fef1ee] px-2 py-4 sm:py-6 rounded-xl"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto max-w-[100px] sm:max-w-[150px]"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="bg-[url('https://www.talentrack.in/images/application/modules/default/rec_reg/map.svg')] bg-no-repeat bg-center bg-contain h-[50vh] sm:h-[60vh] md:h-[70vh] p-6 w-full md:w-1/2 flex justify-center items-center">
              <span className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-black">
                India's largest casting, content & Influencer platform.
              </span>
            </div>
            <div className="flex flex-col justify-between items-center gap-6 w-full md:w-1/2">
              <div className="flex flex-col justify-center items-center text-center px-4 sm:px-9 w-full sm:w-[80%] py-5 h-[20vh] sm:h-[25vh] md:h-[30vh] bg-[#FBDFA6] shadow-md rounded-lg">
                <h3 className="text-2xl sm:text-3xl font-bold">7,00,000</h3>
                <h4 className="text-base sm:text-lg font-medium">
                  Artists & Creators
                </h4>
              </div>
              <div className="flex flex-col justify-center items-center text-center px-4 sm:px-9 w-full sm:w-[80%] py-5 h-[20vh] sm:h-[25vh] md:h-[30vh] bg-[#FBDFA6] shadow-md rounded-lg">
                <h3 className="text-2xl sm:text-3xl font-bold">15,000</h3>
                <h4 className="text-base sm:text-lg font-medium">
                  Casting directors, AD-Agencies & Production houses
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Artist Categories Section */}
        <div className="py-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Starting a project? Find artists
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <li key={index} className="flex flex-col items-center">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full max-w-[200px] h-auto aspect-square object-cover"
                />
                <span className="bg-[#FEF1EE] w-full max-w-[200px] py-2 sm:py-3 px-2 rounded-b-lg font-normal text-center">
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Video />

        <div className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={benefit.icon}
                  alt=""
                  className="w-full max-w-[150px] h-auto mb-4"
                />
                <p className="text-base sm:text-lg font-medium text-gray-700">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-3 mb-8">
          <div className="bg-[#FBDFA6] w-full max-w-4xl rounded-xl flex flex-col md:flex-row items-center justify-around p-4">
            <div className="flex justify-center items-center mb-4 md:mb-0 md:w-1/3">
              <img
                src="https://www.talentrack.in/images/application/modules/default/rec_reg/cast.png"
                alt="Cast the best"
                className="w-full max-w-[200px] h-auto"
              />
            </div>
            <div className="text-center md:text-left md:w-2/3 md:pl-4">
              <p className="text-lg sm:text-xl md:text-2xl mb-4">
                Start finding actors, models, VO artists, creative freelancers,
                photographers, and crew
              </p>
              <a
                href="#"
                className="reg_form_link common_btn filled_btn inline-block px-4 sm:px-6 py-2 sm:py-3 text-white bg-[#d10001] rounded-md hover:bg-[#b10000] text-sm sm:text-base"
              >
                Post a Project
              </a>
            </div>
          </div>
        </div>

        <Testimonial />

        {/* Registration Form */}
        <div className="py-8">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Continue with registration
            </h2>
          </div>

          {showContinue && (
            <div className="fixed bottom-0 left-0 w-full bg-[#d10001] shadow-lg p-2 flex justify-center">
              <button
                className="text-lg sm:text-xl md:text-2xl uppercase font-semibold bg-white border border-solid px-2 py-1  rounded-md text-[#d10001]"
                onClick={scrollToForm}
              >
                Continue with registration
              </button>
            </div>
          )}

          <form
            ref={formRef}
            autoComplete="off"
            className="space-y-4 sm:space-y-6"
            name="form_register"
            id="form_register"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <input
                  type="text"
                  className="py-3 sm:py-4 text-base sm:text-xl border p-2 rounded w-full"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name*"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="py-3 sm:py-4 text-base sm:text-xl border p-2 rounded w-full"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <input
                  type="email"
                  className="py-3 sm:py-4 text-base sm:text-xl border p-2 rounded w-full"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="py-3 sm:py-4 text-base sm:text-xl border p-2 rounded w-full"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City*"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <input
                  type="password"
                  className="py-3 sm:py-4 text-base sm:text-xl border p-2 rounded w-full"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password*"
                  required
                  minLength="8"
                />
                <p className="text-xs sm:text-sm text-gray-500 mt-2 ml-1">
                  (Your password should have minimum 8 characters)
                </p>
              </div>
              <div>
                <input
                  type="password"
                  className="py-3 sm:py-4 text-base sm:text-xl border p-2 rounded w-full"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password*"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <input
                  type="text"
                  className="py-3 sm:py-4 text-base sm:text-xl border p-2 rounded w-full"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number*"
                  required
                  maxLength="10"
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms_check"
                name="i_agree"
                value="1"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="h-4 w-4 text-red-600 focus:ring-[#d10001] border-black border border-solid rounded"
              />
              <label
                htmlFor="terms_check"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to{" "}
                <a href="#" className="text-[#d10001]">
                  terms & conditions and privacy policy
                </a>
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#d10001] text-white px-6 py-2 rounded-3xl disabled:bg-gray-400"
                disabled={!formData.iAgree}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {showRecruiterModal && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
              <Recruiter />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
