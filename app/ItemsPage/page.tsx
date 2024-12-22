"use client";
import React, { useEffect, useRef, useState } from "react";
import { Filters, ProductCart } from "@/components/Shared";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui";

import pianos from "@/public/pianos.json";

const ItemsPage: NextPage = () => {
  const filtersRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (filtersRef.current && containerRef.current) {
        const containerBounds = containerRef.current.getBoundingClientRect();
        const filtersBounds = filtersRef.current.getBoundingClientRect();
        setOffsetTop(filtersBounds.top - containerBounds.top); // Смещение секции фильтров
        setContainerHeight(containerBounds.height); // Высота контейнера товаров
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Hero-секция */}
      <div className="bg-gradient-to-r from-[#008080] to-[#00b3b3] w-full h-[200px] flex items-center justify-center mt-[64px]">
        <h2 className="text-3xl font-semibold text-black">
          Добро пожаловать в the Piano Store!
        </h2>
      </div>
      <div className="w-full max-w-[1500px] pt-[30px]">
        <div className="flex flex-col md:flex-row gap-8" ref={containerRef}>
          {/* Фильтрация */}
          <div
            ref={filtersRef}
            style={{
              position: "sticky",
              top: "20px", // Расстояние сверху для прилипания
              maxHeight: `${containerHeight - offsetTop}px`, // Ограничение по высоте
              overflow: "hidden", // Скрытие элементов за границами
            }}
            className="bg-white shadow-md rounded-lg p-4 w-full md:w-[300px] self-start"
          >
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="bg-white shadow-md rounded-lg p-4 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pianos.map((i, index) => (
                <ProductCart
                  key={index}
                  id={i.id}
                  imgUrl={i.imgUrl}
                  PianoPrice={i.PianoPrice}
                  PianoName={i.PianoName}
                  StrikethroughPrice={i.StrikethroughPrice}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Пагинация */}
        <div className="mt-8 flex justify-center">
          <div className="bg-white shadow-md rounded-lg py-6 px-4 w-full">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
