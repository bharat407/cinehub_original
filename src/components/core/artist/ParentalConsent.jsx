import { React, useState } from "react";
import { Upload } from "lucide-react";
import { FaTimes } from "react-icons/fa";
import ExternalModal from "./CustomModal"; // Adjust the import path as necessary

const ParentalConsentForm = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isExternalModalOpen, setIsExternalModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    parentEmail: "",
    parentDOB: "",
    governmentID: "",
    governmentIDFile: null,
    aadhaarNumber: "",
    mobileNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, governmentIDFile: e.target.files[0] });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.childName) newErrors.childName = "Child's name is required";
    if (!formData.parentName)
      newErrors.parentName = "Parent's name is required";
    if (!formData.parentEmail)
      newErrors.parentEmail = "Parent's email is required";
    if (!formData.parentDOB)
      newErrors.parentDOB = "Parent's date of birth is required";
    if (!formData.governmentID)
      newErrors.governmentID = "Government ID number is required";
    if (!formData.governmentIDFile)
      newErrors.governmentIDFile = "Government ID file is required";
    if (!formData.mobileNumber)
      newErrors.mobileNumber = "Mobile number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAcceptSubmit = () => {
    if (validateForm()) {
      setIsModalOpen(false);
      setIsExternalModalOpen(true);
    }
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
                name="childName"
                value={formData.childName}
                onChange={handleInputChange}
                placeholder="Enter child's full name"
                required={true}
                error={errors.childName}
              />
              <InputField
                label="Parent/Guardian's Name"
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required={true}
                error={errors.parentName}
              />
              <InputField
                label="Parent/Guardian's Email"
                type="email"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required={true}
                error={errors.parentEmail}
              />
              <InputField
                label="Parent/Guardian's Date of Birth"
                type="date"
                name="parentDOB"
                value={formData.parentDOB}
                onChange={handleInputChange}
                required={true}
                error={errors.parentDOB}
              />
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent/Guardian's Government ID
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="text"
                    name="governmentID"
                    value={formData.governmentID}
                    onChange={handleInputChange}
                    placeholder="Enter ID number"
                    className="block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out py-2 px-3"
                    required
                  />
                  <label className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out flex items-center cursor-pointer">
                    <Upload size={18} className="mr-2" />
                    UPLOAD
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                  </label>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  (Aadhaar/Passport/Driving Licence/Voter ID) (Image only)
                </p>
                {errors.governmentID && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.governmentID}
                  </p>
                )}
                {errors.governmentIDFile && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.governmentIDFile}
                  </p>
                )}
              </div>
              <InputField
                label="Parent/Guardian's Aadhaar Number (optional)"
                type="text"
                name="aadhaarNumber"
                value={formData.aadhaarNumber}
                onChange={handleInputChange}
                placeholder="Enter Aadhaar number"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent/Guardian's Mobile Number
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number"
                    className="block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out py-2 px-3"
                    required
                  />
                  <button className="ml-2 px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out">
                    VERIFY
                  </button>
                </div>
                {errors.mobileNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.mobileNumber}
                  </p>
                )}
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

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  error,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out py-2 px-3"
      required={required}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default ParentalConsentForm;
