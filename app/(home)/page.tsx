import { Suspense } from "react";
import { FeaturedSection } from "@/components/home/featured/featured";
import { HeroSection } from "@/components/home/hero-section/hero-section";
import { ServiceSection } from "@/components/home/services/services-section";
import { TestimonailSection } from "@/components/home/testimonials/testimonail-section";
import { FeaturedpropertiesSkeleton } from "@/components/skeleton/skeletons";
import { ValuationRequestSection } from "@/components/valuation-request/valuation-request";

export default function Home() {
  return (
    <main className="mb-10 lg:mb-26">
      <HeroSection />
      <Suspense fallback={<FeaturedpropertiesSkeleton />}>
        <FeaturedSection />
      </Suspense>
      <ValuationRequestSection />
      <ServiceSection />
      <TestimonailSection />
    </main>
  );
}
