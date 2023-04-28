import React, { useState } from "react";
import BlogCard from "@/modules/common/BlogCard";
import SectionsContainer from '@/modules/common/SectionsContainer'
import Layout from "../common/Layout";
import StaticHero from "@/modules/common/Hero/StaticHero";
import Data from "@/modules/Blog/BlogPageData";
import { BlogCardType } from "@/types";

const BlogPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [animation, setAnimation] = useState(false);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(Data.length / itemsPerPage);
  const maxButtons = 5;

  const handleClick = (newPage: number) => {
    setAnimation(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setAnimation(false);
    }, 100);
  };

  const getPaginationButtons = () => {
    let start = Math.floor((currentPage - 1) / maxButtons) * maxButtons;
    return new Array(maxButtons).fill(0).map((_, idx) => start + idx + 1);
  };

  return (
    <Layout title='Blog'>
      <StaticHero
        title='Blog'
        subtitle='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
      />
      <div className='py-28'>
        <SectionsContainer>
          <div className='blog mx-auto'>
            <div className='grid lg:grid-cols-4 grid-cols-2 transition-all duration-700'>
              {Data.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              ).map((blogcard: BlogCardType) => (
                <div key={blogcard.id} className=' px-3'>
                  <BlogCard blogCard={blogcard} />
                </div>
              ))}
            </div>
            <div className='flex justify-center py-12'>
              {getPaginationButtons().map((page) => (
                <button
                  key={page}
                  className={`${
                    page === currentPage
                      ? 'bg-orange text-white'
                      : 'bg-orange-light '
                  } ${
                    animation ? 'slideFromRight' : ''
                  } text-orange font-semibold py-4 px-4 mx-1 rounded-full cursor-pointer h-8 w-8 flex justify-center items-center transition-all hover:bg-orange hover:text-white duration-500`}
                  onClick={() => handleClick(page)}
                  disabled={page > totalPages}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </SectionsContainer>
      </div>
    </Layout>
  )
};
export default BlogPage;
