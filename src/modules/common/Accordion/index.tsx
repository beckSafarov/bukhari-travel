import { AccordionElemType, LinkType } from '@/types'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { Disclosure, Transition } from '@headlessui/react'
import { AccordionProps } from '@/interfaces'


const Accordion = ({children, content, contentClass}:AccordionProps) => {
  return (
    <div>
      <Disclosure>
        <Disclosure.Button className='py-2'>
          {children}
        </Disclosure.Button>
        <Transition
          enter='transition duration-100 ease-out'
          enterFrom='transform scale-95 opacity-0'
          enterTo='transform scale-100 opacity-100'
          leave='transition duration-75 ease-out'
          leaveFrom='transform scale-100 opacity-100'
          leaveTo='transform scale-95 opacity-0'
        >
          <Disclosure.Panel className='text-gray-500'>
            <div
              className={`flex flex-col py-1 space-y-2 ${contentClass}`}
            >
              {content.map((link: AccordionElemType, i: number) => (
                <Link
                  className='w-full text-black font-sans'
                  href={link.path || '/'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  )
}

export default Accordion