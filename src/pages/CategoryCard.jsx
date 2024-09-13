import React from "react";

const categories = [
  {
    name: "Actor",
    image:
      "https://s.talentrack.in/images/application/modules/desktop/home_page/actor_home.png",
    color: "bg-teal-600",
  },
  {
    name: "Model",
    image:
      "https://s.talentrack.in/images/application/modules/desktop/home_page/model_home.png",
    color: "bg-amber-600",
  },
  {
    name: "Singer",
    image:
      "https://s.talentrack.in/images/application/modules/desktop/home_page/singer_home.png",
    color: "bg-purple-600",
  },
  {
    name: "Actor",
    image:
      "https://s.talentrack.in/images/application/modules/desktop/home_page/actor_home.png",
    color: "bg-teal-600",
  },
  {
    name: "Model",
    image:
      "https://s.talentrack.in/images/application/modules/desktop/home_page/model_home.png",
    color: "bg-amber-600",
  },
  {
    name: "Singer",
    image:
      "https://s.talentrack.in/images/application/modules/desktop/home_page/singer_home.png",
    color: "bg-purple-600",
  },
];

const CategoryCard = ({ name, image, color }) => (
  <div
    className={`relative cursor-pointer hover:scale-105 overflow-hidden rounded-lg ${color} aspect-square`}
    style={{ width: "270px", height: "270px" }}
  >
    <img
      src={image}
      alt={name}
      className="object-cover w-full h-full opacity-75"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white text-2xl font-bold">{name}</span>
    </div>
  </div>
);

const AuditionCategories = () => (
  <div className="max-w-4xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-4">Browse Auditions by Category</h2>
    <div className="grid grid-cols-3 gap-4">
      {categories.map((category) => (
        <CategoryCard key={category.name} {...category} />
      ))}
    </div>
  </div>
);

export default AuditionCategories;
