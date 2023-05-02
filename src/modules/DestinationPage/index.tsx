import React from "react";
import Layout from "../common/Layout";
import StaticHero from "../common/Hero/StaticHero";
import DestinationCard from "./Card";
import QuestionFormSection from "./QuestionFormSection";
import ImageSlider from "./ImageSlider";
import SupTitle from "../common/Typography/SupTitle";
import SectionsContainer from "../common/SectionsContainer";
import FullButton from "../common/Buttons/FullButton";
import Title from "../common/Typography/Title";
import { DestinationPageDataProps } from "@/interfaces";

const DestinationPage = ({
  name,
  title,
  shortInfoText,
  heroImage,
  highlightsText,
  video,
  photos,
}: DestinationPageDataProps) => {
  return (
    <Layout>
      <StaticHero title={title} image="/images/hero_3.png" />
      {/* short information section start */}
      <div className="flex flex-col items-center ">
        <div className="max-w-[50%] pt-16 pb-8">
          <center>
            <p className="font-sans text-base "> {shortInfoText}</p>{" "}
          </center>
        </div>
        <div className="pb-20">
          <button className="px-24 py-2 rounded-full bg-orange text-white hover:brightness-110">
            Contact Us
          </button>
        </div>
      </div>
      {/* short information section end */}

      {/**Tours section start----- */}

      <div className="flex bg-gray-light items-center justify-center flex-col">
        <SectionsContainer>
          <div className="flex items-center flex-col">
            <Title className="pt-8 pb-4 font-serif">
              {`${name} small group tours`}
            </Title>
            <center>
              <p className="max-w-[80%] pb-4">
                Book your Uzbekistan small-group tour with guaranteed
                departures. Explore the popular travel highlights of Uzbekistan
                or combine with sightseeing tours in other Central Asian
                countries.
              </p>
            </center>
          </div>
          <div className="flex pt-4 w-full justify-between">
            <DestinationCard />
            <DestinationCard />
            <DestinationCard />
            <DestinationCard />
          </div>

          <FullButton className="block mx-auto mt-6 mb-12">See more</FullButton>
        </SectionsContainer>
      </div>

      {/**Tours section end--------- */}

      {/**Highlights section start------- */}
      <div className="flex flex-col items-center">
        <Title className="py-6">{`Travel highlights of ${name}`}</Title>
        <p className="max-w-[50%] pb-6">{highlightsText}</p>
      </div>
      <ImageSlider />
      <div className="flex flex-col items-center justify-center py-10 bg-gray-light">
        <div className="my-4">
          <SupTitle>INTRODUCTORY VIDEO</SupTitle>
        </div>
        <iframe
          width="560"
          height="315"
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        ></iframe>
      </div>
      <QuestionFormSection />
      {/**Highlights section end--------- */}
    </Layout>
  );
};

export default DestinationPage;
