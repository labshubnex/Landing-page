import { ReactNode } from "react";
import { cn } from "../../lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full lg:w-[70%] h-[80%] z-10  grid-rows-3 row-start-1 row-end-2 grid-cols-3 gap-4 ",
        className
      )}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon?: any;
  description?: string;
  href: string;
  cta?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-black ",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,.5),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu  dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] bg-black text-white",
      className
    )}>
    <div>{background}</div>
    <div className="bg-black pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 ">
      <Icon className="h-12 w-12 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-lg font-semibold text-white dark:text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-sm text-white">{description}</p>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
