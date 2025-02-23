"use client";

import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Piano, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MenuItem {
  label: { name: string; path: string };
  links?: { name: string; path: string }[];
}

const menuItems: MenuItem[] = [
  {
    label: { name: "Каталог", path: "/ItemsPage" },
    links: [
      { name: "Гитары", path: "/ItemsPage" },
      { name: "Клавишные", path: "/ItemsPage" },
      { name: "Ударные", path: "/ItemsPage" },
      { name: "Смычковые", path: "/ItemsPage" },
      { name: "Электроника", path: "/ItemsPage" },
    ],
  },
  {
    label: { name: "Акции", path: "/ItemsPage" },
    links: [
      { name: "Скидки недели", path: "/ItemsPage" },
      { name: "Новинки", path: "/ItemsPage" },
      { name: "Хиты продаж", path: "/ItemsPage" },
      { name: "Подарочные сертификаты", path: "/ItemsPage" },
    ],
  },
  {
    label: { name: "Производители", path: "/ItemsPage" },
    links: [
      { name: "Yamaha", path: "/ItemsPage" },
      { name: "Casio", path: "/ItemsPage" },
      { name: "Roland", path: "/ItemsPage" },
      { name: "Fender", path: "/ItemsPage" },
      { name: "Gibson", path: "/ItemsPage" },
    ],
  },
  {
    label: { name: "Услуги", path: "/FakeReviews" },
    links: [
      { name: "Ремонт инструментов", path: "/Maintenance" },
      { name: "Настройка гитар", path: "/Maintenance" },
      { name: "Обучение игре", path: "/TeachingPage" },
    ],
  },
  {
    label: { name: "Контакты", path: "/AboutUs" },
    links: [
      { name: "Магазины", path: "/AboutUs" },
      { name: "Связаться с нами", path: "/AboutUs" },
      { name: "Обратная связь", path: "/AboutUs" },
    ],
  },
  {
    label: { name: "Авторизоваться", path: "/Authorization" },
  },
];

export const Header: React.FC<{ className?: string }> = ({ className }) => {
  const { setTheme } = useTheme();

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
          ? "bg-slate-50 shadow-lg opacity-90 backdrop-blur-2xl text-black py-2"
          : "bg-white/50 text-black backdrop-blur-md py-3",
        className
      )}
    >
      <Container className="flex items-center justify-between max-w-7xl mx-auto px-6">
        <Link href="/" className="flex items-center hover:text-[#008080]">
          <Piano className="mr-2" />
          <h1 className="text-3xl ">PianoDude</h1>
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
                <Link
                  href={item.label.path}
                  className="cursor-pointer transition-colors hover:text-[#008080]"
                >
                  {item.label.name}
                </Link>
                {item.links && (
                  <div
                    className={cn(
                      "absolute left-0 w-[200px] bg-white/90 overflow-hidden transition-all duration-300 shadow-lg",
                      activeMenu === index
                        ? "h-auto opacity-100"
                        : "h-0 opacity-0"
                    )}
                  >
                    <ul className="flex flex-col items-start p-6 space-y-2">
                      {item.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.path}
                            className="text-black hover:underline"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <div className="hover:text-[#008080] cursor-pointer">
              <Link href="/ShopingCarting">
                <ShoppingCart />
              </Link>
            </div>
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
