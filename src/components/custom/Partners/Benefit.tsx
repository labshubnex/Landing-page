import { partnerBenefitBentoGrid } from "../../../constants/feature";
import { BentoCard, BentoGrid } from "../../magicui/bento-grid";
import RetroGrid from "../../magicui/retro-grid";

const Benefit = () => {
  return (
    <div className="w-full my-10 relative h-screen">
      <div className="text-black text-2xl lg:text-5xl font-semibold text-center">
        <h1>Why Choose Us?</h1>
      </div>
      <div className="w-full flex items-center justify-center relative h-full p-10">
        <BentoGrid className="mt-6">
          {partnerBenefitBentoGrid.map((feature) => (
            <BentoCard
              key={feature.name}
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
      </div>
    </div>
  );
};

export default Benefit;
