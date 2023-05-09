import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import useResponsiveDesign from "@/hooks/useResponsiveDesign";
import Title from "../common/Typography/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionsContainer from "../common/SectionsContainer";

type ArrowIconType = {
  onClick: (c: any) => void;
  className: string;
  style: React.CSSProperties;
};

type ImageSliderProps = {
  photos: Array<string>;
  name: string;
};

function SampleNextArrow(props: ArrowIconType) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "5px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowIconType) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "gray",
        borderRadius: "5px",
      }}
      onClick={onClick}
    />
  );
}

const ImageSlider = ({ photos, name }: ImageSliderProps) => {
  const { isTablet, isMobile } = useResponsiveDesign();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: isTablet || isMobile ? 2 : 4,
    slidesToScroll: 1,
    /* @ts-expect-error*/
    nextArrow: <SampleNextArrow />,
    /* @ts-expect-error*/
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="bg-gray-light bg-opacity-60  py-10 mt-16">
      <SectionsContainer>
        <div className="  max-h-[400px]">
          <div className="flex items-center justify-center ">
            <Title className="">{name} in photos</Title>
          </div>
          <Slider {...settings} className=" ">
            {photos.map((image, index) => {
              return (
                <Image
                  key={index}
                  width={150}
                  height={80}
                  alt="iamge"
                  src={image}
                  className="hover:scale-105 cursor-pointer ease-in-out p-4 transition-all duration-500"
                />
              );
            })}
          </Slider>
        </div>
      </SectionsContainer>
    </div>
  );
};

export default ImageSlider;
