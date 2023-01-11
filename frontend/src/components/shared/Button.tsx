import { default as cn } from "classnames";
import React from "react";

interface IButton {
  variant?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: IButton) => {
  const { variant, children, onClick, disabled } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled ? true : false}
      className={cn(
        "w-full rounded-sm h-14 font-semibold select-none",
        variant !== "secondary"
          ? "bg-accent/80 text-dark"
          : "bg-dark-secondary text-light",
        "disabled:opacity-50 disabled:hover:cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
};
