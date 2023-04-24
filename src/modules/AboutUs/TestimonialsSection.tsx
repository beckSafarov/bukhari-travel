import React from 'react'
import SectionsContainer from '../common/SectionsContainer'
import Title from '../common/Typography/Title'
import { TestimonialsSliderSettings } from '../utils/settings'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TestimonialsData from '../common/Testimonials/TestimonialsData'
const settings = TestimonialsSliderSettings
import TestimonialCard from "@/modules/common/Testimonials/TestimonialCard";

const TestimonialsSection = () => {
  return (
    <div className='w-screen h-full bg-gray-light'>
      <SectionsContainer className='py-20' size='small'>
        <div className='pb-20 lg:text-left xsm:text-center'>
          <Title>Testimonials</Title>
        </div>
        <center className='pb-20'>
          <Slider {...settings}>
            {TestimonialsData.map((obj, i) => (
              <center key={i} className='max-w-xl'>
                <TestimonialCard {...obj} />
              </center>
            ))}
          </Slider>
        </center>
      </SectionsContainer>
    </div>
  )
}

export default TestimonialsSection