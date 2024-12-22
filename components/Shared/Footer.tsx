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
    <footer
      className={cn(
        "bg-gradient-to-r from-[#008080] to-[#00b3b3] py-12 px-6 text-white",
        className
      )}
    >
      <Container className="flex justify-between gap-6 max-w-6xl">
        {/* Левая часть с логотипом и контактами */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="flex items-center space-x-2">
            <Piano className="text-white" />
            <h1 className="text-3xl font-bold">PianoDude</h1>
          </div>
          <div className="space-y-2">
            <p>8 800 553535 1478</p>
            <p>dude@gmail.com</p>
            <p className="font-semibold">Время работы:</p>
            <p>пн-пт 08:00-20:00, вых 10:00-19:00</p>
            <a href="#" className="text-blue-200 hover:underline">
              Заказать обратный звонок
            </a>
            <p className="font-semibold">Оставайтесь на связи:</p>
            <div className="flex items-center space-x-3">
              <Dribbble
                className="text-white cursor-pointer hover:text-blue-300 transition-colors"
                aria-label="Dribbble"
              />
              <Accessibility
                className="text-white cursor-pointer hover:text-blue-300 transition-colors"
                aria-label="Accessibility"
              />
              <Handshake
                className="text-white cursor-pointer hover:text-blue-300 transition-colors"
                aria-label="Handshake"
              />
            </div>
          </div>
        </div>

        {/* Правая часть с навигационными ссылками */}
        <div className="w-full md:w-2/3 flex justify-between">
          {Object.keys(footerTrying).map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-lg font-semibold">{category}</h2>
              {footerTrying[category].map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block text-white hover:text-blue-200 transition-colors"
                  aria-label={item}
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </Container>

      {/* Dynamic Footer Animation */}
      <div className="text-center mt-8">
        <p className="text-sm">
          © {new Date().getFullYear()} PianoDude. Все права защищены.
        </p>
      </div>
    </footer>
  );
};
