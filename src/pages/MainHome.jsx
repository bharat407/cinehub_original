/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../components/common/Navbar";
import Carousal from "./Carousal";
import Category from "./CategoryCard";
import Partner from "./Partner";
import { FaChevronRight, FaCalendarAlt } from "react-icons/fa";

const MainHome = () => {
  const popularSearches = [
    "TV Serial Auditions",
    "Online Auditions",
    "Movie Auditions",
    "Web Series Auditions",
    "Reality Show",
    "Singing Competitions",
    "Modeling Jobs",
    "Acting Auditions",
    "OTT Auditions",
    "Mumbai Auditions",
    "Film Auditions",
    "Hindi Serial Auditions",
  ];

  const auditions = [
    {
      type: "ACTOR",
      title: "Casting Call For Male/Female Actors For ...",
      roles: 5,
      date: "03 Sep 2024",
      bgColor: "bg-green-100",
    },
    {
      type: "ACTOR",
      title: "Looking For Female Actor For A Bollywood...",
      roles: 1,
      date: "25 Aug 2024",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="font-sans">
      <div>
        <Navbar />
      </div>

      <div>
        <Carousal />
      </div>

      <div className="max-w-4xl mt-[-60vh] md:mt-0 mx-auto p-4 sm:p-6 bg-white">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
          Find your dream role on CineHub
        </h1>

        <p className="text-center text-base sm:text-lg mb-8 sm:mb-12">
          CineHub is India's largest talent-hiring platform for the Media &
          Entertainment industry.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {[
            {
              number: "1",
              title: "Create Your Portfolio",
              description:
                "Add your professional images, self-tapes, and audition videos to get noticed by top recruiters.",
              bgColor: "bg-red-100",
            },
            {
              number: "2",
              title: "Find Projects",
              description:
                "Search and filter auditions suitable to your profile, interests, and location.",
              bgColor: "bg-purple-100",
            },
            {
              number: "3",
              title: "Audition Online",
              description:
                "Apply for auditions, connect with the recruiters directly and land your dream role!",
              bgColor: "bg-blue-100",
            },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div
                className={`${step.bgColor} rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-2xl sm:text-3xl font-bold">
                  {step.number}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                {step.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <a
            href="#"
            className="text-red-600 p-2 rounded-xl hover:bg-[#F2F2F2] font-semibold inline-flex items-center text-sm sm:text-base"
          >
            LEARN MORE ABOUT HOW IT WORKS
            <FaChevronRight className="ml-1" />
          </a>
        </div>

        <p className="text-center text-sm sm:text-base">
          Are you a recruiter?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Know how it works for recruiters.
          </a>
        </p>
      </div>

      <div className="p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Search Auditions
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-grow">
            <select className="w-full p-2 border rounded-md appearance-none bg-white">
              <option>All Categories</option>
            </select>
          </div>
          <div className="flex-grow">
            <select className="w-full p-2 border rounded-md appearance-none bg-white">
              <option>Location</option>
            </select>
          </div>
          <button className="bg-red-600 text-white py-2 px-6 rounded-md w-full sm:w-auto">
            Search
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Popular Searches</h2>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((search, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {search}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 w-full text-white p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0 text-center sm:text-left">
            <FaCalendarAlt className="mr-2 hidden sm:inline" />
            <p className="text-sm sm:text-base">
              Looking for high-quality talent for your project? Start casting
              with Talentrack in 60 seconds!
            </p>
          </div>
          <button className="bg-red-600 text-white py-2 px-4 rounded-md whitespace-nowrap text-sm sm:text-base">
            Share Your Requirement
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Featured Auditions</h2>
          <a
            href="#"
            className="text-red-600 font-semibold flex items-center text-sm sm:text-base"
          >
            View All
            <FaChevronRight className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {auditions.map((audition, index) => (
            <div
              key={index}
              className={`${audition.bgColor} p-4 sm:p-6 rounded-lg`}
            >
              <span className="text-xs sm:text-sm text-gray-600 mb-2 block">
                {audition.type}
              </span>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                {audition.title}
              </h3>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-xs sm:text-sm mb-4">
                {audition.roles > 1
                  ? `View all ${audition.roles} roles`
                  : "View role"}
              </button>
              <p className="text-xs sm:text-sm text-gray-600">
                Posted on: {audition.date}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Category />
      <Partner />

      <div className="bg-gray-900 text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center max-w-4xl mx-auto">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
            <img
              src="https://www.talentrack.in/uploads/testimonial_images/775aed02-5b01-4914-24a4-99d4e946412b.jpg"
              alt="Maanvi Gagroo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col space-y-4 sm:ml-8 text-center sm:text-left">
            <div className="text-orange-500 text-3xl sm:text-4xl">"</div>
            <p className="text-base sm:text-lg">
              I believe Talentrack is the first of its kind in our country.
              Talentrack Awards are such an incredible act of encouragement. In
              a way, it's shaping the web content in the Indian milieu.
            </p>
            <div className="text-orange-500 font-bold">
              Maanvi Gagroo, Actor
            </div>
            <span className="text-white text-base sm:text-lg font-bold cursor-pointer">
              View All &gt;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
