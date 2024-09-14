import { personImages } from "../../../constants";
import NumberTicker from "../../magicui/number-ticker";
import ShinyButton from "../../magicui/shiny-button";

export const Hero = () => {
  return (
    <div className="p-4">
      <div className="w-full lg:w-[70%] mx-auto">
        <h1 className="text-center text-2xl lg:text-[40px] tracking-wide leading-15 font-semibold">
          We’re empowering businesses with the technology they need to lead
          change and innovate in a business landscape that waits for no one.
        </h1>
        <div className="mt-16 flex items-center justify-center gap-4">
          <ShinyButton
            className="text-black border-black border"
            textcolor="black">
            <p className="flex items-center gap-2 py-1">
              Contact Us
              <img src="/icons/rightarrowblack.svg" className="" alt="" />
            </p>
          </ShinyButton>
          <ShinyButton className="border bg-blue-500" textcolor="text-white">
            <p className="flex items-center gap-2 py-1">
              Join Us
              <img src="/icons/arrowright.svg" className="" alt="" />
            </p>
          </ShinyButton>
        </div>

        {/* Third */}
        <div className="w-[80%] mx-auto relative my-16 p-2 flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/3 flex flex-col lg:border-r lg:border-r-gray-500 p-5">
            <div className="relative left-0 flex justify-end w-full">
              {personImages.map((image) => (
                <img
                  src={image.src}
                  key={image.alt}
                  alt={image.alt}
                  className={image.className}
                />
              ))}
              <div>
                <p className="text-3xl font-bold">
                  <NumberTicker value={5910} direction="up" />+
                </p>
              </div>
            </div>
            <div className="mt-4 w-full text-gray-500">
              Companies are using & it&apos;s growing every day
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col p-5">
            <div className="relative left-0 flex justify-start w-full">
              <div className="flex items-center gap-2">
                <p className="text-4xl font-bold">4.5/5</p>
                <div className="flex items-center gap-2">
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                </div>
              </div>
            </div>
            <div className="mt-4 w-full text-gray-500">
              Trusted by the top companies worldwide
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
