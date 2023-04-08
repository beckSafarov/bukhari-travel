import Image from 'next/image'
import React from 'react'
import FullButton from '../common/FullButton'
import SupTitle from '../common/SupTitle'
import Title from '../common/Title'
import { mobileSideSpacing } from '../utils'

const images = ['about_1', 'about_2']

const AboutUsSection = () => {
  
  return (
    <div
      className={`py-28 xl:max-w-[1340px] mx-auto h-full ${mobileSideSpacing}`}
    >
      {/* flexbox */}
      <div className="relative flex items-start h-fit">
        <div className="flex-[0.9] flex flex-col justify-between ">
          <SupTitle>ABOUT US</SupTitle>
          <Title fontSize="46px">
            Explore All Corners of The World With Us
          </Title>
          {/* paras */}
          <div className="mt-5 font-sans space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              autem nulla est inventore nostrum accusantium saepe veritatis
              accusamus consequatur officia.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              autem nulla est inventore nostrum accusantium saepe veritatis
              accusamus consequatur officia.
            </p>
          </div>
          {/* button container */}
          <div className="pt-10 pb-20">
            <FullButton>Read More</FullButton>
          </div>
        </div>
        <div className="relative flex-[1.1] pl-10 flex justify-center space-x-5 h-full pb-12">
          {images.map((image: string, i: number) => (
            <div
              key={i}
              style={{ paddingTop: i === 1 ? "20px" : "0" }}
              className="relative"
            >
              <img
                src={`/images/${image}.png`}
                alt="Bukhari Travel"
                width={"auto"}
                height={"100%"}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
