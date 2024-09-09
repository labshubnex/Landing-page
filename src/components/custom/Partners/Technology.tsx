import { MarqueeDemo } from "./MarqueeDemo";

const Technology = () => {
  return (
    <div className="relative min-h-72 my-24 w-full bg-blue-600  text-white p-10 flex flex-col lg:flex-row items-center justify-end border border-green-500  mx-auto overflow-hidden h-44">
      <div className="w-[40%] h-full  ">
        <h1 className="text-xl lg:text-3xl font-semibold">
          Technologies We Use!
        </h1>
      </div>
      <div className="w-[55%] h-full relative flex items-center justify-center ">
        <MarqueeDemo />
      </div>
      <div className="absolute -top-20 -left-10 w-36 h-36 rounded-full border-4 border-gray-400 opacity-30"></div>
      <div className="absolute -bottom-24 -right-14 w-36 h-36 rounded-full border-4 border-white opacity-30"></div>
    </div>
  );
};

export default Technology;
