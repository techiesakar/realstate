import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

export const ServicesBottomLeft = () => {
  return (
    <div className="lg:text-2xl text-lg text-primary space-y-3 flex flex-col justify-center">
      <div className="flex items-center gap-2">
        <StarIcon className="w-4 h-4 text-secondary" />
        <StarIcon className="w-4 h-4 text-secondary" />
        <StarIcon className="w-4 h-4 text-secondary" />
        <StarIcon className="w-4 h-4 text-secondary" />
        <StarIcon className="w-4 h-4 text-secondary" />
      </div>
      <h2 className="text-white lg:text-primary md:font-normal font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </h2>
      <div className="flex gap-5 items-center">
        <Avatar>
          <AvatarImage src="/avatar-1.jpg" alt="User" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="">
          <p className="lg:text-primary text-white text-lg font-semibold">
            Patricia Whatson
          </p>
          <p className="text-xs text-secondary italic">Property owner</p>
        </div>
      </div>
    </div>
  );
};
