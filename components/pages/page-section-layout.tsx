import React from "react";
type PropsType = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};
const PageSectionlayout = ({ title, subtitle, children }: PropsType) => {
  return (
    <section className="lg:mt-32 md:mt-20 mt-14 relative">
      <div className="site-container relative">
        <div className="uppercase text-secondary text-left  font-semibold mb-4">
          {title}
        </div>
        <h2 className="text-primary text-3xl font-semibold max-w-[340px] mb-5">
          {subtitle}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default PageSectionlayout;
