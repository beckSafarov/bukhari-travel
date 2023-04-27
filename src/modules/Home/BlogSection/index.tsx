import React from 'react'
import SectionsContainer from '@/modules/common/SectionsContainer'
import SupTitle from '@/modules/common/Typography/SupTitle'
import Title from '@/modules/common/Typography/Title'
import BlogCard from '@/modules/common/BlogCard'
import { BlogCardType } from '@/types'
import { blogCards } from './BlogCardsData'

const BlogSection = () => {
  return (
    <SectionsContainer className="py-24">
      <div className="flex flex-col space-y-3">
        <div className="">
          <SupTitle>BLOG</SupTitle>
          <Title>Recent Posts</Title>
        </div>
        {/* blog cards */}
        <div className="flex flex-wrap items-center justify-between pt-10">
          {blogCards.map((blogCard: BlogCardType) => (
            <BlogCard key={blogCard.id} blogCard={blogCard} />
          ))}
        </div>
      </div>
    </SectionsContainer>
  );
};

export default BlogSection