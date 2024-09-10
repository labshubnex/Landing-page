import { personImages } from "../../../constants";
import NumberTicker from "../../magicui/number-ticker";
import ShinyButton from "../../magicui/shiny-button";
import SparklesText from "../../magicui/sparkles-text";

const headingAbout = [
  {
    text: "Join",
    value: 10,
  },
  {
    text: "Your",
    value: 10,
  },
  {
    text: "Partner",
    value: 10,
  },
  {
    text: "Network",
    value: 10,
  },
];

const Hero = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-[85%] relative flex flex-col-reverse lg:flex-row items-center justify-between gap-2 mx-auto">
        <div className="flex flex-col items-start justify-start w-full lg:w-[45%] h-[30rem]">
          <h1 className="text-xl lg:text-7xl font-bold flex flex-wrap gap-5">
            {headingAbout.map((heading) => (
              <SparklesText
                className="w-fit text-wrap text-center md:text-left tracking-wide"
                text={heading.text}
                sparklesCount={heading.value}
              />
            ))}
          </h1>
          <p className="text-lg mt-5">
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page, or admin panel for your SaaS.
            Clarity gives you the blocks & components you need. Clarity gives
            you the blocks.
          </p>
          <div className="mt-5 flex items-center justify-center gap-4">
            <ShinyButton
              className="text-black border-black border"
              textcolor="black">
              <p className="flex items-center gap-1 tracking-wide py-1">
                Contact Us
                <img src="/icons/rightarrowblack.svg" className="" alt="" />
              </p>
            </ShinyButton>
            <ShinyButton className="border bg-blue-500" textcolor="text-white">
              <p className="flex items-center gap-1 py-1">
                Join Us
                <img src="/icons/arrowright.svg" className="" alt="" />
              </p>
            </ShinyButton>
          </div>
          <div className="w-full relative h-96 p-2 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 flex flex-col lg:border-r lg:border-r-gray-500 p-5">
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
          <img
            src="/images/partnerhero.png"
            alt="heroimage"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="banner relative w-full lg:w-[90%] mt-14 lg:mx-auto font-bold gap-3 overflow-x-hidden">
        <div className="p-4 max-w-full"></div>
      </div>
    </div>
  );
};

export default Hero;
