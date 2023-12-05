"use client";
import React from "react";
import { HeroForm } from "./hero-form";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="bg-primary py-6 lg:py-10">
      <div className="site-container flex justify-between items-center">
        <div className="left text-white lg:w-1/2 flex flex-col space-y-5 lg:space-y-6 relative z-50">
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold lg:mb-3">
            The home you're dreaming of is waiting for you
          </h1>
          <p className="font-light md:text-lg  text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <HeroForm />
        </div>
        <div className="right lg:w-1/2 h-[620px] lg:block hidden relative z-30">
          <Image
            src="/banner.jpg"
            fill
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
