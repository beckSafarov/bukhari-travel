import React, { useState } from "react";
import SupTitle from "../Typography/SupTitle";
import Title from "../Typography/Title";
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
      <div className="p-20">
        {data.map((item, index) => (
          <div className=" pt-3 pb-5" key={index}>
            <div
              className={`${
                index === openIndex ? "bg-orange text-white" : ""
              } flex cursor-pointer transition-all`}
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            >
              <span className=" text-2xl pr-2 ">
                {index === openIndex ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </span>
              <h2 className=" text-2xl">{item.question}</h2>
            </div>

            <div
              className={`${
                index === openIndex ? "block" : "hidden"
              } mt-[15px]`}
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
