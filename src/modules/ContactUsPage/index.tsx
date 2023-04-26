import React from "react";
import Layout from "../common/Layout";
import StaticHero from "../common/Hero/StaticHero";
import SectionsContainer from "../common/SectionsContainer";
import Title from "../common/Typography/Title";
import SupTitle from "../common/Typography/SupTitle";
import SubTitle from "../common/Typography/SubTitle";
import { MdLocationOn, MdOutlineEmail, MdCall } from "react-icons/Md";
import { GoClock } from "react-icons/Go";
import FullButton from "../common/Buttons/FullButton";

const ContactUsPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission here
  };
  return (
    <Layout>
      <StaticHero
        title="Contact Us"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      />
      <SectionsContainer>
        <div className="pt-28 pb-28">
          <div className="pb-14">
            {" "}
            {/**titles-container */}
            <SupTitle>CONTACT</SupTitle>
            <Title>Get in Touch</Title>
          </div>
          <div className="flex lg:flex-row flex-col  mb-20">
            {/**contact section */}
            <div className="min-w-[20%] mr-10">
              {/**labels */}
              <div className="flex mt-6 ">
                {/**label-wrapper */}
                <div className="bg-orange rounded-full  h-[49px] p-3 mr-5">
                  <MdLocationOn className="  fill-white   w-[25px] h-[25px]" />
                </div>
                <div>
                  <h3>Location</h3>
                  <SubTitle>43 Raymouth Rd. Baltemoer, London 3910</SubTitle>
                </div>
              </div>
              <div className="flex mt-8">
                {/**label-wrapper */}
                <div className="bg-orange rounded-full h-[49px] p-3 mr-5">
                  <GoClock className="  fill-white   w-[25px] h-[25px]" />
                </div>
                <div className="max-w-[130px]">
                  <h3>Open Hours:</h3>
                  <SubTitle>Sunday-Friday: 11:00 AM - 2300 PM</SubTitle>
                </div>
              </div>
              <div className="flex mt-8 ">
                {/**label-wrapper */}
                <div className="bg-orange rounded-full p-3 h-[49px] mr-5">
                  <MdOutlineEmail className="  fill-white   w-[25px] h-[25px]" />
                </div>
                <div>
                  <h3>Email:</h3>
                  <SubTitle>info@Colorlib</SubTitle>
                </div>
              </div>
              <div className="flex mt-8 ">
                {/**label-wrapper */}
                <div className="bg-orange rounded-full h-[49px] p-3 mr-5">
                  <MdCall className="  fill-white   w-[25px] h-[25px]" />
                </div>
                <div>
                  <h3>Call:</h3>
                  <SubTitle>+1 1234 55488 55</SubTitle>
                </div>
              </div>
            </div>
            <div className=" mt-12 lg:mt-0 min-w-[60%]">
              {/**message-sender block */}
              <form onSubmit={handleSubmit}>
                <div className="flex justify-between ">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="flex text-left justify-start items-start focus:outline-none focus:border-orange border px-8 w-[45%] py-2"
                  />
                  <input
                    type="text"
                    placeholder="Your email"
                    className="focus:outline-none focus:border-orange border px-8 w-[45%] py-2"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="focus:outline-none focus:border-orange border px-8 py-2 mt-4 w-full"
                  />
                </div>
                <div>
                  <textarea
                    cols={30}
                    rows={7}
                    placeholder="Message"
                    className="focus:outline-none focus:border-orange border px-8 py-2  w-full mt-4 mb-3 flex justify-start text-start h-48"
                  />
                </div>
                <button type="submit">
                  <FullButton>Send Message</FullButton>
                </button>
              </form>
            </div>
          </div>
        </div>
      </SectionsContainer>
    </Layout>
  );
};

export default ContactUsPage;
