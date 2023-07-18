import { FaLocationArrow } from 'react-icons/fa'
import {BiGroup} from 'react-icons/bi'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import {CiDumbbell} from 'react-icons/ci'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import { IconType } from 'react-icons'
import FullButton from '@/modules/common/Buttons/FullButton'
import Link from 'next/link'
type BriefingDataType = {
  icon: IconType
  label: string,
  content: string
}
const data = [
  {
    icon: FaLocationArrow,
    label: 'Route',
    content: 'Tashkent, Samarkand, Bukhara, Khiva',
  },
  { icon: CiDumbbell, label: 'Physical Rating', content: 'easy' },
  { icon: BiGroup, label: 'Group Size', content: 'Max 12' },
  { icon: BsFillCalendarDateFill, label: 'Days', content: '7' },
  { icon: RiMoneyDollarCircleFill, label: 'Price', content: '$1200' },
]

const BriefingSection = () => {
  return (
    <>
      <div className='absolute top-[80vh] w-full'>
        <div className='mx-auto my-0 pb-5 bg-gray-light max-w-[800px] drop-shadow-lg'>
          <div className='bg-orange text-white font-bold px-3 py-3 font-serif mb-2 max-w-[100px]'>
            <a href='#intro'>Briefing</a>
          </div>
          <div className='flex space-x-3 px-3 font-sans'>
            <div className='flex-1 flex flex-col'>
              {data.slice(0, 3).map((Briefing: BriefingDataType, i: number) => (
                <div
                  key={i}
                  className='flex space-x-2  items-center py-2 border-gray'
                >
                  <span>{<Briefing.icon />}</span>
                  <span className='font-bold text-lg'>{Briefing.label}: </span>
                  <span className='font-sans'>{Briefing.content}</span>
                </div>
              ))}
            </div>
            <div className='flex-1 flex flex-col font-serif border-l-1 border-gray pl-3'>
              {data.slice(3).map((Briefing: BriefingDataType, i: number) => (
                <div key={i} className='flex space-x-2  items-center py-2'>
                  <span>{<Briefing.icon />}</span>
                  <span className='font-bold text-2xl'>{Briefing.label}: </span>
                  <span className='font-sans text-2xl'>{Briefing.content}</span>
                </div>
              ))}
              <Link href='/payment'>
                <div className='pt-4'>
                  <FullButton>Book Now</FullButton>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BriefingSection