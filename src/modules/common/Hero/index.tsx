import React from 'react'
import Navbar from './Navbar'
const maxWidth = process.env.NEXT_PUBLIC_MAX_WIDTH

const Hero = () => {
  return (
    <div className='h-screen w-screen bg-hero-pattern bg-cover bg-center before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black-blurred'>
      <div className={`xl:max-w-[${maxWidth}] mx-auto`}>
        <Navbar />
      </div>
    </div>
  )
}

export default Hero