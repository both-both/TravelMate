import { InputStyled } from "./Input.styled";
import type { InputProps } from "./Input.types";

export const Input = ({
  value,
  onChange,
  type = "text",
  placeholder,
  ariaLabel,
  className,
}: InputProps) => {
  return (
    <InputStyled
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      aria-label={ariaLabel}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
