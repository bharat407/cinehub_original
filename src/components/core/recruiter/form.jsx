import React, { useState, useRef } from "react";
import {
  Camera,
  VideoIcon,
  Music,
  HelpCircle,
  SquarePlus,
  Upload,
  FileText,
  X,
} from "lucide-react";

const PortfolioInterface = () => {
  const [activeTab, setActiveTab] = useState("Gallery");
  const [videos, setVideos] = useState([]);
  const [audios, setAudios] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [personalInfo, setPersonalInfo] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const tabs = ["Gallery", "Bio", "Experience"];
  const sections = {
    Gallery: ["Videos", "Photos", "Audios", "Documents"],
    Bio: ["Personal Info", "Education", "Skills"],
    Experience: ["Work History", "Projects", "Achievements"],
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
    } else if (modalType === "Personal Info") {
      setPersonalInfo([...personalInfo, { title, content: link }]);
    } else if (modalType === "Education") {
      setEducation([...education, { title, content: link }]);
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
          {renderMediaSection("Personal Info", personalInfo, () =>
            openModal("Personal Info")
          )}
          {renderMediaSection("Education", education, () =>
            openModal("Education")
          )}
          {renderMediaSection("Skills", skills, () => openModal("Skills"))}
        </div>
      )}

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
            {(modalType === "Video" ||
              modalType === "Audio" ||
              modalType === "Personal Info" ||
              modalType === "Education" ||
              modalType === "Skills") && (
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
