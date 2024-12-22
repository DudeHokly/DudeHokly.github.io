import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "./index";
import { Button } from "../ui";
import { Accessibility } from "lucide-react";

interface Props {
  id: number;
  imgUrl: string;
  PianoName: string;
  StrikethroughPrice: number;
  PianoPrice: number;
  className?: string;
}

export const ProductCart: React.FC<Props> = ({
  className,
  id,
  imgUrl,
  PianoName,
  StrikethroughPrice,
  PianoPrice,
}) => {
  return (
    <div
      className={cn(
        "group transform transition duration-500 hover:scale-105 border-solid border-2 border-[#008080] rounded-xl p-5 justify-self-center",
        className
      )}
    >
      <Link href={`/product/${id}`}>
        <img className="w-[215px] h-[215px]" src={imgUrl} alt="Пианино" />
      </Link>
      <Title text={PianoName} size="sm" />
      <b>{StrikethroughPrice}</b>
      <p>{PianoPrice}руб</p>
      <div className="flex justify-between">
        <Button>В корзину</Button>
        <Accessibility />
      </div>
    </div>
  );
};
