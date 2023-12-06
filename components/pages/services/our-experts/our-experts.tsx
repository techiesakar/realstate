import React from "react";
import PageSectionlayout from "@/components/pages/page-section-layout";
import { agents } from "./agents";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type PropsType = {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  company: string;
};

export const ExpertSection = () => {
  return (
    <PageSectionlayout title="realtors" subtitle="Meet our experts">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10  p-6 rounded ">
        {agents.map((agent) => (
          <ExpertCard
            key={agent.name}
            name={agent.name}
            position={agent.position}
            bio={agent.bio}
            company={agent.company}
            imageUrl={agent.imageUrl}
          />
        ))}
      </div>
    </PageSectionlayout>
  );
};

export const ExpertCard = ({
  name,
  company,
  position,
  bio,
  imageUrl,
}: PropsType) => {
  return (
    <div className="flex flex-col cursor-auto even:mb-8 odd:mt-8 hover:shadow-lg  hover:scale-110 duration-300  transition-all justify-center items-center p-8 text-center gap-4 bg-white rounded-md">
      <Image
        src={imageUrl}
        height={120}
        width={120}
        className="rounded-full"
        alt={name}
      />
      <div className="space-y-4">
        <p className="text-secondary font-semibold text-lg">{name}</p>
        <p className="text-primary font-medium text-sm">
          {position}, {company}
        </p>
        <p className="text-sm text-gray-600 font-light leading-6">{bio}</p>
        <Button
          asChild
          variant="ghost"
          className="text-secondary hover:text-hover "
        >
          <Link href="/">View Profile</Link>
        </Button>
      </div>
    </div>
  );
};
