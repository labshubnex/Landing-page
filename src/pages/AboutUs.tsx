import Founder from "../components/custom/AboutUs/Founder";
import { Hero } from "../components/custom/AboutUs/Hero";
import Location from "../components/custom/AboutUs/Location";
import { BreadcrumbWithCustomSeparator } from "../components/custom/BreadScrum";
import Stripe from "../components/custom/Stripe";
import Benefits from "../components/shared/Benefits";
import CompanyMatrix from "../components/shared/CompanyMatrix";
import GlobalMatrix from "../components/shared/GlobalMatrix";

const aboutUsBreadScrums = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
    active: true,
  },
];

const AboutUs = () => {
  return (
    <div className="w-full ">
      <div className="w-[85%] mx-auto py-3">
        <BreadcrumbWithCustomSeparator links={aboutUsBreadScrums} />
      </div>
      <Hero />
      <GlobalMatrix />
      <Benefits />
      <Location />
      <Founder />
      <CompanyMatrix isShow={false} />
      <Stripe
        buttonLink="/"
        description="Work better, together"
        title="Get Evaluate Your Business Score for Free!"
      />
    </div>
  );
};

export default AboutUs;
