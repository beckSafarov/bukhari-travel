import React, { useState } from 'react'
import SupTitle from '@/modules/common/Typography/SupTitle'
import Title from '@/modules/common/Typography/Title'
import Para from '@/modules/common/Typography/Para'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import { IconType } from 'react-icons'
import Slider from 'react-slick'
import SectionsContainer from '../components/SectionsContainer'
import DestinationCard from './DestinationCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SlideType } from '../types'
type IconObjType = {
  icon: IconType,
  onClick: (c:any)=>void
}
type CardType = {
  title: string,
  image: string,
  price: number, 
  subtitle: string
}

const cards = [
  {
    title: 'Enjoy the beauty of Samarkand',
    image: '/images/about_1.png',
    price: 450,
    subtitle: 'Uzbekistan, Samarkand',
  },
  {
    title: 'Enjoy the beauty of Bukhara',
    image: '/images/about_2.png',
    price: 450,
    subtitle: 'Uzbekistan, Bukhara',
  },
  {
    title: 'Be marvelled by Khiva',
    image: '/images/about_1.png',
    price: 450,
    subtitle: 'Uzbekistan, Khiva',
  },
  {
    title: 'Have fun traveling',
    image: '/images/1.png',
    price: 450,
    subtitle: 'Uzbekistan, Tashkent',
  },
] 



const ServicesSection = () => {
  const [slick, setSlick] = useState<SlideType>()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const handlePrev = (): void => {
    if (!slick?.slickPrev) return
    slick.slickPrev()
  }
  const handleNext = (): void => {
    if (!slick?.slickNext) return
    slick.slickNext()
  }

  const handleSliderRef = (c: any): void => {
    if (!c || slick?.slickNext) return
    setSlick({
      slickNext: c.slickNext,
      slickPrev: c.slickPrev,
    })
  }
  const icons = [
    {icon: HiArrowLeft, onClick: handlePrev},
    {icon: HiArrowRight, onClick: handleNext},
  ]
  return (
    <SectionsContainer className='py-10 xsm:py-5'>
      <div className='relative flex flex-col'>
        <div className='flex md:flex-row xsm:flex-col'>
          <div className='flex-[0.8] flex flex-col'>
            <SupTitle>WHAT WE SERVE</SupTitle>
            <Title>We Provide Top Destinations</Title>
            <div className='mt-7'>
              <Para>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                ea obcaecati recusandae aliquam architecto. Vitae expedita odit
                quos nemo reprehenderit.
              </Para>
            </div>
          </div>
          <div className='flex-[1.2] flex md:justify-end md:pt-0 items-end xsm:justify-center xsm:pt-3'>
            <div className='flex items-center space-x-4'>
              {icons.map((Icon: IconObjType, i: number) => (
                <span
                  key={i}
                  onClick={Icon.onClick}
                  className={`text-gray-arrow cursor-pointer hover:text-orange  ${
                    i === 1 ? 'hover:translate-x-1' : 'hover:-translate-x-1'
                  } transition duration-200`}
                >
                  <Icon.icon size='50' />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full overflow-hidden pt-10 pb-5 h-fit'>
          <Slider
            ref={handleSliderRef}
            {...settings}
            className='md:pb-0 xsm:pb-3'
          >
            {cards.map((card: CardType, i: number) => (
              <DestinationCard key={i} {...card} />
            ))}
          </Slider>
        </div>
      </div>
    </SectionsContainer>
  )
}

export default ServicesSection
