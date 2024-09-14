/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Left from "../../assets/left.png";
import Right from "../../assets/right.png";
import { useNavigate } from "react-router-dom";

const SignupModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleArtist = () => {
    navigate("/artist");
  };

  const handleRecruiter = () => {
    navigate("/recruiter");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-[#f6f4f4] rounded-3xl w-full max-w-4xl overflow-y-auto max-h-[90vh] sm:max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-1/2">
              <div className="rounded-lg p-4 sm:p-6">
                <div className="flex justify-center mb-4">
                  <img
                    src={Left}
                    alt="Register as Artist"
                    className="w-32 sm:w-auto"
                  />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-center mb-4">
                  Apply for unlimited jobs/auditions posted by 15,000 top
                  industry recruiters.
                </h2>
                <div className="flex justify-center mb-4">
                  <a
                    href="#"
                    className="text-red-500 hover:text-[#B50506] font-semibold text-sm sm:text-base"
                  >
                    KNOW MORE
                  </a>
                </div>
                <div className="text-center">
                  <button
                    onClick={handleArtist}
                    className="w-full sm:w-[80%] p-3 bg-[#d10001] font-bold text-lg sm:text-xl text-white rounded-3xl hover:bg-[#ad0000] transition-colors duration-300 mx-auto"
                  >
                    Register As Artist
                  </button>
                </div>
              </div>
            </div>

            {/* Separator Line */}
            <div className="hidden sm:block w-px bg-gray-300"></div>

            <div className="w-full sm:w-1/2">
              <div className="rounded-lg p-4 sm:p-6">
                <div className="flex justify-center mb-4">
                  <img
                    src={Right}
                    alt="Register as Recruiter"
                    className="w-32 sm:w-auto"
                  />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-center mb-4">
                  Search and find the perfect talent for your project from
                  700,000 artists.
                </h2>
                <div className="flex justify-center mb-4">
                  <a
                    href="#"
                    className="text-red-500 hover:text-[#B50506] font-semibold text-sm sm:text-base"
                  >
                    KNOW MORE
                  </a>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleRecruiter}
                    className="w-full sm:w-[80%] p-3 bg-[#d10001] font-bold text-lg sm:text-xl text-white rounded-3xl hover:bg-[#ad0000] transition-colors duration-300 mx-auto"
                  >
                    Register As Recruiter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center mb-4 mt-2">
          <p className="font-medium text-sm sm:text-base">
            Are you a talent agency?{" "}
            <a
              href="#"
              className="font-semibold text-[#B50506] hover:underline"
            >
              Click here.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
