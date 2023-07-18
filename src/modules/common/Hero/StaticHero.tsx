import { mobileSideSpacing } from '@/utils/index'
import React from 'react'
import Title from '../Typography/Title'
import useResponsiveDesign from '@/hooks/useResponsiveDesign'
import SubTitle from '../Typography/SubTitle'
import { StaticHeroProps } from '@/interfaces'
const maxWidth = process.env.NEXT_PUBLIC_TW_MAX_WIDTH


const StaticHero = ({title, subtitle, image, size}:StaticHeroProps) => {
  const {isMobile} = useResponsiveDesign()
  const height = size === 'sm' ? 'h-[50vh]' : 'h-[90vh]'
  const coverBgHeight = size === 'sm' ? 'before:h-[50vh]' : 'before:h-[90vh]'
  return (
    <div
      className={`${height} w-screen bg-cover bg-center before:content-[""] before:absolute before:top-0 before:left-0 before:w-full ${coverBgHeight} before:bg-black-blurred`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* container */}
      <div className={`${maxWidth} mx-auto h-full`}>
        <div
          className={`flex justify-center translate-y-[40%] h-full space-y-4 ${mobileSideSpacing}`}
        >
          <div className='flex flex-col space-y-3 text-center max-w-lg'>
            <Title color='white' fontSize={isMobile ? '40px' : '60px'}>
              {title}
            </Title>
            <SubTitle className='text-white'>{subtitle}</SubTitle>
          </div>
        </div>
      </div>
    </div>
  )
}

StaticHero.defaultProps = {
  image: '/images/hero_1.png',
  size: 'lg'
}

export default StaticHero