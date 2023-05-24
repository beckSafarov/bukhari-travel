import SectionsContainer from '@/modules/common/SectionsContainer'
import Title from '@/modules/common/Typography/Title'
import React from 'react'
import {BsCircle, BsCircleFill} from 'react-icons/bs'

const highlights = [
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, soluta!',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, soluta!',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, soluta!',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, soluta!',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, soluta!',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, soluta!',
]

const HighlightsSection = () => {
  return (
    <SectionsContainer size='sm' id='highlights' className='py-10'>
      <div className='py-5 px-3 bg-gray-light'>
        <div className='mb-5'>
          <Title fontSize='30px'>Highlights</Title>
        </div>
        <div className='flex flex-col space-y-2'>
          {highlights.map((highlight: string, i: number) => (
            <div key={i} className='font-sans flex items-center space-x-3'>
              <span>
                <BsCircleFill size='10px' className='text-orange' />
              </span>
              <p>{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionsContainer>
  )
}

export default HighlightsSection