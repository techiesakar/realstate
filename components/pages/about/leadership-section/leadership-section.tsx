import AboutSectionLayout from "../about-section-layout";
import { LeadershipCard } from "./leadership-card";
export const CardData = [
  {
    imageUrl: "/team-1.jpg",
    name: "Kathleen Grant",
    position: "Founder",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
  },
  {
    imageUrl: "/team-2.jpg",
    name: "Keith bailey",
    position: "CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
  },
  {
    imageUrl: "/team-3.jpg",
    name: "Danielle Murray",
    position: "Manager",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
  },
  {
    imageUrl: "/team-4.jpg",
    name: "Thomas Stevens",
    position: "Founder",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
  },
];

export const LeadershipSection = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return (
    <AboutSectionLayout
      title="Leadership"
      subtitle="The people behind the project"
    >
      <div className="grid lg:grid-cols-4 grid-cols-2">
        {CardData.map((item) => (
          <LeadershipCard
            key={item.name}
            imageUrl={item.imageUrl}
            name={item.name}
            position={item.position}
            bio={item.bio}
          />
        ))}
      </div>
    </AboutSectionLayout>
  );
};
