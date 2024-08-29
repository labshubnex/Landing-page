import { features } from "../../constants/feature";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import RetroGrid from "../magicui/retro-grid";

const Benefits = () => {
  return (
    <section className="h-full lg:h-screen w-[95%] mx-auto mt-10 lg:w-full flex items-center justify-center flex-col relative ">
      <h1 className="text-2xl lg:text-5xl font-semibold mb-6">
        Benefits to Join Hubnex Labs
      </h1>
      <BentoGrid className="mt-6">
        {features.map((feature) => (
          <BentoCard
            key={feature.name}
            Icon={feature.Icon}
            background={feature.background}
            className={feature.className}
            cta={feature.cta}
            href={feature.href}
            description={feature.description}
            name={feature.name}
          />
        ))}
      </BentoGrid>
      <RetroGrid />
    </section>
  );
};

export default Benefits;
