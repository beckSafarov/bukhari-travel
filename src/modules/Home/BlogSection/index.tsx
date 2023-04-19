import React from 'react'
import SectionsContainer from '../components/SectionsContainer'
import SupTitle from '@/modules/common/Typography/SupTitle'
import Title from '@/modules/common/Typography/Title'
import { BlogCardType } from '../types'
import BlogCard from './BlogCard'


const blogCards = [
  {
    id: 1,
    title: "Far far away, behind the word mountains",
    description:
      "Vokalia and Consonantia, there live the blind texts. Separated they live.",
    date: "March 14, 2023",
    image: "/images/1.png",
    path: "/",
  },
  {
    id: 2,
    title: "Far far away, behind the word mountains",
    description:
      "Vokalia and Consonantia, there live the blind texts. Separated they live.",
    date: "March 14, 2023",
    image: "/images/2.png",
    path: "/",
  },
  {
    id: 3,
    title: "Far far away, behind the word mountains",
    description:
      "Vokalia and Consonantia, there live the blind texts. Separated they live.",
    date: "March 14, 2023",
    image: "/images/3.png",
    path: "/",
  },
  {
    id: 4,
    title: "Far far away, behind the word mountains",
    description:
      "Vokalia and Consonantia, there live the blind texts. Separated they live.",
    date: "March 14, 2023",
    image: "/images/4.png",
    path: "/",
  },
];

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
          {blogCards.map((blogCard: BlogCardType, i: number) => (
            <BlogCard key={blogCard.id} blogCard={blogCard} />
          ))}
        </div>
      </div>
    </SectionsContainer>
  );
};

export default BlogSection