import React from 'react'
import SectionsContainer from './components/SectionsContainer'
import SupTitle from '../common/Typography/SupTitle'
import Title from '../common/Typography/Title'
import Para from '../common/Typography/Para'
import ArrowLeft from '../common/Icons/ArrowLeft'
import ArrowRight from '../common/Icons/ArrowRight'
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi2'
import { IconType } from 'react-icons'

const icons = [HiArrowLeft, HiArrowRight]

const ServicesSection = () => {
  return (
    <SectionsContainer className='py-10'>
      <div className='relative flex flex-col'>
        <div className='flex'>
          <div className='flex-[0.8] flex flex-col'>
            <SupTitle>WHAT WE SERVE</SupTitle>
            <Title fontSize='46px'>We Provide Top Destinations</Title>
            <div className='mt-7'>
              <Para>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                ea obcaecati recusandae aliquam architecto. Vitae expedita odit
                quos nemo reprehenderit.
              </Para>
            </div>
          </div>
          <div className='flex-[1.2] flex justify-end items-center'>
            <div className='flex items-center space-x-4'>
              {icons.map((Icon: IconType, i: number) => (
                <span
                  key={i}
                  className={`text-gray-arrow cursor-pointer hover:text-orange  ${
                    i === 1 ? 'hover:translate-x-1' : 'hover:-translate-x-1'
                  }  transition duration-200`}
                >
                  <Icon size='50' />
                </span>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </SectionsContainer>
  )
}

export default ServicesSection