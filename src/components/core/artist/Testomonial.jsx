import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    imgSrc:
      "https://www.talentrack.in/uploads/testimonial_images/1739b12c-7d60-829a-b733-118ad377a78e.png",
    altText: "Asif Khan",
    name: "Asif Khan,",
    profession: "Actor/Model",
    quote:
      "I want to thank Talentrack for giving me this wonderful opportunity to work with Endemol Shine for a web series. I feel glad to be associated with Talentrack!",
  },
  {
    imgSrc:
      "/uploads/testimonial_images/5e3eb6e9-9f35-fc86-7dc0-43fee0866793.png",
    altText: "Shubham Gupta",
    name: "Shubham Gupta,",
    profession: "Voice-over Artist/Anchor",
    quote:
      "Talentrack's 'The Dancing Superstar' contest helped me get fame and recognition. Thank you, team!",
  },
  {
    imgSrc:
      "/uploads/testimonial_images/03a097dc-422f-3946-6383-0a4eaf21c47e.png",
    altText: "Rajesh Barsewal",
    name: "Rajesh Barsewal,",
    profession: "Actor",
    quote:
      "Thanks to Talentrack, I secured a role to work in the TV show Savdhaan India. I highly recommend this platform to artists looking for exciting opportunities.",
  },
  {
    imgSrc:
      "/uploads/testimonial_images/7bb5058b-bf9b-43c2-d507-c06dc30d4057.png",
    altText: "Simran Kaur",
    name: "Simran Kaur,",
    profession: "Actor/Model/Influencer",
    quote:
      "I finally got my first project with Nimrat Motion Pictures for a music video on Talentrack. I'm so thankful & blessed. Thank you Talentrack!",
  },
];

const MemberTestimonials = () => {
  return (
    <div className="bg-[#E9E9E9] py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="relative text-xl sm:text-2xl font-bold text-center text-black mb-12">
          HERE IS WHAT OUR MEMBERS ARE SAYING
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 sm:w-40 h-1 bg-red-600 block"></span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded text-center text-black"
            >
              <img
                src={testimonial.imgSrc}
                alt={testimonial.altText}
                className="mx-auto mb-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
              />
              <span className="block font-semibold text-base sm:text-lg">
                {testimonial.name}
              </span>
              <span className="block text-black text-sm sm:text-base mb-4">
                {testimonial.profession}
              </span>
              <p className="text-xs sm:text-sm text-black relative px-6 sm:px-8">
                <span className="absolute left-0 top-0 text-red-600 text-sm sm:text-base">
                  <FaQuoteLeft />
                </span>
                {testimonial.quote}
                <span className="absolute right-0 bottom-0 text-red-600 text-sm sm:text-base">
                  <FaQuoteRight />
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <a
          href="/cms/talenttestimonials"
          className="px-6 py-2 bg-red-600 text-white text-sm sm:text-base rounded-full hover:bg-red-700 transition duration-300"
        >
          View all
        </a>
      </div>
    </div>
  );
};

export default MemberTestimonials;

// Add this CSS in your stylesheet or in a style tag
const styles = `
@media (max-width: 640px) {
  .grid {
    gap: 1rem;
  }

  .p-4 {
    padding: 0.75rem;
  }

  .text-xl {
    font-size: 1.25rem;
  }

  .w-20, .h-20 {
    width: 4rem;
    height: 4rem;
  }

  .text-base {
    font-size: 0.875rem;
  }

  .text-sm {
    font-size: 0.75rem;
  }

  .text-xs {
    font-size: 0.625rem;
  }

  .px-6 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .sm\\:gap-8 {
    gap: 1.5rem;
  }

  .sm\\:p-6 {
    padding: 1.25rem;
  }

  .sm\\:text-2xl {
    font-size: 1.5rem;
  }

  .sm\\:w-24, .sm\\:h-24 {
    width: 5rem;
    height: 5rem;
  }

  .sm\\:text-lg {
    font-size: 1.125rem;
  }

  .sm\\:text-base {
    font-size: 1rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
  }

  .sm\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
`;
