import * as React from "react";
import { cn } from "../../lib/utils";
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    tag: string;
    image: string;
    title: string;
    description: string;
    link: string;
    isBlogs: boolean;
  }
>(
  (
    { className, tag, image, title, description, link, isBlogs, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg  bg-zinc-900 text-white shadow-sm  dark:bg-slate-950 dark:text-slate-50 relative",
        className
      )}
      {...props}>
      {!isBlogs && (
        <div className="absolute uppercase right-3 top-2 bg-zinc-900 text-white p-2 text-xs lg:text-xl md:px-4 md:py-2 rounded-full z-10">
          {tag}
        </div>
      )}
      <img
        src={image}
        alt={title}
        width={50}
        height={50}
        className="rounded-t-lg w-full object-cover"
      />
      <div className="p-6">
        {isBlogs && (
          <div className="capitalize px-2 py-1 rounded-lg border inline-block mt-2 border-pink-600 font-semibold">
            {tag}
          </div>
        )}
        <h3 className="mt-2 text-lg md:text-2xl font-semibold leading-none tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-xs md:text-sm  dark:text-slate-400">
          {description}
        </p>
        <a href={link} className="mt-4 flex items-center gap-2">
          Read more{" "}
          <img
            src="/icons/arrow.svg"
            alt=""
            className={`${!isBlogs && "invert"}`}
          />
        </a>
      </div>
    </div>
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
