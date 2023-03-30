import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='h-screen w-screen bg-hero-pattern bg-cover bg-center before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black-blurred'>
      {/* container */}
      <div className={`xl:max-w-[1360px] mx-auto h-full sm:px-5 xsm:px-7`}>
        <Navbar />
        <div className='flex flex-col translate-y-[30%] h-full max-w-[35%]'>
          <h1 className='font-serif text-6xl leading-tight text-white font-bold z-10'>
            It is Better to Travel Well Than to Arrive
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero