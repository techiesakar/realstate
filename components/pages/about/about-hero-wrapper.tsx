import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export function AboutHeroWrapper() {
  return (
    <section className="text section-banner">
      <div className="site-container grid grid-cols-2  pt-24  gap-20">
        <div className="flex flex-col justify-between">
          <div className="">
            <h1 className="text-5xl font-semibold mb-3 text-white">About us</h1>
            <p className="font-light text-lg  text-gray-200">
              Lorem ipsum dolor sit amet conse ctetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper
            </p>
          </div>
          <div className="text-2xl text-primary space-y-3 flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <StarIcon className="w-4 h-4 text-secondary" />
              <StarIcon className="w-4 h-4 text-secondary" />
              <StarIcon className="w-4 h-4 text-secondary" />
              <StarIcon className="w-4 h-4 text-secondary" />
              <StarIcon className="w-4 h-4 text-secondary" />
            </div>
            <h2>
              We’re a team born out of a passion for customer satisfaction
            </h2>
          </div>
        </div>
        <div className="relative flex items-start h-[500px]">
          <Image
            src="/banner.jpg"
            fill
            alt="about banner"
            className="object-cover shadow-2xl rounded"
          />
        </div>
      </div>
    </section>
  );
}
