import { StarIcon } from "lucide-react";

export const AboutBottomLeft = () => {
  return (
    <div className="text-2xl text-primary space-y-3 flex flex-col justify-center">
      <div className="flex items-center gap-2">
        <StarIcon className="w-4 h-4 text-secondary" />
        <StarIcon className="w-4 h-4 text-secondary" />
        <StarIcon className="w-4 h-4 text-secondary" />
        <StarIcon className="w-4 h-4 text-secondary" />
        <StarIcon className="w-4 h-4 text-secondary" />
      </div>
      <h2>We’re a team born out of a passion for customer satisfaction</h2>
    </div>
  );
};
