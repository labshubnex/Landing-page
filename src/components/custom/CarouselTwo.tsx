import useEmblaCarousel from "embla-carousel-react";

export function EmblaCarousel({
  data,
}: {
  data: {
    image: string;
    title: string;
    quote: string;
    description: string;
    company: string;
    role: string;
  }[];
}) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {data.map((card) => (
          <div
            className="embla__slide mt-16 cursor-pointer no-select"
            key={card.role}>
            <div className="flex items-center flex-col lg:flex-row justify-center">
              <img
                src={card.image}
                alt={`card-${card.role}`}
                className="h-full w-[40%]"
              />
              <div className="h-full  flex-1 w-full p-5 lg:w-[60%] flex flex-col items-center justify-start">
                <h2 className=" text-2xl lg:text-4xl font-semibold text-left">
                  {card.title}
                </h2>
                <p className="text-lg my-4 text-left">{card.description}</p>
                <div className="flex w-full flex-col justify-start items-start">
                  <h1 className="text-3xl font-semibold">{card.company}</h1>
                  <h3 className="font-normal">{card.role}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
