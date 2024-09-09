import { BreadcrumbWithCustomSeparator } from "../components/custom/BreadScrum";
import Hero from "../components/custom/Partners/Hero";
import Technology from "../components/custom/Partners/Technology";
import Benefit from "../components/custom/Partners/Benefit";
const partnerBreadScrums = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Partners",
    to: "/partners",
    active: true,
  },
];

const Partners = () => {
  return (
    <div className="w-full">
      <div className="w-[85%] mx-auto p-3">
        <BreadcrumbWithCustomSeparator links={partnerBreadScrums} />
      </div>
      <Hero />
      <Technology />
      <Benefit />
    </div>
  );
};

export default Partners;
