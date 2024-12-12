"use client";

import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Piano } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Header: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "Магазин",
      links: ["Последние пополнения", "Yamaha", "Casio", "Kurzweil", "Roland"],
    },
    {
      label: "В разработке1",
      links: ["Секция 1.1", "Секция 1.2", "Секция 1.3"],
    },
    {
      label: "В разработке2",
      links: ["Секция 2.1", "Секция 2.2", "Секция 2.3"],
    },
    {
      label: "В разработке3",
      links: ["Секция 3.1", "Секция 3.2", "Секция 3.3"],
    },
    {
      label: "Поддержка",
      links: ["Контакты", "Частые вопросы", "Гарантия"],
    },
  ];

  return (
    <header
      className={cn(
        `fixed top-0 left-0 w-full z-50 transition-all ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`,
        className
      )}
    >
      <Container className="flex items-center justify-between max-w-7xl mx-auto px-6">
        <Link href="/ItemsPage" className="flex items-center text-black">
          <Piano className="mr-2 " />
          <h1 className="text-3xl ">PianoDude</h1>
        </Link>

        <nav className="relative">
          <ul className="flex space-x-8 text-black text-[17px]">
            {menuItems.map((menu) => (
              <li
                key={menu.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menu.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href="#" className="hover:text-black transition">
                  {menu.label}
                </a>

                {/* Dropdown */}
                <div
                  className={cn(
                    "absolute left-0 top-full w-screen bg-white shadow-lg transition-transform duration-300 ease-out h-0",
                    activeDropdown === menu.label
                      ? "opacity-100 translate-y-0 h-[300px]"
                      : "opacity-0 translate-y-[-20px]"
                  )}
                  // style={{ height: "300px" }}
                >
                  <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 gap-4">
                    {menu.links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="block text-gray-700 hover:text-black transition"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
