import React, { useState } from "react";
import { X } from "lucide-react";

const ExperienceModal = ({ isOpen, onClose, onSave }) => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ years, months });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-red-500">Add Experience</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="years"
          >
            Years
          </label>
          <select
            id="years"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full border rounded px-3 py-2"
          >
            {[...Array(51).keys()].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="months"
          >
            Months
          </label>
          <select
            id="months"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full border rounded px-3 py-2"
          >
            {[...Array(12).keys()].map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSave}
          className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ExperienceModal;
