import React, { useState } from "react";

// Utility function to split the brands into chunks of a given size
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const BenefitIcon = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-red-600 rounded-full p-4 mb-2">
      <img src={icon} alt={title} className="w-12 h-12" />
    </div>
    <h3 className="font-semibold mb-1">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

const BrandLogo = ({ src, alt, isActive }) => (
  <div
    className={`flex items-center justify-center transition-opacity duration-500 ${
      isActive ? "opacity-100" : "opacity-0"
    }`}
  >
    <img src={src} alt={alt} className="w-full max-h-16" />
  </div>
);

const MemberBenefitsAndBrands = () => {
  const benefits = [
    {
      icon: "https://www.justjob.co.in/Mailer/images/work-experience.png",
      title: "APPLY TO UNLIMITED",
      description: "JOBS & AUDITIONS",
    },
    {
      icon: "/path/to/no-money-icon.png",
      title: "YOU NEVER HAVE TO PAY ANY",
      description: "COMMISSION",
    },
    {
      icon: "/path/to/user-icon.png",
      title: "JOBS ARE POSTED BY 15,000+ VERIFIED",
      description: "RECRUITERS",
    },
    {
      icon: "/path/to/document-icon.png",
      title: "CREATE & SHARE YOUR ONLINE",
      description: "PORTFOLIO",
    },
    {
      icon: "/path/to/bell-icon.png",
      title: "GET INSTANT JOB",
      description: "NOTIFICATIONS",
    },
    {
      icon: "/path/to/trophy-icon.png",
      title: "PARTICIPATE IN ONLINE AUDITIONS &",
      description: "TALENT-CONTESTS",
    },
  ];

  const brands = [
    {
      src: "https://s.talentrack.in/images/application/modules/desktop/partners/4_lions.png",
      alt: "Brand 1",
    },
    {
      src: "https://s.talentrack.in/images/application/modules/desktop/partners/humara_movies.png",
      alt: "Brand 2",
    },
    {
      src: "https://s.talentrack.in/images/application/modules/desktop/partners/humara_movies.png",
      alt: "Brand 3",
    },
    {
      src: "https://s.talentrack.in/images/application/modules/desktop/partners/humara_movies.png",
      alt: "Brand 4",
    },
    {
      src: "https://s.talentrack.in/images/application/modules/desktop/partners/4_lions.png",
      alt: "Brand 8",
    },
    {
      src: "https://s.talentrack.in/images/application/modules/desktop/partners/4_lions.png",
      alt: "Brand 8",
    },

    {
      src: "https://s.talentrack.in/images/application/modules/desktop/partners/humara_movies.png",
      alt: "Brand 5",
    },
    { src: "/path/to/brand6.png", alt: "Brand 6" },
    { src: "/path/to/brand7.png", alt: "Brand 7" },

    { src: "/path/to/brand2.png", alt: "Brand 9" },
    { src: "/path/to/brand3.png", alt: "Brand 10" },
    { src: "/path/to/brand4.png", alt: "Brand 11" },
    { src: "/path/to/brand5.png", alt: "Brand 12" },
    { src: "/path/to/brand6.png", alt: "Brand 13" },
    { src: "/path/to/brand7.png", alt: "Brand 14" },
    { src: "/path/to/brand5.png", alt: "Brand 15" },
    { src: "/path/to/brand6.png", alt: "Brand 16" },
    {
      src: "https://s.talentrack.in/images/application/modules/desktop/partners/4_lions.png",
      alt: "Brand 17",
    },
  ];

  // Split brands into chunks of 7
  const brandChunks = chunkArray(brands, 7);

  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  // Get the visible brands, considering underflow of brands in the last group
  const getVisibleBrands = () => {
    let currentChunk = brandChunks[activeGroupIndex];
    const nextChunk = brandChunks[activeGroupIndex + 1] || [];

    if (currentChunk.length < 7) {
      // Combine the current chunk with the next one if it's smaller than 7
      currentChunk = currentChunk.concat(
        nextChunk.slice(0, 7 - currentChunk.length)
      );
    }

    return currentChunk;
  };

  const handleDotClick = (index) => {
    setActiveGroupIndex(index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 flex flex-col items-center relative">
        <span className="relative z-10">WHY BECOME A MEMBER?</span>
        <div className="absolute top-full w-[10vw] h-[2.5px] bg-[#d10001] mt-2"></div>
      </h2>

      <div className="flex gap-1 mb-16">
        {benefits.map((benefit, index) => (
          <BenefitIcon key={index} {...benefit} />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-red-600">TOP BRANDS ON </span>
        <span className="text-black">Cine</span>
        <span className="text-red-600">Hub</span>
      </h2>

      <div className="relative flex justify-center items-center">
        {getVisibleBrands().map((brand, index) => (
          <BrandLogo key={index} {...brand} isActive={true} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {brandChunks.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === activeGroupIndex ? "bg-red-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberBenefitsAndBrands;
