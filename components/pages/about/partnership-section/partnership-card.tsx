import Image from "next/image";
import React from "react";
type PropsType = {
  imageUrl: string;
  name: string;
  type: string;
};
export const PartnerShipCard = ({ imageUrl, name, type }: PropsType) => {
  return (
    <div className="lg:even:pb-20 lg:odd:pt-20  rounded-2xl overflow-hidden flex flex-col cursor-pointer">
      <div className="relative mb-4 group shadow-xl hover:translate-y-2 duration-600  transition-all overflow-hidden w-full  flex items-center justify-center   bg-white ">
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={150}
          className="object-top p-10"
        />
      </div>
      <div className="bottom-content flex flex-col gap-0.5">
        <span className=" capitalize font-semibold text-primary">{name}</span>
        <span className="text-secondary capitalize font-semibold">{type}</span>
      </div>
    </div>
  );
};
