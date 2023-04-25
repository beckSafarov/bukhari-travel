import FullButton from '@/modules/common/Buttons/FullButton'
import { TourCardDataTypes, TourInfoCardTypes } from '@/types'
import Image from 'next/image'
import React from 'react'


const TourCard = ({ data }: { data: TourCardDataTypes }) => {

  const route = data.route.split(', ').join(' -> ')

  const tourInfo = [
    { label: 'Days', body: data.tourInfo.days },
    { label: 'Group Size', body: data.tourInfo.groupSize },
    { label: 'Price', body: `$ ${data.tourInfo.price}` },
  ]
  const textInfo = [
    { label: 'Route', body: route },
    { label: 'Description', body: data.description },
  ]

  return (
    <div className='flex flex-col py-5 bg-gray-light rounded-lg'>
      <div className='flex'>
        <div className='flex-1 flex items-center justify-center'>
          <Image width={400} height={400} src={data.image} alt={data.title} />
        </div>
        <div className='flex-1 flex flex-col space-y-4'>
          <h1 className='font-serif font-bold text-2xl'>{data.title}</h1>
          {/* Tour Info */}
          <div className='flex space-x-2 py-2 border-l-4 border-red'>
            {tourInfo.map((card: TourInfoCardTypes, i: number) => (
              <div
                key={i}
                className={`flex-1 flex flex-col space-y-2 text-center ${
                  i === 2 ? 'bg-orange text-white' : 'bg-white text-black'
                }`}
              >
                <h3 className='font-bold text-base'>{card.label}</h3>
                <h3 className='font-bold text-lg'>{card.body}</h3>
              </div>
            ))}
          </div>
          <div className='flex flex-col space-y-1'>
            {textInfo.map((info, i) => (
              <div>
                <span className='font-bold font-sans'>{info.label}:</span>
                <span className='font-normal-font-sans'>{' ' + info.body}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex space-x-2 pt-10 pb-5 justify-center items-center'>
        <FullButton>View Tour</FullButton>
        <button
          className={`text-black border-2 border-gray rounded-full py-[10px] px-5 text-sm hover:bg-orange hover:border-orange hover:text-white transition duration-450`}
        >
          View Departures
        </button>
      </div>
    </div>
  )
}

export default TourCard