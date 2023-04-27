import { blogCards } from '@/modules/Home/BlogSection/BlogCardsData'
import BlogCard from '@/modules/common/BlogCard'
import SectionsContainer from '@/modules/common/SectionsContainer'
import SubTitle from '@/modules/common/Typography/SubTitle'
import SupTitle from '@/modules/common/Typography/SupTitle'
import Title from '@/modules/common/Typography/Title'
import { BlogCardType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaTelegram, FaTwitter } from 'react-icons/fa'

const ArticleSection = () => {
  return (
    <SectionsContainer size='sm' className='pt-20'>
      <div className='pb-12'>
        <SupTitle>Sample Category</SupTitle>
        <Title>Sample Title</Title>
      </div>
      <div className='pb-5 font-sans flex flex-col space-y-3'>
        <p>
          <strong>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            dolorem ratione cupiditate harum veniam modi? Rerum aperiam vitae
            non eos?
          </strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          numquam sunt, facere corporis animi accusantium eum voluptas eligendi,
          debitis mollitia odit distinctio tempore omnis dolore temporibus nisi
          accusamus nam esse ab veritatis? Delectus et eius ratione,
          praesentium, perspiciatis accusamus laudantium id aperiam iusto autem
          similique ipsum debitis eos ipsam inventore?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          numquam sunt, facere corporis animi accusantium eum voluptas eligendi,
          debitis mollitia odit distinctio tempore omnis dolore temporibus nisi
          accusamus nam esse ab veritatis? Delectus et eius ratione,
          praesentium, perspiciatis accusamus laudantium id aperiam iusto autem
          similique ipsum debitis eos ipsam inventore?
        </p>
        <div className='w-full flex justify-center items-center py-10'>
          <div className='flex flex-col space-y-2'>
            <Image
              src='/images/1.png'
              alt='Sample Title'
              width='500'
              height='500'
            />
            <SubTitle className='text-center'>Sample Caption</SubTitle>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          numquam sunt, facere corporis animi accusantium eum voluptas eligendi,
          debitis mollitia odit distinctio tempore omnis dolore temporibus nisi
          accusamus nam esse ab veritatis? Delectus et eius ratione,
          praesentium, perspiciatis accusamus laudantium id aperiam iusto autem
          similique ipsum debitis eos ipsam inventore?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          numquam sunt, facere corporis animi accusantium eum voluptas eligendi,
          debitis mollitia odit distinctio tempore omnis dolore temporibus nisi
          accusamus nam esse ab veritatis? Delectus et eius ratione,
          praesentium, perspiciatis accusamus laudantium id aperiam iusto autem
          similique ipsum debitis eos ipsam inventore?
        </p>
      </div>
      {/* socials */}
      <div className='py-5 px-5 w-full flex justify-center items-center border-y-[1px] border-[#d9d9d9]'>
        <div className='flex flex-col space-y-2'>
          <p className='text-sm'>Share with friends</p>
          <div className='flex justify-between'>
            <Link href='/'>
              <FaTelegram size='30px' color='#3DA3E1' />
            </Link>
            <Link href='/'>
              <FaFacebook size='30px' color='#3b5998' />
            </Link>
            <Link href='/'>
              <FaTwitter size='30px' color='skyblue' />
            </Link>
          </div>
        </div>
      </div>
    </SectionsContainer>
  )
}

export default ArticleSection