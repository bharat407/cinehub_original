import { React, useState } from "react";
import { Upload } from "lucide-react";
import { FaTimes } from "react-icons/fa";
import ExternalModal from "./CustomModal"; // Adjust the import path as necessary

const ParentalConsentForm = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isExternalModalOpen, setIsExternalModalOpen] = useState(false);
  const handleAcceptSubmit = () => {
    setIsModalOpen(false);
    setIsExternalModalOpen(true);
  };

  if (!isModalOpen) {
    return null; // Return null if the modal is closed
  }
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
          >
            <FaTimes size={24} />
          </button>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
              PARENTAL CONSENT
            </h2>

            <p className="mb-4 text-gray-700 leading-relaxed">
              I hereby warrant that I am a legal competent adult and a parent or
              legally appointed guardian of the minor child named above, and
              that I have every right to contract for the minor child in the
              above regard.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
              I certify and acknowledge that I have read, understood and agree
              to the{" "}
              <span className="text-red-600 font-semibold hover:underline cursor-pointer">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-red-600 font-semibold hover:underline cursor-pointer">
                Privacy Policy
              </span>{" "}
              of talentrack, and that I have read this Parental Consent prior to
              agreeing to it; that I have the full authority to give my consent
              and release so that my minor child may operate an account on
              talentrack and that I consent to provide the information
              concerning my minor child that is necessary to create a portfolio
              and to apply for jobs/auditions on the platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <InputField
                label="Minor Child's Name"
                type="text"
                placeholder="Enter child's full name"
              />
              <InputField
                label="Parent/Guardian's Name"
                type="text"
                placeholder="Enter your full name"
              />
              <InputField
                label="Parent/Guardian's Email"
                type="email"
                placeholder="Enter your email address"
              />
              <InputField label="Parent/Guardian's Date of Birth" type="date" />
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent/Guardian's Government ID
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="text"
                    placeholder="Enter ID number"
                    className="block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out py-2 px-3"
                  />
                  <button className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out flex items-center">
                    <Upload size={18} className="mr-2" />
                    UPLOAD
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  (Aadhaar/Passport/Driving Licence/Voter ID) (Image only)
                </p>
              </div>
              <InputField
                label="Parent/Guardian's Aadhaar Number (optional)"
                type="text"
                placeholder="Enter Aadhaar number"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent/Guardian's Mobile Number
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out py-2 px-3"
                  />
                  <button className="ml-2 px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out">
                    VERIFY
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
              >
                Back
              </button>
              <button
                // onClick={handleAcceptSubmit}
                onClick={() => setIsExternalModalOpen(true)}
                className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
              >
                Accept & Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <ExternalModal
        isOpen={isExternalModalOpen}
        onClose={() => setIsExternalModalOpen(false)}
      />
    </>
  );
};

const InputField = ({ label, type, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out py-2 px-3"
    />
  </div>
);

export default ParentalConsentForm;
