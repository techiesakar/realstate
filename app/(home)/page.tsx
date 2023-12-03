import { FeaturedSection } from "@/components/home/featured/featured";
import { FeaturedCardWrapper } from "@/components/home/featured/featured-card-wrapper";
import { HeroSection } from "@/components/home/hero-section/hero-section";
import { ServiceSection } from "@/components/home/services/services-section";
import { ValuationRequestSection } from "@/components/home/valuation-request/valuation-request";

export default function Home() {
  return (

    <main>
      <HeroSection />
      <FeaturedSection />
      <ValuationRequestSection />
      <ServiceSection />
    </main>
  )
}
