import React from "react";
import Layout from "../common/Layout";
import StaticHero from "../common/Hero/StaticHero";
import DestinationCard from "./Card";
import QuestionFormSection from "./questionFormSection";
import Title from "../common/Typography/Title";
import SectionsContainer from "../common/SectionsContainer";
import FullButton from "../common/Buttons/FullButton";

const DestinationPage = () => {
  return (
    <Layout>
      <StaticHero title="Tashkent Tours" image="/images/hero_3.png" />
      {/* short information section start */}
      <div className="flex flex-col items-center ">
        <div className="max-w-[50%] pt-16 pb-8">
          <center>
            <p className="font-sans text-base ">
              {" "}
              Uzbekistan is a must-visit travel destination for people who want
              to learn about the rich history and culture of Central Asia. It is
              the perfect place to travel and explore the fascinating history of
              the Silk Road trade through the well-preserved architecture of
              ancient cities like <span className=" text-orange">
                Khiva
              </span>, <span className=" text-orange">Samarkand</span>, and
              <span className=" text-orange"> Bukhara</span>.
            </p>{" "}
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
              Tashkent small group tours
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
        <Title className="py-6">Travel highlights of Tashkent</Title>
        <p className="max-w-[50%]">
          Uzbekistan’s cities tell travelers captivating stories about the
          Golden Age of Islam and the Silk Road; when pioneering advancements in
          astrology, mathematics, and medicine took place. Bukhara is where
          Marco Polo’s father and uncle stayed for three years before moving to
          the court of the Mongol Khan, and where Avicenna wrote his teachings
          in medicine, while Samarkand was the capital of the Timurid empire.
          Marvelous mausoleums, gloriously decorated madrassas, and huge mosques
          will impress people of all ages. Travelers will feel immersed in the
          atmosphere of 1001 Nights, yet at the same time, one can explore the
          Soviet-built cities and visit the forbidden Soviet art expositions at
          the Savitsky Museum. The best time to travel is Spring and Autumn when
          temperatures are pleasant for evening tea and for interesting talks
          with hospitable locals about handicrafts, music, and culture. Read
          more about our selection of top places to visit in Uzbekistan on our
          travel blog.
        </p>
      </div>
      <QuestionFormSection />
      {/**Highlights section end--------- */}
    </Layout>
  );
};

export default DestinationPage;
