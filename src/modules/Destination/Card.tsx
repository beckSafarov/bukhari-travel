import React from "react";
import Image from "next/image";
import { CiLocationOn, CiMenuBurger } from "react-icons/ci";

const Card = () => {
  return (
    <div className="max-w-[250px] bg-white cursor-pointer">
      <div>
        {/**image wrapper */}
        <Image
          width={250}
          height={150}
          alt="iamge"
          src="/images/10.png"
          className="hover:scale-105 ease-in-out transition-all duration-500"
        />
      </div>
      {/*description block */}
      <div className="px-2">
        <h3 className="font-bold font-sans pt-2 pb-6">Best of Tashkent Tour</h3>
        <div className="flex">
          <CiLocationOn />
          <p className=" text-xs pb-4">Tashkent</p>
        </div>
        <h3 className="font-bold">29 March, 2023</h3>
        <div className="flex pt-2 pb-1 text-sm">
          <CiMenuBurger />
          <p>Other departures</p>
        </div>
      </div>
      {/**-------- */}
      {/**costDetails section */}
      <div className="bg-orange flex justify-between text-white">
        <div className="font-bold px-2 py-4">
          <h4>Price:</h4>
          <h4>€1840</h4>
        </div>
        <div className="px-2 py-4">
          <p>Available</p>
          <h4>9 days</h4>
        </div>
      </div>
      {/**------------ */}
    </div>
  );
};

export default Card;
