import { boardingCardData } from "../../../constants/feature";
import BoardingCard from "../../shared/BoardingCard";

const Boarding = () => {
  return (
    <div className="w-full min-h-screen my-32 py-32 bg-[#E5EAF0] flex items-center justify-center">
      <div className="w-[95%  ] lg:w-[60%] mx-auto h-[80%] flex flex-wrap items-center justify-center gap-5 lg:gap-20">
        {boardingCardData.map((data) => (
          <BoardingCard
            description={data.description}
            heading={data.heading}
            icon={data.icon}
            step={data.step}
            key={data.heading}
          />
        ))}
      </div>
    </div>
  );
};

export default Boarding;
