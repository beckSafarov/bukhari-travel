import React from "react";
import FullButton from "../FullButton";

const Banner = () => {
  return (
    <div className="flex bg-orange justify-between">
      <h2 className="p-20">Begin your adventureous journey here</h2>
      <FullButton>Get Started</FullButton>
    </div>
  );
};

export default Banner;
