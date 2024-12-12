import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const LilComp: React.FC<Props> = ({
  className,
  icon,
  title,
  description,
}) => {
  return (
    <div className={cn("flex items-start space-x-4 py-4", className)}>
      <div className="flex-shrink-0 text-white ">{icon}</div>

      {/* Контент справа */}
      <div>
        <Title className="font-semibold" text={title} size="md" />
        <p className="text-sm text-white mt-1">{description}</p>
      </div>
    </div>
  );
};
