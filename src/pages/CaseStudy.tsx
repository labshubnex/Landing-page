import Bussiness from "../components/custom/caseNStudy/Bussiness";
import Stripe from "../components/custom/Stripe";
import CaseStudy from "../components/shared/CaseStudy";
import CompanyMatrix from "../components/shared/CompanyMatrix";
import HeroCaseStudy from "../components/shared/HeroCaseStudy";

const CaseStudyPage = () => {
  return (
    <div className="w-full">
      <HeroCaseStudy />
      <Bussiness />
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

export default CaseStudyPage;
