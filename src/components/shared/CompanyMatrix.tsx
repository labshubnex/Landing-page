import { Link } from "react-router-dom";
import ShinyButton from "../magicui/shiny-button";

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

        <div className=" mt-10 w-full lg:w-[80%] bg-gradient-to-r from-teal-100 via-sky-100  to-pink-100 h-44 rounded-lg flex items-center justify-center">
          <div className="h-[90%] w-[85%] bg-white rounded-lg">box</div>
        </div>
      </div>
    </section>
  );
};

export default CompanyMatrix;
