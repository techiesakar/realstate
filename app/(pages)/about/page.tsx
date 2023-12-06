import { Suspense } from "react";
import { AboutContent } from "@/components/pages/about/about-content";
import { BlogSection } from "@/components/pages/about/blog-section/blog-section";
import { LeadershipSection } from "@/components/pages/about/leadership-section/leadership-section";
import { PartnerShipSection } from "@/components/pages/about/partnership-section/partnership-section";
import { AboutLeadershipSkeleton } from "@/components/skeleton/skeletons";
import { ValuationRequestSection } from "@/components/valuation-request/valuation-request";
import { AboutBottomLeft } from "@/components/pages/about/about-hero/about-bottom-left";
import { AboutRight } from "@/components/pages/about/about-hero/about-right";
import PageLayout from "@/components/pages/page-layout";

const AboutPage = () => {
  return (
    <div>
      <PageLayout
        title="about us"
        subtitle="lorem ipsum dolor sit amet conse ctetur adipiscing elit. Ut elit
        tellus, luctus nec ullamcorper"
        bottomLeft={<AboutBottomLeft />}
        right={<AboutRight />}
      >
        <AboutContent />
        <Suspense fallback={<AboutLeadershipSkeleton />}>
          <LeadershipSection />
        </Suspense>
        <Suspense fallback={<AboutLeadershipSkeleton />}>
          <PartnerShipSection />
        </Suspense>
        <ValuationRequestSection className="mt-32" />
        <BlogSection />
      </PageLayout>
    </div>
  );
};

export default AboutPage;
