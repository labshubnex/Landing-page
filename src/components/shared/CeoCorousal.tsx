import useEmblaCarousel from "embla-carousel-react";

export function CeoCorousal({
  data,
}: {
  data: {
    name: string;
    role: string;
    bio: string;
    image: string;
    label: string;
    link: string;
  }[];
}) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {data.map((card) => (
          <div className="w-full flex gap-6">
            <img src={card.image} alt="image" className="w-72 rounded-lg " />
            <div className="p-3 flex items-start justify-between flex-col">
              <div>
                <h2 className="text-2xl lg:text-4xl font-semibold my-4">
                  {card.name}
                </h2>
                <p className="text-base tracking-wide my-3">{card.role}</p>
                <p className="text-black/50">{card.bio}</p>
              </div>
              <a className="text-blue-500 underline" href={card.link}>
                {card.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
