import { Link } from "react-router-dom";
import ShinyButton from "../magicui/shiny-button";
import NumberTicker from "../magicui/number-ticker";
import { EmblaCarousel } from "../custom/CarouselTwo";
import { companyMatrixStats, slides } from "../../constants";

const CompanyMatrix = () => {
  return (
    <section
      id="company matrix"
      className="w-full min-h-screen h-auto p-0 lg:p-20">
      <div className="w-full lg:w-[75%] mx-auto  flex flex-col justify-center items-center">
        <h1 className="text-2xl lg:text-4xl font-semibold text-center my-4">
          We are big enough to deliver and small enough to care
        </h1>
        <p className="text-xl lg:text-2xl font-medium text-center my-2">
          Teams large and small rely on Hubnex Labs
        </p>
        <Link to={""}>
          <ShinyButton className="border border-black">
            <p className="flex items-center justify-center gap-3 text-black">
              Connect Sales{" "}
              <img
                src="/icons/arrowright.svg"
                alt="arrowright"
                className="invert"
              />
            </p>
          </ShinyButton>
        </Link>

        <div className=" mt-10 w-[95%] lg:w-[80%] bg-gradient-to-r from-teal-100 via-sky-100  to-pink-100  h-36 lg:h-44 rounded-lg flex items-center justify-center">
          <div className="h-[90%] w-[85%] bg-white rounded-lg flex items-center justify-around">
            {companyMatrixStats.map((data) => (
              <div key={data.id} className="text-[0.5rem] lg:text[1rem]">
                <h1 className="text-purple-600 text-xl lg:text-4xl flex items-center font-semibold">
                  <NumberTicker
                    value={data.value}
                    className="text-purple-600"
                  />{" "}
                  <p>{data.sign}</p>
                </h1>
                <p className="mt-2">{data.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="m-5 w-full text-center">
          <h3 className="text-blue-800 font-semibold my-2">
            3940+ Happy Hubnex Labs Users
          </h3>
          <h2 className="text-3xl font-semibold">
            Driving results for leaders across the globe
          </h2>
          <EmblaCarousel data={slides} />
        </div>
      </div>
    </section>
  );
};

export default CompanyMatrix;
