import React from "react";
import { cn } from "@/lib/utils";

import { Title } from "./title";
import { Accessibility } from "lucide-react";

interface Props {
  className?: string;
  icon?: string;
  title: string;
  textBelow: string;
}

export const DecorateElem: React.FC<Props> = ({
  className,
  icon,
  title,
  textBelow,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center py-[80px] px-[30px] ",
        className
      )}
    >
      <i className="pr-7 ">
        <Accessibility />
      </i>

      <div className=" items-center">
        <Title text={title} size="sm" />
        <p>{textBelow}</p>
      </div>
    </div>
  );
};
