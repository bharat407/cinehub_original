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
      direction === "prev"
        ? "left-2 sm:left-4 md:left-7"
        : "right-2 sm:right-4 md:right-7"
    } z-10 bg-black/50 text-white p-1 sm:p-2 rounded-full hover:bg-black/70 transition`}
    aria-label={`${direction === "prev" ? "Previous" : "Next"} slide`}
  >
    {direction === "prev" ? (
      <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
    ) : (
      <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
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
    dots: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    customPaging: (i) => (
      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full transition-all duration-300" />
    ),
    dotsClass: "slick-dots slick-thumb",
  };

  const images = [Main, Second, Third];

  return (
    <div className="w-full mt-[5vh] px-2 relative">
      <Slider {...settings} className="custom-slider">
        {images.map((img, index) => (
          <div key={index} className="px-1 sm:px-2 md:px-4">
            <div className="relative aspect-w-16 aspect-h-9">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                onClick={handleNavi}
                className="w-full cursor-pointer h-full object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
              />
            </div>
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .custom-slider .slick-dots {
          bottom: 10px;
        }
        .custom-slider .slick-dots li {
          margin: 0 2px;
        }
        .custom-slider .slick-dots li button:before {
          display: none;
        }
        .custom-slider .slick-dots li.slick-active div {
          background-color: rgba(255, 255, 255, 1);
          transform: scale(1.2);
        }
        @media (min-width: 640px) {
          .custom-slider .slick-dots {
            bottom: 15px;
          }
          .custom-slider .slick-dots li {
            margin: 0 3px;
          }
        }
        @media (min-width: 768px) {
          .custom-slider .slick-dots {
            bottom: 20px;
          }
          .custom-slider .slick-dots li {
            margin: 0 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
