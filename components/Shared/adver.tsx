import React from "react";
import { cn } from "@/lib/utils";
import { Accessibility } from "lucide-react";

import { Title } from "./title";
import { LilComp } from "./lilComp";

interface Props {
  className?: string;
}

export const AdverComp: React.FC<Props> = ({ className }) => {
  const itemsFor = [
    {
      icon: <Accessibility />,
      title: "Какой-то текст Тайтл",
      description:
        "Описание чегото и Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: <Accessibility />,
      title: "Какой-то текст Тайтл",
      description:
        "Описание чегото и Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: <Accessibility />,
      title: "Какой-то текст Тайтл",
      description:
        "Описание чегото и Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  return (
    <div
      className={cn("relative w-full h-[700px]", className)}
      style={{
        backgroundImage: "url('imges/mainPageAdverBg.webp')",
      }}
    >
      <div className="absolute top-[90px] left-[240px] p-5 bg-white/80 shadow-3xl rounded-lg max-w-[600px]">
        <div className="">
          <Title
            text="Что то важное наверно"
            className="font-semibold text-[#008080]"
            size="md"
          />
          <p className="text-black ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam esse
            voluptatem voluptates nisi delectus incidunt, nemo iste doloribus
            accusamus facere reiciendis, inventore ipsum pariatur reprehenderit
            est in illum, consequuntur nesciunt debitis! Doloribus, libero quod
          </p>
        </div>
        <div className="">
          {itemsFor.map((i, index) => (
            <LilComp
              key={index}
              icon={i.icon}
              title={i.title}
              description={i.description}
              titleClassName="text-[#008080]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
