import { mobileSideSpacing } from '@/modules/utils'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../Typography/Title";
import Navbar from "./Navbar";
import useResponsiveDesign from "@/hooks/useResponsiveDesign";
const maxWidth = process.env.NEXT_PUBLIC_TW_MAX_WIDTH;

const images = ["hero_1.png", "hero_2.png", "hero_3.png"];
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { isMobile } = useResponsiveDesign();
  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className=" h-screen w-screen  bg-cover bg-center "
            //before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black-blurred
            style={{ backgroundImage: `url(/images/${image})` }}
          >
            {/* container */}
            <div className={`${maxWidth} mx-auto h-full`}>
              <Navbar />
              <div
                className={`flex flex-col translate-y-[30%] h-full space-y-4 xl:max-w-[35%] md:max-w-[50%] xsm:max-w-[100%] ${mobileSideSpacing}`}
              >
                <Title color="white" fontSize={isMobile ? "40px" : "60px"}>
                  It is Better to Travel Well Than to Arrive
                </Title>
                <p className="font-sans text-white text-lg font-light tracking-wider">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  nobis.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Hero