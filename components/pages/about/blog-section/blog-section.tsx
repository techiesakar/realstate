import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "lucide-react";
import PageSectionlayout from "@/components/pages/page-section-layout";

type PropsType = {
  imageUrl: string;
  tags: string;
  title: string;
  content: string;
};

export const CardData = [
  {
    imageUrl: "/blog-1.jpg",
    tags: "business",
    title: "Skills that you can learn in the real estate market",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
  },
  {
    imageUrl: "/blog-2.jpg",
    tags: "construction",
    title: "Learn The Truth About Real Estate Industry",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
  },
  {
    imageUrl: "/blog-3.jpg",
    tags: "real estate",
    title: "10 Quick Tips About Business Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
  },
  {
    imageUrl: "/blog-4.jpg",
    tags: "real estate",
    title: "14 Common Errors About Business Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
  },
];
export const BlogSection = () => {
  return (
    <PageSectionlayout
      title="From our blog"
      subtitle="Stay updated with the latest news"
    >
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
        {CardData.map((item) => (
          <BlogCard
            key={item.title}
            tags={item.tags}
            title={item.title}
            content={item.content}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </PageSectionlayout>
  );
};

export const BlogCard = ({ tags, title, content, imageUrl }: PropsType) => {
  return (
    <div className="bg-white p-4 rounded flex flex-col gap-3">
      <div>
        <Image
          src={imageUrl}
          width={250}
          height={250}
          alt={title}
          className="h-[160px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-secondary text-xs flex items-center font-semibold capitalize">
          <Tag className="w-3 h-3 mr-1" />
          {tags}
        </span>
        <h2 className="font-semibold  text-primary capitalize">{title}</h2>
        <p className="text-xs  text-gray-600 line-clamp-4 leading-5">
          {content}
        </p>
        <Link className="text-secondary text-sm " href="">
          Continue Reading
        </Link>
      </div>
    </div>
  );
};
