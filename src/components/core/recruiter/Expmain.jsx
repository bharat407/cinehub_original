import React, { useState } from "react";
import { SquarePlus } from "lucide-react";
import ExperienceModal from "./Exp"; // Ensure this path is correct

const ExperienceSection = () => {
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [experiences, setExperiences] = useState([]);

  // Function to show the modal
  const showModal = () => {
    setIsExperienceModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsExperienceModalOpen(false);
  };

  // Function to handle saving experience
  const handleSaveExperience = (experienceData) => {
    setExperiences([...experiences, experienceData]);
    closeModal();
  };

  const renderExpSection = () => (
    <div className="flex flex-col mb-3">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold mt-3"> Experience</h3>
        <button onClick={showModal} className="text-black flex items-center">
          <SquarePlus className="w-10 text-gray-700 mt-3 h-6 mr-2" />
        </button>
      </div>
      <hr className="border-gray-200 w-full border" />
      {experiences.map((exp, index) => (
        <div key={index} className="mt-2">
          {exp.years} years, {exp.months} months
        </div>
      ))}
    </div>
  );

  return (
    <>
      {renderExpSection()}
      <ExperienceModal
        isOpen={isExperienceModalOpen}
        onClose={closeModal}
        onSave={handleSaveExperience}
      />
    </>
  );
};

export default ExperienceSection;
