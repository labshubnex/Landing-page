import { BreadcrumbWithCustomSeparator } from "../components/custom/BreadScrum";
import Hero from "../components/custom/Partners/Hero";
import Technology from "../components/custom/Partners/Technology";
import Benefit from "../components/custom/Partners/Benefit";
import GlobalMatrix from "../components/shared/GlobalMatrix";
import Boarding from "../components/custom/Partners/Boarding";
import CompanyMatrix from "../components/custom/Partners/CompanyMatrix";
import Stripe from "../components/custom/Stripe";
import Blogs from "../components/shared/Blogs";
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
      <GlobalMatrix />
      <Boarding />
      <CompanyMatrix />
      <Stripe
        description="Get Evaluate Your Business Score for Free!"
        title="Work better, Together"
        buttonLink="/"
        key={"key-one"}
      />
      <Blogs />
    </div>
  );
};

export default Partners;
