import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginModal = ({ onClose, onCreateAccountClick }) => {
  const [otpRequested, setOtpRequested] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRequestOtp = () => {
    setOtpRequested(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose} // Close modal when clicking outside
      ></div>
      <div className="bg-[#f6f4f4] m-3 rounded-3xl w-[90%] max-w-[1000px] shadow-lg z-10">
        <div className="p-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:pr-4">
              <h2 className="text-2xl text-center mb-4 text-gray-800">
                Login with Email
              </h2>
              <div className="justify-center flex mb-4">
                <input
                  type="text"
                  placeholder="Primary email id"
                  className="w-[95%] p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4 relative justify-center flex">
                <span
                  className="absolute right-7 top-3 text-gray-400 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-[95%] p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="text-center mt-7 mb-0">
                <button className="w-[60%] md:w-[40%] p-3 bg-[#d10001] font-bold text-xl text-white rounded-3xl hover:bg-[#ad0000] transition-colors duration-300">
                  Login
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-4 md:border-l md:border-gray-200 mt-8 md:mt-0">
              <h3 className="text-2xl text-center mb-4 text-gray-800">
                Login through OTP
              </h3>
              {!otpRequested ? (
                <div>
                  <div className="mb-4 flex justify-center">
                    <input
                      type="tel"
                      placeholder="Primary mobile number"
                      className="w-[95%] p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                      maxLength="10"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      onClick={handleRequestOtp}
                      className="w-[60%] md:w-[40%] p-3 bg-[#d10001] font-bold text-xl text-white rounded-3xl hover:bg-[#ad0000] transition-colors duration-300"
                    >
                      Request OTP
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="p-7 bg-[#201A19] rounded-b-3xl text-center">
        <button
          onClick={onCreateAccountClick}
          className="bg-white cursor-pointer px-9 py-3 font-semibold rounded-2xl hover:bg-gray-100 transition-colors duration-300"
        >
          Create Account
        </button>
      </div>
      </div>
    </div>
  );
};

export default LoginModal;
