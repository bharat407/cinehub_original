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
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-[#f6f4f4] rounded-3xl w-full max-w-[500px] sm:max-w-[1000px] shadow-lg z-10 overflow-hidden">
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 sm:pr-4 mb-6 sm:mb-0">
              <h2 className="text-xl sm:text-2xl text-center mb-4 text-gray-800">
                Login with Email
              </h2>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Primary email id"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <span
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </span>
              </div>
              <div className="text-center mt-6">
                <button className="w-full sm:w-[60%] p-3 bg-[#d10001] font-bold text-lg sm:text-xl text-white rounded-3xl hover:bg-[#ad0000] transition-colors duration-300">
                  Login
                </button>
              </div>
            </div>

            <div className="w-full sm:w-1/2 sm:pl-4 sm:border-l sm:border-gray-200 mt-6 sm:mt-0">
              <h3 className="text-xl sm:text-2xl text-center mb-4 text-gray-800">
                Login through OTP
              </h3>
              {!otpRequested ? (
                <div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      placeholder="Primary mobile number"
                      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                      maxLength="10"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      onClick={handleRequestOtp}
                      className="w-full sm:w-[60%] p-3 bg-[#d10001] font-bold text-lg sm:text-xl text-white rounded-3xl hover:bg-[#ad0000] transition-colors duration-300"
                    >
                      Request OTP
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-600">
                  OTP sent! Please check your mobile.
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-7 bg-[#201A19] rounded-b-3xl text-center">
          <button
            onClick={onCreateAccountClick}
            className="w-full sm:w-auto bg-white cursor-pointer px-6 sm:px-9 py-3 font-semibold rounded-2xl hover:bg-gray-100 transition-colors duration-300"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
