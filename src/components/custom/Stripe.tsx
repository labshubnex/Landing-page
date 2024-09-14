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
      <div className="w-full flex items-center justify-center bg-gradient-to-r from-purple-700 to-purple-200 py-4 text-white">
        <div className="w-[80%] h-full flex ">
          <img src="/icons/crown.svg" alt="crown" className="w-13 mx-6" />
          <div className="w-full text-left">
            <p className="text-sm font-light "> {description}</p>
            <h1 className="text-2xl lg:text-3xl font-semibold">{title}</h1>
          </div>
        </div>
        <Link to={buttonLink}>
          <Button className="flex items-center justify-center gap-2 bg-purple-600 font-light">
            Check Now! <img src="/icons/arrowright.svg" alt="arrowright" />{" "}
          </Button>
        </Link>
      </div>
      <div className="w-full bg-white h-24"></div>
    </>
  );
};

export default Stripe;
