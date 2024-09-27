import React, { useState } from "react";
import { X } from "lucide-react";

const WorkPreferenceModal = ({ isOpen, onClose, onSave }) => {
  const [availableIn, setAvailableIn] = useState([]);
  const [availability, setAvailability] = useState("Weekends");

  const locations = ["Surat", "Pune", "Jaipur", "Anywhere In India"];

  const handleLocationChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setAvailableIn(selectedOptions);
  };

  const handleSubmit = () => {
    // Ensure both values are passed to the parent `onSave` method
    if (availableIn.length > 0 && availability) {
      onSave({ availableIn, availability });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md relative">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4 text-center text-red-500">
            Work Preference
          </h2>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Available in
            </label>
            <select
              multiple
              className="w-full border border-gray-300 rounded-md shadow-sm p-2"
              onChange={handleLocationChange}
              value={availableIn}
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">
              (Hold ctrl for selecting multiple items)
            </p>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Availability
            </label>
            <select
              className="w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option>Weekends</option>
              <option>Weekdays</option>
              <option>Full Time</option>
            </select>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded w-full mt-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkPreferenceModal;
