import { FeaturedCities } from "@/components/pages/property/featured-cities/featured-cities";
import { FeaturedProperties } from "@/components/pages/property/featured-properties/featured-properties";
import { PropertiesPageHeader } from "@/components/pages/property/properties-header";

const PropertiesPage = async () => {
  return (
    <div>
      <PropertiesPageHeader />
      <div className="space-y-16">
        <FeaturedCities />
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default PropertiesPage;
