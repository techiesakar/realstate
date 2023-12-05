import { ContactBottomLeft } from "@/components/pages/contact/contact-bottom-left";
import { ContactRight } from "@/components/pages/contact/contact-right";
import PageLayout from "@/components/pages/page-layout";

const ContactPage = () => {
  return (
    <PageLayout
      title="contact us"
      subtitle="Lorem ipsum dolor sit amet conse ctetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
    "
      bottomLeft={<ContactBottomLeft />}
      right={<ContactRight />}
      phone="+1 (800) 987 6543"
      email="email@houzez.co"
    ></PageLayout>
  );
};

export default ContactPage;
