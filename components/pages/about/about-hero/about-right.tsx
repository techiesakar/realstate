import Image from "next/image";
import React from "react";

export const AboutRight = () => {
  return (
    <div className="relative flex items-start h-96 lg:h-[500px]">
      <Image
        src="/banner.jpg"
        fill
        alt="about banner"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover shadow-2xl rounded"
      />
    </div>
  );
};
