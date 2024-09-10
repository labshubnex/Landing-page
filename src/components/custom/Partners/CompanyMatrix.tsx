import { slides } from "../../../constants";
import ShinyButton from "../../magicui/shiny-button";
import { EmblaCarousel } from "../CarouselTwo";

const CompanyMatrix = () => {
  return (
    <div className="h-auto lg:min-h-screen w-full">
      <div className="w-[95%] lg:w-[70%] mx-auto h-full lg:h-96 flex items-center flex-col lg:flex-row justify-between">
        <img src="/images/handshake.png" alt="handshake" className="h-full" />
        <div className="h-full w-full my-5 lg:my-0 lg:w-[50%] flex flex-col justify-between items-start gap-5">
          <div>
            <h2 className="text-4xl font-semibold mb-7">
              Join our Preferred Partners Programme
            </h2>
            <p className="font-normal">
              We proudly offer exclusive benefits to our partners who have
              consistently shown trust in our platform and delivered outstanding
              work.These privileges are designed to ensure business stability
              and promise up to 3x returns to our partners.
            </p>
          </div>
          <ShinyButton className=" bg-[#2563EA] py-3">
            <p className="flex items-center justify-center gap-2">
              Connect Sales <img src="/icons/arrowright.svg" alt="rightarr" />{" "}
            </p>
          </ShinyButton>
        </div>
      </div>
      <div className="m-5 w-full text-center lg:w-[65%] mx-auto lg:my-32">
        <h3 className="text-blue-800 font-semibold my-2">
          3940+ Happy Hubnex Labs Users
        </h3>
        <h2 className="text-3xl font-semibold">
          Driving results for leaders across the globe
        </h2>
        <EmblaCarousel data={slides} />
      </div>
    </div>
  );
};

export default CompanyMatrix;
