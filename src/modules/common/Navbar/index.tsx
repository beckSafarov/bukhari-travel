import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { mobileSideSpacing } from '@/utils/index'
import { NavLinkType } from '@/types'
import DropDown from '../DropDown'
import NavLinks from './NavLinks'
import Sidebar from './Sidebar'
const maxWidth = process.env.NEXT_PUBLIC_MAX_WIDTH

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
                  <DropDown label={link.label} data={link.content} key={i} />
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
            <Link href='/contact'>
              <button className='text-white border-2 border-gray rounded-full py-1.5 px-5 text-sm hover:bg-orange hover:border-orange transition duration-450'>
                Contact Us
              </button>
            </Link>
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
      {/* mobile sidebar */}
      <Sidebar
        mobileMenuClicked={mobileMenuClicked}
        onClose={() => setMobileMenuClicked(false)}
      />
    </>
  )
}

export default Navbar
