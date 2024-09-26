import React, { useState, useRef } from "react";
import {
  VideoIcon,
  HelpCircle,
  SquarePlus,
  Upload,
  Save as SaveIcon,
  X,
} from "lucide-react";
import SkillModal from "./SkillsModal"; // Adjust the import path as needed

const EducationForm = ({ onSave, onCancel }) => {
  const [education, setEducation] = useState({
    courseName: "",
    instituteName: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(education);
  };

  const [skills, setSkills] = useState([]);
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);

  const handleSaveSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* <h2 className="text-2xl font-bold text-red-500">Education</h2> */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="courseName"
            className="block text-sm font-medium text-gray-700"
          >
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={education.courseName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="instituteName"
            className="block text-sm font-medium text-gray-700"
          >
            Institute Name
          </label>
          <input
            type="text"
            id="instituteName"
            name="instituteName"
            value={education.instituteName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
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
            value={education.startDate}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
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
            value={education.endDate}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md flex items-center"
        >
          <X className="w-4 h-4 mr-2" />
          CANCEL
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center"
        >
          <SaveIcon className="w-4 h-4 mr-2" />
          SAVE
        </button>
      </div>
    </form>
  );
};

const EducationList = () => {
  const [educations, setEducations] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddEducation = () => {
    if (educations.length < 5) {
      setShowForm(true);
    } else {
      alert("You can add a maximum of 5 education entries.");
    }
  };

  const handleSaveEducation = (newEducation) => {
    setEducations([...educations, newEducation]);
    setShowForm(false);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Education</h3>
        <button
          onClick={handleAddEducation}
          className="text-black flex items-center"
        >
          <SquarePlus className="w-10 text-gray-700 h-6 mr-2" />
        </button>
      </div>
      <hr className="border-gray-200 w-full border" />
      {educations.map((edu, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-md">
          <p>
            <strong>Course:</strong> {edu.courseName}
          </p>
          <p>
            <strong>Institute:</strong> {edu.instituteName}
          </p>
          <p>
            <strong>Duration:</strong> {edu.startDate} to {edu.endDate}
          </p>
        </div>
      ))}
      {showForm && (
        <EducationForm
          onSave={handleSaveEducation}
          onCancel={handleCancelForm}
        />
      )}
    </div>
  );
};

const PortfolioInterface = () => {
  const [activeTab, setActiveTab] = useState("Gallery");
  const [videos, setVideos] = useState([]);
  const [audios, setAudios] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [personalInfo, setPersonalInfo] = useState([]);
  const [skills, setSkills] = useState([]);
  const [physical, setPhysical] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const tabs = ["Gallery", "Bio", "Experience"];
  const sections = {
    Gallery: ["Videos", "Photos", "Audios", "Documents"],
    Bio: ["About me", "Physical Stats", "Skills"],
    Experience: ["Work History", "Projects", "Achievements"],
  };

  // State for "About me" section and editor
  const [aboutMeContent, setAboutMeContent] = useState("");
  const [showAboutMeEditor, setShowAboutMeEditor] = useState(false);

  const handleSaveAboutMe = () => {
    setShowAboutMeEditor(false); // Hide editor after saving
  };

  const handleCloseAboutMe = () => {
    setShowAboutMeEditor(false); // Close editor without saving
  };

  const handleAddMedia = () => {
    if (modalType === "Video") {
      setVideos([...videos, { title, link }]);
    } else if (modalType === "Audio") {
      setAudios([...audios, { title, link }]);
    } else if (modalType === "Document") {
      if (file) {
        setDocuments([...documents, { title, file: file.name }]);
      }
    } else if (modalType === "Photo") {
      if (file) {
        setPhotos([...photos, { file: file.name }]);
      }
    } else if (modalType === "About me") {
      setPersonalInfo([...personalInfo, { title, content: link }]);
    } else if (modalType === "Skills") {
      setSkills([...skills, { title, content: link }]);
    }
    setIsModalOpen(false);
    setTitle("");
    setLink("");
    setFile(null);
  };

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (modalType === "Document") {
      if (selectedFile && selectedFile.size <= 2 * 1024 * 1024) {
        const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
        if (["doc", "docx", "pdf"].includes(fileExtension)) {
          setFile(selectedFile);
        } else {
          alert("Please select a .doc, .docx, or .pdf file.");
        }
      } else {
        alert("File size should not exceed 2MB.");
      }
    } else if (modalType === "Photo") {
      if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
        const img = new Image();
        img.onload = function () {
          if (this.width >= 350 && this.height >= 350) {
            setFile(selectedFile);
          } else {
            alert(
              "The width and height of the image should be at least 350px."
            );
          }
        };
        img.src = URL.createObjectURL(selectedFile);
      } else {
        alert("File size should not exceed 10MB.");
      }
    }
  };

  const [physicalStats, setPhysicalStats] = useState([]);
  const [showPhysicalStatsModal, setShowPhysicalStatsModal] = useState(false);
  const [currentPhysicalStat, setCurrentPhysicalStat] = useState({
    height: "",
    weight: "",
    bust: "",
    waist: "",
    hips: "",
    chest: "",
    biceps: "",
    hairType: "",
    hairLength: "",
  });

  const handlePhysicalStatChange = (e) => {
    const { name, value } = e.target;
    setCurrentPhysicalStat((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhysicalStatSubmit = () => {
    setPhysicalStats([...physicalStats, currentPhysicalStat]);
    setShowPhysicalStatsModal(false);
    setCurrentPhysicalStat({
      height: "",
      weight: "",
      bust: "",
      waist: "",
      hips: "",
      chest: "",
      biceps: "",
      hairType: "",
      hairLength: "",
    });
  };

  const renderMediaSection = (title, items, addFunction) => (
    <div className="flex flex-col mb-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <button
          onClick={() => {
            console.log(`Adding item to ${title}`);
            addFunction();
          }}
          className="text-black flex items-center"
        >
          <SquarePlus className="w-10 text-gray-700 h-6 mr-2" />
        </button>
      </div>
      <hr className="border-gray-200 w-full border" />
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded">
            {item.title || item.file || item.content}
          </div>
        ))}
      </div>
    </div>
  );

  
  
  const renderSkillSection = () => (
    <div className="flex flex-col mb-3">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Skills</h3>
        <button
          onClick={() => setIsSkillModalOpen(true)}
          className="text-black flex items-center"
        >
          <SquarePlus className="w-10 text-gray-700 h-6 mr-2" />
        </button>
      </div>
      <hr className="border-gray-200 w-full border" />
      <div className="flex flex-wrap gap-4 mt-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded">
            <p>
              {skill.skill} - {skill.proficiency}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const handleSaveSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);

  <SkillModal
    isOpen={isSkillModalOpen}
    onClose={() => setIsSkillModalOpen(false)}
    onSave={handleSaveSkill}
  />;

  const renderPhysicalStatsSection = () => (
    <div className="flex flex-col mb-3">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Physical Stats</h3>
        <button
          onClick={() => setShowPhysicalStatsModal(true)}
          className="text-black flex items-center"
        >
          <SquarePlus className="w-10 text-gray-700 h-6 mr-2" />
        </button>
      </div>
      <hr className="border-gray-200 w-full border" />
      <div className="flex flex-wrap gap-4 mt-4">
        {physicalStats.map((stat, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded">
            <p>Height: {stat.height}</p>
            <p>Weight: {stat.weight}</p>
            <p>Bust: {stat.bust}</p>
            <p>Waist: {stat.waist}</p>
            <p>Hips: {stat.hips}</p>
            <p>Chest: {stat.chest}</p>
            <p>Biceps: {stat.biceps}</p>
            <p>Hair Type: {stat.hairType}</p>
            <p>Hair Length: {stat.hairLength}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const generateHeightOptions = () => {
    const options = ["Below 4 Feet"];
    for (let feet = 4; feet <= 8; feet++) {
      for (let inches = 0; inches <= 11; inches++) {
        options.push(`${feet} Feet ${inches} Inch${inches !== 1 ? "es" : ""}`);
      }
    }
    options.push("Above 8 Feet");
    return options;
  };

  const generateWeightOptions = () => {
    const options = ["Below 30 Kg"];
    for (let kg = 30; kg <= 80; kg++) {
      options.push(`${kg} Kg`);
    }
    options.push("Above 80 Kg");
    return options;
  };

  const generateMeasurementOptions = (start, end, step = 1, unit = "cm") => {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(`${i} ${unit}`);
    }
    return options;
  };

  const hairTypeOptions = [
    "Straight",
    "Wavy",
    "Curly",
    "Coily",
    "Fine",
    "Medium",
    "Thick",
    "Afro-textured",
    "Kinky",
    "Other",
  ];

  const hairLengthOptions = [
    "Bald",
    "Buzz cut",
    "Short (ear length)",
    "Medium (shoulder length)",
    "Long (below shoulder)",
    "Very long (waist length)",
    "Extra long (hip length or longer)",
  ];

  const renderPhysicalStatsModal = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setShowPhysicalStatsModal(false)}
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center text-red-500">
          Physical Stats
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height
            </label>
            <select
              name="height"
              value={currentPhysicalStat.height}
              onChange={handlePhysicalStatChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select</option>
              {generateHeightOptions().map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight
            </label>
            <select
              name="weight"
              value={currentPhysicalStat.weight}
              onChange={handlePhysicalStatChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select</option>
              {generateWeightOptions().map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bust
            </label>
            <select
              name="bust"
              value={currentPhysicalStat.bust}
              onChange={handlePhysicalStatChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select</option>
              {generateMeasurementOptions(60, 150, 1, "cm").map(
                (option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Waist
            </label>
            <select
              name="waist"
              value={currentPhysicalStat.waist}
              onChange={handlePhysicalStatChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select</option>
              {generateMeasurementOptions(40, 130, 1, "cm").map(
                (option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hips
            </label>
            <select
              name="hips"
              value={currentPhysicalStat.hips}
              onChange={handlePhysicalStatChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select</option>
              {generateMeasurementOptions(60, 150, 1, "cm").map(
                (option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chest
            </label>
            <select
              name="chest"
              value={currentPhysicalStat.chest}
              onChange={handlePhysicalStatChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select</option>
              {generateMeasurementOptions(60, 150, 1, "cm").map(
                (option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Biceps
            </label>
            <select
              name="biceps"
              value={currentPhysicalStat.biceps}
              onChange={handlePhysicalStatChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select</option>
              {generateMeasurementOptions(20, 60, 1, "cm").map(
                (option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hair type
            </label>
            <select
              name="hairType"
              value={currentPhysicalStat.hairType}
              onChange={handlePhysicalStatChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select</option>
              {hairTypeOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hair length
            </label>
            <select
              name="hairLength"
              value={currentPhysicalStat.hairLength}
              onChange={handlePhysicalStatChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select</option>
              {hairLengthOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded w-full mt-4"
          onClick={handlePhysicalStatSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 my-4">
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
              onClick={() => setActiveTab(tab)}
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

      {activeTab === "Gallery" && (
        <div>
          {renderMediaSection("Videos", videos, () => openModal("Video"))}
          {renderMediaSection("Photos", photos, () => openModal("Photo"))}
          {renderMediaSection("Audios", audios, () => openModal("Audio"))}
          {renderMediaSection("Documents", documents, () =>
            openModal("Document")
          )}
        </div>
      )}

      {activeTab === "Bio" && (
        <div>
          <div>
            <div className="flex flex-col mb-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">About me</h3>
                <button
                  onClick={() => setShowAboutMeEditor(true)}
                  className="text-black flex items-center"
                >
                  <SquarePlus className="w-10 text-gray-700 h-6 mr-2" />
                </button>
              </div>
              {showAboutMeEditor ? (
                <div className="mt-4">
                  <textarea
                    className="w-full h-32 border border-gray-300 rounded p-2"
                    placeholder="Write about yourself"
                    value={aboutMeContent}
                    onChange={(e) => setAboutMeContent(e.target.value)}
                  />
                  <div className="flex justify-end mt-2 space-x-2">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded flex items-center"
                      onClick={handleSaveAboutMe}
                    >
                      <SaveIcon className="w-4 h-4 mr-2" />
                      Save
                    </button>
                    <button
                      className="bg-gray-400 text-white px-3 py-1 rounded flex items-center"
                      onClick={handleCloseAboutMe}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 p-2 rounded mt-4">
                  {aboutMeContent || "No information added yet."}
                </div>
              )}
            </div>
          </div>
          <EducationList />
          <div className="mt-3"></div>
          {renderPhysicalStatsSection()}
          {renderSkillSection()}
        </div>
      )}

      <SkillModal
        isOpen={isSkillModalOpen}
        onClose={() => setIsSkillModalOpen(false)}
        onSave={handleSaveSkill}
      />

      {showPhysicalStatsModal && renderPhysicalStatsModal()}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {modalType === "Photo"
                ? "Add photo"
                : modalType === "Document"
                ? "Upload document"
                : `Add ${modalType}`}
            </h2>
            {modalType === "Document" && (
              <p className="text-sm text-gray-600 mb-4">
                (file size should not be more than 2MB and should be of doc,
                docx or pdf format only.)
              </p>
            )}
            {modalType === "Photo" && (
              <p className="text-sm text-gray-600 mb-4">
                (Maximum photo upload size is 10MB. The width and height of the
                image should be at least 350px)
              </p>
            )}

            {modalType !== "Photo" && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {modalType} title
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full rounded"
                  placeholder={`Add your ${modalType.toLowerCase()} title here`}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            )}

            {(modalType === "Video" || modalType === "Audio") && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {modalType === "Video" || modalType === "Audio"
                    ? `${modalType} link`
                    : "Content"}
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full rounded"
                  placeholder={`Add your ${modalType.toLowerCase()} ${
                    modalType === "Video" || modalType === "Audio"
                      ? "link"
                      : "content"
                  } here`}
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
            )}

            {(modalType === "Document" || modalType === "Photo") && (
              <div className="mb-4">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                  accept={
                    modalType === "Document" ? ".doc,.docx,.pdf" : "image/*"
                  }
                />
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded w-full flex items-center justify-center"
                  onClick={() => fileInputRef.current.click()}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  BROWSE
                </button>
                {file && (
                  <p className="mt-2 text-sm text-gray-600">{file.name}</p>
                )}
              </div>
            )}

            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded w-full"
                onClick={handleAddMedia}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioInterface;
