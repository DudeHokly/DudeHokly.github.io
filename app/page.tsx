"use client";

import { DecorateElem } from "@/components/Shared";
import { Accessibility } from "lucide-react";

import decor from "@/public/justDecorateElem.json";
import { AdverComp } from "@/components/Shared/adver";
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui";

interface DecorItem {
  title: string;
  textBelow: string;
  icon?: React.ReactNode;
}

export default function Home() {
  const handleButtonClick = () => {
    alert("Вы нажали кнопку!");
  };

  const itemsCarusel = ["/giga1.jpg", "/giga2.jpg", "/giga3.jpg"];

  return (
    <>
      {/* Фоновое изображение с текстом и кнопкой */}
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/imges/mainPage1.webp')",
        }}
      >
        <div className="absolute text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Тут скоро будет какая-нить воодушевляющая надпись, но пока ее нет
          </h1>
          <button
            onClick={handleButtonClick}
            className="text-lg px-6 py-3 bg-orange-500 rounded-lg text-white hover:bg-orange-600 transition"
          >
            Заказать инструмент
          </button>
        </div>
      </div>

      {/* Секция DecorateElem */}
      <div className="flex flex-wrap gap-4 p-6">
        {(decor as DecorItem[]).map((item, index) => (
          <DecorateElem
            key={index}
            className="border-[5px] border-gray-500 p-4 "
            icon={<Accessibility />}
            title={item.title}
            textBelow={item.textBelow}
          />
        ))}
      </div>

      {/* Секция с каруселью */}
      <Carousel>
        <CarouselContent>
          {itemsCarusel.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img
                      src={image}
                      alt={`Изображение ${index + 1}`}
                      className="h-auto w-full object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
