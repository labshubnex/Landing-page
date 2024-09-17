import ShinyButton from "../../magicui/shiny-button";

const Hero = () => {
  return (
    <div className="w-[90%] lg:w-[85%] mx-auto">
      <div className="w-full">
        <p className="text-gray-500 text-sm">#Business</p>
        <h1 className="text-xl lg:text-4xl font-semibold my-2">
          Why is Delivery Management and Why Does it Matters?
        </h1>
        <p className="text-gray-500">
          July 19, 2024 | By <span className="font-bold ">Author Name</span>
        </p>
        <img
          src="/images/blogshero.png"
          alt="hero image"
          className="w-full my-6"
        />
      </div>
      <div className="w-full flex items-center justify-between gap-10 h-screen ">
        <div className="w-full lg:w-[55%] h-[80%]">
          <div className="w-full">
            <h1 className="text-3xl font-semibold mb-5">Policy Details</h1>
            <p className="text-base font-light mb-5">
              You shall also receive an alphanumerical/numerical identification
              number for tracking your grievances with the customer care. We
              assure You that ExMyB will make all reasonable endeavours to
              address the grievance made by You at the latest within 60 (Sixty)
              days from the date of receipt of the grievance.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-5">
              Governance Framework
            </h1>
            <p className="text-base font-light mb-5">
              You shall also receive an alphanumerical/numerical identification
              number for tracking your grievances with the customer care. We
              assure You that ExMyB will make all reasonable endeavours to
              address the grievance made by You at the latest within 60 (Sixty)
              days from the date of receipt of the grievance.
            </p>
            <p className="text-base font-light mb-5">
              A grievance will be treated as closed if You communicate Your
              acceptance of the response received from the customer care team or
              where{" "}
              <b className="font-semibold">
                {" "}
                You fail to respond to the response received from the customer
                care team within 7 (Seven) days.
              </b>{" "}
              A grievance will be treated as closed if You communicate Your
              acceptance of the response received from the customer care team or
              where{" "}
              <b className="font-semibold">
                {" "}
                You fail to respond to the response received from the customer
                care team within 7 (Seven) days.
              </b>{" "}
              A grievance will be treated as closed if You communicate Your
              acceptance of the response received from the customer care team or
              where{" "}
              <b className="font-semibold">
                {" "}
                You fail to respond to the response received from the customer
                care team within 7 (Seven) days.
              </b>
            </p>
          </div>
        </div>
        <div className="w-[25%] border bg-gradient-to-t from-green-600 to-green-200 h-[80%]  justify-between flex-col items-center relative hidden lg:flex">
          <img
            src="/icons/blogsbanner.svg"
            alt="imageBanne"
            className="w-full"
          />
          <div className="w-full min-h-44 p-2 z-10">
            <img src="/icons/hubnex.svg" alt="logo" className="invert" />
            <p className="my-2 font-light text-gray-300">
              Work better, together
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Get Evaluate Your Business Score!
            </h2>
            <ShinyButton className="relative w-full bg-white rounded-sm py-4">
              <p className="text-black flex items-center justify-center gap-3">
                Check Now!{" "}
                <img
                  src="/icons/arrowright.svg"
                  alt="Right Arrow"
                  className="invert"
                />{" "}
              </p>
            </ShinyButton>
          </div>
          <img
            src="/icons/graphic.svg"
            alt="image"
            className="absolute bottom-0 w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
