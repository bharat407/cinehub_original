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
      <Navbar />

      <div className="w-full md:mt-0 mt-[5vh]">
        <Carousal />
      </div>

      <main className="max-w-7xl mt-[-3vh] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12 sm:py-16 lg:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Find your dream role on CineHub
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto">
            CineHub is India's largest talent-hiring platform for the Media &
            Entertainment industry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
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
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`${step.bgColor} rounded-full w-20 h-20 flex items-center justify-center mb-4 transition-transform hover:scale-110`}
                >
                  <span className="text-3xl font-bold">{step.number}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <a
              href="#"
              className="text-red-600 p-2 rounded-xl hover:bg-red-50 font-semibold inline-flex items-center text-lg transition-colors duration-200"
            >
              LEARN MORE ABOUT HOW IT WORKS
              <FaChevronRight className="ml-2" />
            </a>
          </div>

          <p className="text-lg">
            Are you a recruiter?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Know how it works for recruiters.
            </a>
          </p>
        </section>

        <section className="py-12 sm:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Search Auditions
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-grow">
              <select className="w-full p-3 border rounded-md appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>All Categories</option>
              </select>
            </div>
            <div className="flex-grow">
              <select className="w-full p-3 border rounded-md appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Location</option>
              </select>
            </div>
            <button className="bg-red-600 text-white py-3 px-6 rounded-md w-full sm:w-auto hover:bg-red-700 transition-colors duration-200">
              Search
            </button>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Popular Searches</h3>
            <div className="flex flex-wrap gap-3">
              {popularSearches.map((search, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
                >
                  {search}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0 text-center sm:text-left">
              <FaCalendarAlt className="mr-4 text-2xl hidden sm:inline" />
              <p className="text-lg">
                Looking for high-quality talent for your project? Start casting
                with Talentrack in 60 seconds!
              </p>
            </div>
            <button className="bg-red-600 text-white py-3 px-6 rounded-md whitespace-nowrap text-lg hover:bg-red-700 transition-colors duration-200">
              Share Your Requirement
            </button>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Featured Auditions
            </h2>
            <a
              href="#"
              className="text-red-600 font-semibold flex items-center text-lg hover:underline"
            >
              View All
              <FaChevronRight className="ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {auditions.map((audition, index) => (
              <div
                key={index}
                className={`${audition.bgColor} p-6 rounded-lg transition-transform hover:scale-105`}
              >
                <span className="text-sm text-gray-600 mb-2 block">
                  {audition.type}
                </span>
                <h3 className="text-xl font-semibold mb-4">{audition.title}</h3>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm mb-4 hover:bg-gray-100 transition-colors duration-200">
                  {audition.roles > 1
                    ? `View all ${audition.roles} roles`
                    : "View role"}
                </button>
                <p className="text-sm text-gray-600">
                  Posted on: {audition.date}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Category />
      <Partner />

      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 mb-6 sm:mb-0">
              <img
                src="https://www.talentrack.in/uploads/testimonial_images/775aed02-5b01-4914-24a4-99d4e946412b.jpg"
                alt="Maanvi Gagroo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col space-y-4 sm:ml-8 text-center sm:text-left">
              <div className="text-orange-500 text-4xl sm:text-5xl">"</div>
              <p className="text-lg sm:text-xl">
                I believe Talentrack is the first of its kind in our country.
                Talentrack Awards are such an incredible act of encouragement.
                In a way, it's shaping the web content in the Indian milieu.
              </p>
              <div className="text-orange-500 font-bold text-lg">
                Maanvi Gagroo, Actor
              </div>
              <a
                href="#"
                className="text-white text-lg font-bold cursor-pointer hover:underline"
              >
                View All &gt;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainHome;
