import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";

function TeachingPage() {
  return (
    <div className="max-w-4xl mx-auto pt-[80px] pb-[60px]">
      {/* Заголовок */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          Учимся играть, петь и записывать музыку с преподавателем
        </h2>
      </div>

      {/* Информационные карточки */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center p-4">
          <CardHeader>
            <h4 className="text-2xl font-bold">21</h4>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Онлайн-курс</p>
            <span className="text-sm text-gray-500">разом на платформе</span>
          </CardContent>
        </Card>

        <Card className="text-center p-4">
          <CardHeader>
            <h4 className="text-2xl font-bold">8</h4>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">направлений</p>
            <span className="text-sm text-gray-500">
              гитара, вокал, клавишные и др.
            </span>
          </CardContent>
        </Card>

        <Card className="text-center p-4">
          <CardHeader>
            <h4 className="text-2xl font-bold">450</h4>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">уроков</p>
            <span className="text-sm text-gray-500">
              для новичков и опытных музыкантов
            </span>
          </CardContent>
        </Card>

        <Card className="text-center p-4">
          <CardHeader>
            <h4 className="text-2xl font-bold">24/7</h4>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">преподаватели</p>
            <span className="text-sm text-gray-500">
              помогают прийти к результату
            </span>
          </CardContent>
        </Card>
      </div>

      {/* Кнопки подписки */}
      <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
        <Button className="px-6 py-3 text-lg">
          Попробуй 14 дней бесплатно
        </Button>
        <Button variant="outline" className="px-6 py-3 text-lg">
          Оформи подписку
        </Button>
      </div>

      {/* Блок видео */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Посмотрите, как это работает
        </h3>
        <div className="rounded-lg overflow-hidden">
          <AspectRatio ratio={16 / 9} className="bg-black">
            <video
              controls
              className="w-full h-full object-cover"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
}

export default TeachingPage;
