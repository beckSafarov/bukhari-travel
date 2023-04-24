import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import NavLinks from './NavLinks'
import { NavLinkType } from '@/types'
import Accordion from '../Accordion'
import { FiChevronDown } from 'react-icons/fi'
import Link from 'next/link'
import { SidebarProps } from '@/interfaces'


const Sidebar = ({mobileMenuClicked, onClose}:SidebarProps) => {
  return (
    <div
      className={'fixed top-0 h-full left-full w-screen bg-transparent flex justify-end slideFromRight z-10'}
      style={{ left: mobileMenuClicked ? '0' : '100%' }}
    >
      <div className='relative md:w-2/5 xsm:w-1/2 bg-white h-full py-14 md:px-8 xsm:px-4'>
        <div
          onClick={onClose}
          className='absolute right-5 md:top-2 xsm:top-4 cursor-pointer'
        >
          <AiOutlineClose color='black' size='35' />
        </div>
        <div className='flex flex-col space-y-3'>
          {NavLinks.map((link: NavLinkType, i: number) =>
            link.content ? (
              <Accordion
                key={i}
                content={link.content}
                contentClass='text-gray-med font-sans text-sm pl-5'
              >
                <div className='flex justify-center items-center space-x-1'>
                  <span>{link.label}</span>
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
  )
}

export default Sidebar