import { SelectStyled } from "./Select.styled";
import type { SelectProps } from "./Select.types";

export const Select = ({
  value,
  onChange,
  options,
  ariaLabel,
  className,
}: SelectProps) => {
  return (
    <SelectStyled
      className={className}
      value={value}
      aria-label={ariaLabel}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectStyled>
  );
};
