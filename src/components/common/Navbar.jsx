/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginModal from "../models/Login";
import SignupModal from "../models/Signup";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLoginModal = () => {
    setActiveModal(activeModal === "login" ? null : "login");
    setIsMenuOpen(false);
  };

  const toggleSignupModal = () => {
    setActiveModal(activeModal === "register" ? null : "register");
    setIsMenuOpen(false);
  };

  const switchToSignupModal = () => {
    setActiveModal("register");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="fixed top-0 inset-x-0 w-full text-center border-b-2 border-gray-300 shadow-md bg-white py-4 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <NavLink to="/" className="text-2xl font-medium text-[#d10001]">
              CineHub
            </NavLink>

            {/* Hamburger menu for mobile */}
            <button
              className="md:hidden text-gray-700 hover:text-[#ff6347] focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation Links - hidden on mobile, visible on larger screens */}
            <div className="hidden md:flex flex-row items-center gap-x-6 text-black text-lg font-medium">
              <NavLink
                to="/"
                className="hover:text-[#ff6347] transition-all ease-in"
              >
                Home
              </NavLink>
              <NavLink
                to="/all-job-in-india"
                className="hover:text-[#ff6347] transition-all ease-in"
              >
                Projects
              </NavLink>
              <DropdownMenu title="Hire Artists" items={hireArtistsItems} />
              <NavLink
                to="/agency"
                className="hover:text-[#ff6347] transition-all ease-in"
              >
                Talent Agencies
              </NavLink>
              <NavLink
                to="/cms/brandcollaboration"
                className="hover:text-[#ff6347] transition-all ease-in"
              >
                Managed Services
              </NavLink>
              <DropdownMenu title="More" items={moreItems} />
            </div>

            {/* Authentication Buttons - hidden on mobile, visible on larger screens */}
            <div className="hidden md:flex flex-row gap-x-3">
              <button
                className="text-[#d10001] text-lg px-6 py-2 rounded-3xl border border-solid border-[#d10001] font-medium hover:text-white hover:bg-[#d10001] bg-white transition-all ease-in-out duration-300"
                onClick={toggleLoginModal}
              >
                Login
              </button>
              <button
                className="text-white text-lg px-6 rounded-3xl border border-solid border-[#d10001] font-medium hover:bg-[#ad0000] bg-[#d10001] transition-all ease-in-out duration-300"
                onClick={toggleSignupModal}
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <NavLink to="/" className="block py-2 hover:text-[#ff6347]">
                Home
              </NavLink>
              <NavLink
                to="/all-job-in-india"
                className="block py-2 hover:text-[#ff6347]"
              >
                Projects
              </NavLink>
              <MobileDropdownMenu
                title="Hire Artists"
                items={hireArtistsItems}
              />
              <NavLink to="/agency" className="block py-2 hover:text-[#ff6347]">
                Talent Agencies
              </NavLink>
              <NavLink
                to="/cms/brandcollaboration"
                className="block py-2 hover:text-[#ff6347]"
              >
                Managed Services
              </NavLink>
              <MobileDropdownMenu title="More" items={moreItems} />
              <button
                className="w-full text-[#d10001] text-lg py-2 mt-2 rounded-3xl border border-solid border-[#d10001] font-medium hover:text-white hover:bg-[#d10001] bg-white transition-all ease-in-out duration-300"
                onClick={toggleLoginModal}
              >
                Login
              </button>
              <button
                className="w-full text-white text-lg py-2 mt-2 rounded-3xl border border-solid border-[#d10001] font-medium hover:bg-[#ad0000] bg-[#d10001] transition-all ease-in-out duration-300"
                onClick={toggleSignupModal}
              >
                Join Now
              </button>
            </div>
          )}
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

const DropdownMenu = ({ title, items }) => {
  return (
    <div className="relative group">
      <a className="hover:text-[#ff6347] cursor-pointer transition-all ease-in">
        {title}
        <span className="ml-1">&#x25BC;</span>
      </a>
      <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-300 mt-2 p-4 shadow-lg z-10">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink to={item.link} className="block hover:text-[#ff6347]">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MobileDropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full text-left py-2 hover:text-[#ff6347] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="ml-1">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className="pl-4">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className="block py-2 hover:text-[#ff6347]"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const hireArtistsItems = [
  { label: "Actor", link: "/talent/actor/all" },
  { label: "Model", link: "/talent/model/all" },
  // ... (add all other items from the original "Hire Artists" dropdown)
];

const moreItems = [
  { label: "Membership", link: "/talent/membership?via=index_index" },
  { label: "Recruiter Packages", link: "/user/getpackages?via=index_index" },
  // ... (add all other items from the original "More" dropdown)
];

export default Navbar;
