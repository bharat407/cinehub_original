/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginModal from "../models/Login"; // Import the LoginModal component
import SignupModal from "../models/Signup"; // Import the SignupModal component

const Navbar = () => {
  const [activeModal, setActiveModal] = useState(null); // State to manage which modal is active

  const toggleLoginModal = () => {
    setActiveModal(activeModal === "login" ? null : "login");
  };
  const toggleSignupModal = () => {
    setActiveModal(activeModal === "register" ? null : "register");
  };

  const switchToSignupModal = () => {
    setActiveModal("register");
  };

  return (
    <div>
      <div className="fixed top-0 inset-x-0 w-full text-center border-b-2 border-gray-300 shadow-md bg-white py-4 z-50">
        <div className="flex justify-around items-center">
          <NavLink to="/">
            <div className="ml-6 text-2xl font-medium text-[#d10001]">
              CineHub
            </div>
          </NavLink>

          {/* Navigation Links */}
          <div className="flex flex-row items-center gap-x-6 text-black text-lg font-medium mr-6">
            <NavLink
              to="/"
              className="hover:text-[#ff6347] cursor-pointer duration-300 transition-all ease-in"
            >
              Home
            </NavLink>
            <NavLink
              to="/all-job-in-india"
              className="hover:text-[#ff6347] cursor-pointer duration-300 transition-all ease-in"
            >
              Projects
            </NavLink>
            {/* More Links */}
            <div className="relative group z-[1000]">
              <a className="hover:text-[#ff6347] cursor-pointer duration-300 transition-all ease-in">
                Hire Artists
                <span className="ml-1">&#x25BC;</span>
              </a>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-300 mt-2 p-4 shadow-lg z-[1000]">
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      to="/talent/actor/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Actor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/model/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Model
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/singer/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Singer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/photographer/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Photographer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/musician/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Musician
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/graphic-designer/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Graphics & Motion Artist
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/writer/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Writer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/painter/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Painter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/dancer/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Dancer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/anchor/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Anchor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/voice-over-artist/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Voice-over Artist
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/stylist/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Stylist
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/filmmaker/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Filmmaker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/advertising-professional/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Advertising Professional
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/stand-up-comedian/all"
                      className="block hover:text-[#ff6347]"
                    >
                      Stand-up Comedian
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <NavLink
              to="/agency"
              className="hover:text-[#ff6347] cursor-pointer duration-300 transition-all ease-in"
            >
              Talent Agencies
            </NavLink>
            <NavLink
              to="/cms/brandcollaboration"
              className="hover:text-[#ff6347] cursor-pointer duration-300 transition-all ease-in"
            >
              Managed Services
            </NavLink>
            <div className="relative group">
              <a className="hover:text-[#ff6347] cursor-pointer duration-300 transition-all ease-in">
                More
                <span className="ml-1">&#x25BC;</span>
              </a>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-300 mt-2 p-4 shadow-lg z-10">
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      to="/talent/membership?via=index_index"
                      className="block hover:text-[#ff6347]"
                    >
                      Membership
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/user/getpackages?via=index_index"
                      className="block hover:text-[#ff6347]"
                    >
                      Recruiter Packages
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cms/howitworks"
                      className="block hover:text-[#ff6347]"
                    >
                      How it Works
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/institutions/index"
                      className="block hover:text-[#ff6347]"
                    >
                      Partner Institutes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talentracktalkies/index"
                      className="block hover:text-[#ff6347]"
                    >
                      Talentrack Talkies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cms/advertise"
                      className="block hover:text-[#ff6347]"
                    >
                      Advertise with Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talentracktalkies/showcaseyourwork"
                      className="block hover:text-[#ff6347]"
                    >
                      Submit Your Audition
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cms/about"
                      className="block hover:text-[#ff6347]"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/timeline"
                      className="block hover:text-[#ff6347]"
                    >
                      Timeline
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cms/reportabuse"
                      className="block hover:text-[#ff6347]"
                    >
                      Report Abuse
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/talent/walkin"
                      className="block hover:text-[#ff6347]"
                    >
                      Book a Visit
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="https://www.talentrackawards.in/index"
                      target="_blank"
                      className="block hover:text-[#ff6347]"
                    >
                      Talentrack Awards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cms/contactus"
                      className="block hover:text-[#ff6347]"
                    >
                      Get in Touch
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cms/careers"
                      className="block hover:text-[#ff6347]"
                    >
                      Careers
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Authentication Buttons */}
          <div className="flex flex-row gap-x-3">
            <button
              className="text-[#d10001] text-lg px-9 py-2 rounded-3xl border border-solid border-[#d10001] font-medium hover:text-white hover:bg-[#d10001] bg-white transition-all ease-in-out duration-300"
              onClick={toggleLoginModal} // Opens login modal
            >
              Login
            </button>
            <button
              className="text-white text-lg px-9 rounded-3xl border border-solid border-[#d10001] font-medium hover:bg-[#ad0000] bg-[#d10001] transition-all ease-in-out duration-300"
              onClick={toggleSignupModal} // Opens register modal
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
      {/* Modal Components */}
      {activeModal === "login" && (
        <LoginModal
          onClose={toggleLoginModal}
          onCreateAccountClick={switchToSignupModal}
        />
      )}
      {activeModal === "register" && (
        <SignupModal onClose={toggleSignupModal} />
      )}
    </div>
  );
};

export default Navbar;
