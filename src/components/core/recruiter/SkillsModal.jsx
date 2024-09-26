import React, { useState } from "react";
import { X } from "lucide-react";

const SkillModal = ({ isOpen, onClose, onSave }) => {
  const [skill, setSkill] = useState("");
  const [proficiency, setProficiency] = useState("Beginner");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ skill, proficiency });
    setSkill("");
    setProficiency("Beginner");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center text-red-500">
          Add Skill
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skill Name
            </label>
            <input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proficiency Level
            </label>
            <select
              value={proficiency}
              onChange={(e) => setProficiency(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded w-full mt-4"
          >
            Add Skill
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillModal;
