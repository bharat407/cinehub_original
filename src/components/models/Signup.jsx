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
      className="md:h-[90vh] mt-10 flex items-center justify-center z-50 fixed inset-0"
      onClick={onClose}
    >
      <div
        className="bg-[#f6f4f4] rounded-3xl w-[80%] md:max-h-[95vh] m-6 md:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:mt-[-7vh] md:w-1/2 p-4">
              <div className="rounded-lg p-6">
                <div className="flex justify-center mb-4">
                  <img src={Left} alt="Register as Artist" />
                </div>
                <h2 className="text-xl font-bold text-center mb-4">
                  Apply for unlimited jobs/auditions posted by 15,000 top
                  industry recruiters.
                </h2>
                <div className="flex justify-center mb-4">
                  <a
                    href="#"
                    className="text-red-500 hover:text-[#B50506] font-semibold"
                  >
                    KNOW MORE
                  </a>
                </div>
                <div className="text-center">
                  <button
                    onClick={handleArtist}
                    className="w-full md:w-[60%] p-3 bg-[#d10001] font-bold text-xl text-white rounded-3xl hover:bg-[#ad0000] transition-colors duration-300 mx-auto"
                  >
                    Register As Artist
                  </button>
                </div>
              </div>
            </div>

            {/* Separator Line */}
            <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

            <div className="w-full md:mt-[-7vh] md:w-1/2 p-4">
              <div className="rounded-lg p-6">
                <div className="flex justify-center mb-4">
                  <img src={Right} alt="Register as Recruiter" />
                </div>
                <h2 className="text-xl font-bold text-center mb-4">
                  Search and find the perfect talent for your project from
                  700,000 artists.
                </h2>
                <div className="flex justify-center mb-4">
                  <a
                    href="#"
                    className="text-red-500 hover:text-[#B50506] font-semibold"
                  >
                    KNOW MORE
                  </a>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => handleRecruiter("/recruiter")}
                    className="w-full md:w-[60%] p-3 bg-[#d10001] font-bold text-xl text-white rounded-3xl hover:bg-[#ad0000] transition-colors duration-300 mx-auto"
                  >
                    Register As Recruiter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center mb-2 mt-[-2vh]">
          <p className="font-medium">
            Are you a talent agency?{" "}
            <a
              href="#"
              className="font-semibold text-[#B50506] hover:underline "
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
