import React from "react";

const testimonials = [
  {
    imgSrc:
      "https://www.talentrack.in/images/application/modules/desktop/campaign/rec_testi_bolly.jpg",
    altText: "Bollywood Spy",
    company: "Bollywood Spy",
    name: "Palak Srivastava",
    quote:
      "Thank you talentrack for helping us in finding the most suitable voice-over artists for our channel - Bollywood Spy. We have received more than 75 applications within a week of posting the requirement and that too without any hassle.",
  },
  {
    imgSrc:
      "https://www.talentrack.in/images/application/modules/desktop/campaign/rec_testi_bolly.jpg",
    altText: "the meraki web",
    company: "the meraki web",
    name: "Mark Benson",
    quote:
      "talentrack is a very efficient and fruitful portal to find versatile and quality talent. The talentrack team is very cooperative, goal-oriented and understanding. Hope to work more in collaboration with talentrack.",
  },
  {
    imgSrc:
      "/images/application/modules/desktop/campaign/rec_testi_methils.jpg",
    altText: "Methills",
    company: "Methills",
    name: "Vipin Sharma",
    quote:
      "This is one of the best websites which actually gives a fair chance to connect with various artists. I got an amazing response from the models after posting my requirement and I highly recommend talentrack.",
  },
  {
    imgSrc:
      "/images/application/modules/desktop/campaign/rec_testi_dig_ninja.jpg",
    altText: "Digital Ninja",
    company: "Digital Ninja",
    name: "Rajeev Mishra",
    quote:
      "talentrack is an amazing platform to find versatile talent. Looking for a long-term collaboration with talentrack.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
          Here is what recruiters are saying
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 sm:p-6 text-center">
              <img
                src={testimonial.imgSrc}
                alt={testimonial.altText}
                className="mx-auto mb-4 w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
              />
              <span className="block font-semibold text-base sm:text-lg">
                {testimonial.company}
              </span>
              <span className="block mb-4 text-sm sm:text-base">
                {testimonial.name}
              </span>
              <p className="text-xs sm:text-sm text-gray-600 relative">
                <span className="absolute left-0 top-0 text-red-600 text-xl">
                  "
                </span>
                {testimonial.quote}
                <span className="absolute right-0 bottom-0 text-red-600 text-xl">
                  "
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
