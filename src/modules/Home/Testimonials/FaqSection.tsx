import React, { useState } from "react";
import SupTitle from "../../common/Typography/SupTitle";
import Title from "../../common/Typography/Title";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Playfair_Display } from "@next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const data = [
    {
      id: 1,
      question: "Why is this happening?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt autem nulla est inventore nostrum accusantium saepe veritatis accusamus consequatur officia ipsum dolor sit amet consectetur adipisicing elit.Incidunt autem nulla est inventore nostr",
    },
    {
      id: 2,
      question: "Why is this happening?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt autem nulla est inventore nostrum accusantium saepe veritatis accusamus consequatur officia ipsum dolor sit amet consectetur adipisicing elit.Incidunt autem nulla est inventore nostr",
    },
    {
      id: 3,
      question: "Why is this happening?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt autem nulla est inventore nostrum accusantium saepe veritatis accusamus consequatur officia ipsum dolor sit amet consectetur adipisicing elit.Incidunt autem nulla est inventore nostr",
    },
    {
      id: 4,
      question: "Why is this happening?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt autem nulla est inventore nostrum accusantium saepe veritatis accusamus consequatur officia ipsum dolor sit amet consectetur adipisicing elit.Incidunt autem nulla est inventore nostr",
    },
  ];
  return (
    <div className="pb-20 transition-all duration-700">
      <SupTitle>FAQ</SupTitle>
      <Title>
        Frequently Asked <br /> Questions
      </Title>
      <div className="pb-10 mt-5">
        {data.map((item, index) => (
          <div
            className=" pt-3 pb-3 cursor-pointer transition-all duration-700"
            key={index}
          >
            <div
              className={`${
                index === openIndex ? "bg-orange text-white" : ""
              } cursor-pointer transition-all duration-500`}
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            >
              <div className={` flex p-3  align-middle cursor-pointer`}>
                <span className={`text-base  pr-2 pt-1 font-extrabold`}>
                  {index === openIndex ? (
                    <AiOutlineMinus className="  " />
                  ) : (
                    <AiOutlinePlus className="" />
                  )}
                </span>

                <h2
                  className={`${
                    index === openIndex ? "font-extrabold" : ""
                  } text-base font-normal font-sans`}
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
