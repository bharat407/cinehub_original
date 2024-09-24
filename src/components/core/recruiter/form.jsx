import React, { useState } from "react";
import { Camera, VideoIcon, Music, HelpCircle, PlusCircle } from "lucide-react";

const PortfolioInterface = () => {
  const [activeTab, setActiveTab] = useState("Gallery");
  const [activeSection, setActiveSection] = useState("Videos");

  const tabs = ["Gallery", "Bio", "Experience"];
  const sections = {
    Gallery: ["Videos", "Photos", "Audios"],
    Bio: ["Personal Info", "Education", "Skills"],
    Experience: ["Work History", "Projects", "Achievements"],
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Videos":
        return <p className="text-gray-600">Please add YouTube links.</p>;
      case "Photos":
        return <p className="text-gray-600">Please add photos.</p>;
      case "Audios":
        return <p className="text-gray-600">Please add SoundCloud links.</p>;
      default:
        return <p className="text-gray-600">Content for {activeSection}</p>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-2xl font-semibold ${
                activeTab === tab
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-400"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setActiveSection(sections[tab][0]);
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <HelpCircle className="text-gray-400" />
          <button className="bg-red-500 text-white px-3 py-1 rounded-full flex items-center">
            <VideoIcon className="w-4 h-4 mr-2" />
            How to create your portfolio?
          </button>
        </div>
      </div>

      <div className="mt-8 flex ">
        {sections[activeTab].map((section) => (
          <button
            key={section}
            className={`text-xl mr-4 ${
              activeSection === section
                ? "text-red-500 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>

      <div className="mt-6">{renderContent()}</div>
      <button className="mt-4 flex items-center text-red-500">
        <PlusCircle className="w-5 h-5 mr-2" />
        Add {activeSection.slice(0, -1)}
      </button>
    </div>
  );
};

export default PortfolioInterface;
