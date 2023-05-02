import React, { useRef, FormEvent } from "react";
import Layout from "../common/Layout";
import StaticHero from "../common/Hero/StaticHero";
import SectionsContainer from "../common/SectionsContainer";
import QuestionForm from "../common/QuestionForm";
import Title from "../common/Typography/Title";
import SupTitle from "../common/Typography/SupTitle";
import SubTitle from "../common/Typography/SubTitle";
import { MdLocationOn, MdOutlineEmail, MdCall } from "react-icons/md";
import { GoClock } from "react-icons/go";
import FullButton from "../common/Buttons/FullButton";

const ContactUsPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // handle form submission here
  };

  const handleClick = () => {
    formRef.current?.submit();
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
              <QuestionForm
                formRef={formRef}
                handleClick={handleClick}
                handleSubmit={handleSubmit}
                buttonText="Send Message"
              />
            </div>
          </div>
        </div>
      </SectionsContainer>
    </Layout>
  );
};

export default ContactUsPage;
