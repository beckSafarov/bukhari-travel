import React from 'react'
import Para from '@/modules/common/Typography/Para'
import Link from 'next/link'
import Image from 'next/image'
import useResponsiveDesign from '@/hooks/useResponsiveDesign'
import { BlogCardType } from '@/types'

const BlogCard = ({blogCard: card}:{blogCard:BlogCardType}) => {
  const {isMobile, isLaptop, isDesktop} = useResponsiveDesign()
  const imgMaxWidth = isMobile ? 150 : isLaptop ? 250 : 300;
  const imgMinWidth = isMobile ? 150 : isLaptop ? 150 : 200;

  return (
    <div
      className='flex flex-col md:pb-7 xsm:pb-7'
      style={{ maxWidth: imgMaxWidth, minWidth: `${imgMinWidth}px` }}
    >
      <div>
        <Link href={card.path}>
          <Image
            src={card.image}
            height={imgMaxWidth}
            width={imgMaxWidth}
            alt={card.title}
          />
        </Link>
      </div>
      {/* textContent */}
      <div className='flex flex-col space-y-2 pt-5'>
        <div className='flex flex-col space-y-1'>
          <span className='font-sans text-xs'>{card.date}</span>
          <h3 className='font-serif font-bold hover:text-orange cursor-pointer transition duration-250'>
            <Link href={card.path}>{card.title}</Link>
          </h3>
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