import React from 'react'
import useResponsiveDesign from '@/hooks/useResponsiveDesign'
import SectionsContainer from '../common/SectionsContainer'
import SupTitle from '../common/Typography/SupTitle'

type videoSourceType = {
 video: string
}

const VideoSection = ({ video }: videoSourceType) => {
 const { isMobile } = useResponsiveDesign()
 return (
  <SectionsContainer>
   <div className='flex flex-col items-center justify-center py-10 '>
    <div className='my-4'>
     <SupTitle>INTRODUCTORY VIDEO</SupTitle>
    </div>
    <iframe
     width='50%'
     height={isMobile ? 'auto' : 250}
     src={video}
     title='YouTube video player'
     allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;'
    ></iframe>
   </div>
  </SectionsContainer>
 )
}

export default VideoSection
