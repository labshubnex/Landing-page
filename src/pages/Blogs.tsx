import Hero from "../components/custom/blogs/Hero";
import { BreadcrumbWithCustomSeparator } from "../components/custom/BreadScrum";
import Stripe from "../components/custom/Stripe";
import CaseStudy from "../components/shared/CaseStudy";
import CompanyMatrix from "../components/shared/CompanyMatrix";

const blogsBreadScrums = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Blogs",
    to: "/",
  },
  {
    label: "Why is Delivery Management and Why Does it Mattet?",
    to: "/blogs",
    active: true,
  },
];

const Blogs = () => {
  return (
    <div>
      <div className="w-[85%] mx-auto py-3 ">
        <BreadcrumbWithCustomSeparator links={blogsBreadScrums} />
      </div>
      <Hero />
      <CaseStudy />
      <CompanyMatrix isShow={false} />
      <Stripe
        buttonLink="/"
        title="Get Evaluate Your Business Score for Free!"
        description="Work better, together"
      />
    </div>
  );
};

export default Blogs;
