import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function CarouselDemo({
  cards,
  cardNumber,
  isBlogs = false,
}: {
  cards: {
    id: number;
    tag: string;
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
  cardNumber: number;
  isBlogs?: boolean;
}) {
  let cardGroups = [];

  for (let i = 0; i < cards.length; i += cardNumber) {
    cardGroups.push(cards.slice(i, i + cardNumber));
  }

  return (
    <>
      <Carousel className="w-full flex flex-col relative">
        <CarouselContent className="flex gap-4 w-full">
          {cardGroups.map((group, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="p-1 flex w-full md:w-[85%] mx-auto justify-between items-center ">
                {group.map((card) => (
                  <Card
                    key={card.id}
                    description={card.description}
                    image={card.image}
                    link={card.link}
                    tag={card.tag}
                    title={card.title}
                    isBlogs={isBlogs}
                    className={`max-w-[55%] h-full 
                       m-5 ${isBlogs && "bg-white p-4 text-black"}`}>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {card.title}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="relative flex items-center justify-center gap-4 mt-10">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
}
