import React from "react";
import TestimonialsSection from "./Testimonials/TestimonialsSection";
import FaqSection from "./Testimonials/FaqSection";
import SectionsContainer from '@/modules/common/SectionsContainer'

const ForCustomerSection = () => {
  return (
    <div className="bg-[#f8f9fa] ">
      <SectionsContainer>
        <div className="pt-28  2xl:flex xl:flex lg:flex md:flex-none">
          <TestimonialsSection/>
          <FaqSection />
        </div>
      </SectionsContainer>
    </div>
  );
};

export default ForCustomerSection;
