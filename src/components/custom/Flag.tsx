const Flag = ({
  img,
  country,
  isFirst,
}: {
  img: string;
  country: string;
  isFirst?: boolean;
}) => {
  return (
    <div
      className={`w-[119px] h-[124px] ${
        isFirst ? "bg-white" : "bg-black/5"
      } rounded-md drop-shadow-md flex flex-col items-center justify-center`}>
      {!isFirst && (
        <span className="px-2 text-white py-1 uppercase text-[10px] text-center lg:text-xs bg-indigo-600 font-medium rounded-md">
          Coming soon!
        </span>
      )}
      <img src={img} alt="img" />
      <h2 className="font-medium text-xs lg:text-lg">{country}</h2>
    </div>
  );
};

export default Flag;
