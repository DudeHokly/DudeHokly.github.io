import React from "react";
import { cn } from "@/lib/utils";
import { RangeSlider, Title } from "./index";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Checkbox,
  Input,
} from "../ui";

interface Props {
  className?: string;
}

// Категории фильтров с массивами данных
const filtersName = {
  Цвет: ["Черный", "Коричневый", "Белый", "Палисандр", "Серый"],
  Производитель: ["Casio", "Artesia", "Yamaha", "Virtuozo", "Ringway"],
  Полифония: ["16", "32", "48", "64", "80"],
  "Количество клавиш": ["61", "68", "73", "76", "88"],
  Метроном: ["Да", "Нет"],
  "Записывающее устройство": ["Да", "Нет"],
  Bluetooth: ["Да", "Нет"],
  "Кол-во тембров": ["1", "2", "3"],
  "Молоточковая клавиатура": ["Да", "Нет"],
  "Размеры, мм": ["1326 х 272 х 129 мм"],
  "Вес товара, г": ["11500", "70000", "45000", "13800", "17100"],
  "Вид питания": ["Внешний источник питания", "От сети 220В"],
  "Гарантийный срок": ["12 месяцев"],
  "Звуковые эффекты": ["Chorus", "Reverb", "Equalizer", "Phaser", "Flanger"],
  Функции: [
    "Запись песен",
    "Метроном",
    "Транспонирование",
    "Аккомпанемент",
    "Арпеджиатор",
  ],
  "Жесткость клавиатуры": ["Взвешенная", "Невзвешенная", "Полувзвешенная"],
  "Размер клавиш": ["Полуразмерная", "Полноразмерная"],
  Интерфейсы: ["6,3 мм", "3,5 мм", "USB", "AUX"],
};

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text="Фильтры" />
      <div className="flex gap-2 mt-5 ">
        <Input type="number" placeholder="29000" min={29000} max={1000000} />
        <Input type="number" placeholder="999999" min={29000} max={1000000} />
      </div>
      <RangeSlider
        min={29000}
        max={1000000}
        step={5000}
        value={[29000, 1000000]}
      />
      <div className="">
        <Accordion type="multiple" collapsible>
          {Object.keys(filtersName).map((filterName, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <span>{filterName}</span>
              </AccordionTrigger>
              <AccordionContent>
                {filtersName[filterName].map((option, idx) => (
                  <div key={idx} className="flex items-center space-x-2 mt-2">
                    <Checkbox id={`${filterName}-${idx}`} />
                    <label htmlFor={`${filterName}-${idx}`}>{option}</label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex gap-2 mt-5 justify-center">
          <Button>Сбросить</Button>
          <Button>Применить</Button>
        </div>
      </div>
    </div>
  );
};
