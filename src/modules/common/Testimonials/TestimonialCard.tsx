import React from 'react'
import Image from 'next/image'
import Suptitle from '@/modules/common/Typography/SupTitle'
import { TestimonialsCardProps } from '@/interfaces'

const Card = ({ name, job, comment, image }: TestimonialsCardProps) => {
  return (
    <div className="mb-[60px]">
      <blockquote>
        <div className="flex flex-col lg:items-start items-center">
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

          <p className="lg:max-w-md">{comment}</p>
        </div>
      </blockquote>
    </div>
  );
}

export default Card
