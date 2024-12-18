import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Accessibility, Dribbble, Handshake, Piano } from "lucide-react";

interface Props {
  className?: string;
}

const footerTrying = {
  Информация: [
    "Главная",
    "Преимущества",
    "Отзывы",
    "Доставка",
    "Оплата",
    "Контакты",
    "Статьи",
  ],
  Клиентам: [
    "Как заказать",
    "Рассрочка",
    "Кредит",
    "Гарантия",
    "Условия возврата",
    "Сервис",
    "О нас",
  ],
  Каталог: ["Клавишные", "Караоке", "Звук", "Дисконт", "Оплата"],
};

export const Footer: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <footer className={cn("bg-gray-100 py-8 px-[200px] ", className)}>
      <Container className="flex justify-between flex-wrap gap-6">
        {/* Левая часть с логотипом и контактами */}
        <div className="">
          <div className="flex items-center space-x-2">
            <Piano className="text-gray-600" />
            <h1 className="text-3xl font-bold">PianoDude</h1>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600">8 800 553535 1478</p>
            <p className="text-gray-600">dude@gmail.com</p>
            <p className="font-semibold">Время работы:</p>
            <p className="text-gray-600">пн-пт 08:00-20:00, вых 10:00-19:00</p>
            <a href="#" className="text-blue-500 hover:underline">
              Заказать обратный звонок
            </a>
            <p className="font-semibold">Оставайтесь на связи:</p>
            <div className="flex items-center space-x-3">
              <Dribbble className="text-gray-600 cursor-pointer" />
              <Accessibility className="text-gray-600 cursor-pointer" />
              <Handshake className="text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Правая часть с навигационными ссылками */}
        <div className="w-full md:w-2/3 flex justify-between">
          {Object.keys(footerTrying).map((category, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-lg font-semibold">{category}</h2>
              {footerTrying[category].map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
