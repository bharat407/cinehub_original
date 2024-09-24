import React from "react";
import Form from "./form"

const UserProfile = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 ">
      <div className="flex flex-col md:flex-row">
        {/* Profile Image */}
        <div className="w-full md:w-1/2 bg-red-400 aspect-square">
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-3/4 h-3/4 text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Profile Info */}
        <div className="w-full md:w-1/2 bg-gradient-to-b from-red-600 to-red-700 text-white p-6">
          <h1 className="text-3xl font-bold mb-2">Bharat Kushwah</h1>
          <p className="text-xl mb-6">MODEL | HYDERABAD</p>

          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
              <span>Profile Viewed</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
              <span>Share Portfolio</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </div>
          </div>

          <button className="w-full mt-6 bg-transparent hover:bg-red-500 text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded">
            EDIT ACCOUNT
          </button>
        </div>
      </div>

      {/* Tags Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Tags</h2>
        <p className="text-gray-600 mb-4">
          (Add the tags that best define your skills and experience. Relevant
          tags will help the recruiters search and find your profile easily.)
        </p>
        <div className="border-2 border-red-500 border-dashed p-4 text-center text-red-500 cursor-pointer hover:bg-red-50">
          +Add Tags
        </div>
      </div>

      {/* Main Section  */}
      <div>
        <Form />
      </div>
    </div>
  );
};

export default UserProfile;
