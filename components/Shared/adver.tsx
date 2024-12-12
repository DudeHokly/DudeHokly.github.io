import React from "react";
import { cn } from "@/lib/utils";
import { Accessibility } from "lucide-react";
import { LilComp } from "./lilComp";
import { Title } from "./title";

interface Props {
  className?: string;
}

export const AdverComp: React.FC<Props> = ({ className }) => {
  const itemsFor = [
    {
      icon: <Accessibility />,
      title: "Какой-то текст Тайтл",
      description:
        "Описание чегото и Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam esse voluptatem voluptates nisi delectus incidunt, nemo iste doloribus.",
    },
    {
      icon: <Accessibility />,
      title: "Какой-то текст Тайтл",
      description:
        "Описание чегото и Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam esse voluptatem voluptates nisi delectus incidunt, nemo iste doloribus.",
    },
    {
      icon: <Accessibility />,
      title: "Какой-то текст Тайтл",
      description:
        "Описание чегото и Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam esse voluptatem voluptates nisi delectus incidunt, nemo iste doloribus.",
    },
  ];
  return (
    <div
      className={cn("py-[130px] px-[70px] ", className)}
      style={{
        backgroundImage: "url('imges/mainPage3.webp')",
      }}
    >
      <div className="w-[700px] ">
        <div className="">
          <Title
            text="Что то важное наверно"
            className="font-semibold"
            size="md"
          />
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam esse
            voluptatem voluptates nisi delectus incidunt, nemo iste doloribus
            accusamus facere reiciendis, inventore ipsum pariatur reprehenderit
            est in illum, consequuntur nesciunt debitis! Doloribus, libero quod
            ab pariatur voluptatem dolores quos sit culpa excepturi eum rem.
            Quae ullam tempore est quod dolorem eligendi debitis excepturi
            molestias maiores earum! Molestiae recusandae voluptatum fugit porro
            nobis cupiditate error at in id maxime explicabo modi quis
            doloremque animi, voluptates rem iste. Tempore commodi maxime est,
            nulla culpa ullam molestiae, voluptas expedita aspernatur
            voluptatum, dignissimos voluptatem? Inventore illo at ipsa quas
            porro incidunt minus laborum consequuntur.
          </p>
        </div>
        <div className="">
          {itemsFor.map((i, index) => (
            <LilComp
              key={index}
              icon={i.icon}
              title={i.title}
              description={i.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
