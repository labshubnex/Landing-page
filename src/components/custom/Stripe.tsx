import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Stripe = ({
  title,
  description,
  buttonLink,
}: {
  title: string;
  description: string;
  buttonLink: string;
}) => {
  return (
    <>
      <div className="w-full flex items-center justify-center bg-gradient-to-r from-indigo-800 via-purple-500 to-white py-4 text-white">
        <div className="w-[80%] h-full flex ">
          <img
            src="/icons/crown.svg"
            alt="crown"
            className="w-7 lg:w-13 mx-6"
          />
          <div className="w-full text-left">
            <p className="text-[8px] lg:text-sm font-light "> {title}</p>
            <h1 className="text-sm lg:text-3xl font-semibold">{description}</h1>
          </div>
        </div>
        <Link to={buttonLink}>
          <Button className="flex items-center justify-center gap-2 bg-purple-600 font-light rounded-sm">
            Check Now! <img src="/icons/arrowright.svg" alt="arrowright" />{" "}
          </Button>
        </Link>
      </div>
      <div className="w-full bg-white h-24"></div>
    </>
  );
};

export default Stripe;
