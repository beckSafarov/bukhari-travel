import { blogCards } from '@/modules/Home/BlogSection/BlogCardsData'
import BlogCard from '@/modules/common/BlogCard'
import SectionsContainer from '@/modules/common/SectionsContainer'
import Title from '@/modules/common/Typography/Title'
import { BlogCardType } from '@/types'
import React from 'react'

const SimilarPostsSection = () => {

  return (
    <SectionsContainer className='py-10' size='sm'>
      <div className='flex flex-col'>
        <Title>Similar Posts</Title>
        <div className='pt-10 w-full flex overflow-x-scroll space-x-4'>
          {blogCards.slice(0, 4).map((blogCard: BlogCardType) => (
            <BlogCard key={blogCard.id} blogCard={blogCard} />
          ))}
        </div>
      </div>
    </SectionsContainer>
  )
}

export default SimilarPostsSection