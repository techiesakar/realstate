import React from "react";
import { Properties } from "./properties";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  AreaChart,
  Bed,
  Car,
  File,
  Heart,
  HeartPulse,
  MoveDiagonal,
  Paperclip,
  PlusCircle,
  ShowerHead,
  User,
} from "lucide-react";

type PropertyType = {
  id: string;
  title: string;
  featured_image: string;
  type: string;
  city: string;
  for: string;
  price: string;
  area: string;
  posted_by: string;
  path: string;
  desc: string;
  bedrooms: string;
  bathrooms: string;
  garage: string;
  year_built: string;
};

type PropsType = {
  item: PropertyType;
};

export const FeaturedProperties = () => {
  return (
    <section className="w-full">
      <div className="site-container relative  ">
        <div className="text-xl font-semibold text-primary mb-6">
          Featured Properties
        </div>
        <div className="flex flex-col gap-5">
          {Properties.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const PropertyCard = ({ item }: PropsType) => {
  return (
    <div className="bg-white">
      <div className="flex justify-between gap-2">
        <Link href="/" className="relative w-[250px]">
          <AspectRatio ratio={4 / 3} className="bg-muted">
            <Image
              src={item.featured_image}
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <div className="absolute inset-0 w-full h-full bg-gray-900/40 hover:bg-gray-900/10 transition-all duration-300 rounded-md p-4 flex flex-col justify-between">
            <div className="text-white">
              <span className="text-xs font-light inline-block bg-lime-600">
                Featured
              </span>
              <div className=" font-semibold text-xl"></div>
            </div>
            <div className="text-white flex gap-2 justify-end items-center uppercase font-light text-sm">
              <Heart className="h-4 w-4" />
              <MoveDiagonal className="h-4 w-4" />
              <PlusCircle className="h-4 w-4" />
            </div>
          </div>
        </Link>
        <div className="right flex-1 bg-white p-5 space-y-2">
          <div className="flex items-center justify-between">
            <div className="bg-gray-700 text-white text-xs px-2 uppercase py-0.5 rounded-sm">
              {item.for}
            </div>
            <div className="font-medium">
              {parseInt(item.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
          </div>

          <div className="font-semibold capitalize">{item.title}</div>

          <div className="text-secondary font-light capitalize">
            {item.city}
          </div>
          <div className="flex items-center gap-5">
            <span className="flex gap-2 items-center">
              <Bed className="h-4 w-4" /> {item.bathrooms}
            </span>
            <span className="flex gap-2 items-center">
              <ShowerHead className="h-4 w-4" /> {item.bathrooms}
            </span>
            <span className="flex gap-2 items-center">
              <Car className="h-4 w-4" /> {item.garage}
            </span>
            <span className="flex gap-2 items-center">
              <AreaChart className="h-4 w-4" /> {item.area} Sq ft
            </span>
          </div>
          <div className=" capitalize flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" /> {item.posted_by}
            </div>
            <div className="flex items-center gap-2">
              <Paperclip className="h-4 w-4" /> {item.year_built}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
