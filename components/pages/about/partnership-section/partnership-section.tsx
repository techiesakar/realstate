import Image from "next/image";
import React from "react";
import { PartnerShipCard } from "./partnership-card";
import AboutSectionLayout from "../about-section-layout";
export const CardData = [
  {
    imageUrl: "/partner-1.jpg",
    name: "Charles Bentley",
    type: "Land & Developer",
  },
  {
    imageUrl: "/partner-2.jpg",
    name: "Horizon Homes",
    type: "Property Management",
  },
  {
    imageUrl: "/partner-3.jpg",
    name: "Home",
    type: "Real Estate Developer",
  },
  {
    imageUrl: "/partner-4.jpg",
    name: "Hillstrom",
    type: "Real Estate",
  },
];
export const PartnerShipSection = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return (
    <AboutSectionLayout
      title="Partnership"
      subtitle="We work with the best companies"
    >
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10">
        {CardData.map((item) => (
          <PartnerShipCard
            key={item.name}
            name={item.name}
            imageUrl={item.imageUrl}
            type={item.type}
          />
        ))}
      </div>
      <Image
        src="/world.png"
        alt=""
        width={800}
        height={500}
        className="absolute right-0 top-0 bottom-0 -z-10"
      />
    </AboutSectionLayout>
  );
};
