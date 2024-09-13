import React, { useState } from "react";

const tabContent = [
  {
    id: "tab1",
    title: "Video Auditions",
    image:
      "https://www.talentrack.in/images/application/modules/default/rec_reg/Video_auditions.svg",
    alt: "Video Auditions",
    description:
      "Artist Portfolios are updated with video introductions & self-tapes to help you pick the most-suitable artists for your projects.",
  },
  {
    id: "tab2",
    title: "Project Promotions",
    image:
      "https://www.talentrack.in/images/application/modules/default/rec_reg/project_promotion.png",
    alt: "Project Promotion",
    description:
      "You can promote your projects on Talentrack to quickly receive applications from relevant artists from your preferred locations.",
  },
  {
    id: "tab3",
    title: "Smart Search",
    image:
      "https://www.talentrack.in/images/application/modules/default/rec_reg/Video_auditions.svg",
    alt: "Smart Search",
    description:
      "You can search & select artists from over 15 categories using various filtering parameters.",
  },
  {
    id: "tab4",
    title: "Search History",
    image:
      "https://www.talentrack.in/images/application/modules/default/rec_reg/Video_auditions.svg",
    alt: "Search History",
    description:
      "Intelligent Search History keeps track of all your shortlisted profiles, ensuring a quick revisit anytime!",
  },
  {
    id: "tab5",
    title: "Managed Workflow",
    image:
      "https://www.talentrack.in/images/application/modules/default/rec_reg/Video_auditions.svg",
    alt: "Managed Workflow",
    description:
      "Smart Workflow Management helps you organise and manage thousands of shortlisted applications in role & character-specific folders.",
  },
];

const VerticalTabComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className=" flex flex-col md:flex-row">
        <div className="tab w-full md:w-1/3 mb-4 md:mb-0">
          <ul className="space-y-2">
            {tabContent.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`tablinks text-xl w-full text-left px-4 py-3 rounded transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "bg-white text-[#c00001] border-l-4 border-red-700"
                      : "bg-white text-[#ff8a78] "
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab_content w-full md:w-2/3 mt-4 md:mt-0 md:ml-4">
          {tabContent.map((tab) => (
            <div
              key={tab.id}
              className={`tabcontent ${
                activeTab === tab.id ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center md:space-x-4">
                <span className="flex-shrink-0">
                  <img
                    src={tab.image}
                    alt={tab.alt}
                    className="max-w-full h-auto w-[150px] md:w-[200px] lg:w-[250px]"
                  />
                </span>

                <span className="text-gray-700 text-center font-medium text-lg md:text-xl lg:text-2xl mt-4 md:mt-0">
                  {tab.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTabComponent;
