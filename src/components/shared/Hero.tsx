import NumberTicker from "../magicui/number-ticker";
import ShinyButton from "../magicui/shiny-button";
import { MarqueeDemo } from "./MarqueeDemo";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-[85%] flex flex-col-reverse lg:flex-row items-center justify-between gap-2 mx-auto">
        <div className="flex flex-col items-start justify-start w-full lg:w-[45%] h-[30rem] ">
          <h1 className="text-xl lg:text-7xl font-bold">
            Saas growth with weekly tips.
          </h1>
          <p className="text-lg mt-5">
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page or admin panel for your SaaS.
            Clarity gives you the blocks & components you Clarity gives you the
            blocks.
          </p>
          <div className="mt-5 flex items-center justify-center gap-4">
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
          <div className="w-full relative h-96  p-2 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 flex flex-col lg:border-r lg:border-r-gray-500 p-5">
              <div className="relative left-0 flex justify-end w-full">
                <img
                  src="/icons/person1.svg"
                  alt="person1"
                  className="border-1 border-white absolute left-0 top-0 w-10"
                />
                <img
                  src="/icons/person2.svg"
                  alt="person2"
                  className="border-1 border-white absolute left-8 top-0 w-10"
                />
                <img
                  src="/icons/person3.svg"
                  alt="person3"
                  className="border-1 border-white absolute left-16 top-0 w-10"
                />
                <div>
                  <p className="text-3xl font-bold">
                    <NumberTicker value={5910} direction="up" />+
                  </p>
                </div>
              </div>

              <div className="mt-4 w-full text-gray-500">
                Companies are using & it&apos;s growing everyday
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col p-5">
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
        <div className="p-2 w-full lg:w-[40%]">
          <img src="/images/hero.png" alt="heroimage" className="rounded-xl" />
        </div>
      </div>
      <div className="banner w-full lg:w-[90%] mt-14 lg:mx-auto font-bold flex flex-col gap-3">
        <div className="">
          <h1 className="text-lg text-center mt-20">
            Join 4,000+ companies already growing
          </h1>
          <MarqueeDemo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
