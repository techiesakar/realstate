import { Suspense } from "react";
import { AboutContent } from "@/components/pages/about/about-content";
import { AboutHeroWrapper } from "@/components/pages/about/about-hero-wrapper";
import { BlogSection } from "@/components/pages/about/blog-section/blog-section";
import { LeadershipSection } from "@/components/pages/about/leadership-section/leadership-section";
import { PartnerShipSection } from "@/components/pages/about/partnership-section/partnership-section";
import { AboutLeadershipSkeleton } from "@/components/skeleton/skeletons";
import { ValuationRequestSection } from "@/components/valuation-request/valuation-request";

const AboutPage = () => {
  return (
    <div className="mb-32">
      <AboutHeroWrapper />
      <AboutContent />
      <Suspense fallback={<AboutLeadershipSkeleton />}>
        <LeadershipSection />
      </Suspense>
      <Suspense fallback={<AboutLeadershipSkeleton />}>
        <PartnerShipSection />
      </Suspense>
      <ValuationRequestSection className="mt-32" />
      <BlogSection />
    </div>
  );
};

export default AboutPage;
