import React from 'react'
import SectionsContainer from '../components/SectionsContainer'
import SupTitle from '@/modules/common/Typography/SupTitle'
import Title from '@/modules/common/Typography/Title'
import { BlogCardType } from '../types'
import BlogCard from './BlogCard'


const blogCards = [
  {
    title: 'Far far away, behind the word mountains',
    description:
      'Vokalia and Consonantia, there live the blind texts. Separated they live.',
    date: 'March 14, 2023',
    image: '/images/1.png',
  },
  {
    title: 'Far far away, behind the word mountains',
    description:
      'Vokalia and Consonantia, there live the blind texts. Separated they live.',
    date: 'March 14, 2023',
    image: '/images/2.png',
  },
  {
    title: 'Far far away, behind the word mountains',
    description:
      'Vokalia and Consonantia, there live the blind texts. Separated they live.',
    date: 'March 14, 2023',
    image: '/images/3.png',
  },
  {
    title: 'Far far away, behind the word mountains',
    description:
      'Vokalia and Consonantia, there live the blind texts. Separated they live.',
    date: 'March 14, 2023',
    image: '/images/4.png',
  },
]

const BlogSection = () => {
  return (
    <SectionsContainer className='py-24'>
      <div className='flex flex-col space-y-3'>
        <div className=''>
          <SupTitle>BLOG</SupTitle>
          <Title>Recent Posts</Title>
        </div>
        {/* blog cards */}
        <div className='flex flex-wrap items-center justify-between pt-10'>
          {blogCards.map((blogCard: BlogCardType, i: number) => (
            <BlogCard key={i} blogCard={blogCard}/>
          ))}
        </div>
      </div>
    </SectionsContainer>
  )
}

export default BlogSection