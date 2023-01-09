import { default as cn } from "classnames";
import React from "react";

interface IButton {
  variant?: String;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: IButton) => {
  const { variant, children, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full rounded-sm h-14 font-semibold select-none",
        variant !== "secondary"
          ? "bg-accent/80 text-dark"
          : "bg-dark-secondary text-light"
      )}
    >
      {children}
    </button>
  );
};
