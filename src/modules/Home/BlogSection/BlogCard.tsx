import React from 'react'
import { BlogCardType } from '../types'
import Para from '@/modules/common/Typography/Para'
import Link from 'next/link'
import Image from 'next/image'
import useResponsiveDesign from '@/hooks/useResponsiveDesign'

const BlogCard = ({blogCard: card}:{blogCard:BlogCardType}) => {
  const {isMobile, isLaptop} = useResponsiveDesign()
  const size = isMobile ? 150 : isLaptop ? 250 : 300
  return (
    <div
      className='flex flex-col md:pb-7 xsm:pb-7'
      style={{ maxWidth: `${size}px` }}
    >
      <div>
        <Link href={card.path}>
          <Image
            src={card.image}
            height={size}
            width={size}
            alt={card.title}
          />
        </Link>
      </div>
      {/* textContent */}
      <div className='flex flex-col space-y-2 pt-5'>
        <div className='flex flex-col space-y-1'>
          <span className='font-sans text-xs'>{card.date}</span>
          <Link href={card.path}>
            <h3 className='font-serif font-bold hover:text-orange cursor-pointer transition duration-250'>
              {card.title}
            </h3>
          </Link>
        </div>
        <Para>{card.description}</Para>
        <Link
          className='text-orange text-sm hover:brightness-50 transition duration-500'
          href={card.path}
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogCard