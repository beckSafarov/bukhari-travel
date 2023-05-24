import SectionsContainer from '@/modules/common/SectionsContainer'
import React from 'react'

const IntroSection = ({text}:{text:string}) => {
  return (
    <SectionsContainer id='#intro' size='sm' className='h-[10vh] pt-[150px] pb-10'>
      <div className="font-sans font-bold">
        {text}
      </div>
    </SectionsContainer>
  )
}

export default IntroSection