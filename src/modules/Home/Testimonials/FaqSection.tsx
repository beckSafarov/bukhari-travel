import React from "react";
import SupTitle from "../../common/Typography/SupTitle";
import Title from "../../common/Typography/Title";
import FAQAccordions from "@/modules/common/FAQAccordions";


const FaqSection = () => {
  
  const data = Array(4).fill({
    question: 'Why is this happening?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt autem nulla est inventore nostrum accusantium saepe veritatis accusamus consequatur officia ipsum dolor sit amet consectetur adipisicing elit.Incidunt autem nulla est inventore nostr',
  })

  return (
    <div className='flex-1 pb-20 transition-all duration-700'>
      <SupTitle>FAQ</SupTitle>
      <Title>
        Frequently Asked <br /> Questions
      </Title>
      <div className='pt-5 pb-10'>
        <FAQAccordions data={data} />
      </div>
    </div>
  )
};

export default FaqSection;
