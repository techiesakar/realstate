import { PropertyFilterForm } from "@/components/pages/property/property-form/property-form";

const PropertiesPage = async () => {
  return (
    <section className="w-full bg-primary pt-10">
      <div className="site-container relative">
        <h1 className="text-center text-white text-5xl font-semibold">
          Properties
        </h1>
        <PropertyFilterForm />
      </div>
    </section>
  );
};

export default PropertiesPage;
