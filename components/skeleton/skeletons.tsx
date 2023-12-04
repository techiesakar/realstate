import React from "react";
import { Skeleton } from "../ui/skeleton";

export const AboutLeadershipSkeleton = () => {
  return (
    <section className="mt-32">
      <div className="site-container space-y-4">
        <Skeleton className="w-[220px] h-[24px] " />
        <Skeleton className=" w-[320px] h-[24px]" />
        <div className="grid lg:grid-cols-4 grid-cols-2">
          <Skeleton className="w-[255px] h-[300px] mb-4" />
          <Skeleton className="w-[255px] h-[300px] mb-4" />
          <Skeleton className="w-[255px] h-[300px] mb-4" />
          <Skeleton className="w-[255px] h-[300px] mb-4" />
        </div>
      </div>
    </section>
  );
};

export const FeaturedpropertiesSkeleton = () => {
  return (
    <section className="mt-32">
      <div className="site-container space-y-4">
        <Skeleton className="w-[220px] h-[24px] " />
        <Skeleton className=" w-[320px] h-[24px]" />
        <div className="grid lg:grid-cols-4 grid-cols-2">
          <Skeleton className="w-[255px] h-[300px] mb-4" />
          <Skeleton className="w-[255px] h-[300px] mb-4" />
          <Skeleton className="w-[255px] h-[300px] mb-4" />
          <Skeleton className="w-[255px] h-[300px] mb-4" />
        </div>
      </div>
    </section>
  );
};
