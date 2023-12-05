import Link from "next/link";
import { Calendar, ChevronRight, MessageCircle } from "lucide-react";

type PostType = {
  title: string;
  tags: string[];
  date_posted: string;
  comments: string;
};

type PropsType = {
  post: PostType;
};
export const BlogSingle = ({ post }: PropsType) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs">
        <Link href="/" className="text-secondary capitalize">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 text-gray-600" />

        <Link href="/" className="text-secondary capitalize">
          {post.tags[0]}
        </Link>
        <ChevronRight className="h-4 w-4 text-gray-600" />

        <Link className="text-gray-600 capitalize" href="/">
          {post.title}
        </Link>
      </div>
      <div className="bg-white p-8 shadow-sm space-y-4">
        <h1 className="text-3xl text-primary font-semibold leading-normal capitalize">
          {post.title}
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-light">
            <Calendar className="w-3 h-3" /> {post.date_posted}
          </div>
          <div className="flex items-center gap-2 text-xs font-light">
            <MessageCircle className="h-3 w-3" /> {post.comments}
          </div>
        </div>
      </div>
    </div>
  );
};
