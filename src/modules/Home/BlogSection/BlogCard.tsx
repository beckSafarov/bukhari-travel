import React from 'react'
import { BlogCardType } from '../types'
import Para from '@/modules/common/Typography/Para'
import Link from 'next/link'
import Image from 'next/image'

const BlogCard = ({blogCard}:{blogCard:BlogCardType}) => {
  return (
    <div className='flex flex-col' style={{ maxWidth: '300px' }}>
      <div>
        <Image
          src={blogCard.image}
          height='300'
          width='300'
          alt={blogCard.title}
        />
      </div>
      {/* textContent */}
      <div className='flex flex-col space-y-2 pt-5'>
        <div className='flex flex-col space-y-1'>
          <span className='font-sans text-xs'>{blogCard.date}</span>
          <h3 className='font-serif font-bold hover:text-orange cursor-pointer transition duration-250'>{blogCard.title}</h3>
        </div>
        <Para>{blogCard.description}</Para>
        <Link
          className='text-orange text-sm hover:brightness-50 transition duration-500'
          href='/'
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogCard