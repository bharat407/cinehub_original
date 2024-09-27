import React, { useState } from "react";
import { SquarePlus } from "lucide-react";
import WorkPreferenceModal from "./Work"; // Ensure this is correctly imported

const WorkPreferenceSection = () => {
  const [workPreferences, setWorkPreferences] = useState([]);
  const [isWorkPreferenceModalOpen, setIsWorkPreferenceModalOpen] =
    useState(false);

  const handleSaveWorkPreference = (newPref) => {
    // Update the workPreferences state by adding the new preference
    setWorkPreferences((prevPreferences) => [...prevPreferences, newPref]);
  };

  const renderWorkPreferenceSection = () => (
    <div className="flex flex-col mb-3">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Work Preference</h3>
        <button
          onClick={() => setIsWorkPreferenceModalOpen(true)}
          className="text-black flex items-center"
        >
          <SquarePlus className="w-10 text-gray-700 h-6 mr-2" />
        </button>
      </div>
      <hr className="border-gray-200 w-full border" />
      <div className="flex flex-wrap gap-4 mt-4">
        {workPreferences.map((pref, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded">
            <p>Location:- {pref.availableIn.join(", ")}</p>
            <p>
              Duration:- {pref.availability}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {renderWorkPreferenceSection()}
      <WorkPreferenceModal
        isOpen={isWorkPreferenceModalOpen}
        onClose={() => setIsWorkPreferenceModalOpen(false)}
        onSave={handleSaveWorkPreference}
      />
    </>
  );
};

export default WorkPreferenceSection;
