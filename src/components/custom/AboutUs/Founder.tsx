import { founderData } from "../../../constants";
import { CeoCorousal } from "../../shared/CeoCorousal";

const Founder = () => {
  return (
    <div className="mt-24 w-full h-auto p-10 flex items-center flex-col">
      <h1 className="text-2xl lg:text-5xl font-semibold my-6">
        Meet the leaders driving it all
      </h1>
      <p className="w-[38%] text-black/60 font-medium text-center text-xl">
        Spearheading a team of 250+ Xpanders committed to delivering exceptional
        tech solutions.
      </p>
      <div className="w-full mt-20">
        <CeoCorousal data={founderData} />
      </div>
    </div>
  );
};

export default Founder;
