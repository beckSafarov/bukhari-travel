import React from "react";
import dataSlider from "./SliderData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import Title from "../../common/Typography/Title";
import SupTitle from "../../common/Typography/SupTitle";

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 600,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="flex-1">
      <SupTitle>HAPPY CUSTOMER</SupTitle>
      <Title>Testimonials</Title>
      <Slider {...settings} className="mt-12 lg:max-w-lg mb-[100px]">
        {dataSlider.map((obj, i) => (
          <Card
            key={i}
            name={obj.name}
            job={obj.job}
            comment={obj.comment}
            image={obj.image}
          />
        ))}
      </Slider>
    </div>
  );
};
export default TestimonialsSection;
