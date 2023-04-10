import React, { Component } from "react";
import dataSlider from "./SliderData";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";

import Title from "../../common/Typography/Title";
import SupTitle from "../../common/Typography/SupTitle";

export default class TestimonialsSection extends Component {
  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 600,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <div className="mr-36">
        <SupTitle>HAPPY CUSTOMER</SupTitle>
        <Title>Testimonials</Title>
        <Slider {...settings} className="mt-12 max-w-md mb-[100px]">
          {dataSlider.map((obj, index) => (
            <Card
              name={`${obj.name}`}
              job={`${obj.job}`}
              comment={`${obj.comment}`}
              image={`${obj.image}`}
              key={index}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
