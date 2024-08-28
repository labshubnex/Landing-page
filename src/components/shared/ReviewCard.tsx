import { cn } from "../../lib/utils";

export const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure className={cn()}>
      <div className="flex flex-row items-center gap-2">
        <div className="w-60  flex items-center justify-start">
          <img className="h-16" alt="" src={img} height={150} />
        </div>
      </div>
    </figure>
  );
};
