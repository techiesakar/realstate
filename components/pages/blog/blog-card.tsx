import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PropsType = {
  title: string;
  imageUrl: string;
  content: string;
  date: string;
  path: string;
  comments: string;
};
export const BlogCard = ({
  title,
  imageUrl,
  content,
  date,
  path,
  comments,
}: PropsType) => {
  return (
    <div className="">
      <Link href={path}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={imageUrl}
            alt="Image"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </Link>
      <div className="p-8 space-y-3 bg-white">
        <h1 className="text-3xl font-semibold text-primary hover:text-secondary transition-all">
          <Link href={path}>{title}</Link>
        </h1>
        <p className="text-sm leading-6 font-light text-gray-900">{content}</p>
      </div>
      <div className="p-8 space-y-3 bg-white border-t border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-light">
            <Calendar className="w-4 h-4" /> {date}
          </div>
          <div className="flex items-center gap-2 text-sm font-light">
            <MessageCircle className="h-4 w-4" /> {comments}
          </div>
        </div>
        <div>
          <Button
            asChild
            className="bg-secondary hover:bg-hover transition-all"
          >
            <Link href={path}>Read More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
