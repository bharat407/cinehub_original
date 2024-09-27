import React, { useState } from "react";
import { SquarePlus } from "lucide-react";
import LangModal from "./LangugaeModal"; // Corrected import name

const LanguageSection = () => {
  const [languages, setLanguages] = useState([]); // Changed Lang to languages
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  const renderLangSection = () => (
    <div className="flex flex-col mb-3">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Language</h3>
        <button
          onClick={() => setIsLanguageModalOpen(true)}
          className="text-black flex items-center"
        >
          <SquarePlus className="w-10 text-gray-700 h-6 mr-2" />
        </button>
      </div>
      <hr className="border-gray-200 w-full border" />
      <div className="flex flex-wrap gap-4 mt-4">
        {languages.map((lang, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded">
            <p>
              {lang.language} - {lang.proficiency}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const handleSaveLanguage = (newLang) => {
    setLanguages([...languages, newLang]);
  };

  return (
    <>
      {renderLangSection()}
      <LangModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        onSave={handleSaveLanguage}
      />
    </>
  );
};

export default LanguageSection;
