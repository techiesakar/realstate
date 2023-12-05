"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PropsType = {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
};

export function SwitchPropertyType({ type, setType }: PropsType) {
  return (
    <div className="grid grid-cols-3 max-w-[350px] gap-x-0.5 ">
      <Button
        variant="primary"
        className={cn(
          "bg-secondary text-white rounded-sm",
          type === "all" && "bg-white text-primary"
        )}
        onClick={() => setType("all")}
      >
        All
      </Button>
      <Button
        variant="primary"
        className={cn(
          "bg-secondary text-white transition-all rounded-sm",
          type === "rent" && "bg-white text-primary"
        )}
        onClick={() => setType("rent")}
      >
        For Rent
      </Button>
      <Button
        variant="primary"
        className={cn(
          "bg-secondary text-white transition-all rounded-sm",
          type === "sale" && "bg-white text-primary "
        )}
        onClick={() => setType("sale")}
      >
        For Sale
      </Button>
    </div>
  );
}
