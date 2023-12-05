import React, { ReactElement } from "react";
import PageSectionlayout from "../../page-section-layout";
import { Services } from "./services";

type PropsType = {
  title: string;
  icon: any;
  content: string;
};
export const ServiceSection = () => {
  return (
    <PageSectionlayout title="services" subtitle="How we can help you">
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-16 mt-10">
        {Services.map((item) => {
          return (
            <ServicesCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              content={item.content}
            />
          );
        })}
      </div>
    </PageSectionlayout>
  );
};

export const ServicesCard = ({ title, icon, content }: PropsType) => {
  const Icon = icon;
  return (
    <div className="flex gap-6">
      <div>
        <Icon className="w-10 h-10 text-sky-400" />
      </div>
      <div className="space-y-3">
        <div className="text-xl text-primary font-semibold">{title}</div>
        <p className="text-sm text-gray-600 leading-6">{content}</p>
      </div>
    </div>
  );
};
