import PolicyContent from "../components/shared/PolicyContent";
import { grievancePolicy } from "../constants";

const Grievance = () => {
  return (
    <div className="w-full">
      <PolicyContent
        content={grievancePolicy.content}
        description={grievancePolicy.description}
        title={grievancePolicy.title}
        key={grievancePolicy.title}
      />
    </div>
  );
};

export default Grievance;
