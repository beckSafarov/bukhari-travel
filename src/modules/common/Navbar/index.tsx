import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
const NavLinks = [
  { label: 'Sights', path: '/' },
  { label: 'Food', path: '/' },
  { label: 'Hotels', path: '/' },
  { label: 'Traveling Tips', path: '/' },
]

interface NavLink {
  label: string
  path: string
}

const Navbar = () => {
  const [searchHovered, setSearchHovered] = useState(false)
  const [mobileMenuClicked, setMobileMenuClicked] = useState(false)

  return (
    <div className='relative w-full h-20 lg:px-20 py-30 flex items-center justify-between border-b border-gray-dark md:px-10 sm:px-10'>
      <div>
        <h1 className='text-2xl text-black font-serif font-bold'>Al Bukhari</h1>
      </div>
      {/* menu */}
      <div className='flex space-x-4 sm:hidden md:hidden lg:block'>
        {NavLinks.map((link: NavLink, i: number) => (
          <Link
            href={link.path}
            key={i}
            className='font-sans text-black-light cursor-pointer hover:underline hover:text-black'
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className='flex space-x-6 w-fit'>
        {/* search button */}
        <div className='flex justify-end items-center space-x-3'>
          <span style={{ visibility: searchHovered ? 'visible' : 'hidden' }}>
            Search{' '}
          </span>
          <BsSearch
            onMouseEnter={() => setSearchHovered(true)}
            onMouseLeave={() => setSearchHovered(false)}
            size='23'
            cursor={'pointer'}
          />
        </div>
        {/* mobile accordion toggle button */}
        <div
          className='bg-black w-10 h-10  flex justify-center items-center cursor-pointer lg:hidden'
          onClick={() => setMobileMenuClicked(!mobileMenuClicked)}
        >
          <GiHamburgerMenu color='white' size='20' />
        </div>
      </div>
      {/* mobile dropdown menu */}
      {mobileMenuClicked && (
        <div className='absolute top-20 left-0 bg-white w-full flex justify-start px-10 py-4'>
          {/* links container */}
          <div className='flex flex-col font-sans space-y-5 text-gray-med font-light text-base'>
            {NavLinks.map((link: NavLink, i: number) => (
              <Link
                href={link.path}
                key={i}
                className='cursor-pointer hover:underline hover:text-black'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar