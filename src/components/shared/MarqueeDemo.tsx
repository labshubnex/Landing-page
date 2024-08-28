import { reviews } from "../../constants";
import Marquee from "../magicui/marquee";
import { ReviewCard } from "./ReviewCard";

export function MarqueeDemo() {
  const firstRow = reviews.slice(0, reviews.length);

  return (
    <div className="relative flex h-[180px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} img={review.img} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
