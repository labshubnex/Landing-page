import { caseStudyCardData } from "../../constants";
import BlogAndCase from "../custom/BlogAndCase";

const CaseStudy = () => {
  return (
    <div className="w-full">
      <BlogAndCase
        title="Case Study"
        description="We guide global businesses through the challenges of developing purposeful technology that addresses their needs and advances their growth. We have established offices in India, the UAE, and the USA."
        buttonText="View All"
        card={caseStudyCardData}
        cardNumber={2}
        // isBlogs
      />
    </div>
  );
};

export default CaseStudy;
