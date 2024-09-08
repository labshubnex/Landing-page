import PolicyContent from "../components/shared/PolicyContent";
import { termsAndConditions } from "../constants";

const TermsAndCondition = () => {
  return (
    <div className="w-full">
      <PolicyContent
        content={termsAndConditions.content}
        description={termsAndConditions.description}
        title={termsAndConditions.title}
        key={termsAndConditions.title}
      />
    </div>
  );
};

export default TermsAndCondition;
