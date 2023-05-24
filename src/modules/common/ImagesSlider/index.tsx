import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import useResponsiveDesign from '@/hooks/useResponsiveDesign'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ImagesSlider } from '@/interfaces'

type ArrowIconType = {
  onClick: (c: any) => void
  className: string
  style: React.CSSProperties
}


function SampleNextArrow(props: ArrowIconType) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'gray',
        // borderRadius: '5px',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props: ArrowIconType) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        // ...style,
        // display: 'block',
        background: 'gray',
        // borderRadius: '5px',
      }}
      onClick={onClick}
    />
  )
}

const ImagesSlider = ({ photos, className }: ImagesSlider) => {
  const { isPhablet, isMobile } = useResponsiveDesign()
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: isPhablet ? 2 : isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: !isMobile,
    /* @ts-expect-error*/
    nextArrow: <SampleNextArrow />,
    /* @ts-expect-error*/
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div className={className}>
      <div>
        <Slider {...settings} className=' '>
          {photos.map((image, index) => {
            return (
              <Image
                key={index}
                width={150}
                height={80}
                alt='image'
                src={image}
                className='hover:scale-105 cursor-pointer ease-in-out p-4 transition-all duration-500'
              />
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

// ImagesSlider.defaultProps = {
//   className: '',
// }

export default ImagesSlider
