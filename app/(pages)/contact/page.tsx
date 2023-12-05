import PageHeroWrapper from "@/components/pages/page-hero";
import { ContactBottomLeft } from "@/components/pages/contact/contact-bottom-left";
import { ContactRight } from "@/components/pages/contact/contact-right";

const ContactPage = () => {
  return (
    <PageHeroWrapper
      title="contact us"
      subtitle="Lorem ipsum dolor sit amet conse ctetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
    "
      bottomLeft={<ContactBottomLeft />}
      right={<ContactRight />}
      phone="+1 (800) 987 6543"
      email="email@houzez.co"
    ></PageHeroWrapper>
  );
};

export default ContactPage;
