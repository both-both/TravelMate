export type InputProps = {
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "search" | "email" | "password";
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
  name?: string;
};
