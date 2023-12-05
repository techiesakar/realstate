import Image from "next/image";
import React from "react";

export const AboutRight = () => {
  return (
    <div className="relative flex items-start h-[500px]">
      <Image
        src="/banner.jpg"
        fill
        alt="about banner"
        className="object-cover shadow-2xl rounded"
      />
    </div>
  );
};
