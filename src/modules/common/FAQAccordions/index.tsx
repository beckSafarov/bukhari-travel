import { FAQProps } from '@/interfaces'
import React, { useCallback, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const FAQAccordions = ({data, className, bordered, noHighlight}:FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const border = bordered ? 'border border-x-0 border-t-0 border-[#ccc]' : ''

  const getBgColor = (index:number):string=>{
    if(noHighlight) return ''
    return index === openIndex ? 'bg-orange text-white' : ''
  }

  return (
    <>
      {data.map((item, index) => (
        <div
          className={`pt-1 pb-1 cursor-pointer transition-all duration-700 ${className}`}
          key={index}
        >
          <div
            className={`${getBgColor(index)} cursor-pointer transition-all duration-300 ${border}`}
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
          >
            <div className={` flex p-3 align-middle cursor-pointer`}>
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