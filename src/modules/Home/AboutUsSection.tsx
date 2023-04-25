import React from 'react'
import FullButton from '../common/Buttons/FullButton'
import SupTitle from '../common/Typography/SupTitle'
import Title from '../common/Typography/Title'
import SectionsContainer from '@/modules/common/SectionsContainer'
import Para from '../common/Typography/Para'

const images = ['about_1', 'about_2']

const AboutUsSection = () => {
  
  return (
    <SectionsContainer className='xl:py-28 lg:py-20 xsm:py-20'>
      {/* flexbox */}
      <div className='relative flex xsm:flex-col lg:flex-row xl:items-start lg:items-center  h-fit'>
        <div className='flex-[0.9] flex flex-col justify-between'>
          <SupTitle>ABOUT US</SupTitle>
          <Title className='xsm:text-3xl'>
            Explore All Corners of The World With Us
          </Title>
          {/* paras */}
          <div className="mt-5 font-sans space-y-4">
            <Para>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </Para>
            <Para>
              A sm river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </Para>
          </div>
          {/* button container */}
          <div className='pt-10 pb-20'>
            <FullButton>Read More</FullButton>
          </div>
        </div>
        <div className='relative flex-[1.1] xl:pl-10 lg:pl-10 md:pl-0 sm:pl-0 flex justify-center lg:space-x-5 lg:items-center xsm:space-x-2 h-full pb-12'>
          {images.map((image: string, i: number) => (
            <div
              key={i}
              className={` ${
                i === 1 ? 'lg:pt-8' : 'pt-0'
              } md:pt-0 sm:pt-0 xsm:pt-0`}
            >
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
export default AboutUsSection;
