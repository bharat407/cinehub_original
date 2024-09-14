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
  <div className="benefit-icon flex flex-col items-center text-center">
    <div className="bg-red-600 rounded-full p-4 mb-2">
      <img src={icon} alt={title} className="w-12 h-12" />
    </div>
    <h3 className="font-semibold mb-1">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

const BrandLogo = ({ src, alt, isActive }) => (
  <div
    className={`brand-logo flex items-center justify-center transition-opacity duration-500 ${
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
      alt: "Brand 2",
    },
    {
      src: "https://s.talentrack.in/images/application/modules/desktop/partners/humara_movies.png",
      alt: "Brand 2",
    },
    // ... (rest of the brands)
  ];

  // Split brands into chunks of 7
  const brandChunks = chunkArray(brands, 7);

  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  // Get the visible brands, considering underflow of brands in the last group
  const getVisibleBrands = () => {
    let currentChunk = brandChunks[activeGroupIndex];
    const nextChunk = brandChunks[activeGroupIndex + 1] || [];

    if (currentChunk.length < 7) {
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
    <div className="member-benefits-brands container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 flex flex-col items-center relative">
        <span className="relative z-10">WHY BECOME A MEMBER?</span>
        <div className="absolute top-full w-[10vw] h-[2.5px] bg-[#d10001] mt-2"></div>
      </h2>

      <div className="benefits-container flex flex-wrap gap-4 justify-center mb-16">
        {benefits.map((benefit, index) => (
          <BenefitIcon key={index} {...benefit} />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-red-600">TOP BRANDS ON </span>
        <span className="text-black">Cine</span>
        <span className="text-red-600">Hub</span>
      </h2>

      <div className="brands-container relative flex flex-wrap justify-center items-center gap-4">
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

      <style jsx>{`
        @media (max-width: 1024px) {
          .member-benefits-brands {
            padding: 4rem 2rem;
          }

          .benefits-container {
            gap: 2rem;
          }

          .benefit-icon {
            width: calc(33.33% - 1rem);
          }
        }

        @media (max-width: 768px) {
          .member-benefits-brands h2 {
            font-size: 2.5rem;
          }

          .benefit-icon {
            width: calc(50% - 1rem);
          }

          .brands-container {
            gap: 2rem;
          }

          .brand-logo {
            width: calc(33.33% - 1rem);
          }
        }

        @media (max-width: 640px) {
          .member-benefits-brands h2 {
            font-size: 2rem;
          }

          .benefit-icon {
            width: 100%;
          }

          .brands-container {
            gap: 1rem;
          }

          .brand-logo {
            width: calc(50% - 0.5rem);
          }
        }
      `}</style>
    </div>
  );
};

export default MemberBenefitsAndBrands;
