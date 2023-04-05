import React from 'react'
import FullButton from '../common/FullButton'
import SupTitle from '../common/Typography/SupTitle'
import Title from '../common/Typography/Title'
import SectionsContainer from './components/SectionsContainer'
import Para from '../common/Typography/Para'

const images = ['about_1', 'about_2']

const AboutUsSection = () => {
  
  return (
    <SectionsContainer className='py-28'>
      {/* flexbox */}
      <div className='relative flex items-start h-fit'>
        <div className='flex-[0.8] flex flex-col justify-between '>
          <SupTitle>ABOUT US</SupTitle>
          <Title fontSize='46px'>
            Explore All Corners of The World With Us
          </Title>
          {/* paras */}
          <div className='mt-5 space-y-4'>
            <Para>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              autem nulla est inventore nostrum accusantium saepe veritatis
              accusamus consequatur officia.
            </Para>
            <Para>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              autem nulla est inventore nostrum accusantium saepe veritatis
              accusamus consequatur officia.
            </Para>
          </div>
          {/* button container */}
          <div className='pt-10 pb-20'>
            <FullButton>Read More</FullButton>
          </div>
        </div>
        <div className='relative flex-[1.2] pl-10 flex justify-center space-x-5 h-full pb-12'>
          {images.map((image: string, i: number) => (
            <div key={i} style={{paddingTop: i===1 ? '20px' : '0'}} className='relative'>
              <img
                src={`/images/${image}.png`}
                alt='Bukhari Travel'
                width={'auto'}
                height={'100%'}
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </div>
    </SectionsContainer>
  )
}

export default AboutUsSection