import { ButtonStyled } from "./button.styled";
import type { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "light",
  isActive,
  ariaLabel,
  className,
}: ButtonProps) => {
  return (
    <ButtonStyled
      className={className}
      type={type}
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={ariaLabel}
      $variant={variant}
    >
      {children}
    </ButtonStyled>
  );
};
