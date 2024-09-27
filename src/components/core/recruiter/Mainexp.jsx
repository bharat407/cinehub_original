import React, { useState } from "react";
import { SquarePlus, X } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

const ExperienceForm = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-red-500">Add New Experience</h2>
      <div>
        <label
          htmlFor="projectName"
          className="block text-sm font-medium text-gray-700"
        >
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          value={formData.projectName}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700"
        >
          Role
        </label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={4}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
        >
          Save
        </button>
      </div>
    </form>
  );
};

const ExperienceSection = () => {
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [experiences, setExperiences] = useState([]);

  const showModal = () => {
    setIsExperienceModalOpen(true);
  };

  const closeModal = () => {
    setIsExperienceModalOpen(false);
  };

  const handleSaveExp = (experience) => {
    setExperiences([...experiences, experience]);
    closeModal();
  };

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center">
        <h3 className="text-xl mt-3 font-semibold">Experience</h3>
        <button onClick={showModal} className="text-black flex items-center">
          <SquarePlus className="w-6 h-6 mr-1" />
        </button>
      </div>
      <hr className="border-gray-200 w-full border mb-4" />
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4 bg-gray-50 p-4 rounded-md shadow">
          <p className="text-gray-600">
            <span className="font-medium">Project Name:</span>
            <span className="font-semibold text-lg"> {exp.projectName}</span>
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Role:</span> {exp.role}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Duration:</span> {exp.startDate} -{" "}
            {exp.endDate}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-medium">Description:</span> {exp.description}
          </p>
        </div>
      ))}
      <Modal isOpen={isExperienceModalOpen} onClose={closeModal}>
        <ExperienceForm onSave={handleSaveExp} onCancel={closeModal} />
      </Modal>
    </div>
  );
};

export default ExperienceSection;
