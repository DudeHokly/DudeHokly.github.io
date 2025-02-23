"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Title } from "./index";
import { Button } from "../ui";
import { Accessibility } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  id: number;
  imgUrl: string;
  PianoName: string;
  StrikethroughPrice?: number;
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
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div
          className={cn(
            "cursor-pointer group transform transition duration-500 hover:scale-105 border-solid border-2 border-[#008080] rounded-xl p-5 justify-self-center",
            className
          )}
          onClick={() => setOpen(true)}
        >
          <img className="w-[215px] h-[215px]" src={imgUrl} alt="Пианино" />
          <Title text={PianoName} size="sm" />
          {StrikethroughPrice && (
            <p className="text-gray-500">
              <s>{StrikethroughPrice} руб</s>
            </p>
          )}
          <b className="text-lg">{PianoPrice} руб</b>

          <div className="flex justify-between mt-3">
            <Button>В корзину</Button>
            <Accessibility className="w-5 h-5" />
          </div>
        </div>
      </DialogTrigger>

      {/* Модальное окно */}
      <DialogContent className="max-w-lg mx-auto">
        <DialogHeader>
          <DialogTitle>{PianoName}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <img
            src={imgUrl}
            alt={PianoName}
            className="w-full h-60 object-cover rounded-md"
          />
          <p className="text-xl font-bold mt-4">{PianoPrice} руб</p>
          {StrikethroughPrice && (
            <p className="text-gray-500">
              <s>{StrikethroughPrice} руб</s>
            </p>
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Закрыть</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
