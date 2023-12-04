import Image from "next/image";
import React from "react";
type PropsType = {
  name: string;
  imageUrl: string;
  bio: string;
  position: string;
};
export const LeadershipCard = ({
  name,
  imageUrl,
  bio,
  position,
}: PropsType) => {
  return (
    <div className="h-[560px] p-4 w-full lg:even:pb-20 lg:odd:pt-20  rounded-2xl overflow-hidden flex flex-col cursor-pointer">
      <div className="relative mb-4 group overflow-hidden w-full h-full">
        <div className="absolute group-hover:w-0 transition-all duration-300  inset-0 z-50 h-full w-full bg-gradient-to-t from-gray-800/90 via-gray-300/20 to-transparent"></div>
        <Image
          src={imageUrl}
          alt={name}
          width={360}
          height={460}
          className="object-cover object-top w-full h-full"
        />
        <div className=" p-4 absolute group-hover:right-0 flex justify-center items-center text-center transition-all    duration-300 -right-full top-0 h-full w-full bg-white/90 rounded z-50">
          {bio}
        </div>
      </div>
      <div className="bottom-content flex flex-col gap-0.5">
        <span className=" capitalize font-semibold text-primary">{name}</span>
        <span className="text-secondary capitalize font-semibold">
          {position}
        </span>
      </div>
    </div>
  );
};
