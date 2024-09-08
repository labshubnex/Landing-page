import { CardProp } from "../../types";

const Card = ({ definition, number, title, isActive }: CardProp) => {
  return (
    <div
      className={`w-full h-80 border border-blue-600 ${
        isActive && "bg-blue-700"
      } rounded-lg`}>
      <div className="m-5 text-left">
        <p
          className={`${
            isActive ? "bg-white " : "bg-sky-200 "
          } inline-block px-3 py-1 rounded-md text-center  text-blue-500 font-bold`}>
          {number}
        </p>
      </div>
      <div className="flex flex-col w-full p-5">
        <h2
          className={`text-xl font-semibold ${
            isActive ? " text-white" : "text-black"
          } `}>
          {title}
        </h2>
        <p
          className={`text-sm ${
            isActive ? " text-white" : "text-gray-800"
          } mt-5`}>
          {definition}
        </p>
      </div>
    </div>
  );
};

export default Card;
