import React, { useState } from "react";
import SupTitle from "../../common/Typography/SupTitle";
import Title from "../../common/Typography/Title";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

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
    <div className="pb-20">
      <SupTitle>FAQ</SupTitle>
      <Title>
        Frequently Asked <br /> Questions
      </Title>
      <div className="pb-10 mt-5">
        {data.map((item, index) => (
          <div className=" pt-3 pb-3 cursor-pointer" key={index}>
            <div
              className={`${
                index === openIndex ? "bg-orange text-white" : ""
              } cursor-pointer transition-all`}
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            >
              <div className="flex p-3 font-sans font-medium align-middle cursor-pointer">
                <span className=" text-xl pr-2 pt-1">
                  {index === openIndex ? (
                    <AiOutlineMinus className=" font-serif " />
                  ) : (
                    <AiOutlinePlus className="" />
                  )}
                </span>
                <h2 className=" text-xl ">{item.question}</h2>
              </div>
            </div>

            <div
              className={`${
                index === openIndex ? "block" : "hidden"
              } mt-[15px] px-5`}
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
