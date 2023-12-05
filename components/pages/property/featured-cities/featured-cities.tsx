import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Play } from "lucide-react";
import { Cities } from "./cities";

type CityType = {
  city: string;
  total: string;
  imageUrl: string;
};

export const FeaturedCities = () => {
  return (
    <section className="w-full mt-28">
      <div className="site-container relative  ">
        <div className="text-xl font-semibold text-primary mb-6">
          Featured Cities
        </div>
        <div className="grid grid-cols-4 gap-4">
          {Cities.map((item) => (
            <CityCard
              key={item.city}
              city={item.city}
              total={item.total}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CityCard = ({ city, total, imageUrl }: CityType) => {
  return (
    <Link href="/" className="relative">
      <AspectRatio ratio={4 / 4} className="bg-muted">
        <Image
          src={imageUrl}
          alt="Photo by Drew Beamer"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
      <div className="absolute inset-0 w-full h-full bg-gray-900/40 hover:bg-gray-900/10 transition-all duration-300 rounded-md p-6 flex flex-col justify-between">
        <div className="text-white">
          <p className="text-xs font-light">{total} cities</p>
          <div className=" font-semibold text-xl">{city}</div>
        </div>
        <div className="text-white flex justify-between items-center uppercase font-light text-sm">
          <span>More Details</span>
          <Play className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};
