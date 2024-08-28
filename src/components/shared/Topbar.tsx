import { Link } from "react-router-dom";
import { navbarlinks, topbarlinks } from "../../constants";
import ShinyButton from "../magicui/shiny-button";
import Navbar from "./Navbar";

const Topbar = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-3 top-0">
      <div className="w-[96%] flex items-center justify-end gap-3 border-b border-b-black p-3">
        {topbarlinks.map((link): JSX.Element => {
          return (
            <Link
              to={link.link}
              key={link.id}
              className={`${
                link.id !== 3 && "border-r-2 border-black"
              } flex items-center justify-center gap-2 px-4`}>
              <p className="text-base font-semibold">{link.label}</p>
              <img src={link.image} alt="arrow-image" className="w-3" />
            </Link>
          );
        })}
      </div>
      <div className="w-[88%] mx-auto flex items-center justify-between p-4">
        <div>
          <img src="/icons/hubnex.svg" alt="hubnex" className="w-[42px]" />
        </div>
        <div>
          <Navbar links={navbarlinks} />
        </div>
        <div className="flex items-center justify-between p-2">
          <Link to={""} className="text-blue-500">
            Login
          </Link>
          <Link to={"/contacts"}>
            <ShinyButton className="bg-blue-500 ml-5  text-xs font-semibold capitalize py-3 px-5">
              <p className="flex items-center gap-2">
                Connect sales{" "}
                <img src="/icons/arrowright.svg" alt="rightarrow" />{" "}
              </p>
            </ShinyButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
