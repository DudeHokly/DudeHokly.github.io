"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NewsItem {
  id: number;
  title: string;
  text: string;
  backgroundImage: string;
}

interface Props {
  className?: string;
  news: NewsItem[];
}

export const NewsLenta: React.FC<Props> = ({ className, news }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!news || news.length === 0) return;

    const scrollContainer = scrollRef.current;
    const scrollSpeed = 1;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      scrollAnimationRef.current = requestAnimationFrame(scroll);
    };

    const handleMouseOver = () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };

    const handleMouseLeave = () => {
      scrollAnimationRef.current = requestAnimationFrame(scroll);
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("mouseover", handleMouseOver);
      scrollContainer.addEventListener("mouseleave", handleMouseLeave);
      scrollAnimationRef.current = requestAnimationFrame(scroll);
    }

    return () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseover", handleMouseOver);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [news]);

  return (
    <div
      className={cn("relative overflow-hidden h-[300px] w-full", className)}
      ref={scrollRef}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ width: `${news.length * 800}px` }}
      >
        {[...news, ...news].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="relative flex-shrink-0 w-[400px] h-[300px] mx-4 bg-cover bg-center transition-opacity duration-300 hover:opacity-70"
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black bg-opacity-50">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm mt-2">{item.text}</p>
            </div>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              Посмотреть новость
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
