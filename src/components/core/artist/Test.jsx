{
  /* Testimonials */
}
{
  /* <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full md:w-1/3 mb-4 md:mb-0">
                <h2 className="text-red-600 font-bold text-xl mb-4 text-center">
                  TESTIMONIALS
                </h2>
                <div className="border-b-2 border-red-600 w-1/2 mx-auto mb-6"></div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://www.talentrack.in/uploads/testimonial_images/f3f287a4-5cec-0426-1c60-881705ba504a.png"
                    alt="Testimonial"
                    className="rounded-full w-20 h-20 md:w-24 md:h-24 mb-4"
                  />
                  <blockquote className="text-center mb-4">
                    <p className="mb-2 text-sm md:text-base">
                      "I finally got my first project with Nimrat Motion
                      Pictures for a music video on Talentrack. I'm so thankful
                      & blessed. Thank your Talentrack!"
                    </p>
                  </blockquote>
                  <p className="font-bold">SIMRAN</p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Actor/Model/Influencer
                  </p>
                </div>
                <button className="bg-red-600 text-white px-4 md:px-6 py-2 rounded-full mt-4 mx-auto block text-sm md:text-base">
                  View All
                </button>
              </div> */
}

{
  /* Top Recruiters #######    */
}
{
  /* <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full md:w-1/3">
                <h2 className="text-red-600 font-bold text-xl mb-4 text-center">
                  TOP RECRUITERS
                </h2>
                <div className="border-b-2 border-red-600 w-1/2 mx-auto mb-6"></div>
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-rows-3 gap-4">
                    {recruiters
                      .slice(
                        currentRecruiterIndex,
                        currentRecruiterIndex + recruitersPerSlide
                      )
                      .map((recruiter) => (
                        <div key={recruiter.id} className="flex justify-center">
                          <img
                            src={recruiter.logo}
                            alt={`Recruiter ${recruiter.id}`}
                            className="w-full md:w-[30vh] h-16 md:h-24 object-contain"
                          />
                        </div>
                      ))}
                  </div>
                  <div className="flex justify-center mt-4">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
                          index ===
                          Math.floor(currentRecruiterIndex / recruitersPerSlide)
                            ? "bg-red-600"
                            : "bg-gray-300"
                        }`}
                        onClick={() =>
                          setCurrentRecruiterIndex(index * recruitersPerSlide)
                        }
                      ></div>
                    ))}
                  </div>
                </div>
              </div> */
}
