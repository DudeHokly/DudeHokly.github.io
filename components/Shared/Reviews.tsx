import React from "react";
import { cn } from "@/lib/utils";
import { Accessibility } from "lucide-react";
import { LilComp } from "./lilComp";

interface Props {
  className?: string;
}

export const Reviews: React.FC<Props> = ({ className }) => {
  const itemsFor = [
    {
      id: 1,
      userPhoto: "/imges/adNews4.jpg",
      title: "Какой-то юзер",
      description:
        "Описание чегото и Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 2,
      userPhoto: "/imges/adNews4.jpg",
      title: "Какой-то юзер",
      description:
        "Описание чегото и Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 3,
      userPhoto: "/imges/adNews4.jpg",
      title: "Какой-то юзер",
      description:
        "Описание чегото и Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  return (
    <div className={cn("", className)}>
      {itemsFor.map((i, index) => (
        <LilComp
          key={index}
          imageSrc={i.userPhoto}
          title={i.title}
          description={i.description}
        />
      ))}
    </div>
  );
};
