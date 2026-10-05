import type { ReactNode } from "react";

export type ButtonVariant = "light" | "dark" | "primary";

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  isActive?: boolean;
  ariaLabel?: string;
  className?: string;
};
