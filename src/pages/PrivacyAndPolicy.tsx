import PolicyContent from "../components/shared/PolicyContent";
import { privacyPolicy } from "../constants";

const PrivacyAndPolicy = () => {
  return (
    <div className="w-full">
      <PolicyContent
        content={privacyPolicy.content}
        description={privacyPolicy.description}
        title={privacyPolicy.title}
        key={privacyPolicy.title}
      />
    </div>
  );
};

export default PrivacyAndPolicy;
