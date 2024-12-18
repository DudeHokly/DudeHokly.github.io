"use client";

import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Piano } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Props {
  className?: string;
}

const menuItems = [
  {
    label: "Каталог",
    links: ["Гитары", "Клавишные", "Ударные", "Смычковые", "Электроника"],
  },
  {
    label: "Акции",
    links: [
      "Скидки недели",
      "Новинки",
      "Хиты продаж",
      "Подарочные сертификаты",
    ],
  },
  {
    label: "Производители",
    links: ["Yamaha", "Casio", "Roland", "Fender", "Gibson"],
  },
  {
    label: "Услуги",
    links: ["Ремонт инструментов", "Настройка гитар", "Обучение игре"],
  },
  {
    label: "Контакты",
    links: ["Магазины", "Связаться с нами", "Обратная связь"],
  },
];

export const Header: React.FC<Props> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all",
        isScrolled
          ? "bg-white shadow-lg text-black py-2"
          : "bg-transparent text-white",
        className
      )}
    >
      <Container className="flex items-center justify-between max-w-7xl mx-auto px-6">
        <Link href="/ItemsPage" className="flex items-center">
          <Piano className="mr-2" />
          <h1 className="text-3xl">PianoDude</h1>
        </Link>

        <nav className="relative">
          <ul className="flex space-x-8 text-[17px]">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span
                  className={cn(
                    "cursor-pointer transition-colors hover:text-black"
                  )}
                >
                  {item.label}
                </span>
                <div
                  className={cn(
                    "absolute left-0 w-[200px] bg-white/90 overflow-hidden transition-all duration-300",
                    activeMenu === index ? "h-[210px]" : "h-0"
                  )}
                >
                  <ul className="flex flex-col items-start p-6 space-y-2">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={`/${link}`}
                          className="text-black hover:underline"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
