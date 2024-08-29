import { publishedImages, statsData } from "../../constants";
import Globe from "../magicui/globe";
import NumberTicker from "../magicui/number-ticker";

const GlobalMatrix = () => {
  return (
    <section className="w-full h-full lg:h-screen flex items-center justify-center">
      <div className="w-full h-[70%] mx-auto lg:w-[90%] flex flex-col-reverse lg:flex-row items-center justify-center relative">
        <div className="w-full p-5 lg:p-0 lg:w-[45%] h-full  text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl  gap-2 font-semibold">
            Unleash the full power of data
          </h1>
          <p className="text-xl mr-0 lg:mr-10 mt-5 ">
            We guide global businesses through the challenges of developing
            purposeful technology that addresses their needs and advances their
            growth. We have established offices in India, the UAE, and the USA.
          </p>
          <div className="flex w-full lg:w-[90%] mt-10  items-center justify-between pr-2">
            {statsData.map((stats) => (
              <div
                key={stats.id}
                className="flex flex-col text-purple-700 items-start justify-start text-2xl lg:text-5xl">
                <span>
                  <NumberTicker
                    value={stats.value}
                    className="font-semibold text-purple-700"
                  />
                  {stats.sign}
                </span>
                <p className="text-xs  lg:text-lg font-normal text-black">
                  {stats.label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-3 mt-10 items-center justify-between pr-2">
            <h1>Featured in</h1>
            <div className="flex-1  lg:justify-evenly flex items-center justify-between">
              {publishedImages.map((publish) => (
                <img
                  src={publish.image}
                  alt={publish.alt}
                  key={publish.alt}
                  className="w-16 h-9"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[32rem] sm:h-[40rem] lg:h-full relative p-5 ">
          <Globe className="lg:-top-10" />
        </div>
      </div>
    </section>
  );
};

export default GlobalMatrix;
