import React, { useRef, FormEvent } from "react";
import SectionsContainer from "../common/SectionsContainer";
import FullButton from "../common/Buttons/FullButton";

const QuestionFormSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // handle form submission here
  };

  const handleClick = () => {
    formRef.current?.submit();
  };
  return (
    <div className="bg-gray-light items-center flex">
      <SectionsContainer>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="flex justify-between ">
            <input
              type="text"
              placeholder="Your name"
              className="flex text-left justify-start items-start focus:outline-none focus:border-orange border px-4 md:px-8 w-[45%] py-2"
            />
            <input
              type="text"
              placeholder="Your email"
              className="focus:outline-none focus:border-orange border px-4 md:px-8 w-[45%] py-2"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="focus:outline-none focus:border-orange border px-4 md:px-8 py-2 mt-4 w-full"
            />
          </div>
          <div>
            <textarea
              cols={30}
              rows={7}
              placeholder="Message"
              className="focus:outline-none focus:border-orange border px-4 md:px-8 py-2  w-full mt-4 mb-3 flex justify-start text-start h-48"
            />
          </div>

          <FullButton onClick={handleClick}>Send Message</FullButton>
        </form>
      </SectionsContainer>
    </div>
  );
};

export default QuestionFormSection;
