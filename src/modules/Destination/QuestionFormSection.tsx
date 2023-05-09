import React, { useRef, FormEvent } from "react";
import SectionsContainer from "../common/SectionsContainer";
import QuestionForm from "../common/QuestionForm";

import Title from "../common/Typography/Title";

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
    <div className="bg-gray-light items-center flex py-10">
      <SectionsContainer size="sm">
        <Title className="py-4">Private Tour Enquiry</Title>
        <QuestionForm
          formRef={formRef}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          buttonText="Ask question"
        />
      </SectionsContainer>
    </div>
  );
};

export default QuestionFormSection;
