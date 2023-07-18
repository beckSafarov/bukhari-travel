import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TestimonialCard from '@/modules/common/Testimonials/TestimonialCard'
import Title from '@/modules/common/Typography/Title'
import SupTitle from '@/modules/common/Typography/SupTitle'
import { TestimonialsSliderSettings } from '@/utils/settings'
import TestimonialsData from '@/modules/common/Testimonials/TestimonialsData'
const settings = TestimonialsSliderSettings

const TestimonialsSection = () => {
  return (
    <div className='flex-1'>
      <SupTitle>HAPPY CUSTOMER</SupTitle>
      <Title>Testimonials</Title>
      <Slider {...settings} className='mt-12 lg:max-w-lg mb-[100px]'>
        {TestimonialsData.map((obj, i) => (
          <TestimonialCard key={i} {...obj} />
        ))}
      </Slider>
    </div>
  )
}
export default TestimonialsSection
