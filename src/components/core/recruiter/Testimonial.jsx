import React from "react";

const TestimonialCard = ({ logo, company, author, testimonial }) => (
  <div className="bg-pink-50 p-6 rounded-lg flex flex-col items-center text-center">
    <div className="w-24 h-24 mb-4 p-2 bg-white rounded-lg flex items-center justify-center">
      <img src={logo} alt={company} className="max-w-full max-h-full" />
    </div>
    <h2 className="text-lg font-bold mb-2">{company}</h2>
    <p className="text-gray-600 mb-4">{author}</p>
    <p className="text-sm">{testimonial}</p>
  </div>
);

const TestimonialGrid = () => {
  const testimonials = [
    {
      logo: "/path/to/bollywood-spy-logo.png",
      company: "BOLLYWOOD SPY",
      author: "Palak Srivastava",
      testimonial:
        "Thank you talentrack for helping us in finding the most suitable voice-over artists for our channel - Bollywood Spy. We have received more than 75 applications within a week of posting requirement and that too without any hassle.",
    },
    {
      logo: "/path/to/meraki-web-logo.png",
      company: "THE MERAKI WEB",
      author: "Mark Benson",
      testimonial:
        "talentrack is very efficient and fruitful portal to find versatile and quality talent. The talentrack team is very cooperative, goal-oriented and understanding. Hope to work more in collaboration with talentrack.",
    },
    {
      logo: "/path/to/methills-logo.png",
      company: "METHILLS",
      author: "Vipin Sharma",
      testimonial:
        "This is one of the best websites which actually gives fair chance to connect with various artists. I got amazing response from the models after posting my requirement and I highly recommend talentrack.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialGrid;
