import { FAQProps } from '@/interfaces'
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const FAQAccordions = ({data, className}:FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      {data.map((item, index) => (
        <div
          className={`pt-1 pb-1 cursor-pointer transition-all duration-700 ${className}`}
          key={index}
        >
          <div
            className={`${
              index === openIndex ? 'bg-orange text-white' : ''
            } cursor-pointer transition-all duration-300`}
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
          >
            <div className={` flex p-3   align-middle cursor-pointer`}>
              <span className={`text-base pr-2 pt-1 `}>
                {index === openIndex ? <FaMinus /> : <FaPlus />}
              </span>
              <h2
                className={` ${
                  index === openIndex ? 'font-black' : 'font-normal'
                } text-base  font-sans`}
              >
                {item.question}
              </h2>
            </div>
          </div>

          <div
            className={`${
              index === openIndex ? 'block' : 'hidden'
            } py-2 mt-[15px] px-5 text-sm transition-all duration-700`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </>
  )
}

export default FAQAccordions