import { mobileSideSpacing } from '@/modules/utils'
import React from 'react'
import Title from '../Typography/Title'
import Navbar from './Navbar'
const maxWidth = process.env.NEXT_PUBLIC_TW_MAX_WIDTH

const Hero = () => {
  return (
    <div className='h-screen w-screen bg-hero-pattern bg-cover bg-center before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black-blurred'>
      {/* container */}
      <div className={`${maxWidth} mx-auto h-full`}>
        <Navbar/>
        <div
          className={`flex flex-col translate-y-[30%] h-full space-y-4 xl:max-w-[35%] md:max-w-[50%]xsm:max-w-[100%] ${mobileSideSpacing}`}
        >
          <Title color='white' fontSize='60px'>It is Better to Travel Well Than to Arrive</Title>
          <p className='font-sans text-white text-lg font-light tracking-wider'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nobis.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero