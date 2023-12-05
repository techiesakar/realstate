import React from "react";
import { FeaturedCard } from "./featured-card";
import { Button } from "@/components/ui/button";

export const FeaturedSection = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  return (
    <section className="pt-10 lg:pt-16">
      <div className="site-container mx-auto">
        <div className="section-title text-secondary uppercase font-bold mb-3 lg:mb-5">
          Featured Properties
        </div>
        <h2 className="lg:text-3xl text-2xl font-semibold text-gray-800 mb-8">
          Finest selection of our properties
        </h2>
        <div>
          <div className="w-full space-y-10 lg:space-y-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
            </div>
            <div className="flex justify-center col-span-3">
              <Button
                variant="outline"
                className="text-secondary border border-secondary w-32 hover:border-hover hover:text-hover transition-all"
              >
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
