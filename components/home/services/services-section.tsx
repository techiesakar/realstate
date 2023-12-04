import { Globe, Group, HeartHandshake, Trophy } from "lucide-react";
import React from "react";
import { ServicesForm } from "./services-form";

export const servicesData = [
  {
    icon: Group,
    number: "100",
    label: "Real estate agents",
  },
  {
    icon: Globe,
    number: "15",
    label: "Countries we operate",
  },
  {
    icon: Trophy,
    number: "25",
    label: "Years of experience",
  },
  {
    icon: HeartHandshake,
    number: "3500",
    label: "Contracts closed",
  },
];

export const ServiceSection = () => {
  return (
    <section className="pt-16">
      <div className="site-container grid grid-cols-12 items-center gap-20">
        <div className="col-span-7 flex flex-col space-y-6">
          <div className="uppercase text-secondary text-left  font-semibold">
            Services
          </div>
          <h2 className="text-primary text-2xl font-semibold">
            The reason why will get benefits by choosing our services
          </h2>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar sed do eiusmod
            tempor incidi dunt dapibus leo.
          </p>
          <div className="grid grid-cols-2 gap-16">
            {servicesData.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-6">
                  <div>
                    <ItemIcon className="w-14 h-14 text-sky-500" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-semibold text-gray-600">
                      +{item.number}
                    </span>
                    <span className=" text-sm text-gray-600">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-5 flex flex-col space-y-8 ">
          {/* Services Form */}
          <ServicesForm />
        </div>
      </div>
    </section>
  );
};
