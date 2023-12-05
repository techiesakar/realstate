import { BlogSidebar } from "@/components/pages/blog/blog-sidebar";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full">
      <div className="grid grid-cols-12 site-container my-8 gap-8 h-full">
        <div className="col-span-8">{children}</div>
        <div className="col-span-4">
          <BlogSidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogLayout;
