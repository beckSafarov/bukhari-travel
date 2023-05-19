import React, { useRef } from "react";
import FullButton from "../Buttons/FullButton";
import { QuestionFormProps } from "@/interfaces";

const QuestionForm = ({
  formRef,
  handleSubmit,
  handleClick,
  buttonText,
}: QuestionFormProps) => {
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="flex justify-between ">
        <input
          type="text"
          placeholder="Your name"
          className="flex text-left justify-start items-start rounded-lg border-gray focus:outline-none focus:border-orange border px-4 md:px-8 w-[45%] py-2"
        />
        <input
          type="text"
          placeholder="Your email"
          className="focus:outline-none focus:border-orange rounded-lg border border-gray px-4 md:px-8 w-[45%] py-2"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Subject"
          className="focus:outline-none border-gray focus:border-orange rounded-lg border px-4 md:px-8 py-2 mt-4 w-full"
        />
      </div>
      <div>
        <textarea
          cols={30}
          rows={7}
          placeholder="Message"
          className="focus:outline-none border-gray focus:border-orange rounded-lg border px-4 md:px-8 py-2  w-full mt-4 mb-3 flex justify-start text-start h-48"
        />
      </div>
      <div className="flex justify-end">
        <FullButton onClick={handleClick} className="">{buttonText}</FullButton>
      </div>
    </form>
  );
};

export default QuestionForm;
