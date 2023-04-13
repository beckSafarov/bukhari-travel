import React from "react";
import { BsLamp } from "react-icons/bs";

const Card = () => {
  return (
    <div className="flex justify-center align-middle items-center flex-col w-[100%] p-3 col font-sans">
      <span className="flex align-middle justify-center items-center w-[90px] h-[90px] rounded-full bg-gray-footer mb-6">
        <BsLamp className="fill-orange w-[40px] h-[40px]" />
      </span>
      <div className="flex flex-col align-middle justify-center items-center max-w-[233px] font-normal">
        <h3 className="flex text-center text-xl font-semibold mb-2">
          Reduce costs to a minimum
        </h3>
        <p className="flex text-center mb-1">
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
      </div>
    </div>
  );
};

export default Card;
