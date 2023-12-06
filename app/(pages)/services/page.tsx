import PageLayout from "@/components/pages/page-layout";
import { ExpertSection } from "@/components/pages/services/our-experts/our-experts";
import { ServiceSection } from "@/components/pages/services/our-services/services-section";
import { ServicesBottomLeft } from "@/components/pages/services/services-hero/services-bottom-left";
import { ServicesRight } from "@/components/pages/services/services-hero/services-right";
import { ValuationRequestSection } from "@/components/valuation-request/valuation-request";

const ServicePage = () => {
  return (
    <div>
      <PageLayout
        title="Leaders in property management"
        subtitle="Lorem ipsum dolor sit amet conse ctetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper"
        bottomLeft={<ServicesBottomLeft />}
        right={<ServicesRight />}
      >
        <ServiceSection />
        <ValuationRequestSection />
        <ExpertSection />
      </PageLayout>
    </div>
  );
};

export default ServicePage;
