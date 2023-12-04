import { FeaturedSection } from "@/components/home/featured/featured";
import { HeroSection } from "@/components/home/hero-section/hero-section";
import { ServiceSection } from "@/components/home/services/services-section";
import { TestimonailSection } from "@/components/home/testimonials/testimonail-section";
import { FeaturedpropertiesSkeleton } from "@/components/skeleton/skeletons";
import { ValuationRequestSection } from "@/components/valuation-request/valuation-request";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
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
