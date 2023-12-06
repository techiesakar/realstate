import { PropertyFilterForm } from "./property-form/property-form";

export const PropertiesPageHeader = () => {
  return (
    <section className="w-full bg-primary">
      <div className="site-container relative">
        <h1 className="text-center text-white text-2xl lg:text-5xl font-semibold">
          Properties
        </h1>
        <PropertyFilterForm />
      </div>
    </section>
  );
};
