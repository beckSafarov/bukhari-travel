import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionsContainer from "../common/SectionsContainer";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    className: "center",

    centerPadding: "60px",

    swipeToSlide: true,
  };
  return (
    <div className="bg-orange bg-opacity-60  py-10 mt-16">
      <SectionsContainer>
        <div className="  max-h-[400px]">
          <Slider {...settings} className=" ">
            <Image
              width={150}
              height={80}
              alt="iamge"
              src="/images/10.png"
              className="hover:scale-105 ease-in-out p-4 transition-all duration-500"
            />
            <Image
              width={150}
              height={80}
              alt="iamge"
              src="/images/10.png"
              className="hover:scale-105 ease-in-out p-4 transition-all duration-500"
            />
            <Image
              width={150}
              height={80}
              alt="iamge"
              src="/images/10.png"
              className="hover:scale-105 ease-in-out p-4 transition-all duration-500"
            />
            <Image
              width={150}
              height={80}
              alt="iamge"
              src="/images/10.png"
              className="hover:scale-105 ease-in-out p-4 transition-all duration-500"
            />
            <Image
              width={150}
              height={80}
              alt="iamge"
              src="/images/10.png"
              className="hover:scale-105 ease-in-out p-4 transition-all duration-500"
            />
            <Image
              width={150}
              height={80}
              alt="iamge"
              src="/images/10.png"
              className="hover:scale-105 ease-in-out p-4 transition-all duration-500"
            />
            <Image
              width={150}
              height={80}
              alt="iamge"
              src="/images/7.png"
              className="hover:scale-105 ease-in-out p-4 transition-all duration-500"
            />
            <Image
              width={150}
              height={80}
              alt="iamge"
              src="/images/8.png"
              className="hover:scale-105 ease-in-out p-4 transition-all duration-500"
            />
            <Image
              width={150}
              height={80}
              alt="iamge"
              src="/images/9.png"
              className="hover:scale-105 ease-in-out p-4 transition-all duration-500"
            />
          </Slider>
        </div>
      </SectionsContainer>
    </div>
  );
};

export default ImageSlider;
