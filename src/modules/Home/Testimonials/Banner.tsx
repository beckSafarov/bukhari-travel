import React from "react";
import FullButton from "../../common/FullButton";

const Banner = () => {
  return (
    <div className=" bg-[#fc8621] py-12 px-4">
      <div className=" mx-16 flex justify-between align-middle ">
        <div className="">
          <h2 className="text-white text-[26px]">
            Begin your adventureous journey here.
          </h2>
        </div>
        <div>
          <FullButton>Get Started</FullButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
