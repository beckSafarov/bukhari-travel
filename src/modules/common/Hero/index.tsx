import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  const image = '/images/hero_1.png'
  return (
    <div className='h-screen w-screen bg-hero-pattern bg-cover bg-center before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black-blurred'>
      <div className='z-1 pt-3'>
        <Navbar />
      </div>
    </div>
  )
}

export default Hero