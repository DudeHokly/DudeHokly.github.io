"use client";

import { DecorateElem, NewsLenta } from "@/components/Shared";
import { Accessibility } from "lucide-react";

import decor from "@/public/justDecorateElem.json";
import { AdverComp } from "@/components/Shared/adver";
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface DecorItem {
  title: string;
  textBelow: string;
  icon?: string;
}

export default function Home() {
  const handleButtonClick = () => {
    alert("Вы нажали кнопку!");
  };

  const itemsCarusel = [
    "/imges/mainPage.jpg",
    "/imges/mainPage1.jpg",
    "/imges/mainPage3.jpg",
    "/imges/carusel1.webp",
    "/imges/carusel2.webp",
  ];

  const newsData = [
    {
      id: 1,
      title: "Новость 1",
      text: "Краткое описание первой новости.",
      backgroundImage: "/imges/adNews1.jpg",
    },
    {
      id: 2,
      title: "Новость 2",
      text: "Краткое описание второй новости.",
      backgroundImage: "/imges/adNews2.jpg",
    },
    {
      id: 3,
      title: "Новость 3",
      text: "Краткое описание второй новости.",
      backgroundImage: "/imges/adNews3.jpg",
    },
    {
      id: 4,
      title: "Новость 4",
      text: "Краткое описание второй новости.",
      backgroundImage: "/imges/adNews4.jpg",
    },
    {
      id: 5,
      title: "Новость 5",
      text: "Краткое описание второй новости.",
      backgroundImage: "/imges/adNews5.jpg",
    },
    {
      id: 6,
      title: "Новость 6",
      text: "Краткое описание второй новости.",
      backgroundImage: "/imges/adNews6.jpg",
    },
    {
      id: 7,
      title: "Новость 7",
      text: "Краткое описание второй новости.",
      backgroundImage: "/imges/adNews7.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setActiveIndex(Math.floor(itemsCarusel.length / 2));
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? itemsCarusel.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === itemsCarusel.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* header элем */}
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/imges/mainPage.webp')",
        }}
      >
        <div className="absolute text-center bg-white/50 text-black backdrop-blur-md opacity-95 shadow-lg p-5 rounded-3xl">
          <h1 className="text-3xl font-bold mb-4">
            Тут скоро будет какая-нить воодушевляющая надпись, но пока ее нет
          </h1>
          <button
            onClick={handleButtonClick}
            className="text-lg px-6 py-3  bg-[#008080] rounded-lg text-white hover:bg-yellow-400 transition"
          >
            Заказать инструмент
          </button>
        </div>
      </div>

      {/* Секция DecorateElem т.е. три прикольных элема */}
      <div className="flex flex-wrap justify-center gap-4 py-4 px-2">
        {(decor as DecorItem[]).map((item, index) => (
          <DecorateElem
            key={index}
            className="border-[5px] border-[#008080] p-4 w-[500px]"
            icon={<Accessibility />}
            title={item.title}
            textBelow={item.textBelow}
          />
        ))}
      </div>
      {/* чет связанное с рекламой где три иконки*/}
      <AdverComp className="bg-no-repeat bg-cover bg-center" />

      {/* Каруселька */}
      <div className="relative">
        <Carousel>
          <CarouselPrevious onClick={handlePrevious} />
          <CarouselContent>
            {itemsCarusel.map((image, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  " transition-all duration-500 ease-in-out",
                  index === activeIndex
                    ? "scale-100 opacity-100 z-10"
                    : "scale-75 opacity-50 blur-sm"
                )}
              >
                <div className="relative p-4">
                  <Card>
                    <CardContent className="flex items-center justify-center">
                      <img
                        src={image}
                        alt={`Изображение ${index + 1}`}
                        className="w-[100%] h-[550px] object-contain rounded-md"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext onClick={handleNext} />
        </Carousel>
      </div>

      {/* Лента новостей */}
      <NewsLenta news={newsData} />
    </>
  );
}
