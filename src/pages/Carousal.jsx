import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Main from "../assets/main.avif";
import Second from "../assets/second.avif";
import Third from "../assets/third.avif";

const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${
      direction === "prev" ? "left-7" : "right-7"
    } z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition`}
    aria-label={`${direction === "prev" ? "Previous" : "Next"} slide`}
  >
    {direction === "prev" ? (
      <ChevronLeft size={24} />
    ) : (
      <ChevronRight size={24} />
    )}
  </button>
);

const Carousel = () => {
  const navigate = useNavigate();

  const handleNavi = () => {
    navigate("/");
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  const images = [Main, Second, Third];

  return (
    <div className="w-full mt-[13vh] md:mt-[12vh]">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="">
            <div className="relative">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                onClick={handleNavi}
                className="w-full cursor-pointer h-full object-cover "
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
