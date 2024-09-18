import Stripe from "../components/custom/Stripe";
import Benefits from "../components/shared/Benefits";
import Blogs from "../components/shared/Blogs";
import CaseStudy from "../components/shared/CaseStudy";
import CompanyMatrix from "../components/shared/CompanyMatrix";
import GlobalMatrix from "../components/shared/GlobalMatrix";
import Hero from "../components/shared/Hero";

const Landingpage = () => {
  return (
    <div className="h-full">
      <Hero />
      <Benefits />
      <GlobalMatrix />
      <CaseStudy />
      <CompanyMatrix isShow />
      <Stripe
        buttonLink=""
        title="Work better, together"
        description="Get Evaluate Your Business score for Free!"
      />
      <Blogs />
    </div>
  );
};

export default Landingpage;
