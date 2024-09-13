/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Recruiter = () => {
  const [organization, setOrganization] = useState("");
  const [selectedTalent, setSelectedTalent] = useState("");
  const [selectedProjects, setSelectedProjects] = useState("");

  return (
    <div className="h-[100vh] inset-0 flex items-center justify-center z-50">
      <div className="bg-[#ededed] mt-[-11vh] rounded-3xl w-[90%] md:w-[70%] h-[80vh] overflow-auto">
        <div className="p-6">
          <p className="text-xl font-semibold mb-4 ml-3">
            Tell us about yourself
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <label className="block text-lg text-gray-700 mb-2">
                What organisation do you represent?
                <sup className="text-red-500">*</sup>
              </label>
              <select
                name="represent_as"
                required
                id="represent_as_org"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              >
                <option value="">Select</option>
                <option value="1">Film Production House</option>
                <option value="5">Event Management Company</option>
                <option value="3">Casting/modelling Agency</option>
                <option value="35">Retail Brand</option>
                <option value="33">Others</option>
              </select>
              <span
                id="represntasError"
                className="text-red-500 block mt-1"
              ></span>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <label className="block text-lg text-gray-700 mb-2">
                What talent are you looking for?
                <sup className="text-red-500">*</sup>
              </label>
              <select
                name="talent_look"
                required
                id="represent_as_talent"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                value={selectedTalent}
                onChange={(e) => setSelectedTalent(e.target.value)}
              >
                <option value="">I'm looking for*</option>
                <option value="1">Actor</option>
                <option value="2">Singer</option>
                <option value="3">Musician</option>
                <option value="20">Stand-up Comedian</option>
              </select>
              <span
                id="category_error"
                className="text-red-500 block mt-1"
              ></span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <label className="block text-lg text-gray-700 mb-2">
                What kind of projects you work on?
                <sup className="text-red-500">*</sup>
              </label>
              <select
                name="projectname[]"
                required
                id="represent_as_projects"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                value={selectedProjects}
                onChange={(e) => setSelectedProjects(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Web-Series">Web-Series</option>
                <option value="Films">Films</option>
                <option value="TV Serials">TV Serials</option>
                <option value="Short-films">Short-films</option>
                <option value="Ad-films">Ad-films</option>
                <option value="Reality Shows">Reality Shows</option>
                <option value="Talent Hunt">Talent Hunt</option>
                <option value="Regional Movies">Regional Movies</option>
              </select>
              <span
                id="projectname_error"
                className="text-red-500 block mt-1"
              ></span>
            </div>
            <div className="w-full md:w-1/2 p-4 flex items-end justify-end">
              <Link
                to="/recruiter"
                className="bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 transition-colors duration-300 text-center"
                id="nexttopopup"
              >
                NEXT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;
