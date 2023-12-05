import NotFound from "@/app/not-found";
import { BlogSingle } from "@/components/pages/blog/blog-single";
import { Posts } from "@/components/pages/blog/posts";
import React from "react";
type ParamsType = {
  params: {
    slug: string[];
  };
};
const page = async ({ params }: ParamsType) => {
  return (
    <div className="flex items-center">
      {Posts.map((item) => {
        if (params.slug[0] === item.id) {
          return <BlogSingle key={item.title} post={item} />;
        }
      })}
    </div>
  );
};

export default page;
