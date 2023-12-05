import { BlogCard } from "@/components/pages/blog/blog-card";
import { Posts } from "@/components/pages/blog/posts";
import React from "react";

const BlogPage = () => {
  return (
    <div className="space-y-8">
      {Posts.map((item) => (
        <BlogCard
          key={item.title}
          title={item.title}
          date={item.date_posted}
          content={item.content}
          imageUrl={item.imageUrl}
          path={item.path}
          comments={item.comments}
        />
      ))}
    </div>
  );
};

export default BlogPage;
