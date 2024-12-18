import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";

interface Props {
  icon?: React.ReactNode;
  imageSrc?: string;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  imageClassName?: string;
  descriptionClassName?: string;
}

export const LilComp: React.FC<Props> = ({
  className,
  icon,
  imageSrc,
  title,
  description,
  iconClassName,
  imageClassName,
  descriptionClassName,
}) => {
  return (
    <div className={cn("flex items-center space-x-4 py-4", className)}>
      {/* Иконка или изображение */}
      {(icon || imageSrc) && (
        <div className="flex items-center justify-center flex-shrink-0 w-16 h-16">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className={cn(
                "w-12 h-12 rounded-full object-cover",
                imageClassName
              )}
            />
          ) : (
            <div
              className={cn(
                "flex items-center justify-center text-black w-12 h-12",
                iconClassName
              )}
            >
              {icon}
            </div>
          )}
        </div>
      )}

      {/* Контент справа */}
      <div>
        <Title text={title} size="md" />
        <p className={cn("text-sm text-black mt-1", descriptionClassName)}>
          {description}
        </p>
      </div>
    </div>
  );
};
