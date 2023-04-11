import React, { useState } from "react";
import SupTitle from "../../common/Typography/SupTitle";
import Title from "../../common/Typography/Title";
import { FaPlus, FaMinus } from "react-icons/fa";


const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const data = Array(4).fill({
    question: 'Why is this happening?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt autem nulla est inventore nostrum accusantium saepe veritatis accusamus consequatur officia ipsum dolor sit amet consectetur adipisicing elit.Incidunt autem nulla est inventore nostr',
  })

  return (
    <div className="flex-1 pb-20 transition-all duration-700">
      <SupTitle>FAQ</SupTitle>
      <Title>
        Frequently Asked <br /> Questions
      </Title>
      <div className="pb-10 mt-5">
        {data.map((item, index) => (
          <div
            className="lg:pt-3 lg:pb-3 md:pt-2 md:p-b-2 pt-1 pb-1 cursor-pointer transition-all duration-700"
            key={index}
          >
            <div
              className={`${
                index === openIndex ? "bg-orange text-white" : ""
              } cursor-pointer transition-all duration-300`}
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            >
              <div className={` flex p-3   align-middle cursor-pointer`}>
                <span className={`text-base pr-2 pt-1 `}>
                  {index === openIndex ? <FaMinus /> : <FaPlus />}
                </span>

                <h2
                  className={` ${
                    index === openIndex ? "font-black" : "font-normal"
                  } text-base  font-sans`}
                >
                  {item.question}
                </h2>
              </div>
            </div>

            <div
              className={`${
                index === openIndex ? "block" : "hidden"
              } mt-[15px] px-5 text-sm transition-all duration-700`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;