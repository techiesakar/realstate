import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
type PropsType = {
  className?: string;
};
export const ValuationRequestSection = ({ className }: PropsType) => {
  return (
    <section className={cn("pt-20", className)}>
      <div className="site-container bg-primary rounded-xl p-20 flex justify-between gap-20 relative">
        <div className="w-1/2 flex flex-col space-y-8 pr-16">
          <div className="uppercase text-secondary text-left font-semibold">
            Are you selling?
          </div>
          <h2 className="text-white text-3xl font-bold">
            We deliver accurate property valuation reports
          </h2>
        </div>
        <div className="w-1/2 flex flex-col  space-y-8 pr-10">
          <p className="text-gray-300 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar sed do eiusmod
            tempor.
          </p>
          <Button
            type="button"
            className="bg-secondary w-fit hover:bg-hover text-white font-medium px-4 py-2"
          >
            Request a valuation
          </Button>
        </div>
        <Image
          src="/valuation.png"
          width={250}
          height={250}
          alt=""
          className="absolute -right-10 bottom-0 top-0 h-full"
        />
      </div>
    </section>
  );
};
