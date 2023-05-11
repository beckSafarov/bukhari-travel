import React from "react"
import Layout from "../common/Layout"
import StaticHero from "../common/Hero/StaticHero"
import VideoSection from "./VideoSection"
import QuestionFormSection from "./QuestionFormSection"
import CardsSection from "./CardsSection"
import ImageSlider from "./ImageSlider"
import SectionsContainer from "../common/SectionsContainer"
import Title from "../common/Typography/Title"
import { DestinationPageDataProps } from "@/interfaces"
import Link from "next/link";

const Destination = ({
  name,
  label,
  title,
  shortInfoText,
  heroImage,
  highlightsText,
  video,
  photos,
}: DestinationPageDataProps) => {
  return (
    <Layout title={title}>
      <StaticHero title={title} image='/images/hero_3.png' />
      {/* short information section start */}
      <SectionsContainer >
        <div className='flex flex-col items-center '>
          <div className='max-w-[100%] lg:max-w-[50%] pt-16 pb-8'>
            <center>
              <p className='font-sans text-base '> {shortInfoText}</p>{" "}
            </center>
          </div>
          <div className='pb-20'>
            <Link href='/contact'>
              <button className='px-24 py-2 rounded-full bg-orange text-white hover:brightness-110'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </SectionsContainer>
      {/* short information section end */}

      {/**Tours section start----- */}
      <CardsSection name={name} />
      {/**Tours section end--------- */}
      <SectionsContainer>
        <div className='flex flex-col items-center'>
          <Title className='py-6'>{`Travel highlights of ${name}`}</Title>
          <p className='max-w-[100%] lg:max-w-[50%] pb-6'>{highlightsText}</p>
        </div>
      </SectionsContainer>

      <ImageSlider name={name} photos={photos} />
      <VideoSection video={video} />
      <QuestionFormSection />
    </Layout>
  )
};

export default Destination;
