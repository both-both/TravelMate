import { InputStyled } from "./Input.styled";
import type { InputProps } from "./Input.types";

export const Input = ({
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  ariaLabel,
  className,
}: InputProps) => {
  return (
    <InputStyled
      name={name}
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      aria-label={ariaLabel}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
