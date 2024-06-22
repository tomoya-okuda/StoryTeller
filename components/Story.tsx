"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Story as StoryType } from "@/types/stories";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  story: StoryType;
}

const Story = ({ story }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="px-4">
      <Carousel
        setApi={setApi}
        className="relative w-full lg:w-4/5 h-56 mx-auto"
      >
        <CarouselContent className="">
          {/* story pages */}
          {story.pages.map((page, i) => (
            <CarouselItem key={i}>
              <Card className="p-4 mb-20 md:p-10 border last:mr-1">
                <h2 className="text-center text-gray-400 mb-4">
                  {story.story}
                </h2>

                <CardContent className="px-0 xl:flex">
                  <Image
                    src={page.png}
                    alt={`Page ${i + 1} image`}
                    width={500}
                    height={500}
                    className="w-[305px] h-[305px] md:p-4 xl:w-[500px] xl:h-[500px] rounded-3xl mx-auto float-right  xl:order-last"
                  />
                  <p className="font-semibold text-md md:text-xl first-letter:text-3xl whitespace-pre-wrap">
                    {page.txt}
                  </p>
                </CardContent>

                <p className="text-center text-gray-400">
                  Page {current} of {count}
                </p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="fixed left-2 md:left-4 lg:left-[8%]" />
        <CarouselNext className="fixed right-2 md:right-4  lg:right-[8%]" />
      </Carousel>
    </div>
  );
};

export default Story;
