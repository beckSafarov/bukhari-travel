import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { mobileSideSpacing } from '@/modules/utils'
import { NavLinkType } from '@/types'
import DropDown from '../DropDown'
import Accordion from '../Accordion'
import { FiChevronDown } from 'react-icons/fi'
const maxWidth = process.env.NEXT_PUBLIC_MAX_WIDTH

const NavLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/aboutus' },
  {
    label: 'Tours',
    content: [
      { label: 'Tashkent', path: '/' },
      { label: 'Samarkand', path: '/' },
      { label: 'Bukhara', path: '/' },
      { label: 'Khiva', path: '/' },
    ],
  },
  { label: 'Blog', path: '/blog' },
]

const Navbar = ({}) => {
  const [mobileMenuClicked, setMobileMenuClicked] = useState(false)
  return (
    <>
      <div className={'absolute top-5 w-full h-20 py-30 z-10'}>
        <div
          className={`my-0 mx-auto flex items-center justify-between  ${mobileSideSpacing}`}
          style={{ maxWidth: `${maxWidth}px` }}
        >
          <div className='flex items-center justify-center space-x-10'>
            <Link href='/'>
              <h1 className='text-2xl text-white font-serif font-bold'>
                Al Bukhari
              </h1>
            </Link>
            {/* menu */}
            <div className='flex justify-center text-white-dimmed space-x-7 text-sm md:hidden sm:hidden xsm:hidden  lg:block'>
              {NavLinks.map((link: NavLinkType, i: number) =>
                link.content ? (
                  <DropDown data={link.content} key={i} />
                ) : (
                  <Link
                    href={link.path || '/'}
                    key={i}
                    className='font-sans px-2 cursor-pointer hover:text-white'
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className='lg:block md:hidden sm:hidden xsm:hidden'>
            <button className='text-white border-2 border-gray rounded-full py-1.5 px-5 text-sm hover:bg-orange hover:border-orange transition duration-450'>
              Contact Us
            </button>
          </div>
          <div className='flex space-x-6 w-fit lg:hidden'>
            {/* mobile accordion toggle button */}
            <div
              onClick={() => setMobileMenuClicked(!mobileMenuClicked)}
              className='cursor-pointer'
            >
              <AiOutlineMenu color='white' size='35' />
            </div>
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div
        className={`fixed top-0 h-full left-full w-screen bg-transparent flex justify-end slideFromRight z-10`}
        style={{ left: mobileMenuClicked ? '0' : '100%' }}
      >
        <div className='relative md:w-2/5 xsm:w-1/2 bg-white h-full py-14 md:px-8 xsm:px-4'>
          <div
            onClick={() => setMobileMenuClicked(false)}
            className='absolute right-5 md:top-2 xsm:top-4 cursor-pointer'
          >
            <AiOutlineClose color='black' size='35' />
          </div>
          <div className='flex flex-col space-y-3'>
            {NavLinks.map((link: NavLinkType, i: number) =>
              link.content ? (
                <Accordion key={i} content={link.content} contentClass='text-gray-med font-sans text-sm pl-5'>
                  <div className='flex justify-center items-center space-x-1'>
                    <span>Tours</span>
                    <FiChevronDown />
                  </div>
                </Accordion>
              ) : (
                <Link
                  href={link.path || '/'}
                  key={i}
                  className='font-sans md:text-sm xsm:text-base cursor-pointer hover:text-orange'
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
