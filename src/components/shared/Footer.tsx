import { Link } from "react-router-dom";
import ShinyButton from "../magicui/shiny-button";
import { footerLinks, socialimages } from "../../constants";
import { handleLinkClick } from "../../lib/utils";

const Footer = () => {
  return (
    <div className="h-[80vh] w-full px-5 lg:px-20 py-10 mb-20">
      <div className="w-full h-full ">
        <div className="relative bg-gradient-to-r from-black to-gray-500 text-white rounded-lg p-10 flex flex-col items-center justify-center w-full border border-green-500 lg:w-[90%] mx-auto overflow-hidden h-44">
          <h1 className="text-xl lg:text-3xl font-bold mb-6">
            See all that you can accomplish with Hubnex Labs
          </h1>
          <Link to={""}>
            <ShinyButton className="border border-white">
              <p className="flex items-center gap-2 text-sm">
                Connect sales{" "}
                <img src="/icons/arrowright.svg" alt="rightarrow" />
              </p>
            </ShinyButton>
          </Link>
          <div className="absolute -top-20 -left-10 w-36 h-36 rounded-full border-4 border-gray-500 opacity-30"></div>
          <div className="absolute -bottom-20 -right-9 w-36 h-36 rounded-full border-4 border-white opacity-30"></div>
        </div>
        <div className="w-full  lg:w-[90%] mx-auto  flex flex-col lg:flex-row items-center justify-between mt-5 border-b-2 border-gray-300 pb-5">
          <h1 className="text-4xl font-semibold text-center lg:text-left my-2 lg:my-6 tracking-wide">
            Let’s grow 💪 <br /> together with the faster ecosystem
          </h1>
          <Link to={""}>
            <ShinyButton className="bg-black rounded-full py-2">
              <p className="flex items-center gap-1">
                Contact Us <img src="/icons/arrowright.svg" alt="image" />{" "}
              </p>
            </ShinyButton>
          </Link>
        </div>
        <div className="w-[90%] mx-auto mt-5  flex flex-col lg:flex-row items-center justify-between">
          <div className="left-box w-full lg:w-[40%]">
            <div className="flex gap-1">
              <img src="/icons/hubnex.svg" alt="hubnex" className="w-11" />
              <div className="flex flex-col justify-start items-start">
                <h1 className="text-2xl font-semibold">Hubnex</h1>
                <p className="tracking-widest">Labs</p>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold my-3">About Hubnex Labs</h1>
              <p className="text-lg font-light">
                We are a leading IT consultancy with expertise in innovative
                solutions for modern challenges. Our client-centric approach
                enables us to design tailored solutions that keep businesses
                ahead in the ever-evolving digital landscape.
              </p>
            </div>
            <div className="mt-5 flex justify-center lg:justify-start items-center gap-7 lg:gap-4  mb-5">
              {socialimages.map((images, i) => (
                <Link to={images.link} key={`key-${i}`}>
                  <img src={images.img} alt={`image-${i}`} className="h-7" />
                </Link>
              ))}
            </div>
          </div>
          <div className="right-box pb-20 w-full lg:w-[50%]">
            <div className="w-full h-full flex flex-col lg:flex-row items-start gap-3">
              {footerLinks.map((section) => (
                <div className="flex flex-col flex-1  gap-2" key={section.id}>
                  <h1 className="font-semibold">{section.label}</h1>
                  {section.child.map((element) => (
                    <Link
                      onClick={handleLinkClick}
                      className="text-black hover:text-zinc-700 transition-all "
                      to={element.link}
                      key={element.id}>
                      <p>{element.label}</p>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
