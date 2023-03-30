import React from 'react'
import FullButton from '../common/FullButton'
import SupTitle from '../common/SupTitle'
import Title from '../common/Title'
import { mobileSideSpacing } from '../utils'

const AboutUsSection = () => {
  
  return (
    <div
      className={`py-28 xl:max-w-[1340px] mx-auto h-full ${mobileSideSpacing}`}
    >
      {/* flexbox */}
      <div className='flex'>
        <div className='flex-[0.8] flex flex-col'>
          <SupTitle>ABOUT US</SupTitle>
          <Title fontSize='46px'>
            Explore All Corners of The World With Us
          </Title>
          {/* paras */}
          <div className='mt-5 font-sans space-y-4'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              autem nulla est inventore nostrum accusantium saepe veritatis
              accusamus consequatur officia.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              autem nulla est inventore nostrum accusantium saepe veritatis
              accusamus consequatur officia.
            </p>
          </div>
          {/* button container */}
          <div className='mt-10'>
            <FullButton>Read More</FullButton>
          </div>
        </div>
        <div className='flex-[1.2]'>Sample Images</div>
      </div>
    </div>
  )
}

export default AboutUsSection