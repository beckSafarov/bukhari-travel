import useResponsiveDesign from '@/hooks/useResponsiveDesign'
import FullButton from '@/modules/common/Buttons/FullButton'
import { TourDatesDataTypes } from '@/types'
import Link from 'next/link'
import React, { useMemo } from 'react'

const headLabels = ['Departing', 'Finishing', 'Status', 'Booking']

const DateCell = ({children}:{children:React.ReactNode})=>{
  return (
    <div className='flex-1 flex justify-center items-center'>
      <p className='font-bold'>{children}</p>
    </div>
  )
}
const IsAvailableCell = ({tour}:{tour:TourDatesDataTypes})=>{
  return (
    <div className='h-full flex justify-center items-center'>
      {tour.isAvailable ? (
        <p className='text-green'>Available</p>
      ) : (
        <p className='text-gray'>Occupied</p>
      )}
    </div>
  )
}
const BookNowCell = ({tour}:{tour:TourDatesDataTypes})=>{
  return (
    <div className='text-center'>
      <Link href={`/tours/${tour.id}`}>
        <FullButton className='px-[10px] py-[5px]'>Book Now</FullButton>
      </Link>
    </div>
  )
}
const DeparturesTable = ({
  data,
}: {
  data: TourDatesDataTypes[]
}) => {
  const {isMobile, isTablet} = useResponsiveDesign()
  
  const labelsToDisplay = useMemo(()=>{
    return isMobile ? 2 : isTablet ? 3 : 4
  },[isMobile, isTablet])

  return (
    <>
      <div className='w-full px-2 flex flex-col space-y-3 mb-3'>
      {/* table header */}
        <div className='flex flex-wrap bg-orange py-3 text-white'>
          {headLabels
            .slice(0, labelsToDisplay)
            .map((label: string, i: number) => (
              <div key={i} className='flex-1 text-center'>
                {label}
              </div>
            ))}
        </div>
        
        {/* table body */}
        <div className='flex flex-col'>
          {data.map((tour: TourDatesDataTypes) => (
            <div key={tour.id} className='flex flex-col border border-1-black rounded-md'>
              <div key={tour.id} className='flex py-2'>
                <DateCell>{tour.departingDate}</DateCell>
                <DateCell>{tour.finishingDate}</DateCell>
                <div className='flex-1 xsm:hidden md:block'>
                  <IsAvailableCell tour={tour} />
                </div>
                <div className='flex-1 xsm:hidden md:hidden lg:block'>
                  <BookNowCell tour={tour} />
                </div>
              </div>
              <div className='flex flex-col space-y-2 py-2 xsm:block md:block lg:hidden'>
                <IsAvailableCell tour={tour} />
                <BookNowCell tour={tour} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DeparturesTable