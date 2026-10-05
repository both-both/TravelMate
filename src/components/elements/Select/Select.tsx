import { SelectStyled, SelectWrapper } from "./Select.styled";
import type { SelectProps } from "./Select.types";

const GlobeIcon = () => (
  <svg
    className="globe"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    className="chevron"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Select = ({
  value,
  onChange,
  options,
  ariaLabel,
  className,
}: SelectProps) => {
  return (
    <SelectWrapper className={className}>
      <GlobeIcon />
      <SelectStyled
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
      <ChevronIcon />
    </SelectWrapper>
  );
};
