import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { CarouselDemo } from "./Carousel";

const BlogAndCase = ({
  title,
  description,
  buttonText,
  card,
  cardNumber,
  isBlogs,
}: {
  title: string;
  description: string;
  buttonText: string;
  card: {
    id: number;
    tag: string;
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
  cardNumber: number;
  isBlogs?: boolean;
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-black via-blue-950 to-blue-600 flex items-center justify-center">
      <div className="h-full lg:h-[80%] w-full lg:w-[90%] mx-auto text-white">
        <h1 className="text-center text-2xl lg:text-4xl font-semibold my-7 ">
          {title}
        </h1>
        <p className="text-lg font-medium w-[75%] mx-auto text-center">
          {description}
        </p>
        <div className="w-full m-auto mt-5 flex items-center justify-center mb-5">
          <Link to={""}>
            <Button className="flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-blue-900">
              {buttonText}
              <img src="/icons/arrowright.svg" alt="arrowright" />
            </Button>
          </Link>
        </div>
        <div>
          <CarouselDemo
            cards={card}
            cardNumber={cardNumber}
            isBlogs={isBlogs}
          />
        </div>
        <div className="mb-24" />
      </div>
    </div>
  );
};

export default BlogAndCase;
