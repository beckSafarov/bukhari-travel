import React from "react";
import Image from "next/image";
import Suptitle from "../../common/Typography/SupTitle";

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
          src={`/images/${image}.webp`}
          className="mb-5 rounded-[200px] "
          alt={name}
          width={90}
          height={90}
        />
        <Suptitle>{name}</Suptitle>
        <p className="text-sm mb-5">{job}</p>
        <p className="text-7xl mb-[-36px]">“</p>
        <p className="max-w-md">{comment}</p>
      </blockquote>
    </div>
  );
};

export default Card;