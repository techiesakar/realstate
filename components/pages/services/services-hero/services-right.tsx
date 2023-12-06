import Image from "next/image";
import React from "react";

export const ServicesRight = () => {
  return (
    <div className="relative flex items-start h-96 lg:h-[500px]">
      <Image
        src="/services.jpg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="about banner"
        className="object-cover shadow-2xl rounded"
      />
    </div>
  );
};
