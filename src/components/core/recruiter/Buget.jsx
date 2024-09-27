import React, { useState } from "react";
import { X } from "lucide-react";

const BudgetModal = ({ isOpen, onClose, onSave }) => {
  const [budget, setBudget] = useState({ from: "", to: "" });
  const [frequency, setFrequency] = useState("Per Day");
  const [negotiable, setNegotiable] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ budget, frequency, negotiable });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-red-500">Budget</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From (₹)
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={budget.from}
                onChange={(e) => setBudget({ ...budget, from: e.target.value })}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                To (₹)
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={budget.to}
                onChange={(e) => setBudget({ ...budget, to: e.target.value })}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex gap-4">
              {["Per Day", "Per Week", "Per Month", "Per Project"].map(
                (option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-red-500"
                      checked={frequency === option}
                      onChange={() => setFrequency(option)}
                    />
                    <span className="ml-2 text-sm">{option}</span>
                  </label>
                )
              )}
            </div>
          </div>
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-red-500"
                checked={negotiable}
                onChange={(e) => setNegotiable(e.target.checked)}
              />
              <span className="ml-2 text-sm">Negotiable</span>
            </label>
          </div>
          <button
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
            onClick={handleSave}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetModal;
