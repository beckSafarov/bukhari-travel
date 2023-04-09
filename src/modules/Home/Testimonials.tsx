import React from "react";
import TestimonialsSection from "../common/Testimonials/TestimonialsSection";
import FaqSection from "../common/Testimonials/FaqSection";
import Banner from "../common/Testimonials/Banner";

const Testimonials = () => {
  return (
    <>
      <div className="  bg-[#f8f9fa] px-20 pt-28 flex">
        <TestimonialsSection />
        <FaqSection />
      </div>
      <Banner />
    </>
  );
};

export default Testimonials;
