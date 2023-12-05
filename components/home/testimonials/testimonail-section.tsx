import React from "react";
import TestimonialCardWrapper from "./testimomial-card-wrapper";

export const TestimonailSection = () => {
  return (
    <section className="pt-10 lg:pt-16">
      <div className="site-container mx-auto ">
        <div className="section-title text-secondary uppercase font-bold mb-3 lg:mb-5">
          Testimonials
        </div>
        <h2 className="lg:text-3xl text-2xl font-semibold text-gray-800 mb-8">
          What customers are saying
        </h2>
        <div>
          <TestimonialCardWrapper />
        </div>
      </div>
    </section>
  );
};
