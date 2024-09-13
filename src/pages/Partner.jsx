import React from "react";

const companies = [
  {
    name: "4 Lions Films",
    logo: "https://s.talentrack.in/images/application/modules/desktop/partners/4_lions_films.png",
  },
  { name: "TJ", logo: "/api/placeholder/200/100" },
  { name: "Sunshine Productions", logo: "/api/placeholder/200/100" },
  { name: "Sol", logo: "/api/placeholder/200/100" },
  { name: "Naaptol", logo: "/api/placeholder/200/100" },
  { name: "Circus Elephants", logo: "/api/placeholder/200/100" },
  { name: "Pan Bahar Chaini", logo: "/api/placeholder/200/100" },
  { name: "Radio Mirchi", logo: "/api/placeholder/200/100" },
  { name: "Endemol Shine India", logo: "/api/placeholder/200/100" },
  { name: "Arre", logo: "/api/placeholder/200/100" },
  { name: "Frames", logo: "/api/placeholder/200/100" },
  { name: "Casting Bay", logo: "/api/placeholder/200/100" },
];

const CompanyLogo = ({ name, logo }) => (
  <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
    <img src={logo} alt={name} className="w-full h-12 object-contain" />
  </div>
);

const WhoCastsWithUs = () => (
  <div className="max-w-4xl mx-auto p-6">
    <h2 className="text-3xl mb-6">Who Casts With Us</h2>
    <div className="grid grid-cols-6  gap-4">
      {companies.map((company) => (
        <CompanyLogo key={company.name} {...company} />
      ))}
    </div>
  </div>
);

export default WhoCastsWithUs;
