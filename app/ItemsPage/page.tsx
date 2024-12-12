import React from "react";

import { Container, Filters, ProductCart } from "@/components/Shared";
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
  return (
    <div className="">
      <>
        <Container className="py-6 ">
          {/*Фильтрация*/}
          <div className="flex gap-[60px]">
            <div className="w-[250px]">
              <Filters />
            </div>

            {/*Список товаров*/}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pianos.map((i, index) => (
                  <ProductCart
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
          <div className="pt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </Container>
      </>
    </div>
  );
};

export default ItemsPage;
