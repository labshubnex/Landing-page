import { IBoardingCard } from "../../types";

const BoardingCard = ({ icon, step, heading, description }: IBoardingCard) => {
  return (
    <div className="shadow-md flex flex-col p-4 items-center justify-around w-full bg-white lg:w-[40%] h-80 ">
      <span>
        <img src="/icons/doublerarr.svg" alt="Double right arrow" />
      </span>
      <div className="flex flex-col items-center justify-center gap-4">
        {icon}
        <span className="px-3 py-1 rounded-full border text-xs">{step}</span>
      </div>
      <div className="">
        <h2 className="text-center font-semibold text-xl">{heading}</h2>
        <p className="text-center w-[80%] mx-auto">{description}</p>
      </div>
    </div>
  );
};

export default BoardingCard;
