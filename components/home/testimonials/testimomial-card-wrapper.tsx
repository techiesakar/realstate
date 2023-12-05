import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

export const CardData = [
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/avatar-1.jpg",
    name: "Roy Bennett",
    position: "Manager",
    company: "Company Inc.",
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/avatar-2.jpg",
    name: "Kenya Soval",
    position: "Realtor",
    company: "Company Inc.",
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/avatar-3.jpg",
    name: "Kathleen Peterson",
    position: "Manager",
    company: "Company Inc.",
  },
];

const TestimonialCardWrapper = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center grid-cols-1 gap-6">
      {CardData.map((item) => (
        <div key={item.name} className="bg-white p-10 shadow-sm space-y-6">
          <Quote />
          <p className="text-sm leading-6">{item.testimony}</p>
          <div className="flex items-center  gap-3 text-sm">
            <Image
              src={item.imageUrl}
              alt={item.name}
              className="rounded-full"
              width={60}
              height={60}
            />
            <div className="space-y-2">
              <p>
                by<span className="font-semibold ml-2">{item.name}</span>
              </p>
              <p className="italic">
                {item.position}, {item.company}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCardWrapper;
