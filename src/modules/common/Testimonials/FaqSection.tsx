import React from "react";
import SupTitle from "../SupTitle";
import Title from "../Title";

const FaqSection = () => {
  return (
    <div>
      <SupTitle>FAQ</SupTitle>
      <Title>
        Frequently Asked <br /> Questions
      </Title>
      <div className="custom-accordion" id="accordion_1">
        <div className="accordion-item">
          <h2 className="mb-0">
            <button>How to download and register?</button>
          </h2>
          <div>
            <div className="accordion-body">Far</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="mb-0">
            <button>How to create your paypal account?</button>
          </h2>
          <div>
            <div className="accordion-body">A .</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="mb-0">
            <button>How to link your paypal and bank account?</button>
          </h2>
          <div>
            <div className="accordion-body">When</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="mb-0">
            <button>We are better than others?</button>
          </h2>
          <div>
            <div className="accordion-body">When</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
