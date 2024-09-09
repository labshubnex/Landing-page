import { cn } from "../../../lib/utils";
import Marquee from "../../magicui/marquee";

const reviews = [
  {
    label: "Edge Computing",
    img: "/images/edgecomputing.png",
  },
  {
    label: "Connectivity",
    img: "/images/connectivity.png",
  },
  {
    label: "Cloud Platforms",
    img: "/images/cloud.png",
  },
  {
    label: "Protocols and Standards",
    img: "/images/protocol.png",
  },
  {
    label: "Development Tools and Platforms",
    img: "/images/development.png",
  },
  {
    label: "Data analytics and AI",
    img: "/images/analytics.png",
  },
  {
    label: "Operating Systems",
    img: "/images/os.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2 + 1);
const secondRow = reviews.slice(reviews.length / 2, reviews.length);

const ReviewCard = ({ img, label }: { img: string; label: string }) => {
  return (
    <figure
      className={cn(
        "relative min-w-48 cursor-pointer overflow-hidden rounded-xl border p-4 text-black",
        // light styles
        "border-gray-950/[.1] bg-white hover:bg-gray-950/[.05] hover:text-white",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}>
      <div className="flex flex-row items-center justify-start gap-2">
        <img className="rounded-full" width="22" height="22" alt="" src={img} />
        <blockquote className="text-sm">{label}</blockquote>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <div className="">
        <Marquee reverse pauseOnHover className="[--duration:20s] w-[90%] ">
          {secondRow.map((review) => (
            <ReviewCard key={review.img} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-600 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-600 dark:from-background -z-5"></div>
    </div>
  );
}
