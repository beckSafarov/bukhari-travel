import React from "react";
import TestimonialsSection from "./Testimonials/TestimonialsSection";
import FaqSection from "./Testimonials/FaqSection";
import Banner from "./Testimonials/Banner";
import SectionsContainer from "./components/SectionsContainer";

const Testimonials = () => {
  return (
    <>
      <SectionsContainer className="bg-[#f8f9fa]">
        <div className="  bg-[#f8f9fa] pt-28 flex">
          <TestimonialsSection />
          <FaqSection />
        </div>
      </SectionsContainer>
      <Banner />
    </>
  );
};

export default Testimonials;
