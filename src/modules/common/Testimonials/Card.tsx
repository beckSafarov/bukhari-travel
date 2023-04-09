import React from "react";
import Image from "next/image";
import Suptitle from "../Typography/SubTitle";

type Props = {
  name: string;
  job: string;
  comment: string;
  image: string;
};
const Card = ({ name, job, comment, image }: Props) => {
  return (
    <div className="mb-[60px]">
      <blockquote>
        <Image
          src={`/images/${image}.jpg`}
          className="mb-5 rounded-[200px] "
          alt="image"
          width={200}
          height={220}
        />
        <Suptitle>{name}</Suptitle>
        <p className=" text-sm mb-5">{job}</p>
        <p></p>
        <span className=" text-7xl">“</span>
        <p className=" max-w-md">{comment}</p>
        <p></p>
      </blockquote>
    </div>
  );
};

export default Card;
